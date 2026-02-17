"use client";

import { SubPageLanding } from "@/components/SubPageLanding";

export default function FreeVideoCropperNoSignupPage() {
  return (
    <SubPageLanding
      h1="Free Video Cropper No Signup"
      h1Highlight="— No Account Required"
      subtitle="the fastest way to crop and resize videos for any social platform. No account, no watermark, no upload to servers."
      description="Most video croppers force you to create an account before you can even test the tool. Freecropper skips all of that. Open the page, drop your video, pick your aspect ratio, and export. No email required, no watermark added, no files uploaded to external servers. It works entirely in your browser."
      secondaryDescription="AI face detection automatically keeps people centered when you crop to different aspect ratios. Export to 9:16 (TikTok, Reels, Shorts), 4:5 (Instagram Feed), 1:1 (LinkedIn), or 16:9 (YouTube, Twitter). Supports MP4, MOV, WebM, AVI up to 2GB."
      features={[
        {
          title: "Zero signup friction",
          text: "No account, no email, no verification. Open the tool and start cropping immediately.",
        },
        {
          title: "No watermark, ever",
          text: "Your exported videos have zero branding. No \"made with\" watermarks, no forced logos.",
        },
        {
          title: "All major aspect ratios",
          text: "Export to 9:16, 16:9, 4:5, or 1:1. Covers TikTok, Instagram, YouTube, LinkedIn, Twitter, Reddit.",
        },
        {
          title: "AI-powered cropping",
          text: "Face and subject detection keeps people centered when converting between aspect ratios.",
        },
        {
          title: "100% browser-based",
          text: "Video processing runs locally using WebAssembly. Your files never leave your device.",
        },
        {
          title: "No hidden paywalls",
          text: "No \"free trial\" that expires. No features locked behind payment. Everything works, for free.",
        },
      ]}
      internalLinks={[
        { href: "/tiktok-video-cropper", label: "Crop video for TikTok" },
        { href: "/landscape-to-vertical", label: "Convert 16:9 to 9:16" },
        { href: "/", label: "All video cropping tools" },
      ]}
    />
  );
}
