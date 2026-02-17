"use client";

import { SubPageLanding } from "@/components/SubPageLanding";

export default function VideoCropperNoWatermarkPage() {
  return (
    <SubPageLanding
      h1="Video Cropper No Watermark"
      h1Highlight="— Free Online Tool"
      subtitle="the easiest way to crop and resize videos without any watermark or branding. All aspect ratios, AI face detection."
      description="Most 'free' video croppers add a watermark to your export or lock the no-watermark option behind a paywall. Freecropper doesn't. Every export is clean — no watermark, no branding, no 'made with' logo. This applies to all aspect ratios and all features, with no limitations."
      secondaryDescription="Export to 9:16 (TikTok, Reels, Shorts), 4:5 (Instagram Feed), 1:1 (LinkedIn, cross-platform), or 16:9 (YouTube, Twitter). AI face detection keeps subjects centered. Runs in your browser with no file uploads."
      features={[
        {
          title: "Zero watermarks",
          text: "No branding, no logos, no 'made with' text. Your video, completely clean.",
        },
        {
          title: "No hidden paywall",
          text: "Watermark-free export is not a premium feature. It's the default. No upsell, no trial.",
        },
        {
          title: "All aspect ratios included",
          text: "9:16, 16:9, 4:5, 1:1 — all available without watermarks or restrictions.",
        },
        {
          title: "AI face detection",
          text: "Subjects stay centered when cropping. No manual adjustment needed.",
        },
        {
          title: "No signup required",
          text: "Open the page and start editing. No email, no account creation.",
        },
        {
          title: "Private, local processing",
          text: "Videos processed in your browser via WebAssembly. Nothing uploaded to servers.",
        },
      ]}
      internalLinks={[
        { href: "/video-cropper-no-signup", label: "Free Video Cropper — No Signup" },
        { href: "/tiktok-video-cropper", label: "Crop video for TikTok" },
        { href: "/landscape-to-vertical", label: "Convert 16:9 to 9:16" },
        { href: "/", label: "All video cropping tools" },
      ]}
    />
  );
}
