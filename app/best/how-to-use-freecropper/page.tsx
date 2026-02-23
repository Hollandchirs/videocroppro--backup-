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

const steps = [
  {
    num: 1,
    id: "upload",
    title: "Upload your video",
    body: [
      "When you open Freecropper, you'll see a big box in the middle of the page that says \"Drop your video here.\" You can upload in two ways:",
      "— Drag your video file from your computer straight into the box.",
      "— Click the green \"Select Video\" button and pick a file from your computer.",
      "Freecropper supports MP4, MOV, and WebM files up to 2 GB. Most videos recorded on a phone or computer will work just fine. Once uploaded, the editor opens automatically — video preview on the left, settings panel on the right.",
    ],
    video: null,
    tip: {
      text: "Your video never leaves your device. All processing happens locally in your browser — nothing is uploaded to any server.",
    },
  },
  {
    num: 2,
    id: "choose-size",
    title: "Choose a size to analyze",
    body: [
      "On the right side of the editor, you'll see a list of platforms — TikTok, Instagram Reels, YouTube Shorts, LinkedIn, and more. Each platform has a different video shape, called an \"aspect ratio.\"",
      "Think of it like picking a frame for a photo. A 9:16 frame is tall and slim — perfect for phones. A 16:9 frame is wide — like a TV or laptop screen.",
      "Click on the platform you want to export for. Freecropper will immediately start analyzing your video. A progress bar appears in the top-left of the preview. This usually takes 10–60 seconds depending on video length.",
      "When analysis is done, your video is split into \"clips\" — short sections each with their own crop position. The AI keeps the most important thing in the frame for each clip.",
    ],
    video: "/onboarding-step1.mp4",
    videoCaption: "Selecting a platform triggers AI analysis — clips are generated automatically.",
    tip: null,
  },
  {
    num: 3,
    id: "reframe",
    title: "Select a clip and reframe",
    body: [
      "After analysis, you'll see a row of clips at the bottom — the timeline. Each colored box is one clip.",
      "If you're happy with where the AI placed the crop, you don't need to do anything. But if you want to adjust — maybe someone's head got cut off, or you want to show something else — it's easy to fix.",
      "Click a clip in the timeline to select it. It turns green. Then click and drag on the video preview to move the crop window left or right.",
      "You can only drag when a clip is selected. If nothing happens when you drag, click a clip in the timeline first.",
      "On mobile, use one finger to pan and pinch two fingers to zoom in or out.",
    ],
    video: "/onboarding-step2.mp4",
    videoCaption: "Click a clip in the timeline, then drag the preview to reposition the crop.",
    tip: null,
  },
  {
    num: 4,
    id: "cut",
    title: "Cut a clip",
    body: [
      "Sometimes you'll want to split a clip into two pieces — for example if the camera pans and you want each part to have a different crop position.",
      "Use the scissors (✂) button in the timeline toolbar.",
      "First, drag the green playhead (the line with a diamond at the top) to the exact moment where you want to cut. Then click the scissors button. The clip splits into two separate clips.",
      "After cutting, select each new clip and set a different crop position for each one. Made a mistake? Hit the undo button (↩) to go back.",
    ],
    video: "/onboarding-step3.mp4",
    videoCaption: "Drag the playhead to the cut point, then click the scissors to split.",
    tip: null,
  },
  {
    num: 5,
    id: "rearrange",
    title: "Drag to rearrange clips",
    body: [
      "If your video has multiple clips and you want to reorder them, drag them in the timeline. This is especially useful when the AI creates similar-looking clips that you want to merge into one.",
      "Click and hold a clip, drag it left or right to a new position, then release. The other clips shift to make room.",
      "You can also resize a clip by dragging its left or right edge. The neighboring clip automatically expands to fill any gap.",
    ],
    video: "/onboarding-step4.mp4",
    videoCaption: "Drag clips in the timeline to reorder or merge segments with the same framing.",
    tip: null,
  },
  {
    num: 6,
    id: "export",
    title: "Export your video",
    body: [
      "When everything looks good, click the green Export button in the top-right corner of the page.",
      "A progress bar shows how far along the export is. This usually takes 30 seconds to a couple of minutes depending on video length and your computer's speed.",
      "When done, the video downloads automatically as an MP4 file. No watermark, no branding — just your video.",
    ],
    video: null,
    tip: {
      text: "The Export button stays greyed out until you've selected a platform and analysis is complete. If it's not clickable, just wait a moment.",
    },
  },
];

