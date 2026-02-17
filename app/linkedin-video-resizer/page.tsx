"use client";

import { SubPageLanding } from "@/components/SubPageLanding";

export default function ResizeVideoForLinkedInPage() {
  return (
    <SubPageLanding
      h1="LinkedIn Video Resizer"
      h1Highlight="— Free Online"
      subtitle="the fastest way to crop videos to 1:1 square or 16:9 landscape for LinkedIn posts and ads. AI face detection."
      description="LinkedIn supports 1:1 (1080x1080), 16:9 (1920x1080), and 9:16 (1080x1920) video formats. Square 1:1 tends to perform best in the LinkedIn feed because it takes up more screen space. Freecropper lets you upload once and export to any of these ratios with AI face detection keeping subjects centered."
      secondaryDescription="No account needed, no watermark added. Your video is processed locally in the browser and never uploaded to external servers. Supports MP4, MOV, WebM, AVI up to 2GB."
      features={[
        {
          title: "1:1 square for LinkedIn",
          text: "Export 1080x1080 square video, the format that gets the most screen space in LinkedIn feeds.",
        },
        {
          title: "16:9 for LinkedIn landscape",
          text: "Also export 1920x1080 for standard landscape video posts and LinkedIn ads.",
        },
        {
          title: "9:16 for LinkedIn vertical",
          text: "LinkedIn now supports vertical video. Export 1080x1920 for mobile-optimized content.",
        },
        {
          title: "AI face detection",
          text: "Keeps people centered when cropping from one ratio to another. No manual adjustment.",
        },
        {
          title: "No signup, no watermark",
          text: "Open the page, upload, export. No account required, no branding on your video.",
        },
        {
          title: "Privacy-first processing",
          text: "Runs locally in your browser. Your business content never leaves your device.",
        },
      ]}
      internalLinks={[
        { href: "/1-1-square-video-converter", label: "Convert video to 1:1 square" },
        { href: "/twitter-video-cropper", label: "Crop video for X/Twitter" },
        { href: "/landscape-to-vertical", label: "Convert 16:9 to 9:16" },
        { href: "/", label: "All video cropping tools" },
      ]}
    />
  );
}
