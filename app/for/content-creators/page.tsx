import type { Metadata } from "next";
import { SubPageLanding } from "@/components/SubPageLanding";

export const metadata: Metadata = {
  metadataBase: new URL("https://freecropper.com"),
  title: "Video Cropping Tool for Content Creators — Free, No Watermark | FreeCropper",
  description: "Video cropping tool for content creators. Crop videos for TikTok, Reels, Shorts with AI face detection. No watermark, no signup, handles 2GB files.",
  alternates: {
    canonical: "https://freecropper.com/for/content-creators",
  },
  openGraph: {
    title: "Video Cropping Tool for Content Creators — Free, No Watermark",
    description: "Video cropping tool for content creators. Crop videos for TikTok, Reels, Shorts with AI face detection.",
    type: "website",
    url: "https://freecropper.com/for/content-creators",
    siteName: "FreeCropper",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
    }],
  },
};

export default function ForContentCreatorsPage() {
  return (
    <SubPageLanding
      h1="Video Cropping Tool for Content Creators"
      h1Highlight="— Free, No Watermark"
      subtitle="the fastest way to repurpose content across all platforms. AI keeps you centered. No signup, no watermark."
      description="Content creators shoot once but need to post everywhere. YouTube is 16:9, TikTok is 9:16, Instagram needs both Reels and Feed formats. FreeCropper lets you upload once and export to every aspect ratio you need. AI face detection keeps you centered automatically — no manual adjustment needed."
      secondaryDescription="Built for creator workflows: YouTube (16:9) → TikTok (9:16), landscape vlogs → Instagram Reels, horizontal interviews → YouTube Shorts. No watermark on exports means your branding stays front and center, not ours."
      features={[
        {
          title: "Shoot once, post everywhere",
          text: "Upload your horizontal video once, export to 9:16, 16:9, 4:5, 1:1 — all social platforms covered.",
        },
        {
          title: "AI keeps you centered",
          text: "Face detection tracks you through the video. No cutting off heads or arms when converting formats.",
        },
        {
          title: "No watermark",
          text: "Your brand, not ours. Clean exports ready to post with your overlays intact.",
        },
        {
          title: "2GB file support",
          text: "Handle long-form content. No need to split clips before cropping.",
        },
        {
          title: "No signup required",
          text: "Fast workflow. Open page, upload video, select platforms, export. No friction.",
        },
        {
          title: "Browser-based",
          text: "Works on any device. Your footage stays local — nothing uploaded to servers.",
        },
      ]}
      internalLinks={[
        { href: "/tiktok-video-cropper", label: "Crop video for TikTok" },
        { href: "/reels-video-cropper", label: "Crop video for Instagram Reels" },
        { href: "/shorts-video-cropper", label: "Crop video for YouTube Shorts" },
        { href: "/for/podcasters", label: "For Podcasters" },
        { href: "/", label: "All video cropping tools" },
      ]}
      faqItems={[
        {
          question: "What aspect ratios do content creators need?",
          answer: "You need 9:16 for TikTok, Instagram Reels, and YouTube Shorts; 4:5 for Instagram Feed; 16:9 for YouTube and Twitter; and 1:1 for LinkedIn. FreeCropper supports all of these from a single upload.",
        },
        {
          question: "Can I add my own overlays after cropping?",
          answer: "Yes. FreeCropper exports clean MP4 files without any branding. You can import these into CapCut, Premiere, Final Cut, or any editor to add captions, effects, or your own branding.",
        },
        {
          question: "How fast is the creator workflow?",
          answer: "Very fast. Upload your video (up to 2GB), select all platforms you need, and export. The AI processes video at original resolution. Most creators finish a single export in under 2 minutes.",
        },
        {
          question: "Does the AI work for multiple people in frame?",
          answer: "Yes. The AI detects multiple faces and optimizes crop to keep them all visible. For content with multiple people, you can also manually fine-tune the crop area.",
        },
        {
          question: "Can I use FreeCropper for client work?",
          answer: "Absolutely. No watermark means clean exports for client projects. No account means you can share the tool with clients without them needing to sign up. Browser-based processing keeps client content private.",
        },
      ]}
      bottomCTA={{
        text: "Ready to repurpose your content faster?",
        buttonText: "Crop Your Content →",
      }}
    />
  );
}
