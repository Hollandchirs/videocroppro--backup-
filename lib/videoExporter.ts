import { CropRegion, CropStrategy, VideoClip } from "./types";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";

const FFMPEG_BASE_URL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";

/**
 * Export video with crop region (crop strategy)
 * Preserves original video quality
 */
export async function exportVideo(
  videoFile: File,
  cropRegion: CropRegion,
  outputWidth: number,
  outputHeight: number,
  strategy: CropStrategy = "smart-crop",
  onProgress?: (progress: number) => void
): Promise<Blob> {
  const ffmpeg = new FFmpeg();

  // Load FFmpeg from CDN
  const baseURL = FFMPEG_BASE_URL;
  await ffmpeg.load({
    coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
    wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, "application/wasm"),
  });

  // Write input file
  await ffmpeg.writeFile("input.mp4", await fetchFile(videoFile));

  let command: string[];

  if (strategy === "center-crop") {
    command = [
      "-i", "input.mp4",
      "-vf", `scale=${outputWidth}:${outputHeight}:force_original_aspect_ratio=decrease,pad=${outputWidth}:${outputHeight}:(ow-iw)/2:(oh-ih)/2`,
      "-c:v", "libx264", "-preset", "slow", "-crf", "18",
      "-pix_fmt", "yuv420p",
      "-c:a", "copy",
      "-movflags", "+faststart",
      "output.mp4",
    ];
  } else {
    command = [
      "-i", "input.mp4",
      "-vf", `crop=${Math.round(cropRegion.width)}:${Math.round(cropRegion.height)}:${Math.round(cropRegion.x)}:${Math.round(cropRegion.y)},scale=${outputWidth}:${outputHeight}`,
      "-c:v", "libx264", "-preset", "slow", "-crf", "18",
      "-pix_fmt", "yuv420p",
      "-c:a", "copy",
      "-movflags", "+faststart",
      "output.mp4",
    ];
  }

  if (onProgress) {
    ffmpeg.on("progress", ({ progress }: { progress: number }) => {
      onProgress(Math.round(progress * 100));
    });
  }

  await ffmpeg.exec(command);
  const data = await ffmpeg.readFile("output.mp4");

  await ffmpeg.deleteFile("input.mp4");
  await ffmpeg.deleteFile("output.mp4");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blob = new Blob([data as any], { type: "video/mp4" });
  return blob;
}

/**
 * Export video for multiple platforms
 */
export async function exportForMultiplePlatforms(
  videoFile: File,
  crops: Array<{ crop: CropRegion; width: number; height: number; platformId: string }>,
  strategy: CropStrategy = "smart-crop",
  onProgress?: (current: number, total: number, platformId: string, percent: number) => void
): Promise<Array<{ platformId: string; blob: Blob }>> {
  const results: Array<{ platformId: string; blob: Blob }> = [];

  for (let i = 0; i < crops.length; i++) {
    const { crop, width, height, platformId } = crops[i];
    const blob = await exportVideo(videoFile, crop, width, height, strategy, (percent) => {
      if (onProgress) {
        onProgress(i + 1, crops.length, platformId, percent);
      }
    });
    results.push({ platformId, blob });
  }

  return results;
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

/**
 * Export video with smart clips
 */
export async function exportVideoWithClips(
  videoFile: File,
  clips: VideoClip[],
  outputWidth: number,
  outputHeight: number,
  strategy: CropStrategy = "smart-crop",
  onProgress?: (progress: number) => void
): Promise<Blob> {
  const ffmpeg = new FFmpeg();

  // Load FFmpeg from CDN
  const baseURL = FFMPEG_BASE_URL;
  await ffmpeg.load({
    coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
    wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, "application/wasm"),
  });

  // Write input file
  await ffmpeg.writeFile("input.mp4", await fetchFile(videoFile));

  let command: string[];

  if (clips.length === 1) {
    const clip = clips[0];
    const cropX = Math.round(clip.cropPosition.x);
    const cropY = Math.round(clip.cropPosition.y);

    if (strategy === "center-crop") {
      command = [
        "-i", "input.mp4",
        "-vf", `scale=${outputWidth}:${outputHeight}:force_original_aspect_ratio=decrease,pad=${outputWidth}:${outputHeight}:(ow-iw)/2:(oh-ih)/2`,
        "-c:v", "libx264", "-preset", "slow", "-crf", "18",
        "-pix_fmt", "yuv420p",
        "-map", "0:v", "-map", "0:a?",
        "-c:a", "copy",
        "-movflags", "+faststart",
        "output.mp4",
      ];
    } else {
      command = [
        "-i", "input.mp4",
        "-vf", `crop=${outputWidth}:${outputHeight}:${cropX}:${cropY}`,
        "-c:v", "libx264", "-preset", "slow", "-crf", "18",
        "-pix_fmt", "yuv420p",
        "-c:a", "copy",
        "-movflags", "+faststart",
        "output.mp4",
      ];
    }
  } else {
    const filterComplex = generateSegmentFilter(clips, outputWidth, outputHeight, strategy);
    command = [
      "-i", "input.mp4",
      "-filter_complex", filterComplex,
      "-map", "[out]",
      "-map", "0:a?",
      "-c:v", "libx264", "-preset", "slow", "-crf", "18",
      "-pix_fmt", "yuv420p",
      "-c:a", "copy",
      "-movflags", "+faststart",
      "output.mp4",
    ];
  }

  if (onProgress) {
    ffmpeg.on("progress", ({ progress }: { progress: number }) => {
      onProgress(Math.round(progress * 100));
    });
  }

  await ffmpeg.exec(command);
  const data = await ffmpeg.readFile("output.mp4");

  await ffmpeg.deleteFile("input.mp4");
  await ffmpeg.deleteFile("output.mp4");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blob = new Blob([data as any], { type: "video/mp4" });
  return blob;
}

/**
 * Generate FFmpeg filter complex for segment-based cropping
 */
function generateSegmentFilter(
  clips: VideoClip[],
  outputWidth: number,
  outputHeight: number,
  strategy: CropStrategy
): string {
  const maxClips = 20;
  const effectiveClips = clips.slice(0, maxClips);

  let filter = "";

  if (strategy === "center-crop") {
    for (let i = 0; i < effectiveClips.length; i++) {
      const clip = effectiveClips[i];
      filter += `[0:v]trim=${clip.startTime}:${clip.endTime},setpts=PTS-STARTPTS,`;
      filter += `scale=${outputWidth}:${outputHeight}:force_original_aspect_ratio=decrease,`;
      filter += `pad=${outputWidth}:${outputHeight}:(ow-iw)/2:(oh-ih)/2[v${i}];`;
    }
  } else {
    for (let i = 0; i < effectiveClips.length; i++) {
      const clip = effectiveClips[i];
      filter += `[0:v]trim=${clip.startTime}:${clip.endTime},setpts=PTS-STARTPTS,`;
      const cropX = Math.round(clip.cropPosition.x);
      const cropY = Math.round(clip.cropPosition.y);
      filter += `crop=${outputWidth}:${outputHeight}:${cropX}:${cropY}[v${i}];`;
    }
  }

  const segmentList = effectiveClips.map((_, i) => `[v${i}]`).join("");
  filter += `${segmentList}concat=n=${effectiveClips.length}:v=1[out]`;

  return filter;
}
