import type { Metadata } from "next";
import { SubPageLanding } from "@/components/SubPageLanding";

export const metadata: Metadata = {
  metadataBase: new URL("https://freecropper.com"),
  title: "Landscape to Vertical Video — Free 16:9 to 9:16 Converter | FreeCropper",
  description: "Convert landscape to vertical video free. Turn 16:9 to 9:16 for TikTok, Reels, and Shorts with AI face detection. No watermark, no signup, 2GB files.",
  alternates: {
    canonical: "https://freecropper.com/landscape-to-vertical",
  },
  openGraph: {
    title: "Landscape to Vertical Video — Free 16:9 to 9:16 Converter",
    description: "Convert landscape to vertical video free. AI keeps faces centered. No watermark, no signup.",
    type: "website",
    url: "https://freecropper.com/landscape-to-vertical",
    siteName: "FreeCropper",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
    }],
  },
};

export default function LandscapeToVerticalPage() {
  return (
    <SubPageLanding
      h1="Landscape to Vertical Video"
      h1Highlight="— Free 16:9 to 9:16 Converter"
      subtitle="the easiest way to convert landscape videos to vertical format for TikTok, Instagram Reels, and YouTube Shorts. AI keeps subjects centered."
      description="Landscape to vertical video conversion is instant with FreeCropper — upload your 16:9 file and export 9:16 in seconds. AI face detection automatically reframes the crop to keep people centered, so you never lose important content when switching aspect ratios."
      secondaryDescription="Upload once and export to 9:16, 4:5, 1:1, or keep 16:9. Supports MP4, MOV, WebM, AVI up to 2GB. Runs entirely in your browser — no uploads to servers, no watermark, no signup."
      features={[
        {
          title: "16:9 to 9:16 in seconds",
          text: "Convert 1920×1080 landscape to 1080×1920 vertical with intelligent AI reframing.",
        },
        {
          title: "AI face & subject tracking",
          text: "Face detection keeps people centered during the aspect ratio conversion — no manual adjustment.",
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
        { href: "/16-9-to-9-16-converter", label: "16:9 to 9:16 Converter" },
        { href: "/tiktok-video-cropper", label: "Crop video for TikTok" },
        { href: "/auto-crop-face-detection", label: "Auto Crop Face Detection" },
        { href: "/video-cropper-no-signup", label: "Free Video Cropper — No Signup" },
        { href: "/", label: "All video cropping tools" },
      ]}
      faqItems={[
        {
          question: "How do I convert landscape to vertical video?",
          answer: "Upload your landscape (16:9) video to FreeCropper, select TikTok, Reels, or Shorts as the target platform, then export. AI face detection automatically keeps subjects centered in the new vertical frame.",
        },
        {
          question: "Will the video look cropped or stretched?",
          answer: "Cropped, not stretched. FreeCropper crops the sides of the landscape video to create a vertical frame, with AI ensuring the important content (faces, subjects) stays visible. No stretching.",
        },
        {
          question: "What resolution does the output use?",
          answer: "Exports at 1080×1920 for 9:16 vertical — the standard resolution for TikTok, Instagram Reels, and YouTube Shorts.",
        },
        {
          question: "Is the landscape to vertical conversion free?",
          answer: "Yes. Completely free with no watermark, no signup, and no file size limits up to 2GB. No subscription required.",
        },
      ]}
      bottomCTA={{
        text: "Convert your landscape video to vertical now.",
        buttonText: "Convert to Vertical Free →",
      }}
    />
  );
}
