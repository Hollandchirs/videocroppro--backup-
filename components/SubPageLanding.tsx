"use client";

import { VideoUploader } from "@/components/VideoUploader";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { useVideoStore } from "@/lib/store";
import { useState, useRef } from "react";
import { VideoEditor } from "@/components/VideoEditor";
import { PlatformSelector } from "@/components/PlatformSelector";
import { CropStrategySelector } from "@/components/CropStrategySelector";
import { ExportProgressModal } from "@/components/ExportProgressModal";
import { getPlatformById } from "@/lib/platforms";

const loadVideoExporter = () => import("@/lib/videoExporter");

interface SubPageLandingProps {
  h1: string;
  h1Highlight: string;
  subtitle: string;
  description: string;
  secondaryDescription?: string;
  features: { title: string; text: string }[];
  internalLinks: { href: string; label: string }[];
}

export function SubPageLanding({
  h1,
  h1Highlight,
  subtitle,
  description,
  secondaryDescription,
  features,
  internalLinks,
}: SubPageLandingProps) {
  const [showEditor, setShowEditor] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const {
    videoFile,
    selectedPlatforms,
    reset,
    isAnalyzing,
    currentClips,
    cropStrategy,
    setIsProcessing,
    cropRegion,
  } = useVideoStore();
  const abortControllerRef = useRef<AbortController | null>(null);

  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [exportStatus, setExportStatus] = useState<
    "processing" | "completed" | "error"
  >("processing");
  const [exportProgress, setExportProgress] = useState<{
    current: number;
    total: number;
    platformId: string;
    percent: number;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const isExportReady =
    videoFile &&
    selectedPlatforms.length > 0 &&
    currentClips &&
    currentClips.length > 0 &&
    !isAnalyzing;

  const handleVideoLoaded = () => setShowEditor(true);
  const handleReset = () => {
    reset();
    setShowEditor(false);
  };

  const handleExport = async () => {
    if (
      !isExportReady ||
      !videoFile ||
      !currentClips ||
      selectedPlatforms.length === 0
    )
      return;

    abortControllerRef.current?.abort();
    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    setIsExporting(true);
    setIsExportModalOpen(true);
    setExportStatus("processing");
    setExportProgress(null);
    setErrorMessage("");
    setIsProcessing(true);

    try {
      const firstPlatformId = selectedPlatforms[0];
      const platform = getPlatformById(firstPlatformId);
      if (!platform) throw new Error(`Unknown platform: ${firstPlatformId}`);

      setExportProgress({
        current: 1,
        total: 1,
        platformId: firstPlatformId,
        percent: 0,
      });

      const progressCallback = (percent: number) => {
        if (abortController.signal.aborted) return;
        setExportProgress({
          current: 1,
          total: 1,
          platformId: firstPlatformId,
          percent,
        });
      };

      const { exportVideoWithClips, downloadBlob } =
        await loadVideoExporter();

      const cropRegionForExport = cropRegion
        ? { width: cropRegion.width, height: cropRegion.height }
        : undefined;

      const blob = await exportVideoWithClips(
        videoFile.file,
        currentClips,
        platform.width,
        platform.height,
        cropStrategy || "smart-crop",
        progressCallback,
        cropRegionForExport
      );

      if (abortController.signal.aborted) return;

      const baseName = videoFile.file.name.replace(/\.[^/.]+$/, "");
      const filename = `${baseName}_${platform.name.replace(/\s+/g, "_").toLowerCase()}.mp4`;

      setExportStatus("completed");
      setExportProgress({
        current: 1,
        total: 1,
        platformId: firstPlatformId,
        percent: 100,
      });
      downloadBlob(blob, filename);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      if (abortController.signal.aborted) return;
      console.error("[Export] Error:", error);
      setErrorMessage(
        error instanceof Error ? error.message : "Export failed. Please try again."
      );
      setExportStatus("error");
    } finally {
      if (abortControllerRef.current === abortController) {
        setIsExporting(false);
        setIsProcessing(false);
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f7f7f8] to-[#eef0f2] dark:from-[#1f1f1f] dark:to-[#2a2a2a]">
      {/* Header */}
      <header className="border-b border-neutral-200/50 dark:border-neutral-800/50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C2F159]">
                <svg
                  className="h-5 w-5 text-neutral-900"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                  <line x1="7" y1="2" x2="7" y2="22" />
                  <line x1="17" y1="2" x2="17" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="2" y1="7" x2="7" y2="7" />
                  <line x1="2" y1="17" x2="7" y2="17" />
                  <line x1="17" y1="17" x2="22" y2="17" />
                  <line x1="17" y1="7" x2="22" y2="7" />
                </svg>
              </div>
              <span className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                <span className="text-[#C2F159]">Free</span>cropper
              </span>
            </a>

            {showEditor ? (
              <button
                onClick={handleExport}
                disabled={!isExportReady || isExporting}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  isExportReady
                    ? "bg-[#C2F159] text-neutral-900 shadow-md hover:shadow-lg hover:opacity-90"
                    : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                }`}
              >
                {isExporting ? "Exporting..." : "Export"}
              </button>
            ) : (
              <button
                onClick={() => {
                  const input = document.querySelector(
                    'input[type="file"]'
                  ) as HTMLInputElement;
                  input?.click();
                }}
                className="inline-flex items-center gap-2 rounded-full bg-[#C2F159] px-4 py-1.5 text-sm font-semibold text-neutral-900 shadow-md transition-all hover:shadow-lg hover:opacity-90"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" x2="12" y1="3" y2="15" />
                </svg>
                Upload Video
              </button>
            )}
          </div>
        </div>
      </header>

      {!showEditor ? (
        <>
          {/* Hero Section */}
          <section className="relative overflow-hidden pb-4 pt-12">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center">
                <h1 className="mb-8 text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl lg:text-6xl">
                  {h1}
                  <span className="text-[#C2F159]"> {h1Highlight}</span>
                </h1>
                <p className="mb-6 text-lg text-neutral-600 dark:text-neutral-400 sm:text-xl text-balance leading-loose">
                  {subtitle}
                </p>

                <div className="mb-10 flex flex-wrap items-center justify-center gap-3 text-sm">
                  {["Free Forever", "No Watermark", "No Sign-up", "100% Private"].map(
                    (badge) => (
                      <div
                        key={badge}
                        className="flex items-center gap-2 rounded-full border border-[#C2F159]/20 bg-[#C2F159]/5 px-4 py-2 backdrop-blur-sm"
                      >
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C2F159]/20">
                          <svg
                            className="h-3 w-3 text-[#C2F159]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="font-medium text-neutral-900 dark:text-neutral-100">
                          {badge}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Upload Area */}
          <section className="max-w-2xl mx-auto px-4 pb-12">
            <VideoUploader onVideoLoaded={handleVideoLoaded} />
          </section>

          {/* SEO Description */}
          <section className="max-w-3xl mx-auto px-4 pb-12">
            <div className="text-center text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed space-y-3">
              <p>{description}</p>
              {secondaryDescription && <p>{secondaryDescription}</p>}
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-16 bg-white dark:bg-neutral-950">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6"
                  >
                    <h3 className="mb-2 text-base font-semibold text-neutral-900 dark:text-neutral-100">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Internal Links */}
          <section className="py-12 bg-neutral-100 dark:bg-neutral-900/30">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
                More free video tools
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {internalLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:border-[#C2F159] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection />

          {/* Footer */}
          <Footer />
        </>
      ) : (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6 h-[calc(100vh-5rem)] overflow-hidden">
          <div className="grid lg:grid-cols-[1fr_450px] gap-3 h-full">
            <div className="min-w-0 flex flex-col gap-3 h-full">
              <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center justify-between px-5 py-4">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 truncate">
                    {videoFile?.file.name}
                  </h3>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400 whitespace-nowrap ml-4">
                    {videoFile?.width}x{videoFile?.height} •{" "}
                    {Math.floor((videoFile?.duration || 0) / 60)}:
                    {String(Math.floor((videoFile?.duration || 0) % 60)).padStart(
                      2,
                      "0"
                    )}
                  </div>
                </div>
              </div>
              <div className="min-h-0 flex-1">
                <VideoEditor />
              </div>
            </div>
            <div className="space-y-3 h-full overflow-hidden flex flex-col">
              <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col min-h-0 flex-1">
                <div className="px-5 py-4 border-b border-neutral-200 dark:border-neutral-800 flex-shrink-0">
                  <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                    Target Platforms
                  </h4>
                </div>
                <div className="p-5 min-h-0 flex-1 overflow-hidden">
                  <PlatformSelector />
                </div>
              </div>
              <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 flex-shrink-0">
                <div className="px-5 py-4 border-b border-neutral-200 dark:border-neutral-800">
                  <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                    Crop Strategy
                  </h4>
                </div>
                <div className="p-4">
                  <CropStrategySelector />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <ExportProgressModal
        isOpen={isExportModalOpen}
        platforms={selectedPlatforms}
        progress={exportProgress}
        status={exportStatus}
        error={errorMessage}
        onClose={async () => {
          abortControllerRef.current?.abort();
          try {
            const { terminateCurrentOperation } = await loadVideoExporter();
            terminateCurrentOperation();
          } catch (e) {
            console.warn("Failed to terminate FFmpeg:", e);
          }
          setIsExportModalOpen(false);
          setExportStatus("processing");
          setIsExporting(false);
          setIsProcessing(false);
        }}
      />
    </main>
  );
}
