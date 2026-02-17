import type { Metadata } from "next";
import { SubPageLanding } from "@/components/SubPageLanding";

export const metadata: Metadata = {
  metadataBase: new URL("https://freecropper.com"),
  title: "Video Cropper for Podcasters — Repurpose Episodes for TikTok | FreeCropper",
  description: "Video cropper for podcasters. Convert horizontal podcast recordings to vertical clips for TikTok, Reels, Shorts. AI keeps speakers centered. Free, no watermark.",
  alternates: {
    canonical: "https://freecropper.com/for/podcasters",
  },
  openGraph: {
    title: "Video Cropper for Podcasters — Repurpose Episodes for Social",
    description: "Video cropper for podcasters. Convert horizontal podcast recordings to vertical clips for TikTok, Reels, Shorts.",
    type: "website",
    url: "https://freecropper.com/for/podcasters",
    siteName: "FreeCropper",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
    }],
  },
};

export default function ForPodcastersPage() {
  return (
    <SubPageLanding
      h1="Video Cropper for Podcasters"
      h1Highlight="— Repurpose Episodes for Social"
      subtitle="the easiest way to convert horizontal podcast recordings to vertical clips for TikTok, Reels, and Shorts. AI keeps speakers centered."
      description="You record podcasts in landscape (16:9). TikTok, Instagram Reels, and YouTube Shorts need vertical (9:16). When you crop manually, the host gets cut off when moving. FreeCropper's AI tracks faces throughout the entire video and automatically reframes the crop to keep speakers centered."
      secondaryDescription="Perfect for solo shows, interviews, multi-guest episodes, and audiograms. Upload your horizontal recording once, export vertical versions ready for social media. No watermark, no signup, and everything runs in your browser."
      features={[
        {
          title: "AI face tracking",
          text: "Tracks speakers across all frames. They stay centered even when moving around.",
        },
        {
          title: "2GB file support",
          text: "Handle long podcast recordings. No need to split clips before uploading.",
        },
        {
          title: "No watermark",
          text: "Your clips are clean. No branding on exports, ready to post directly.",
        },
        {
          title: "No signup required",
          text: "Open the page, upload your video, export. No account needed.",
        },
        {
          title: "All social formats",
          text: "Export 9:16 for TikTok/Reels/Shorts, 4:5 for Feed, 1:1 for LinkedIn.",
        },
        {
          title: "Browser-based",
          text: "Your podcast footage stays on your device. Processing happens locally.",
        },
      ]}
      internalLinks={[
        { href: "/auto-crop-face-detection", label: "Auto Crop Speaker Video" },
        { href: "/landscape-to-vertical", label: "Convert 16:9 to 9:16" },
        { href: "/tiktok-video-cropper", label: "Crop video for TikTok" },
        { href: "/for/content-creators", label: "For Content Creators" },
        { href: "/", label: "All video cropping tools" },
      ]}
      faqItems={[
        {
          question: "Can I handle multi-guest podcasts?",
          answer: "Yes. AI optimizes for the most prominent face. For multi-guest episodes, you can manually adjust the crop area after the AI auto-detects, or split into individual clips and process each segment separately.",
        },
        {
          question: "What formats work for podcast clips?",
          answer: "9:16 vertical is best for TikTok, Instagram Reels, and YouTube Shorts — these platforms get the most engagement. 4:5 also works well for Instagram Feed. 1:1 square is good for LinkedIn and cross-platform posting.",
        },
        {
          question: "How long can my podcast video be?",
          answer: "FreeCropper supports files up to 2GB, which is typically 60-90 minutes of HD footage. For social media, you'll likely want to export 15-60 second clips, but you can upload the full recording and select segments.",
        },
        {
          question: "Will the AI detect the speaker automatically?",
          answer: "Yes. Our AI face detection identifies and tracks the most prominent face in the frame. For podcasts where speakers are stationary, this works very reliably. The crop auto-adjusts to keep them centered throughout the clip.",
        },
        {
          question: "Can I add captions to my podcast clips?",
          answer: "FreeCropper focuses on cropping and aspect ratio conversion. For captions, you'd use a dedicated captioning tool or the platform's built-in captioning features. The exported video from FreeCropper can be easily imported into those tools.",
        },
      ]}
      bottomCTA={{
        text: "Ready to repurpose your podcast episodes?",
        buttonText: "Crop Podcast Clips →",
      }}
    />
  );
}
