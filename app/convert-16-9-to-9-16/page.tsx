"use client";

import { SubPageLanding } from "@/components/SubPageLanding";

export default function Convert169To916Page() {
  return (
    <SubPageLanding
      h1="Convert 16:9 to 9:16"
      h1Highlight="— Free Online"
      subtitle="Turn landscape videos into vertical format for TikTok, Instagram Reels, and YouTube Shorts. AI keeps subjects visible."
      description="Most cameras and screen recordings produce 16:9 landscape video. Social platforms like TikTok, Instagram Reels, and YouTube Shorts need 9:16 vertical. Freecropper handles the conversion automatically — AI face detection reframes the crop to keep people and subjects centered instead of blindly cutting from the sides."
      secondaryDescription="Upload once and export to 9:16, 4:5, 1:1, or keep 16:9. Supports MP4, MOV, WebM, AVI. Runs entirely in your browser with no file uploads to servers."
      features={[
        {
          title: "Landscape to portrait",
          text: "Convert 1920x1080 (16:9) to 1080x1920 (9:16) with intelligent reframing.",
        },
        {
          title: "AI subject tracking",
          text: "Face and subject detection keeps people centered during the aspect ratio conversion.",
        },
        {
          title: "Multiple output ratios",
          text: "Also export to 4:5 (Instagram Feed), 1:1 (LinkedIn), or keep the original 16:9.",
        },
        {
          title: "No quality loss",
          text: "Re-encodes at 1080p output resolution. The crop changes framing, not compression.",
        },
        {
          title: "No signup, no watermark",
          text: "Open the page, upload, export. No account needed. No branding on your video.",
        },
        {
          title: "Privacy-first processing",
          text: "Video processing runs locally in your browser using WebAssembly. Nothing leaves your device.",
        },
      ]}
      internalLinks={[
        { href: "/crop-video-for-tiktok", label: "Crop video for TikTok" },
        { href: "/free-video-cropper-no-signup", label: "Free Video Cropper — No Signup" },
        { href: "/", label: "All video cropping tools" },
      ]}
    />
  );
}
