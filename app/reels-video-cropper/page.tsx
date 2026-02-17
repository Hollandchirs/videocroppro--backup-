"use client";

import { SubPageLanding } from "@/components/SubPageLanding";

export default function CropVideoForInstagramReelsPage() {
  return (
    <SubPageLanding
      h1="Instagram Reels Video Cropper"
      h1Highlight="— Free Online"
      subtitle="the fastest way to resize any video to 9:16 for Instagram Reels. AI face detection keeps people centered."
      description="Instagram Reels uses 9:16 vertical video at 1080x1920 pixels for full-screen playback. Freecropper converts your landscape, square, or other format videos into Reels-ready 9:16 in seconds. AI face detection reframes the crop to keep people and subjects centered automatically."
      secondaryDescription="You can also export 4:5 (1080x1350) for Instagram Feed posts, which takes up more screen space than square. Supports MP4, MOV, WebM, AVI. Runs locally in your browser — no file uploads, no account needed."
      features={[
        {
          title: "9:16 for Instagram Reels",
          text: "Export at 1080x1920, the recommended resolution for full-screen Reels playback.",
        },
        {
          title: "4:5 for Instagram Feed",
          text: "Also export 1080x1350 for Feed posts that take up more screen space than square.",
        },
        {
          title: "AI keeps faces centered",
          text: "Face and subject detection automatically reframes the crop for vertical formats.",
        },
        {
          title: "No watermark or branding",
          text: "Your exported Reels video is clean — no logos, no watermarks, ready to post.",
        },
        {
          title: "No account required",
          text: "Open the page and start editing. No signup, no email, no friction.",
        },
        {
          title: "Private, browser-based",
          text: "Videos stay on your device. Processing happens locally via WebAssembly.",
        },
      ]}
      internalLinks={[
        { href: "/tiktok-video-cropper", label: "Crop video for TikTok" },
        { href: "/shorts-video-cropper", label: "Crop video for YouTube Shorts" },
        { href: "/landscape-to-vertical", label: "Convert 16:9 to 9:16" },
        { href: "/", label: "All video cropping tools" },
      ]}
    />
  );
}
