"use client";

import { SubPageLanding } from "@/components/SubPageLanding";

export default function ConvertVideoTo11Page() {
  return (
    <SubPageLanding
      h1="1:1 Square Video Converter"
      h1Highlight="— Free Online"
      subtitle="the fastest way to resize videos to 1:1 square for LinkedIn, Instagram, Facebook, and cross-platform use."
      description="Square 1:1 video (1080x1080) works on almost every social platform — LinkedIn, Instagram, Facebook, X, Reddit. It takes up more feed space than landscape and works well on both mobile and desktop. Freecropper converts your video to square format with AI that keeps the important subjects centered."
      secondaryDescription="Upload MP4, MOV, WebM, or AVI. Export to 1:1 or any other ratio (9:16, 4:5, 16:9). Runs in your browser — no signup, no watermark, no server uploads."
      features={[
        {
          title: "1:1 square format",
          text: "Export at 1080x1080, the universal format that works across all social platforms.",
        },
        {
          title: "Cross-platform compatible",
          text: "Square video works on LinkedIn, Instagram, Facebook, X, Reddit, and more.",
        },
        {
          title: "AI subject centering",
          text: "When cropping from 16:9 or other ratios, AI keeps faces and subjects in frame.",
        },
        {
          title: "No watermark",
          text: "Clean exports with no branding. Post directly to any platform.",
        },
        {
          title: "No signup needed",
          text: "Open, upload, export. No account, no email, no payment.",
        },
        {
          title: "Browser-based",
          text: "Local processing via WebAssembly. Your video never leaves your device.",
        },
      ]}
      internalLinks={[
        { href: "/4-5-video-converter", label: "Convert video to 4:5" },
        { href: "/linkedin-video-resizer", label: "Resize video for LinkedIn" },
        { href: "/landscape-to-vertical", label: "Convert 16:9 to 9:16" },
        { href: "/", label: "All video cropping tools" },
      ]}
      faqItems={[
        {
          question: "When should I use 1:1 vs 4:5?",
          answer: "Use 1:1 when you need a safe, cross-platform square format. Use 4:5 when you want more vertical screen space in Instagram and Facebook feeds.",
        },
        {
          question: "What resolution is best for square video?",
          answer: "1080x1080 is the standard square resolution for social platforms. Freecropper exports at 1080x1080 when you choose 1:1.",
        },
      ]}
    />
  );
}
