"use client";

import { getPlatformById } from "@/lib/platforms";

interface ExportProgressModalProps {
  isOpen: boolean;
  platforms: string[];
  progress: {
    current: number;
    total: number;
    platformId: string;
    percent: number;
  } | null;
  status: "processing" | "completed" | "error";
  error?: string;
  onClose: () => void;
}

export function ExportProgressModal({
  isOpen,
  platforms,
  progress,
  status,
  error,
  onClose,
}: ExportProgressModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              {status === "processing" && "Processing Video..."}
              {status === "completed" && "Export Complete!"}
              {status === "error" && "Export Failed"}
            </h2>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          {status === "error" && (
            <div className="text-red-500 text-center py-4">
              <p>{error || "An error occurred during export."}</p>
            </div>
          )}

          {status === "processing" && progress && (
            <div className="space-y-4">
              {/* Platform being processed */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#C2F159] to-[#A7E635] flex items-center justify-center text-neutral-900 font-semibold text-sm">
                  {progress.current}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-neutral-900 dark:text-neutral-100">
                    {getPlatformById(progress.platformId)?.name || `Platform ${progress.current}`}
                  </p>
                  <p className="text-sm text-neutral-500">
                    of {progress.total} platform{progress.total > 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="space-y-2">
                <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#C2F159] to-[#A7E635] transition-all duration-300"
                    style={{ width: `${progress.percent}%` }}
                  />
                </div>
                <p className="text-sm text-neutral-500 text-right">{progress.percent}%</p>
              </div>

              {/* Info text */}
              <p className="text-sm text-neutral-500 text-center">
                Processing video in your browser...
              </p>
            </div>
          )}

          {status === "completed" && (
            <div className="space-y-3">
              <div className="text-center py-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#C2F159] to-[#A7E635] flex items-center justify-center">
                  <svg className="w-8 h-8 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-neutral-900 dark:text-neutral-100 font-medium mb-2">
                  Videos downloaded successfully!
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {platforms.length} video{platforms.length > 1 ? "s have" : " has"} been saved to your device
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {status === "error" && (
          <div className="px-6 py-4 bg-neutral-50 dark:bg-neutral-800/50">
            <button
              onClick={onClose}
              className="w-full py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors"
            >
              Close
            </button>
          </div>
        )}
        {status === "processing" && (
          <div className="px-6 py-4 bg-neutral-50 dark:bg-neutral-800/50 flex justify-center">
            <button
              onClick={onClose}
              className="text-sm text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        )}
        {status === "completed" && (
          <div className="px-6 py-4 bg-neutral-50 dark:bg-neutral-800/50">
            <button
              onClick={onClose}
              className="w-full py-2 text-sm text-[#C2F159] hover:text-[#A7E635] font-medium transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
