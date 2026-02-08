import { NextRequest, NextResponse } from "next/server";
import { execFile } from "child_process";
import { writeFile, readFile, unlink, mkdtemp } from "fs/promises";
import { join } from "path";
import { tmpdir } from "os";
import { promisify } from "util";

const execFileAsync = promisify(execFile);

export const maxDuration = 300;
export const runtime = "nodejs";

interface CropPosition {
  x: number;
  y: number;
}

interface VideoClip {
  startTime: number;
  endTime: number;
  cropPosition: CropPosition;
  cropScale?: number;
  useFullFrame?: boolean;
}

interface ProcessConfig {
  clips: VideoClip[];
  width: number;
  height: number;
  strategy: string;
  sourceRegion?: { width: number; height: number };
}

function buildFFmpegCommand(
  inputPath: string,
  outputPath: string,
  clips: VideoClip[],
  width: number,
  height: number,
  strategy: string,
  sourceRegion?: { width: number; height: number }
): string[] {
  const cmd = ["-y", "-i", inputPath];

  const srcCropWidth = sourceRegion?.width ?? width;
  const srcCropHeight = sourceRegion?.height ?? height;

  let filterComplex = "";

  if (clips.length === 1) {
    const clip = clips[0];
    const cropX = Math.round(clip.cropPosition.x);
    const cropY = Math.round(clip.cropPosition.y);

    if (strategy === "center-crop") {
      filterComplex =
        `[0:v]scale=${width}:${height}:force_original_aspect_ratio=decrease,` +
        `pad=${width}:${height}:(ow-iw)/2:(oh-ih)/2,` +
        `trim=${clip.startTime}:${clip.endTime},setpts=PTS-STARTPTS[vout];` +
        `[0:a]atrim=${clip.startTime}:${clip.endTime},asetpts=PTS-STARTPTS[aout]`;
    } else {
      const cropFilter =
        srcCropWidth !== width || srcCropHeight !== height
          ? `crop=${srcCropWidth}:${srcCropHeight}:${cropX}:${cropY},scale=${width}:${height}`
          : `crop=${width}:${height}:${cropX}:${cropY}`;

      filterComplex =
        `[0:v]${cropFilter},` +
        `trim=${clip.startTime}:${clip.endTime},setpts=PTS-STARTPTS[vout];` +
        `[0:a]atrim=${clip.startTime}:${clip.endTime},asetpts=PTS-STARTPTS[aout]`;
    }

    cmd.push("-filter_complex", filterComplex);
    cmd.push("-map", "[vout]", "-map", "[aout]");
  } else {
    // Multiple clips - concat
    for (let i = 0; i < clips.length; i++) {
      const clip = clips[i];
      const cropX = Math.round(clip.cropPosition.x);
      const cropY = Math.round(clip.cropPosition.y);

      if (strategy === "center-crop") {
        filterComplex +=
          `[0:v]scale=${width}:${height}:force_original_aspect_ratio=decrease,` +
          `pad=${width}:${height}:(ow-iw)/2:(oh-ih)/2,` +
          `trim=${clip.startTime}:${clip.endTime},setpts=PTS-STARTPTS[v${i}];`;
      } else {
        const cropFilter =
          srcCropWidth !== width || srcCropHeight !== height
            ? `crop=${srcCropWidth}:${srcCropHeight}:${cropX}:${cropY},scale=${width}:${height}`
            : `crop=${width}:${height}:${cropX}:${cropY}`;

        filterComplex +=
          `[0:v]${cropFilter},` +
          `trim=${clip.startTime}:${clip.endTime},setpts=PTS-STARTPTS[v${i}];`;
      }

      filterComplex += `[0:a]atrim=${clip.startTime}:${clip.endTime},asetpts=PTS-STARTPTS[a${i}];`;
    }

    // Concat
    const videoInputs = clips.map((_, i) => `[v${i}]`).join("");
    const audioInputs = clips.map((_, i) => `[a${i}]`).join("");
    filterComplex += `${videoInputs}concat=n=${clips.length}:v=1:a=0[vout];`;
    filterComplex += `${audioInputs}concat=n=${clips.length}:v=0:a=1[aout]`;

    cmd.push("-filter_complex", filterComplex);
    cmd.push("-map", "[vout]", "-map", "[aout]");
  }

  // Encoding settings
  cmd.push(
    "-c:v", "libx264",
    "-preset", "ultrafast",
    "-crf", "23",
    "-pix_fmt", "yuv420p",
    "-c:a", "aac",
    "-b:a", "192k",
    "-movflags", "+faststart",
    outputPath
  );

  return cmd;
}

