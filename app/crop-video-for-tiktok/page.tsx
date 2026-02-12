"use client";

import { SubPageLanding } from "@/components/SubPageLanding";

export default function CropVideoForTikTokPage() {
  return (
    <SubPageLanding
      h1="Crop Video for TikTok"
      h1Highlight="— Free, No Signup"
      subtitle="Convert any video to TikTok's 9:16 vertical format. AI face detection keeps people centered. No watermark, no account needed."
      description="TikTok requires 9:16 vertical video at 1080x1920 pixels for the best full-screen experience. Freecropper converts your landscape or square videos to TikTok's format in seconds. The AI automatically detects faces and subjects, then reframes the crop so people stay centered instead of getting cut off at the edges."
      secondaryDescription="Works with MP4, MOV, WebM, and AVI files up to 2GB. Everything runs in your browser — your video never leaves your device. No signup, no watermark, no hidden fees."
      features={[
        {
          title: "9:16 TikTok format",
          text: "Export at 1080x1920 pixels, the exact resolution TikTok recommends for vertical video.",
        },
        {
          title: "AI face detection",
          text: "Automatically keeps people centered when converting from landscape to vertical. No manual adjustment needed.",
        },
        {
          title: "No watermark",
          text: "Your exported TikTok video has zero branding or watermarks. Ready to post directly.",
        },
        {
          title: "No signup required",
          text: "Open the page, upload your video, export. No account, no email, no friction.",
        },
        {
          title: "Browser-based processing",
          text: "Your video stays on your device. Nothing gets uploaded to external servers.",
        },
        {
          title: "Multiple formats supported",
          text: "Upload MP4, MOV, WebM, or AVI. Export as MP4 ready for TikTok upload.",
        },
      ]}
      internalLinks={[
        { href: "/convert-16-9-to-9-16", label: "Convert 16:9 to 9:16" },
        { href: "/free-video-cropper-no-signup", label: "Free Video Cropper — No Signup" },
        { href: "/", label: "All video cropping tools" },
      ]}
    />
  );
}
