"use client";

import { SubPageLanding } from "@/components/SubPageLanding";

export default function CropVideoForTwitterPage() {
  return (
    <SubPageLanding
      h1="Crop Video for X (Twitter)"
      h1Highlight="— Free, No Signup"
      subtitle="Resize videos for X/Twitter posts. Export 16:9 landscape or 1:1 square. AI face detection, no watermark."
      description="X (formerly Twitter) supports 16:9 (1920x1080) and 1:1 (1080x1080) video formats in the feed. 16:9 landscape is the most common format. Freecropper converts your videos to either ratio with AI face detection that keeps subjects centered during the crop."
      secondaryDescription="Upload MP4, MOV, WebM, or AVI. Everything runs in your browser — no server upload, no account, no watermark. Export and post directly to X."
      features={[
        {
          title: "16:9 for X timeline",
          text: "Export 1920x1080 landscape video, the standard format for X/Twitter posts.",
        },
        {
          title: "1:1 square option",
          text: "Square videos also work well on X and take up more vertical space in the feed.",
        },
        {
          title: "AI face detection",
          text: "Subjects stay centered when converting between aspect ratios. No manual framing.",
        },
        {
          title: "No watermark",
          text: "Clean exports with no branding. Post directly to X without editing further.",
        },
        {
          title: "No signup needed",
          text: "Open the page and start cropping. No account, no email verification.",
        },
        {
          title: "Fast browser processing",
          text: "WebAssembly-powered processing runs locally. No waiting for server uploads.",
        },
      ]}
      internalLinks={[
        { href: "/resize-video-for-linkedin", label: "Resize video for LinkedIn" },
        { href: "/crop-video-for-tiktok", label: "Crop video for TikTok" },
        { href: "/convert-video-to-1-1", label: "Convert video to 1:1" },
        { href: "/", label: "All video cropping tools" },
      ]}
    />
  );
}
