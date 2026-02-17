import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://freecropper.com"),
  title: "Best Free Video Cropper 2026 — No Watermark | FreeCropper",
  description:
    "Best free video cropper 2026. FreeCropper ranks #1: no watermark, no signup, AI face detection, 2GB files, 100% browser-based. See how CapCut, Kapwing, and InShot compare.",
  alternates: {
    canonical: "https://freecropper.com/best/video-cropper-2026",
  },
  openGraph: {
    title: "Best Free Video Cropper 2026 — No Watermark | FreeCropper",
    description:
      "Best free video cropper 2026. FreeCropper ranks #1 — no watermark, no signup, AI face detection.",
    type: "website",
    url: "https://freecropper.com/best/video-cropper-2026",
    siteName: "FreeCropper",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const tools = [
  {
    rank: 1,
    name: "FreeCropper",
    watermark: "None",
    signup: "Not required",
    aiCrop: "Yes — face detection",
    maxFile: "2 GB",
    price: "Free",
    verdict: "Best",
    pros: "No watermark ever. No signup. AI face detection auto-centers speakers. 2 GB file support. Runs 100% in your browser — files never leave your device.",
    cons: null,
    bestFor: "TikTok creators, podcasters, anyone who needs vertical video fast.",
    compareHref: null,
  },
  {
    rank: 2,
    name: "DaVinci Resolve",
    watermark: "None",
    signup: "Required",
    aiCrop: "Manual only",
    maxFile: "Unlimited",
    price: "Free (paid tier exists)",
    verdict: "Overkill",
    pros: "Professional-grade editing, unlimited file size.",
    cons: "Overkill for simple crops. Steep learning curve. 2 GB desktop download required.",
    bestFor: "Pro editors who need a full editing suite.",
    compareHref: null,
  },
  {
    rank: 3,
    name: "CapCut",
    watermark: "Yes (free version)",
    signup: "Required",
    aiCrop: "Yes",
    maxFile: "500 MB",
    price: "Free (with limits)",
    verdict: "Watermark",
    pros: "Easy to use, good AI features, mobile app available.",
    cons: "Adds CapCut watermark on free exports. Owned by ByteDance. 500 MB file limit.",
    bestFor: "Users who don't mind the watermark or will pay to remove it.",
    compareHref: "/vs/capcut",
  },
  {
    rank: 4,
    name: "Canva",
    watermark: "None",
    signup: "Required",
    aiCrop: "Manual only",
    maxFile: "250 MB",
    price: "Free (limited) / $13/mo",
    verdict: "Limited",
    pros: "Clean interface, great for adding text and graphics overlays.",
    cons: "No AI auto-crop. 250 MB file limit. Not a dedicated video cropper.",
    bestFor: "Designers adding overlays — not pure cropping.",
    compareHref: null,
  },
  {
    rank: 5,
    name: "InShot",
    watermark: "Yes (free version)",
    signup: "Not required",
    aiCrop: "Yes",
    maxFile: "—",
    price: "Free (with ads)",
    verdict: "Watermark",
    pros: "Mobile-friendly, quick edits, no account needed.",
    cons: "Adds InShot watermark on free exports. Must watch ads to remove. Mobile only.",
    bestFor: "Mobile users who don't mind the watermark.",
    compareHref: null,
  },
  {
    rank: 6,
    name: "Kapwing",
    watermark: "Yes (videos >4 min)",
    signup: "Required",
    aiCrop: "Limited",
    maxFile: "250 MB",
    price: "Free (limited) / $16/mo",
    verdict: "Limited",
    pros: "Web-based, collaborative features, clean UI.",
    cons: "Watermark on all free exports. Account required. $16/month to remove watermark.",
    bestFor: "Short clips and teams that don't mind paying.",
    compareHref: "/vs/kapwing",
  },
];

export default function BestVideoCropper2026Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      {/* Nav */}
      <div className="border-b border-neutral-200 dark:border-neutral-800 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="flex items-center gap-2 w-fit hover:opacity-80 transition-opacity"
          >
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
            Best Free Video Cropper 2026
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <strong className="text-neutral-900 dark:text-neutral-100">
              Best free video cropper
            </strong>{" "}
            tools ranked by what actually matters: no watermark, no signup, and
            works for TikTok / Reels / Shorts.
          </p>
        </div>

        {/* CTA */}
        <div className="mb-14">
          <Link
            href="/"
            className="inline-block bg-[#C2F159] text-neutral-900 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#d4f97a] transition-colors"
          >
            Try #1 Pick — FreeCropper
          </Link>
          <p className="text-xs text-neutral-400 mt-2">
            No watermark. No signup. AI face detection. Free forever.
          </p>
        </div>

        <hr className="border-neutral-200 dark:border-neutral-800 mb-14" />

        {/* What we looked for */}
        <div className="mb-14">
          <h2 className="text-xl font-bold mb-6">What We Looked For</h2>
          <div className="space-y-4">
            {[
              ["No watermark", "\"Free\" tools that add watermarks aren't really free."],
              ["No signup", "Should work instantly without creating an account."],
              ["AI auto-crop", "Face detection to keep speakers centered automatically."],
              ["File size", "Should handle real video files — 500 MB or larger."],
              ["Browser-based", "No downloads, no installs, works anywhere."],
            ].map(([title, desc], i) => (
              <div key={i} className="flex gap-4">
                <span className="shrink-0 text-xs font-bold text-neutral-400 pt-0.5 w-4">
                  {i + 1}.
                </span>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">
                    {title}
                  </strong>{" "}
                  — {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-neutral-200 dark:border-neutral-800 mb-14" />

        {/* Rankings */}
        <h2 className="text-2xl font-bold mb-6">2026 Rankings</h2>

        {/* Quick Comparison Table */}
        <div className="mb-14">
          <div className="overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
                  {["Tool", "Watermark", "Signup", "AI Crop", "Max File", "Verdict"].map((h) => (
                    <th
                      key={h}
                      className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500 whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tools.map((tool, i) => (
                  <tr
                    key={tool.rank}
                    className={`border-b border-neutral-100 dark:border-neutral-800/60 last:border-0 ${
                      tool.rank === 1 ? "bg-[#C2F159]/5" : i % 2 === 1 ? "bg-neutral-50/50 dark:bg-neutral-900/20" : ""
                    }`}
                  >
                    <td className="px-4 py-3 font-semibold whitespace-nowrap">
                      {tool.name}
                    </td>
                    <td className={`px-4 py-3 ${tool.watermark === "None" ? "text-neutral-700 dark:text-neutral-300" : "text-neutral-400"}`}>
                      {tool.watermark === "None" ? "None" : "Yes"}
                    </td>
                    <td className={`px-4 py-3 ${tool.signup === "Not required" ? "text-neutral-700 dark:text-neutral-300" : "text-neutral-400"}`}>
                      {tool.signup === "Not required" ? "None" : "Required"}
                    </td>
                    <td className={`px-4 py-3 ${tool.aiCrop.startsWith("Yes") ? "text-neutral-700 dark:text-neutral-300" : "text-neutral-400"}`}>
                      {tool.aiCrop.startsWith("Yes") ? "Yes" : "No"}
                    </td>
                    <td className="px-4 py-3 text-neutral-500 whitespace-nowrap">
                      {tool.maxFile}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-md whitespace-nowrap ${
                          tool.verdict === "Best"
                            ? "bg-[#C2F159] text-neutral-900"
                            : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500"
                        }`}
                      >
                        {tool.verdict}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-12 mb-16">
          {tools.map((tool) => (
            <div key={tool.rank}>
              {/* Tool header */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-xs font-bold text-neutral-400 tabular-nums">
                  {tool.rank}.
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold">{tool.name}</h3>
                    {tool.rank === 1 && (
                      <span className="text-xs font-semibold bg-[#C2F159] text-neutral-900 px-2 py-0.5 rounded-md">
                        Best Overall
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Feature table */}
              <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden mb-5">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      { label: "Watermark", value: tool.watermark, warn: tool.watermark !== "None" },
                      { label: "Signup", value: tool.signup, warn: tool.signup === "Required" },
                      { label: "AI Auto-Crop", value: tool.aiCrop, warn: false },
                      { label: "Max File", value: tool.maxFile, warn: false },
                      { label: "Price", value: tool.price, warn: false },
                    ].map((row, i, arr) => (
                      <tr
                        key={i}
                        className={`${i < arr.length - 1 ? "border-b border-neutral-100 dark:border-neutral-800" : ""} ${tool.rank === 1 ? "bg-[#C2F159]/5" : ""}`}
                      >
                        <td className="px-5 py-3 text-neutral-500 text-xs font-semibold uppercase tracking-wide w-36">
                          {row.label}
                        </td>
                        <td className={`px-5 py-3 font-medium ${row.warn ? "text-neutral-500 dark:text-neutral-500" : tool.rank === 1 ? "text-neutral-900 dark:text-neutral-100" : "text-neutral-700 dark:text-neutral-300"}`}>
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pros / Cons / Best for */}
              <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                <p>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-200">Pros:</span>{" "}
                  {tool.pros}
                </p>
                {tool.cons && (
                  <p>
                    <span className="font-semibold text-neutral-900 dark:text-neutral-200">Cons:</span>{" "}
                    {tool.cons}
                  </p>
                )}
                <p>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-200">Best for:</span>{" "}
                  {tool.bestFor}
                </p>
              </div>

              {/* Action links */}
              {tool.rank === 1 ? (
                <Link
                  href="/"
                  className="inline-block bg-[#C2F159] text-neutral-900 font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-[#d4f97a] transition-colors"
                >
                  Try FreeCropper Free
                </Link>
              ) : tool.compareHref ? (
                <Link
                  href={tool.compareHref}
                  className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 underline underline-offset-4 transition-colors"
                >
                  FreeCropper vs {tool.name}
                </Link>
              ) : null}

              {tool.rank < tools.length && (
                <hr className="border-neutral-200 dark:border-neutral-800 mt-12" />
              )}
            </div>
          ))}
        </div>

        <hr className="border-neutral-200 dark:border-neutral-800 mb-14" />

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">FAQ</h2>
          <div className="space-y-8">
            {[
              {
                q: "Which video cropper has no watermark?",
                a: "FreeCropper and DaVinci Resolve are completely free with no watermark. CapCut, InShot, and Kapwing all add watermarks on free exports.",
              },
              {
                q: "What's the best video cropper for TikTok?",
                a: "FreeCropper — specifically designed for 9:16 vertical with AI face tracking. No watermark, no signup, and your video stays on your device.",
              },
              {
                q: "Is there a free video cropper with AI face detection?",
                a: "Yes. FreeCropper has AI face detection that automatically centers speakers when converting landscape video to vertical.",
              },
              {
                q: "Is FreeCropper really free forever?",
                a: "Yes. No premium tier, no watermark removal fee, no subscription. Everything works free, permanently.",
              },
            ].map(({ q, a }, i) => (
              <div key={i}>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  {q}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-neutral-200 dark:border-neutral-800 mb-14" />

        {/* Verdict + bottom CTA */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Verdict</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
            <strong className="text-neutral-900 dark:text-neutral-100">
              FreeCropper is the best free video cropper in 2026
            </strong>{" "}
            if you need no watermark, no signup, AI face detection, and a
            browser-based tool that never uploads your video to a server. Every
            other tool on this list requires a tradeoff — a watermark, an
            account, a file size cap, or a subscription fee.
          </p>
          <Link
            href="/"
            className="inline-block bg-[#C2F159] text-neutral-900 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#d4f97a] transition-colors"
          >
            Try FreeCropper Free
          </Link>
        </div>

        {/* Related links */}
        <div className="border-t border-neutral-200 dark:border-neutral-800 pt-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">
            Related
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { href: "/video-cropper-no-watermark", label: "Video Cropper No Watermark" },
              { href: "/video-cropper-no-signup", label: "Free Video Cropper No Signup" },
              { href: "/auto-crop-face-detection", label: "Auto Crop Face Detection" },
              { href: "/vs/capcut", label: "FreeCropper vs CapCut" },
              { href: "/vs/kapwing", label: "FreeCropper vs Kapwing" },
              { href: "/tiktok-video-cropper", label: "TikTok Video Cropper" },
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
  );
}
