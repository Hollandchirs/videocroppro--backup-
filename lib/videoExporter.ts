import { CropStrategy, VideoClip } from "./types";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";

const FFMPEG_BASE_URL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";

// Singleton FFmpeg instance - load WASM only once
let sharedFFmpeg: FFmpeg | null = null;
let ffmpegLoadPromise: Promise<FFmpeg> | null = null;

/**
 * Terminate current FFmpeg operation and reset the instance
 * This allows starting fresh on the next export
 */
export function terminateCurrentOperation() {
  if (sharedFFmpeg) {
    console.log("[FFmpeg] Terminating current operation...");
    try {
      sharedFFmpeg.terminate();
    } catch (e) {
      console.warn("[FFmpeg] Terminate error:", e);
    }
    sharedFFmpeg = null;
  }
  ffmpegLoadPromise = null;
  console.log("[FFmpeg] Reset complete");
}

async function getFFmpeg(): Promise<FFmpeg> {
  // Check if FFmpeg was terminated and needs to be reloaded
  if (sharedFFmpeg && !sharedFFmpeg.loaded) {
    console.log("[FFmpeg] Instance was terminated, creating new one");
    sharedFFmpeg = null;
    ffmpegLoadPromise = null;
  }

  if (sharedFFmpeg) return sharedFFmpeg;
  if (ffmpegLoadPromise) return ffmpegLoadPromise;

  ffmpegLoadPromise = (async () => {
    const ffmpeg = new FFmpeg();
    const baseURL = FFMPEG_BASE_URL;

    console.log("[FFmpeg] Loading core...");

    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
      wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, "application/wasm"),
    });

    console.log("[FFmpeg] Loaded successfully");
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

/**
 * Batch export: encode ONCE per unique resolution, reuse blob for all same-size platforms.
 * Since platforms are selected by aspect ratio group, they all share the same (width, height)
 * and the same clips/crops → the output is identical. Only encode once.
 *
 * IMPORTANT: cropWidth/cropHeight are the ACTUAL dimensions of the crop region from the source video.
 * These match what the user sees in preview (cropRegion.width/height).
 * The clip.cropPosition.x/y are relative to the original video top-left corner.
 */
export async function batchExportWithClips(
  videoFile: File,
  clips: VideoClip[],
  platforms: PlatformTarget[],
  strategy: CropStrategy = "smart-crop",
  onProgress?: (percent: number) => void,
  cropRegion?: { width: number; height: number }  // Actual crop dimensions from preview
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

  // Clean up any leftover files from previous runs
  try {
    await ffmpeg.deleteFile("input.mp4");
    for (let i = 0; i < 10; i++) {
      try { await ffmpeg.deleteFile(`output_${i}.mp4`); } catch { /* ok */ }
    }
  } catch { /* ok */ }

  // Write input once
  await ffmpeg.writeFile("input.mp4", await fetchFile(videoFile));

  // Crop region dimensions - these are the actual dimensions of the crop area
  // that the user sees in preview. If not provided, fall back to output dimensions.
  const actualCropWidth = cropRegion?.width ?? uniqueTargets[0].width;
  const actualCropHeight = cropRegion?.height ?? uniqueTargets[0].height;

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
        // Smart crop: crop to actual crop dimensions, then scale to output size
        // actualCropWidth/Height match the preview cropRegion dimensions
        if (actualCropWidth !== width || actualCropHeight !== height) {
          filterComplex = `[0:v]crop=${actualCropWidth}:${actualCropHeight}:${cropX}:${cropY},scale=${width}:${height}[out0]`;
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
          // Smart crop: crop to actual crop dimensions, then scale to output size
          if (actualCropWidth !== width || actualCropHeight !== height) {
            filterComplex += `[s${i}]crop=${actualCropWidth}:${actualCropHeight}:${cropX}:${cropY},scale=${width}:${height}[out${i}]`;
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
          // Smart crop: crop to actual crop dimensions, then scale to output size
          if (actualCropWidth !== width || actualCropHeight !== height) {
            filterComplex += `crop=${actualCropWidth}:${actualCropHeight}:${cropX}:${cropY},scale=${width}:${height}`;
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
      "-preset", "ultrafast",
      "-crf", "18",
      "-pix_fmt", "yuv420p",
      "-c:a", "copy",
      "-movflags", "+faststart",
      `output_${i}.mp4`
    );
  }

  console.log("[FFmpeg] Command:", command.join(" "));

  const progressHandler = ({ progress, time }: { progress: number; time: number }) => {
    console.log(`[FFmpeg] Progress: ${(progress * 100).toFixed(1)}% time=${time}`);
    if (onProgress) {
      onProgress(Math.round(progress * 100));
    }
  };
  ffmpeg.on("progress", progressHandler);

  const startTime = performance.now();
  await ffmpeg.exec(command);
  console.log(`[FFmpeg] Encoding finished in ${((performance.now() - startTime) / 1000).toFixed(1)}s`);

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
 * Export video with smart clips
 * Simplified version for single platform export
 */
export async function exportVideoWithClips(
  videoFile: File,
  clips: VideoClip[],
  outputWidth: number,
  outputHeight: number,
  strategy: CropStrategy = "smart-crop",
  onProgress?: (progress: number) => void,
  cropRegion?: { width: number; height: number }  // Actual crop dimensions from preview
): Promise<Blob> {
  // Use batch export with single platform
  const results = await batchExportWithClips(
    videoFile,
    clips,
    [{ platformId: "default", width: outputWidth, height: outputHeight }],
    strategy,
    onProgress,
    cropRegion
  );
  return results[0].blob;
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
