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
    {
      "@type": "HowToStep",
      "name": "Upload your video",
      "text": "Drag and drop your video file onto the Freecropper homepage, or click Select Video to browse your files.",
    },
    {
      "@type": "HowToStep",
      "name": "Choose a size to analyze",
      "text": "Pick a target platform or aspect ratio. The AI will analyze your video and auto-generate smart crop clips.",
    },
    {
      "@type": "HowToStep",
      "name": "Select a clip to reframe",
      "text": "Click any clip in the timeline, then drag on the preview to reposition the crop area.",
    },
    {
      "@type": "HowToStep",
      "name": "Cut a clip",
      "text": "Move the playhead to the exact moment you want, then hit the scissors button to split the clip.",
    },
    {
      "@type": "HowToStep",
      "name": "Drag to rearrange clips",
      "text": "Drag clips in the timeline to reorder or merge similar segments.",
    },
    {
      "@type": "HowToStep",
      "name": "Export your video",
      "text": "Click Export in the top-right corner and your video will download directly to your device.",
    },
  ],
};

export default function HowToUseFreecropperPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#f7f7f8]">
        {/* Hero */}
        <div className="bg-neutral-900 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-neutral-400 mb-8">
              <Link href="/" className="hover:text-[#C2F159] transition-colors">Freecropper</Link>
              <span>/</span>
              <Link href="/best/video-cropper-2026" className="hover:text-[#C2F159] transition-colors">Guides</Link>
              <span>/</span>
              <span className="text-neutral-300">How to Use Freecropper</span>
            </div>

            {/* Badge */}
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
              Everything you need to know to go from raw video to a perfectly cropped, platform-ready clip — in under 5 minutes.
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mt-8 text-sm text-neutral-500">
              <span>Updated Feb 2026</span>
              <span className="w-1 h-1 rounded-full bg-neutral-600" />
              <span>8 min read</span>
              <span className="w-1 h-1 rounded-full bg-neutral-600" />
              <span>Beginner-friendly</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
          <div className="bg-white rounded-2xl border border-neutral-200 p-6 mb-10">
            <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-widest mb-4">In this guide</h2>
            <ol className="space-y-2.5">
              {[
                { href: "#what-is-freecropper", label: "What is Freecropper?" },
                { href: "#step-1-upload", label: "Step 1 — Upload your video" },
                { href: "#step-2-choose-size", label: "Step 2 — Choose a size to analyze" },
                { href: "#step-3-reframe", label: "Step 3 — Select a clip and reframe" },
                { href: "#step-4-cut", label: "Step 4 — Cut a clip" },
                { href: "#step-5-rearrange", label: "Step 5 — Drag to rearrange clips" },
                { href: "#step-6-export", label: "Step 6 — Export your video" },
                { href: "#tips", label: "Pro tips" },
              ].map((item, i) => (
                <li key={item.href} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#C2F159]/20 text-neutral-700 text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <a href={item.href} className="text-sm text-neutral-600 hover:text-neutral-900 hover:underline transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* ── What is Freecropper ── */}
          <section id="what-is-freecropper" className="mb-14 scroll-mt-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4 pb-3 border-b border-neutral-200">
              What is Freecropper?
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Freecropper is a free online tool that lets you crop and resize videos right inside your web browser. You don't need to download any software, and you don't need to create an account. Just open the website, drop in your video, and you're ready to go.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              The coolest part? Freecropper uses AI — that's artificial intelligence — to look at your video and figure out where the important stuff is. If there's a person talking, the AI will keep their face in the frame when it crops the video. That means you don't have to do it manually for every second of footage.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              This is really useful if you have a landscape video (wide, like a TV screen) and you want to turn it into a vertical video (tall, like a phone screen) for TikTok, Instagram Reels, or YouTube Shorts.
            </p>

            {/* Info box */}
            <div className="flex gap-3 bg-[#C2F159]/10 border border-[#C2F159]/30 rounded-xl p-4">
              <svg className="w-5 h-5 text-[#7ab830] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <p className="text-sm text-neutral-700 leading-relaxed">
                <strong>Your video never leaves your device.</strong> All the processing happens in your browser, so there's nothing to upload and no waiting for a server. It's fast and 100% private.
              </p>
            </div>
          </section>

          {/* ── Step 1: Upload ── */}
          <section id="step-1-upload" className="mb-14 scroll-mt-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-900 text-[#C2F159] text-sm font-bold flex items-center justify-center">1</div>
              <h2 className="text-2xl font-bold text-neutral-900">Upload your video</h2>
            </div>
            <p className="text-neutral-600 leading-relaxed mb-4">
              When you open Freecropper, you'll see a big box in the middle of the page that says "Drop your video here." You can upload your video in two ways:
            </p>
            <ul className="space-y-2 mb-5 ml-4">
              {[
                "Drag your video file from your computer and drop it into the box.",
                "Click the green \"Select Video\" button and pick your file from your computer.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-neutral-600 text-sm leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#C2F159] mt-2" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Freecropper supports MP4, MOV, and WebM files up to 2GB. Most videos you record on your phone or computer will work just fine.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Once your video is uploaded, the editor will open automatically. You'll see your video preview on the left and a settings panel on the right.
            </p>
          </section>

          {/* ── Step 2: Choose size ── */}
          <section id="step-2-choose-size" className="mb-14 scroll-mt-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-900 text-[#C2F159] text-sm font-bold flex items-center justify-center">2</div>
              <h2 className="text-2xl font-bold text-neutral-900">Choose a size to analyze</h2>
            </div>
            <p className="text-neutral-600 leading-relaxed mb-4">
              On the right side of the editor, you'll see a list of platforms — things like TikTok, Instagram Reels, YouTube Shorts, and LinkedIn. Each platform has a different video size, called an "aspect ratio."
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Think of aspect ratio like the shape of the video. A 9:16 video is tall and skinny — perfect for phones. A 16:9 video is wide — like a TV or laptop screen.
            </p>

            {/* Aspect ratio table */}
            <div className="overflow-hidden rounded-xl border border-neutral-200 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-neutral-50 border-b border-neutral-200">
                    <th className="text-left px-4 py-3 font-semibold text-neutral-700">Platform</th>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-700">Aspect Ratio</th>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-700">Shape</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {[
                    { platform: "TikTok / Instagram Reels / YouTube Shorts", ratio: "9:16", shape: "Tall vertical" },
                    { platform: "Instagram Feed", ratio: "4:5", shape: "Slightly tall" },
                    { platform: "LinkedIn / Square posts", ratio: "1:1", shape: "Square" },
                    { platform: "YouTube / Twitter", ratio: "16:9", shape: "Wide horizontal" },
                  ].map((row) => (
                    <tr key={row.ratio} className="bg-white even:bg-neutral-50/50">
                      <td className="px-4 py-3 text-neutral-700">{row.platform}</td>
                      <td className="px-4 py-3 font-mono text-neutral-900 font-medium">{row.ratio}</td>
                      <td className="px-4 py-3 text-neutral-500">{row.shape}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-neutral-600 leading-relaxed mb-5">
              Click on the platform you want to export for. Freecropper will immediately start analyzing your video. You'll see a progress bar in the top-left corner of the preview. This usually takes between 10 and 60 seconds depending on how long your video is.
            </p>

            {/* Video demo */}
            <div className="rounded-2xl overflow-hidden border border-neutral-200 mb-4 bg-black">
              <video
                src="/onboarding-step1.mp4"
                className="w-full"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <p className="text-xs text-neutral-400 text-center mb-2">
              Selecting a platform triggers AI analysis — clips are generated automatically.
            </p>

            <p className="text-neutral-600 leading-relaxed">
              When it's done, your video will be split into "clips" — short sections that each have their own crop position. The AI tries to keep the most important thing in the frame for each clip. Pretty smart!
            </p>
          </section>

          {/* ── Step 3: Reframe ── */}
          <section id="step-3-reframe" className="mb-14 scroll-mt-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-900 text-[#C2F159] text-sm font-bold flex items-center justify-center">3</div>
              <h2 className="text-2xl font-bold text-neutral-900">Select a clip and reframe</h2>
            </div>
            <p className="text-neutral-600 leading-relaxed mb-4">
              After the AI finishes, you'll see a row of clips at the bottom of the screen — this is the timeline. Each colored box is one clip.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              If you're happy with where the AI placed the crop, you don't have to do anything. But if you want to adjust it — maybe the AI cut off someone's head, or you want to show something on the other side of the frame — it's easy to fix.
            </p>

            <div className="flex gap-3 bg-blue-50 border border-blue-100 rounded-xl p-4 mb-5">
              <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 10l4.553-2.277A1 1 0 0121 8.677V15.5a1 1 0 01-1.447.894L15 14" />
                <rect x="1" y="6" width="15" height="12" rx="2" ry="2" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-blue-800 mb-1">How to reframe a clip</p>
                <ol className="text-sm text-blue-700 leading-relaxed space-y-1 list-decimal list-inside">
                  <li>Click on the clip you want to change in the timeline below.</li>
                  <li>The clip will turn green — that means it's selected.</li>
                  <li>Now click and drag on the video preview to move the crop window left or right.</li>
                </ol>
              </div>
            </div>

            {/* Video demo */}
            <div className="rounded-2xl overflow-hidden border border-neutral-200 mb-4 bg-black">
              <video
                src="/onboarding-step2.mp4"
                className="w-full"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <p className="text-xs text-neutral-400 text-center mb-5">
              Click a clip in the timeline, then drag the preview to reposition the crop.
            </p>

            <p className="text-neutral-600 leading-relaxed mb-4">
              You can only drag the preview when a clip is selected. If nothing happens when you drag, click a clip in the timeline first.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              On a phone or tablet, you can use one finger to pan the crop position, and pinch two fingers to zoom in or out.
            </p>
          </section>

          {/* ── Step 4: Cut ── */}
          <section id="step-4-cut" className="mb-14 scroll-mt-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-900 text-[#C2F159] text-sm font-bold flex items-center justify-center">4</div>
              <h2 className="text-2xl font-bold text-neutral-900">Cut a clip</h2>
            </div>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Sometimes you'll want to split a clip into two pieces — for example, if the camera pans left in the middle of a clip and you want each part to have a different crop position.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              You can do this with the scissors (✂) button in the timeline toolbar.
            </p>

            <div className="flex gap-3 bg-blue-50 border border-blue-100 rounded-xl p-4 mb-5">
              <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
                <line x1="20" y1="4" x2="8.12" y2="15.88" />
                <line x1="14.47" y1="14.48" x2="20" y2="20" />
                <line x1="8.12" y1="8.12" x2="12" y2="12" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-blue-800 mb-1">How to cut a clip</p>
                <ol className="text-sm text-blue-700 leading-relaxed space-y-1 list-decimal list-inside">
                  <li>Click and drag the green playhead (the line with a diamond at the top) to the exact moment where you want to cut.</li>
                  <li>Click the scissors button in the top-right of the timeline.</li>
                  <li>The clip is now split into two separate clips.</li>
                </ol>
              </div>
            </div>

            {/* Video demo */}
            <div className="rounded-2xl overflow-hidden border border-neutral-200 mb-4 bg-black">
              <video
                src="/onboarding-step3.mp4"
                className="w-full"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <p className="text-xs text-neutral-400 text-center mb-5">
              Drag the playhead to the cut point, then click the scissors to split.
            </p>

            <p className="text-neutral-600 leading-relaxed">
              After cutting, you can select each new clip separately and set a different crop position for each one. You can also use the undo button (↩) if you cut in the wrong place.
            </p>
          </section>

          {/* ── Step 5: Rearrange ── */}
          <section id="step-5-rearrange" className="mb-14 scroll-mt-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-900 text-[#C2F159] text-sm font-bold flex items-center justify-center">5</div>
              <h2 className="text-2xl font-bold text-neutral-900">Drag to rearrange clips</h2>
            </div>
            <p className="text-neutral-600 leading-relaxed mb-4">
              If your video has multiple clips and you want to reorder them, you can drag them around in the timeline. This is especially useful when the AI has created similar-looking clips next to each other and you want to merge them into one.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Just click and hold a clip in the timeline, then drag it left or right to a new position. Release it to drop it there. The other clips will shift to make room.
            </p>

            {/* Video demo */}
            <div className="rounded-2xl overflow-hidden border border-neutral-200 mb-4 bg-black">
              <video
                src="/onboarding-step4.mp4"
                className="w-full"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <p className="text-xs text-neutral-400 text-center mb-5">
              Drag clips in the timeline to reorder or merge segments with the same framing.
            </p>

            <p className="text-neutral-600 leading-relaxed">
              You can also resize a clip by dragging its left or right edge. If you make a mistake, hit the undo button (↩) to go back.
            </p>
          </section>

          {/* ── Step 6: Export ── */}
          <section id="step-6-export" className="mb-14 scroll-mt-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-900 text-[#C2F159] text-sm font-bold flex items-center justify-center">6</div>
              <h2 className="text-2xl font-bold text-neutral-900">Export your video</h2>
            </div>
            <p className="text-neutral-600 leading-relaxed mb-4">
              When you're happy with how everything looks, it's time to export. Click the green <strong>Export</strong> button in the top-right corner of the page.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              A progress bar will appear showing how far along the export is. This usually takes between 30 seconds and a couple of minutes, depending on how long your video is and how fast your computer is.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              When it's done, the video will automatically download to your computer as an MP4 file. No watermark, no branding — just your video.
            </p>

            <div className="flex gap-3 bg-[#C2F159]/10 border border-[#C2F159]/30 rounded-xl p-4">
              <svg className="w-5 h-5 text-[#7ab830] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <p className="text-sm text-neutral-700 leading-relaxed">
                The export button will be greyed out until you've selected a platform and the AI has finished analyzing your video. If it's not clickable yet, just wait a moment.
              </p>
            </div>
          </section>

          {/* ── Pro tips ── */}
          <section id="tips" className="mb-14 scroll-mt-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 pb-3 border-b border-neutral-200">
              Pro tips
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Use Smart Crop for talking-head videos",
                  body: "If your video has a person speaking directly to the camera, Smart Crop mode will track their face automatically. Switch to Center Crop if you have a video with no faces — like a product demo or landscape shot.",
                },
                {
                  title: "You can switch platforms without re-uploading",
                  body: "Once your video is loaded, you can click different platforms in the settings panel. Freecropper will re-analyze and create new clips for each ratio. It remembers previous results so switching back is instant.",
                },
                {
                  title: "Trim clips by dragging their edges",
                  body: "You don't need to cut clips to shorten them. Just grab the left or right edge of a clip in the timeline and drag it inward. The neighboring clip will automatically expand to fill the gap.",
                },
                {
                  title: "Press Escape to deselect a clip",
                  body: "If you've selected a clip and want to go back to just watching the video without accidentally dragging the crop, press the Escape key on your keyboard to deselect.",
                },
                {
                  title: "Undo and redo work like any other app",
                  body: "Made a mistake? Hit the undo button (↩) in the timeline toolbar. Changed your mind about undoing? Hit redo (↪). You can go back multiple steps.",
                },
              ].map((tip, i) => (
                <div key={i} className="bg-white rounded-xl border border-neutral-200 p-5">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5 text-[#C2F159]">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">{tip.title}</h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">{tip.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-neutral-900 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Ready to try it?</h2>
            <p className="text-neutral-400 text-sm mb-6">
              No signup. No watermark. No catch. Just drop your video and go.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-[#C2F159] px-6 py-3 text-sm font-bold text-neutral-900 hover:opacity-90 transition-opacity"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" x2="12" y1="3" y2="15" />
              </svg>
              Upload a video — it's free
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
