import type { Metadata } from "next";
import { SubPageLanding } from "@/components/SubPageLanding";

export const metadata: Metadata = {
  metadataBase: new URL("https://freecropper.com"),
  title: "Video Cropping Tool for Agencies — Free, No Watermark | FreeCropper",
  description: "Video cropping tool for agencies. Crop videos for all social platforms with AI face detection. No signup, 2GB files, client-ready exports.",
  alternates: {
    canonical: "https://freecropper.com/for/agencies",
  },
  openGraph: {
    title: "Video Cropping Tool for Agencies — Free, No Watermark",
    description: "Video cropping tool for agencies. Crop videos for all social platforms with AI face detection.",
    type: "website",
    url: "https://freecropper.com/for/agencies",
    siteName: "FreeCropper",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
    }],
  },
};

export default function ForAgenciesPage() {
  return (
    <SubPageLanding
      h1="Video Cropping Tool for Agencies"
      h1Highlight="— Free, No Watermark"
      subtitle="the complete video cropping solution for agencies. AI face detection, no watermark, 2GB files."
      description="Video cropping tool designed for agencies managing multiple client social accounts. Crop videos for TikTok, Reels, Shorts, LinkedIn, and more with AI face detection. No watermark, no signup, client-ready exports that you can deliver directly."
      secondaryDescription="Built for agency scale: handle multiple clients, maintain white-label branding, meet platform-specific requirements. Upload up to 2GB files, export to all aspect ratios, and never add any branding — your clients' videos are ready to post."
      features={[
        {
          title: "White-label solution",
          text: "No branding on exports. Your agency's identity, not ours.",
        },
        {
          title: "Multi-client workflow",
          text: "Process videos for multiple clients efficiently. Share tool URL.",
        },
        {
          title: "AI face detection",
          text: "Automatically keeps subjects centered. Perfect for social media content.",
        },
        {
          title: "2GB file support",
          text: "Handle client videos up to 2GB. No file size restrictions.",
        },
        {
          title: "No signup required",
          text: "Share tool with clients. No account creation needed.",
        },
        {
          title: "100% browser-based",
          text: "Client content stays local. No uploads to external servers.",
        },
      ]}
      internalLinks={[
        { href: "/for/social-media-managers", label: "For Social Media Managers" },
        { href: "/for/content-creators", label: "For Content Creators" },
        { href: "/landscape-to-vertical", label: "Convert 16:9 to 9:16" },
        { href: "/", label: "All video cropping tools" },
      ]}
      faqItems={[
        {
          question: "Why use FreeCropper for agency work?",
          answer: "No branding on exports means clean, client-ready videos. Share one tool URL with your team — no accounts, no installations. Process multiple client videos efficiently with 2GB file support.",
        },
        {
          question: "Can I use FreeCropper for client videos?",
          answer: "Yes. Upload your client's video, select their target platforms, and export. No watermark, no branding — just clean, formatted video ready to post to their social accounts.",
        },
        {
          question: "Is client content secure?",
          answer: "Absolutely. Everything processes locally in your browser. Client videos never leave your device, which means their content stays private and secure.",
        },
        {
          question: "What platforms can I export to?",
          answer: "TikTok (9:16), Instagram Reels (9:16), Instagram Feed (4:5), YouTube Shorts (9:16), YouTube (16:9), LinkedIn (1:1 and 16:9), X/Twitter (16:9) — all major social platforms with platform-optimized exports.",
        },
      ]}
      bottomCTA={{
        text: "Ready to crop for your clients?",
        buttonText: "Start Cropping →",
      }}
    />
  );
}