const proTips = [
  {
    title: "Use Smart Crop for talking-head videos",
    body: "Smart Crop tracks faces automatically. Switch to Center Crop for videos with no faces — product demos, landscape shots, etc.",
  },
  {
    title: "Switch platforms without re-uploading",
    body: "Once a video is loaded, click any platform in the settings panel. Freecropper re-analyzes and remembers previous results, so switching back is instant.",
  },
  {
    title: "Trim clips by dragging their edges",
    body: "No need to cut clips to shorten them — grab the left or right edge and drag inward. The neighboring clip expands automatically.",
  },
  {
    title: "Press Escape to deselect a clip",
    body: "Selected a clip but want to stop editing without accidentally dragging? Press Escape to deselect.",
  },
  {
    title: "Undo and redo work like any other app",
    body: "Hit the undo button (↩) in the timeline toolbar to go back. Hit redo (↪) to reverse an undo. Multiple steps supported.",
  },
];

export default function HowToUseFreecropperPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">

        {/* Nav */}
        <div className="border-b border-neutral-200 dark:border-neutral-800 px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-4xl mx-auto">
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Title block */}
          <div className="mb-10">
            <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-4">
              Last updated: February 2026
            </p>
            <h1 className="text-4xl font-bold tracking-tight leading-tight mb-5">
              How to Use Freecropper Like a Pro
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Everything you need to go from raw video to a perfectly cropped, platform-ready clip — in under 5 minutes. No software. No signup.
            </p>
          </div>

          {/* CTA */}
          <div className="mb-14">
            <Link
              href="/"
              className="inline-block bg-[#C2F159] text-neutral-900 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#d4f97a] transition-colors"
            >
              Try Freecropper Free
            </Link>
            <p className="text-xs text-neutral-400 mt-2">
              No watermark. No signup. AI face detection. Free forever.
            </p>
          </div>

          <hr className="border-neutral-200 dark:border-neutral-800 mb-14" />

          {/* What you need */}
          <div className="mb-14">
            <h2 className="text-xl font-bold mb-6">What you need</h2>
            <div className="space-y-4">
              {[
                ["A video file", "MP4, MOV, or WebM — up to 2 GB. Any video from your phone or camera works."],
                ["A modern browser", "Chrome, Safari, Firefox, or Edge. No downloads or installs needed."],
                ["That's it", "No account. No payment. No watermark."],
              ].map(([title, desc], i) => (
                <div key={i} className="flex gap-4">
                  <span className="shrink-0 text-xs font-bold text-neutral-400 pt-0.5 w-4">{i + 1}.</span>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">{title}</strong>
                    {" "}— {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-neutral-200 dark:border-neutral-800 mb-14" />

          {/* Steps */}
          <h2 className="text-2xl font-bold mb-10">Step-by-step guide</h2>

          <div className="space-y-16 mb-16">
            {steps.map((step, idx) => (
              <div key={step.id} id={step.id}>
                {/* Step header */}
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="text-xs font-bold text-neutral-400 tabular-nums">{step.num}.</span>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>

                {/* Body text */}
                <div className="space-y-3 mb-5">
                  {step.body.map((para, i) => (
                    <p key={i} className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Video demo */}
                {step.video && (
                  <div className="mb-5">
                    <div className="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-black">
                      <video
                        src={step.video}
                        className="w-full"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    </div>
                    {step.videoCaption && (
                      <p className="text-xs text-neutral-400 mt-2 text-center">{step.videoCaption}</p>
                    )}
                  </div>
                )}

                {/* Tip box */}
                {step.tip && (
                  <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
                    <table className="w-full text-sm">
                      <tbody>
                        <tr>
                          <td className="px-5 py-3 text-neutral-500 text-xs font-semibold uppercase tracking-wide w-20 align-top">
                            Note
                          </td>
                          <td className="px-5 py-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            {step.tip.text}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {idx < steps.length - 1 && (
                  <hr className="border-neutral-200 dark:border-neutral-800 mt-16" />
                )}
              </div>
            ))}
          </div>

          <hr className="border-neutral-200 dark:border-neutral-800 mb-14" />

          {/* Pro tips */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Pro tips</h2>
            <div className="space-y-6">
              {proTips.map((tip, i) => (
                <div key={i} className="flex gap-4">
                  <span className="shrink-0 text-xs font-bold text-neutral-400 pt-0.5 w-4">{i + 1}.</span>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">{tip.title}</strong>
                    {" "}— {tip.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

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
