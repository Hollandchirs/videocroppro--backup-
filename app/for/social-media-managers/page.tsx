import type { Metadata } from "next";
import { SubPageLanding } from "@/components/SubPageLanding";

export const metadata: Metadata = {
  metadataBase: new URL("https://freecropper.com"),
  title: "Video Cropper for Social Media Managers — Free, No Watermark | FreeCropper",
  description: "Video cropper for social media managers. Crop videos for all platforms with AI face detection. No watermark, no signup, 2GB files.",
  alternates: {
    canonical: "https://freecropper.com/for/social-media-managers",
  },
  openGraph: {
    title: "Video Cropper for Social Media Managers — Free, No Watermark",
    description: "Video cropper for social media managers. Crop videos for all platforms with AI face detection.",
    type: "website",
    url: "https://freecropper.com/for/social-media-managers",
    siteName: "FreeCropper",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
    }],
  },
};

export default function ForSocialMediaManagersPage() {
  return (
    <SubPageLanding
      h1="Video Cropper for Social Media Managers"
      h1Highlight="— Free, No Watermark"
      subtitle="the fastest way to crop videos for all client accounts. AI face detection, no signup."
      description="Social media managers need to repurpose content across multiple client accounts and platforms. FreeCropper handles it all with one tool — crop to TikTok, Reels, Shorts, LinkedIn, and more with AI face detection that keeps subjects centered. No watermark, no signup, works entirely in your browser."
      secondaryDescription="Built for agency workflows: handle multiple clients, maintain brand consistency, meet specific platform requirements. Upload up to 2GB files, export to all aspect ratios, and never leave any branding on your clients' videos."
      features={[
        {
          title: "Multi-client workflow",
          text: "Process videos for multiple clients efficiently. One tool, all platforms.",
        },
        {
          title: "AI face detection",
          text: "Automatically keeps subjects centered. Perfect for social media content.",
        },
        {
          title: "No watermark",
          text: "Clean exports for your clients. Your branding, not ours.",
        },
        {
          title: "No signup required",
          text: "Share tool link with clients. No account needed.",
        },
        {
          title: "2GB file support",
          text: "Handle client videos up to 2GB. No file size restrictions.",
        },
        {
          title: "100% browser-based",
          text: "Client content stays on your device. No uploads to external servers.",
        },
      ]}
      internalLinks={[
        { href: "/for/content-creators", label: "For Content Creators" },
        { href: "/for/podcasters", label: "For Podcasters" },
        { href: "/for/agencies", label: "For Agencies" },
        { href: "/landscape-to-vertical", label: "Convert 16:9 to 9:16" },
        { href: "/", label: "All video cropping tools" },
      ]}
      faqItems={[
        {
          question: "Why use FreeCropper for social media management?",
          answer: "One tool handles all platforms and aspect ratios. No need for multiple subscriptions or logins. Share the link with your team, and they can crop videos without creating accounts or installing apps.",
        },
        {
          question: "Can I share FreeCropper with my team?",
          answer: "Yes. Share the freecropper.com link with your team. They can use it immediately without any account setup. Works for agencies managing multiple client social accounts.",
        },
        {
          question: "What platforms are supported?",
          answer: "TikTok (9:16), Instagram Reels (9:16), Instagram Feed (4:5), YouTube Shorts (9:16), YouTube (16:9), LinkedIn (1:1 and 16:9), X/Twitter (16:9) — all major social platforms covered.",
        },
        {
          question: "Is client content secure?",
          answer: "Absolutely. Everything processes locally in your browser using WebAssembly. Your clients' videos never leave your device, which means their content stays private and secure.",
        },
      ]}
      bottomCTA={{
        text: "Ready to crop for your clients?",
        buttonText: "Start Cropping →",
      }}
    />
  );
}
