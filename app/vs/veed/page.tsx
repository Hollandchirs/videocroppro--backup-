import type { Metadata } from "next";
import { SubPageLanding } from "@/components/SubPageLanding";

export const metadata: Metadata = {
  metadataBase: new URL("https://freecropper.com"),
  title: "Veed Alternative No Watermark — Free Video Cropper | FreeCropper",
  description: "Veed alternative with no watermark. Free online video cropper with AI face detection. No signup, 2GB files, 100% browser-based.",
  alternates: {
    canonical: "https://freecropper.com/vs/veed",
  },
  openGraph: {
    title: "Veed Alternative No Watermark — Free Video Cropper",
    description: "Veed alternative with no watermark. Free online video cropper with AI face detection.",
    type: "website",
    url: "https://freecropper.com/vs/veed",
    siteName: "FreeCropper",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
    }],
  },
};

export default function VeedAlternativePage() {
  return (
    <SubPageLanding
      h1="Veed Alternative No Watermark"
      h1Highlight="— Free Online Video Cropper"
      subtitle="the easiest way to crop videos without Veed's watermark. Same AI cropping, no branding, no account needed."
      description="Veed's free version adds a watermark and requires you to upgrade to remove it. FreeCropper is different — no watermark, ever. Same AI-powered cropping for aspect ratio changes, no signup, and everything runs in your browser with no file uploads."
      secondaryDescription="Veed also requires account creation for even basic features. FreeCropper handles files up to 2GB without any account. Just open the page, upload your video, and export — no friction, no upsells."
      features={[
        {
          title: "No watermark — ever",
          text: "Veed adds watermark to free exports. FreeCropper exports clean video every time.",
        },
        {
          title: "No account required",
          text: "Veed forces sign-up for all features. FreeCropper works instantly without account.",
        },
        {
          title: "2GB file support",
          text: "Veed limits on free tier. FreeCropper supports files up to 2GB.",
        },
        {
          title: "100% browser-based",
          text: "Veed uploads your files to their servers. FreeCropper processes locally — videos never leave your device.",
        },
        {
          title: "AI face detection",
          text: "Same intelligent auto-cropping as Veed's AI features. Keeps subjects centered.",
        },
        {
          title: "No subscription needed",
          text: "Veed requires paid subscription for no-watermark exports. FreeCropper is completely free.",
        },
      ]}
      internalLinks={[
        { href: "/vs/kapwing", label: "Kapwing Alternative" },
        { href: "/vs/clideo", label: "Clideo Alternative" },
        { href: "/tiktok-video-cropper", label: "TikTok Video Cropper" },
        { href: "/video-cropper-no-signup", label: "Free Video Cropper — No Signup" },
        { href: "/", label: "All video cropping tools" },
      ]}
      faqItems={[
        {
          question: "Is FreeCropper as good as Veed for cropping?",
          answer: "For cropping specifically? Yes. Same AI face detection, no watermark, no subscription required. Veed is great for more advanced video editing with subtitles and effects, but if you just need to change aspect ratio, FreeCropper is faster and doesn't require a subscription.",
        },
        {
          question: "Why use a Veed alternative?",
          answer: "Veed adds watermarks to free exports, requires account creation, and requires a paid subscription to remove watermarks. If you just need to crop or resize videos, FreeCropper gives you the same result without watermarks, accounts, or subscription fees.",
        },
        {
          question: "Can I use FreeCropper on mobile?",
          answer: "Yes. FreeCropper runs in any modern browser, including Safari on iPhone and Chrome on Android. No app download required — just open the website.",
        },
        {
          question: "Does FreeCropper have Veed's aspect ratios?",
          answer: "Yes. We support 9:16 (vertical), 16:9 (landscape), 4:5 (portrait), and 1:1 (square) — all the major formats Veed offers for social media videos.",
        },
        {
          question: "Is FreeCropper really free?",
          answer: "Yes. No premium tier, no watermark removal fee, no subscription required. Everything works for free, with no hidden charges or upsells.",
        },
      ]}
      bottomCTA={{
        text: "Ready to crop without watermarks?",
        buttonText: "Try Veed Alternative →",
      }}
    />
  );
}
