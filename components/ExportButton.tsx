"use client";

import { useState } from "react";
import { useVideoStore } from "@/lib/store";
import { getPlatformById } from "@/lib/platforms";
import { ExportProgressModal } from "./ExportProgressModal";

// Dynamic import for FFmpeg to avoid SSR issues
const loadVideoExporter = () => import("@/lib/videoExporter");

export function ExportButton() {
  const { videoFile, currentClips, selectedPlatforms, cropStrategy, isProcessing, setIsProcessing } =
    useVideoStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [exportStatus, setExportStatus] = useState<"processing" | "completed" | "error">("processing");
  const [exportProgress, setExportProgress] = useState<{
    current: number;
    total: number;
    platformId: string;
    percent: number;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleExport = async () => {
    if (!videoFile || currentClips.length === 0 || selectedPlatforms.length === 0) {
      return;
    }

    setIsModalOpen(true);
    setExportStatus("processing");
    setExportProgress(null);
    setErrorMessage("");

    try {
      // Dynamically import video exporter to avoid SSR issues
      const { exportVideoWithClips, downloadMultipleFiles } = await loadVideoExporter();

      // Export for each platform using current clips
      const results = await Promise.all(
        selectedPlatforms.map(async (platformId, index) => {
          const platform = getPlatformById(platformId);
          if (!platform) {
            throw new Error(`Unknown platform: ${platformId}`);
          }

          // Update progress
          setExportProgress({
            current: index + 1,
            total: selectedPlatforms.length,
            platformId,
            percent: 0,
          });

          // Export video
          const blob = await exportVideoWithClips(
            videoFile.file,
            currentClips,
            platform.width,
            platform.height,
            cropStrategy,
            (percent) => {
              setExportProgress({
                current: index + 1,
                total: selectedPlatforms.length,
                platformId,
                percent,
              });
            }
          );

          const baseName = videoFile.file.name.replace(/\.[^/.]+$/, "");
          const filename = `${baseName}_${platform?.name.replace(/\s+/g, "_").toLowerCase()}.mp4`;

          return { blob, filename };
        })
      );

      // Download all videos directly to browser
      setExportStatus("completed");
      await downloadMultipleFiles(results);
    } catch (error) {
      console.error("Export failed:", error);
      setErrorMessage(error instanceof Error ? error.message : "Export failed. Please try again.");
      setExportStatus("error");
    } finally {
      setIsProcessing(false);
    }
  };

  const isDisabled = !videoFile || currentClips.length === 0 || selectedPlatforms.length === 0 || isProcessing;

  return (
    <>
      <div className="text-center">
        <button
          onClick={handleExport}
          disabled={isDisabled}
          className={`px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all ${
            isDisabled
              ? "bg-neutral-300 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 cursor-not-allowed"
              : "bg-[#C2F159] text-neutral-900 hover:opacity-90 hover:shadow-xl"
          }`}
        >
          {isProcessing ? (
            <span className="flex items-center gap-3">
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Exporting...
            </span>
          ) : (
            `Export for ${selectedPlatforms.length} Platform${selectedPlatforms.length > 1 ? "s" : ""}`
          )}
        </button>
        <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-3">
          Download directly to your browser
        </p>
      </div>

      <ExportProgressModal
        isOpen={isModalOpen}
        platforms={selectedPlatforms}
        progress={exportProgress}
        status={exportStatus}
        error={errorMessage}
        onClose={() => {
          setIsModalOpen(false);
          setExportStatus("processing");
        }}
      />
    </>
  );
}
