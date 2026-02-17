import type { Metadata } from "next";
import { SubPageLanding } from "@/components/SubPageLanding";

export const metadata: Metadata = {
  metadataBase: new URL("https://freecropper.com"),
  title: "16:9 to 9:16 Converter — Free Landscape to Vertical | FreeCropper",
  description: "16:9 to 9:16 converter. Convert landscape to vertical video for TikTok, Reels, and Shorts. AI auto-crop keeps subjects centered. Free, no watermark.",
  alternates: {
    canonical: "https://freecropper.com/16-9-to-9-16-converter",
  },
  openGraph: {
    title: "16:9 to 9:16 Converter — Free Landscape to Vertical",
    description: "16:9 to 9:16 converter. Convert landscape to vertical for TikTok, Reels, Shorts.",
    type: "website",
    url: "https://freecropper.com/16-9-to-9-16-converter",
    siteName: "FreeCropper",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Converter169To916Page() {
  return (
    <SubPageLanding
      h1="16:9 to 9:16 Converter"
      h1Highlight="— Free Landscape to Vertical"
      subtitle="the fastest way to convert landscape to vertical video for TikTok, Reels, and Shorts. AI keeps subjects centered."
      description="16:9 to 9:16 converter that uses AI to auto-crop the most important part of your frame. Converting 1920×1080 landscape to 1080×1920 vertical means you keep only 56% of the original width — FreeCropper's AI decides which part to keep by detecting faces and subjects automatically."
      secondaryDescription="Works with any 16:9 source — cameras, screen recordings, Zoom exports, YouTube videos. Upload MP4, MOV, WebM, or AVI up to 2GB. No watermark, no signup, 100% browser-based."
      features={[
        { title: "16:9 → 9:16 in seconds", text: "Convert 1920×1080 to 1080×1920 with one click. Exact format for TikTok, Reels, Shorts." },
        { title: "AI keeps subjects centered", text: "Face and subject detection finds what matters in your frame. No blind center-crop." },
        { title: "No quality loss", text: "Output at full 1080×1920 resolution. Only the framing changes, not the quality." },
        { title: "No watermark", text: "Clean export every time. No branding added." },
        { title: "No signup", text: "Open, upload, convert. No account needed." },
        { title: "2GB file support", text: "Handles long recordings and high-res footage." },
      ]}
      internalLinks={[
        { href: "/landscape-to-vertical", label: "Landscape to Vertical Video" },
        { href: "/tiktok-video-cropper", label: "TikTok Video Cropper" },
        { href: "/reels-video-cropper", label: "Reels Video Cropper" },
        { href: "/shorts-video-cropper", label: "Shorts Video Cropper" },
        { href: "/", label: "All video cropping tools" },
      ]}
      faqItems={[
        {
          question: "What does 16:9 to 9:16 mean?",
          answer: "16:9 is standard landscape (widescreen) format used by cameras and most videos. 9:16 is vertical format required by TikTok, Instagram Reels, and YouTube Shorts. Converting between them means rotating your content orientation.",
        },
        {
          question: "Why not just rotate the video?",
          answer: "Rotating 16:9 gives you a very thin vertical strip. The correct conversion is to crop a 9:16 portion out of the 16:9 frame — which is exactly what FreeCropper does. The AI selects the best crop area to keep faces and subjects visible.",
        },
        {
          question: "What resolution will I get?",
          answer: "1080×1920 pixels — the exact resolution TikTok, Instagram Reels, and YouTube Shorts recommend for full-screen vertical playback.",
        },
        {
          question: "Can I manually adjust where the crop goes?",
          answer: "Yes. After the AI auto-positions the crop, you can drag and fine-tune it in the editor before exporting.",
        },
      ]}
      bottomCTA={{ text: "Ready to convert landscape to vertical?", buttonText: "Convert 16:9 to 9:16 →" }}
    />
  );
}