export async function POST(request: NextRequest) {
  let tmpDir: string | null = null;

  try {
    const formData = await request.formData();
    const videoFile = formData.get("video") as File | null;
    const configStr = formData.get("config") as string | null;

    if (!videoFile || !configStr) {
      return NextResponse.json(
        { error: "Missing video file or config" },
        { status: 400 }
      );
    }

    const config: ProcessConfig = JSON.parse(configStr);
    if (!config.clips?.length || !config.width || !config.height) {
      return NextResponse.json(
        { error: "Invalid config: need clips, width, height" },
        { status: 400 }
      );
    }

    // Create temp directory
    tmpDir = await mkdtemp(join(tmpdir(), "video-process-"));
    const inputPath = join(tmpDir, "input.mp4");
    const outputPath = join(tmpDir, "output.mp4");

    // Write uploaded file to disk
    const videoBuffer = Buffer.from(await videoFile.arrayBuffer());
    await writeFile(inputPath, videoBuffer);

    console.log(`[Server FFmpeg] Processing ${videoFile.name} (${(videoBuffer.length / 1024 / 1024).toFixed(1)}MB)`);
    console.log(`[Server FFmpeg] Output: ${config.width}x${config.height}, ${config.clips.length} clip(s), strategy: ${config.strategy}`);

    // Build FFmpeg command
    const args = buildFFmpegCommand(
      inputPath,
      outputPath,
      config.clips,
      config.width,
      config.height,
      config.strategy || "smart-crop",
      config.sourceRegion
    );

    console.log(`[Server FFmpeg] ffmpeg ${args.join(" ")}`);

    // Run FFmpeg
    const { stderr } = await execFileAsync("ffmpeg", args, {
      maxBuffer: 50 * 1024 * 1024,
      timeout: 5 * 60 * 1000,
    });

    if (stderr) {
      // FFmpeg writes progress to stderr, only log last few lines for debugging
      const lines = stderr.split("\n").filter(Boolean);
      const last = lines.slice(-3).join("\n");
      console.log(`[Server FFmpeg] ${last}`);
    }

    // Read output
    const outputBuffer = await readFile(outputPath);
    console.log(`[Server FFmpeg] Done! Output: ${(outputBuffer.length / 1024 / 1024).toFixed(1)}MB`);

    return new Response(outputBuffer, {
      headers: {
        "Content-Type": "video/mp4",
        "Content-Disposition": "attachment; filename=output.mp4",
      },
    });
  } catch (error) {
    console.error("[Server FFmpeg] Error:", error);

    const message = error instanceof Error ? error.message : "Processing failed";
    const isFFmpegMissing =
      message.includes("ENOENT") || message.includes("not found");

    return NextResponse.json(
      {
        error: isFFmpegMissing
          ? "FFmpeg not available on server"
          : `Processing failed: ${message}`,
      },
      { status: isFFmpegMissing ? 501 : 500 }
    );
  } finally {
    // Cleanup temp files
    if (tmpDir) {
      const inputPath = join(tmpDir, "input.mp4");
      const outputPath = join(tmpDir, "output.mp4");
      await unlink(inputPath).catch(() => {});
      await unlink(outputPath).catch(() => {});
      // Remove tmp dir (best-effort)
      const { rmdir } = await import("fs/promises");
      await rmdir(tmpDir).catch(() => {});
    }
  }
}
