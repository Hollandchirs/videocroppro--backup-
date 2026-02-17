import type { Metadata } from "next";
import { SubPageLanding } from "@/components/SubPageLanding";

export const metadata: Metadata = {
  metadataBase: new URL("https://freecropper.com"),
  title: "Auto Crop Video Face Detection — AI Keeps Faces Centered | FreeCropper",
  description: "Auto crop video with face detection. AI automatically tracks and centers faces when changing aspect ratios. Free, no watermark, 2GB files.",
  alternates: {
    canonical: "https://freecropper.com/auto-crop-face-detection",
  },
  openGraph: {
    title: "Auto Crop Video Face Detection — AI Keeps Faces Centered",
    description: "Auto crop video with face detection. AI automatically tracks and centers faces when changing aspect ratios.",
    type: "website",
    url: "https://freecropper.com/auto-crop-face-detection",
    siteName: "FreeCropper",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
    }],
  },
};

export default function AutoCropFaceDetectionPage() {
  return (
    <SubPageLanding
      h1="Auto Crop Video Face Detection"
      h1Highlight="— AI Keeps Faces Centered"
      subtitle="the easiest way to crop videos with AI face tracking. Automatically detects and centers faces across all frames."
      description="Auto crop video with AI face detection that tracks faces throughout your entire video. When converting from landscape to vertical or changing aspect ratios, the AI automatically reframes the crop to keep faces centered — no manual adjustment needed."
      secondaryDescription="Perfect for talking heads, interviews, tutorials, vlogs, and any video with a person in frame. Uses MediaPipe for accurate face tracking. No watermark, no signup, files up to 2GB, 100% browser-based."
      features={[
        {
          title: "AI face tracking",
          text: "Detects and tracks faces across all video frames. Automatically adjusts crop to keep faces centered.",
        },
        {
          title: "Auto-reframe",
          text: "Automatically reframes when aspect ratio changes. Face stays in frame even when moving.",
        },
        {
          title: "Multi-face support",
          text: "Detects multiple faces in frame and optimizes for most prominent subject.",
        },
        {
          title: "No watermark",
          text: "Clean exports with no branding. Your video, not ours.",
        },
        {
          title: "No signup required",
          text: "Open page, upload video, export. No account needed.",
        },
        {
          title: "2GB file support",
          text: "Handle long videos with up to 2GB file size.",
        },
      ]}
      internalLinks={[
        { href: "/landscape-to-vertical", label: "Landscape to Vertical Converter" },
        { href: "/tiktok-video-cropper", label: "TikTok Video Cropper" },
        { href: "/video-cropper-no-watermark", label: "Video Cropper No Watermark" },
        { href: "/best/video-cropper-2026", label: "Best Free Video Cropper 2026" },
        { href: "/", label: "All video cropping tools" },
      ]}
      faqItems={[
        {
          question: "How does AI face detection work?",
          answer: "Our AI uses Google's MediaPipe technology to detect faces in each video frame. It tracks the most prominent face and automatically adjusts the crop area to keep it centered. This happens automatically — you don't need to manually position the crop.",
        },
        {
          question: "What if there are multiple people?",
          answer: "The AI detects all faces in the frame and optimizes for the most prominent one. For videos with multiple people, you can manually fine-tune the crop area if needed, or split the video into segments and process each separately.",
        },
        {
          question: "Does it work on profiles and side views?",
          answer: "Yes. MediaPipe is trained to detect faces from various angles including profiles and side views. The accuracy is very high for frontal and near-frontal angles, which covers most talking head videos.",
        },
        {
          question: "Can I export to different aspect ratios?",
          answer: "Yes. Export to 9:16 (vertical for TikTok/Reels/Shorts), 16:9 (landscape for YouTube), 4:5 (portrait for Instagram), or 1:1 (square for LinkedIn) — all with the same face tracking.",
        },
        {
          question: "Is my video uploaded anywhere?",
          answer: "No. Everything runs locally in your browser using WebAssembly. Your video never leaves your device, which means faster processing and complete privacy.",
        },
      ]}
      bottomCTA={{
        text: "Ready to auto-crop with face detection?",
        buttonText: "Try Face Detection →",
      }}
    />
  );
}
