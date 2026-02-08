import { CropStrategy, VideoClip } from "./types";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";

const FFMPEG_BASE_URL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";

// Singleton FFmpeg instance - load WASM only once
let sharedFFmpeg: FFmpeg | null = null;
let ffmpegLoadPromise: Promise<FFmpeg> | null = null;

async function getFFmpeg(): Promise<FFmpeg> {
  if (sharedFFmpeg) return sharedFFmpeg;
  if (ffmpegLoadPromise) return ffmpegLoadPromise;

  ffmpegLoadPromise = (async () => {
    const ffmpeg = new FFmpeg();
    const baseURL = FFMPEG_BASE_URL;
    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
      wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, "application/wasm"),
    });
    sharedFFmpeg = ffmpeg;
    return ffmpeg;
  })();

  return ffmpegLoadPromise;
}

interface PlatformTarget {
  platformId: string;
  width: number;
  height: number;
}

interface SourceRegion {
  width: number;
  height: number;
}

/**
 * Batch export: encode ONCE per unique resolution, reuse blob for all same-size platforms.
 * Since platforms are selected by aspect ratio group, they all share the same (width, height)
 * and the same clips/crops → the output is identical. Only encode once.
 */
export async function batchExportWithClips(
  videoFile: File,
  clips: VideoClip[],
  platforms: PlatformTarget[],
  strategy: CropStrategy = "smart-crop",
  onProgress?: (percent: number) => void,
  sourceRegion?: SourceRegion
): Promise<Array<{ platformId: string; blob: Blob }>> {
  // Group platforms by unique (width, height) - encode once per unique size
  const sizeKey = (w: number, h: number) => `${w}x${h}`;
  const uniqueSizes = new Map<string, { width: number; height: number; platformIds: string[] }>();

  for (const p of platforms) {
    const key = sizeKey(p.width, p.height);
    const existing = uniqueSizes.get(key);
    if (existing) {
      existing.platformIds.push(p.platformId);
    } else {
      uniqueSizes.set(key, { width: p.width, height: p.height, platformIds: [p.platformId] });
    }
  }

  const uniqueTargets = Array.from(uniqueSizes.values());
  const ffmpeg = await getFFmpeg();

  // Write input once
  await ffmpeg.writeFile("input.mp4", await fetchFile(videoFile));

  // Source crop region from preview (for smart crop)
  const srcCropWidth = sourceRegion?.width || uniqueTargets[0].width;
  const srcCropHeight = sourceRegion?.height || uniqueTargets[0].height;

  // Build ONE ffmpeg command for unique sizes only
  const N = uniqueTargets.length;
  let filterComplex: string;
  const command: string[] = ["-i", "input.mp4"];

  if (clips.length === 1) {
    const clip = clips[0];
    const cropX = Math.round(clip.cropPosition.x);
    const cropY = Math.round(clip.cropPosition.y);

    if (N === 1) {
      // Most common case: all platforms same size → no split needed
      const { width, height } = uniqueTargets[0];
      if (strategy === "center-crop") {
        filterComplex = `[0:v]scale=${width}:${height}:force_original_aspect_ratio=decrease,pad=${width}:${height}:(ow-iw)/2:(oh-ih)/2[out0]`;
      } else {
        // Smart crop: first crop to source region, then scale to output size
        if (srcCropWidth !== width || srcCropHeight !== height) {
          filterComplex = `[0:v]crop=${srcCropWidth}:${srcCropHeight}:${cropX}:${cropY},scale=${width}:${height}[out0]`;
        } else {
          filterComplex = `[0:v]crop=${width}:${height}:${cropX}:${cropY}[out0]`;
        }
      }
    } else {
      const splitLabels = uniqueTargets.map((_, i) => `[s${i}]`).join("");
      filterComplex = `[0:v]split=${N}${splitLabels};`;
      for (let i = 0; i < N; i++) {
        const { width, height } = uniqueTargets[i];
        if (strategy === "center-crop") {
          filterComplex += `[s${i}]scale=${width}:${height}:force_original_aspect_ratio=decrease,pad=${width}:${height}:(ow-iw)/2:(oh-ih)/2[out${i}]`;
        } else {
          // Smart crop: first crop to source region, then scale to output size
          if (srcCropWidth !== width || srcCropHeight !== height) {
            filterComplex += `[s${i}]crop=${srcCropWidth}:${srcCropHeight}:${cropX}:${cropY},scale=${width}:${height}[out${i}]`;
          } else {
            filterComplex += `[s${i}]crop=${width}:${height}:${cropX}:${cropY}[out${i}]`;
          }
        }
        if (i < N - 1) filterComplex += ";";
      }
    }
  } else {
    // Multi-clip: trim+crop+concat for each unique size
    const maxClips = 20;
    const effectiveClips = clips.slice(0, maxClips);
    const C = effectiveClips.length;
    filterComplex = "";

    for (let i = 0; i < N; i++) {
      const { width, height } = uniqueTargets[i];

      for (let j = 0; j < C; j++) {
        const clip = effectiveClips[j];
        const cropX = Math.round(clip.cropPosition.x);
        const cropY = Math.round(clip.cropPosition.y);

        filterComplex += `[0:v]trim=${clip.startTime}:${clip.endTime},setpts=PTS-STARTPTS,`;
        if (strategy === "center-crop") {
          filterComplex += `scale=${width}:${height}:force_original_aspect_ratio=decrease,pad=${width}:${height}:(ow-iw)/2:(oh-ih)/2`;
        } else {
          // Smart crop: first crop to source region, then scale to output size
          if (srcCropWidth !== width || srcCropHeight !== height) {
            filterComplex += `crop=${srcCropWidth}:${srcCropHeight}:${cropX}:${cropY},scale=${width}:${height}`;
          } else {
            filterComplex += `crop=${width}:${height}:${cropX}:${cropY}`;
          }
        }
        filterComplex += `[p${i}c${j}];`;
      }

      const concatInputs = effectiveClips.map((_, j) => `[p${i}c${j}]`).join("");
      filterComplex += `${concatInputs}concat=n=${C}:v=1[out${i}]`;
      if (i < N - 1) filterComplex += ";";
    }
  }

  command.push("-filter_complex", filterComplex);

  for (let i = 0; i < N; i++) {
    command.push(
      "-map", `[out${i}]`, "-map", "0:a?",
      "-c:v", "libx264",
      "-preset", "veryfast",  // Slightly slower than ultrafast but better quality
      "-crf", "28",  // Higher CRF = faster encoding (quality vs speed trade-off)
      "-tune", "fastdecode",  // Optimize for fast decoding
      "-pix_fmt", "yuv420p",
      "-c:a", "copy",
      "-movflags", "+faststart",
      `output_${i}.mp4`
    );
  }

  const progressHandler = ({ progress }: { progress: number }) => {
    if (onProgress) {
      onProgress(Math.round(progress * 100));
    }
  };
  ffmpeg.on("progress", progressHandler);

  await ffmpeg.exec(command);

  ffmpeg.off("progress", progressHandler);

  // Read unique outputs, then map blob to ALL platforms sharing that size
  const blobBySize = new Map<string, Blob>();
  for (let i = 0; i < N; i++) {
    const data = await ffmpeg.readFile(`output_${i}.mp4`);
    await ffmpeg.deleteFile(`output_${i}.mp4`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const blob = new Blob([data as any], { type: "video/mp4" });
    const key = sizeKey(uniqueTargets[i].width, uniqueTargets[i].height);
    blobBySize.set(key, blob);
  }

  await ffmpeg.deleteFile("input.mp4");

  // Map each platform to its blob (same-size platforms share the same blob)
  return platforms.map((p) => ({
    platformId: p.platformId,
    blob: blobBySize.get(sizeKey(p.width, p.height))!,
  }));
}

/**
 * Download blob as file
 */
export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Download multiple files
 */
export async function downloadMultipleFiles(
  files: Array<{ blob: Blob; filename: string }>
) {
  for (let i = 0; i < files.length; i++) {
    setTimeout(() => {
      downloadBlob(files[i].blob, files[i].filename);
    }, i * 500);
  }
}
