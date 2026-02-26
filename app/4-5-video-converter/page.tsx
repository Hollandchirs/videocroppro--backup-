"use client";

import { SubPageLanding } from "@/components/SubPageLanding";

export default function ConvertVideoTo45Page() {
  return (
    <SubPageLanding
      h1="4:5 Video Converter"
      h1Highlight="— Free Online"
      subtitle="the easiest way to resize videos to 4:5 portrait for Instagram Feed and Facebook. AI keeps subjects centered."
      description="4:5 (1080x1350) is the optimal aspect ratio for Instagram Feed posts and Facebook video — it takes up more screen space than square 1:1 and gets higher engagement. Freecropper converts your landscape or other format videos to 4:5 with AI face detection that keeps people centered."
      secondaryDescription="Upload once, export to 4:5, 9:16, 1:1, or 16:9. Supports MP4, MOV, WebM, AVI. Runs entirely in your browser with no file uploads to servers."
      features={[
        {
          title: "4:5 portrait format",
          text: "Export at 1080x1350, the ratio that takes up maximum screen space in Instagram and Facebook feeds.",
        },
        {
          title: "Multiple ratios at once",
          text: "Also export 9:16 for Reels, 1:1 for square, or 16:9 for YouTube — all from one upload.",
        },
        {
          title: "AI face detection",
          text: "Subjects stay centered when converting from landscape or other formats to 4:5.",
        },
        {
          title: "No watermark",
          text: "Export clean video ready to post. No branding, no logos.",
        },
        {
          title: "No signup required",
          text: "Open the page, drop your video, export. No account needed.",
        },
        {
          title: "Local processing",
          text: "WebAssembly-powered processing in your browser. Videos never leave your device.",
        },
      ]}
      internalLinks={[
        { href: "/reels-video-cropper", label: "Crop video for Instagram Reels" },
        { href: "/1-1-square-video-converter", label: "Convert video to 1:1 square" },
        { href: "/landscape-to-vertical", label: "Convert 16:9 to 9:16" },
        { href: "/", label: "All video cropping tools" },
      ]}
      faqItems={[
        {
          question: "Why use 4:5 instead of 1:1?",
          answer: "4:5 gives you more vertical screen space than 1:1 in Instagram and Facebook feeds, so your post looks larger on mobile.",
        },
        {
          question: "What resolution is 4:5?",
          answer: "The standard 4:5 size is 1080x1350. Freecropper exports at 1080x1350 when you select the 4:5 ratio.",
        },
      ]}
    />
  );
}
