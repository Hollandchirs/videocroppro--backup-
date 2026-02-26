"use client";

import { SubPageLanding } from "@/components/SubPageLanding";

export default function CropVideoForYoutubeShortsPage() {
  return (
    <SubPageLanding
      h1="YouTube Shorts Video Cropper"
      h1Highlight="— Free, No Watermark"
      subtitle="the fastest way to convert any video to 9:16 vertical for YouTube Shorts. AI keeps subjects centered."
      description="YouTube Shorts requires 9:16 vertical video at up to 1080x1920 resolution. If you have landscape footage from a camera or screen recording, Freecropper converts it to Shorts-ready format in seconds. AI face detection reframes the crop automatically so people stay in the center of the frame."
      secondaryDescription="Upload MP4, MOV, WebM, or AVI up to 2GB. Everything runs in your browser — no server uploads, no account, no watermark on your exported video."
      features={[
        {
          title: "9:16 Shorts format",
          text: "Export at 1080x1920, the vertical format YouTube Shorts requires for full-screen playback.",
        },
        {
          title: "Also keep 16:9",
          text: "Export both the Shorts version and the original 16:9 for regular YouTube uploads.",
        },
        {
          title: "AI subject centering",
          text: "Automatically reframes the crop to keep faces and subjects visible in vertical format.",
        },
        {
          title: "No watermark",
          text: "Clean exports with no branding. Ready to upload to YouTube directly.",
        },
        {
          title: "No signup needed",
          text: "Open the page, upload your video, export. No Google account linking required.",
        },
        {
          title: "Browser-based processing",
          text: "Your video stays on your device. No files uploaded to external servers.",
        },
      ]}
      internalLinks={[
        { href: "/tiktok-video-cropper", label: "Crop video for TikTok" },
        { href: "/reels-video-cropper", label: "Crop video for Instagram Reels" },
        { href: "/landscape-to-vertical", label: "Convert 16:9 to 9:16" },
        { href: "/", label: "All video cropping tools" },
      ]}
      faqItems={[
        {
          question: "What size should YouTube Shorts be?",
          answer: "Shorts are vertical 9:16. Freecropper exports 1080x1920 when you choose the Shorts format.",
        },
        {
          question: "Can I keep a 16:9 version too?",
          answer: "Yes. Upload once, export a 9:16 Shorts version and keep your original 16:9 for regular YouTube uploads.",
        },
      ]}
    />
  );
}
