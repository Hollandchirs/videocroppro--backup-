import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://freecropper.com"),
  title: "How to Use Freecropper Like a Pro — Complete Guide 2026",
  description:
    "Step-by-step guide to cropping and resizing videos with Freecropper. Learn how to analyze, reframe, cut, and rearrange clips like a pro. No signup, no watermark.",
  alternates: {
    canonical: "https://freecropper.com/best/how-to-use-freecropper",
  },
  openGraph: {
    title: "How to Use Freecropper Like a Pro — Complete Guide 2026",
    description:
      "Step-by-step guide to cropping videos with Freecropper. AI face detection, clip editing, and export tips.",
    type: "article",
    url: "https://freecropper.com/best/how-to-use-freecropper",
    siteName: "Freecropper",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Use Freecropper Like a Pro",
  "description": "Step-by-step guide to cropping and resizing videos with Freecropper.",
  "url": "https://freecropper.com/best/how-to-use-freecropper",
  "step": [
    { "@type": "HowToStep", "name": "Upload your video", "text": "Drag and drop your video onto the Freecropper homepage, or click Select Video to browse." },
    { "@type": "HowToStep", "name": "Choose a size to analyze", "text": "Pick a target platform or aspect ratio. The AI analyzes your video and auto-generates smart crop clips." },
    { "@type": "HowToStep", "name": "Select a clip to reframe", "text": "Click any clip in the timeline, then drag on the preview to reposition the crop area." },
    { "@type": "HowToStep", "name": "Cut a clip", "text": "Move the playhead to the exact moment you want, then hit the scissors button to split the clip." },
    { "@type": "HowToStep", "name": "Drag to rearrange clips", "text": "Drag clips in the timeline to reorder or merge similar segments." },
    { "@type": "HowToStep", "name": "Export your video", "text": "Click Export in the top-right corner. Your video downloads with no watermark." },
  ],
};

export default function HowToUseFreecropperPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">

        {/* Nav — matches site style */}
        <div className="border-b border-neutral-200 dark:border-neutral-800 px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-7xl mx-auto">
            <Link href="/" className="flex items-center gap-2 w-fit hover:opacity-80 transition-opacity">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#C2F159]">
                <svg className="h-4 w-4 text-neutral-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
              <span className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                <span className="text-[#C2F159]">Free</span>cropper
              </span>
            </Link>
          </div>
        </div>

        {/* Hero */}
        <div className="bg-neutral-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
            <div className="flex items-center gap-2 text-sm text-neutral-400 mb-8">
              <Link href="/" className="hover:text-[#C2F159] transition-colors">Freecropper</Link>
              <span>/</span>
              <Link href="/best/video-cropper-2026" className="hover:text-[#C2F159] transition-colors">Guides</Link>
              <span>/</span>
              <span className="text-neutral-300">How to Use Freecropper</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-[#C2F159]/10 border border-[#C2F159]/30 text-[#C2F159] text-xs font-semibold rounded-full px-3 py-1.5 mb-6">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              Complete Guide · 2026
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              How to Use{" "}
              <span className="text-[#C2F159]">Freecropper</span>{" "}
              Like a Pro
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
              Everything you need to go from raw video to a perfectly cropped, platform-ready clip — in under 5 minutes.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8 text-sm text-neutral-500">
              <span>Updated Feb 2026</span>
              <span className="w-1 h-1 rounded-full bg-neutral-600" />
              <span>5 min read</span>
              <span className="w-1 h-1 rounded-full bg-neutral-600" />
              <span>Beginner-friendly</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Table of Contents */}
          <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 mb-14">
            <h2 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-widest mb-4">In this guide</h2>
            <ol className="space-y-2.5">
              {[
                { href: "#what-is", label: "What is Freecropper?" },
                { href: "#step-1", label: "Step 1 — Upload your video" },
                { href: "#step-2", label: "Step 2 — Choose a size to analyze" },
                { href: "#step-3", label: "Step 3 — Select a clip and reframe" },
                { href: "#step-4", label: "Step 4 — Cut a clip" },
                { href: "#step-5", label: "Step 5 — Drag to rearrange clips" },
                { href: "#step-6", label: "Step 6 — Export your video" },
                { href: "#tips", label: "Pro tips" },
              ].map((item, i) => (
                <li key={item.href} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#C2F159]/20 text-neutral-700 dark:text-neutral-300 text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <a href={item.href} className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:underline transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* What is Freecropper */}
          <section id="what-is" className="mb-14 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-5 pb-3 border-b border-neutral-200 dark:border-neutral-800">What is Freecropper?</h2>
            <div className="space-y-4 mb-6">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Freecropper is a free online tool that lets you crop and resize videos right inside your web browser. No software download, no account, no watermark — just open the page, drop in a video, and you're ready.
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                It uses AI to detect where important things are in your video — like a person's face — and keeps them centered when it changes the shape of the frame. That means if you have a wide landscape video and want a tall vertical version for TikTok or Instagram Reels, the AI does the hard work of figuring out where to crop automatically.
              </p>
            </div>
            <div className="flex gap-3 bg-[#C2F159]/10 border border-[#C2F159]/30 rounded-xl p-4">
              <svg className="w-5 h-5 text-[#7ab830] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <strong>Your video never leaves your device.</strong> All processing happens locally in your browser — nothing is uploaded to any server. It's fast and 100% private.
              </p>
            </div>
          </section>

          <hr className="border-neutral-200 dark:border-neutral-800 mb-14" />

          {/* Step 1 */}
          <section id="step-1" className="mb-14 scroll-mt-8">
            <div className="flex items-baseline gap-3 mb-5">
              <span className="text-xs font-bold text-neutral-400 tabular-nums">1.</span>
              <h2 className="text-2xl font-bold">Upload your video</h2>
            </div>
            <div className="space-y-3 mb-5">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                On the Freecropper homepage you'll see a big upload box. You can either drag your video file straight into it, or click the green <strong className="text-neutral-900 dark:text-neutral-100">Select Video</strong> button to browse your files.
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Supported formats: MP4, MOV, WebM — up to 2 GB. Once uploaded, the editor opens automatically with your video preview on the left and the settings panel on the right.
              </p>
            </div>
            <div className="flex gap-3 rounded-xl bg-[#C2F159]/15 border border-[#C2F159]/40 px-5 py-4">
              <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#7aaa1a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <strong className="text-neutral-900 dark:text-neutral-100">100% private.</strong> Your video never leaves your device — all processing happens locally in your browser, nothing is uploaded to any server.
              </p>
            </div>
          </section>

          <hr className="border-neutral-200 dark:border-neutral-800 mb-14" />

          {/* Step 2 */}
          <section id="step-2" className="mb-14 scroll-mt-8">
            <div className="flex items-baseline gap-3 mb-5">
              <span className="text-xs font-bold text-neutral-400 tabular-nums">2.</span>
              <h2 className="text-2xl font-bold">Choose a size to analyze</h2>
            </div>
            <div className="space-y-3 mb-6">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                On the right panel you'll see platforms like TikTok, Instagram Reels, YouTube Shorts, and LinkedIn. Each has a different "aspect ratio" — that's just the shape of the video frame. A 9:16 frame is tall and slim (perfect for phones), a 16:9 frame is wide (like a TV).
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Click the platform you want to export for. Freecropper starts analyzing your video immediately — a progress indicator appears in the preview. This usually takes 10–60 seconds. When done, your video is split into smart "clips," each with its own crop position.
              </p>
            </div>

            {/* Aspect ratio table */}
            <div className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
                    <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">Platform</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">Ratio</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">Shape</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
                  {[
                    { platform: "TikTok / Instagram Reels / YouTube Shorts", ratio: "9:16", shape: "Tall vertical" },
                    { platform: "Instagram Feed", ratio: "4:5", shape: "Slightly tall" },
                    { platform: "LinkedIn / Square", ratio: "1:1", shape: "Square" },
                    { platform: "YouTube / Twitter", ratio: "16:9", shape: "Wide horizontal" },
                  ].map((row) => (
                    <tr key={row.ratio} className="bg-white dark:bg-neutral-950">
                      <td className="px-4 py-3 text-neutral-600 dark:text-neutral-400">{row.platform}</td>
                      <td className="px-4 py-3 font-mono font-semibold text-neutral-900 dark:text-neutral-100">{row.ratio}</td>
                      <td className="px-4 py-3 text-neutral-500">{row.shape}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 mb-2 bg-black">
              <video src="/onboarding-step1.mp4" className="w-full" autoPlay loop muted playsInline />
            </div>
            <p className="text-xs text-neutral-400 text-center">Selecting a platform triggers AI analysis — clips are generated automatically.</p>
          </section>

          <hr className="border-neutral-200 dark:border-neutral-800 mb-14" />

          {/* Step 3 */}
          <section id="step-3" className="mb-14 scroll-mt-8">
            <div className="flex items-baseline gap-3 mb-5">
              <span className="text-xs font-bold text-neutral-400 tabular-nums">3.</span>
              <h2 className="text-2xl font-bold">Select a clip and reframe</h2>
            </div>
            <div className="space-y-3 mb-6">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                After analysis, the timeline at the bottom shows all your clips as colored boxes. If the AI did a great job, you're done — just skip to export. But if you want to nudge the crop for any clip, it's easy.
              </p>
            </div>

            <div className="flex gap-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 rounded-xl p-4 mb-6">
              <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 10l4.553-2.277A1 1 0 0121 8.677V15.5a1 1 0 01-1.447.894L15 14" /><rect x="1" y="6" width="15" height="12" rx="2" ry="2" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-1">How to reframe a clip</p>
                <ol className="text-sm text-blue-700 dark:text-blue-400 leading-relaxed space-y-1 list-decimal list-inside">
                  <li>Click a clip in the timeline — it turns green (selected).</li>
                  <li>Click and drag left or right on the video preview to move the crop window.</li>
                  <li>On mobile: one finger to pan, pinch to zoom.</li>
                </ol>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 mb-2 bg-black">
              <video src="/onboarding-step2.mp4" className="w-full" autoPlay loop muted playsInline />
            </div>
            <p className="text-xs text-neutral-400 text-center">Click a clip in the timeline, then drag the preview to reposition the crop.</p>
          </section>

          <hr className="border-neutral-200 dark:border-neutral-800 mb-14" />

          {/* Step 4 */}
          <section id="step-4" className="mb-14 scroll-mt-8">
            <div className="flex items-baseline gap-3 mb-5">
              <span className="text-xs font-bold text-neutral-400 tabular-nums">4.</span>
              <h2 className="text-2xl font-bold">Cut a clip</h2>
            </div>
            <div className="space-y-3 mb-6">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Want to split a clip into two pieces — for example, because the camera pans and you want a different crop for each part? Use the scissors (✂) button in the timeline toolbar.
              </p>
            </div>

            <div className="flex gap-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 rounded-xl p-4 mb-6">
              <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
                <line x1="20" y1="4" x2="8.12" y2="15.88" /><line x1="14.47" y1="14.48" x2="20" y2="20" /><line x1="8.12" y1="8.12" x2="12" y2="12" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-1">How to cut a clip</p>
                <ol className="text-sm text-blue-700 dark:text-blue-400 leading-relaxed space-y-1 list-decimal list-inside">
                  <li>Drag the green playhead (diamond at the top) to the exact cut point.</li>
                  <li>Click the scissors button in the timeline toolbar.</li>
                  <li>The clip splits into two — select each one to set different crops.</li>
                </ol>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 mb-2 bg-black">
              <video src="/onboarding-step3.mp4" className="w-full" autoPlay loop muted playsInline />
            </div>
            <p className="text-xs text-neutral-400 text-center">Drag the playhead to the cut point, then click the scissors to split.</p>
          </section>

          <hr className="border-neutral-200 dark:border-neutral-800 mb-14" />

          {/* Step 5 */}
          <section id="step-5" className="mb-14 scroll-mt-8">
            <div className="flex items-baseline gap-3 mb-5">
              <span className="text-xs font-bold text-neutral-400 tabular-nums">5.</span>
              <h2 className="text-2xl font-bold">Drag to rearrange clips</h2>
            </div>
            <div className="space-y-3 mb-6">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Drag clips left or right in the timeline to reorder them. This is especially handy when the AI generates similar-looking clips side by side — drag one over the other to merge them quickly. You can also drag a clip's edges to trim it; the neighboring clip expands automatically to fill the gap.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 mb-2 bg-black">
              <video src="/onboarding-step4.mp4" className="w-full" autoPlay loop muted playsInline />
            </div>
            <p className="text-xs text-neutral-400 text-center">Drag clips in the timeline to reorder or merge segments with the same framing.</p>
          </section>

          <hr className="border-neutral-200 dark:border-neutral-800 mb-14" />

          {/* Step 6 */}
          <section id="step-6" className="mb-14 scroll-mt-8">
            <div className="flex items-baseline gap-3 mb-5">
              <span className="text-xs font-bold text-neutral-400 tabular-nums">6.</span>
              <h2 className="text-2xl font-bold">Export your video</h2>
            </div>
            <div className="space-y-3 mb-6">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Click the green <strong className="text-neutral-900 dark:text-neutral-100">Export</strong> button in the top-right corner. A progress bar shows how far along the export is — usually 30 seconds to a couple of minutes. When done, your video downloads automatically as an MP4 file with no watermark.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  <tr>
                    <td className="px-5 py-3 text-neutral-500 text-xs font-semibold uppercase tracking-wide w-20 align-top">Note</td>
                    <td className="px-5 py-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      The Export button stays greyed out until you've selected a platform and analysis is complete. If it's not clickable yet, just wait a moment.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <hr className="border-neutral-200 dark:border-neutral-800 mb-14" />

          {/* Pro tips */}
          <section id="tips" className="mb-16 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-8 pb-3 border-b border-neutral-200 dark:border-neutral-800">Pro tips</h2>
            <div className="space-y-4">
              {[
                { title: "Use Smart Crop for talking-head videos", body: "Smart Crop tracks faces automatically. Switch to Center Crop for videos with no faces — product demos, landscape shots, etc." },
                { title: "Switch platforms without re-uploading", body: "Once a video is loaded, click any platform in the settings panel. Freecropper re-analyzes and remembers previous results, so switching back is instant." },
                { title: "Trim clips by dragging their edges", body: "No need to cut clips to shorten them — grab the left or right edge and drag inward. The neighboring clip expands automatically." },
                { title: "Press Escape to deselect a clip", body: "Selected a clip but want to stop editing? Press Escape to deselect without accidentally dragging the crop." },
                { title: "Undo and redo work like any other app", body: "Hit undo (↩) in the timeline toolbar to go back. Hit redo (↪) to reverse. Multiple steps supported." },
              ].map((tip, i) => (
                <div key={i} className="flex gap-4">
                  <span className="shrink-0 text-xs font-bold text-neutral-400 pt-0.5 w-4">{i + 1}.</span>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">{tip.title}</strong>
                    {" "}— {tip.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-neutral-200 dark:border-neutral-800 mb-14" />

          {/* Bottom CTA */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Ready to try it?</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
              <strong className="text-neutral-900 dark:text-neutral-100">Freecropper is completely free</strong> — no watermark, no signup, and your video never leaves your device. Drop in a video and you'll have a cropped export in under 5 minutes.
            </p>
            <Link
              href="/"
              className="inline-block bg-[#C2F159] text-neutral-900 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#d4f97a] transition-colors"
            >
              Try Freecropper Free
            </Link>
          </div>

          {/* Related links */}
          <div className="border-t border-neutral-200 dark:border-neutral-800 pt-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">Related</p>
            <div className="flex flex-wrap gap-2">
              {[
                { href: "/best/video-cropper-2026", label: "Best Video Cropper 2026" },
                { href: "/video-cropper-no-watermark", label: "Video Cropper No Watermark" },
                { href: "/auto-crop-face-detection", label: "Auto Crop Face Detection" },
                { href: "/tiktok-video-cropper", label: "TikTok Video Cropper" },
                { href: "/vs/capcut", label: "Freecropper vs CapCut" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-xs px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:border-neutral-400 dark:hover:border-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
