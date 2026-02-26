import type { Metadata } from "next";
import { SubPageLanding } from "@/components/SubPageLanding";

export const metadata: Metadata = {
  metadataBase: new URL("https://freecropper.com"),
  title: "Kapwing Alternative No Watermark — Free Video Cropper | FreeCropper",
  description: "Kapwing alternative with no watermark. Free online video cropper with AI face detection. No signup, 2GB files, 100% browser-based.",
  alternates: {
    canonical: "https://freecropper.com/vs/kapwing",
  },
  openGraph: {
    title: "Kapwing Alternative No Watermark — Free Video Cropper",
    description: "Kapwing alternative with no watermark. Free online video cropper with AI face detection.",
    type: "website",
    url: "https://freecropper.com/vs/kapwing",
    siteName: "FreeCropper",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
    }],
  },
};

export default function KapwingAlternativePage() {
  return (
    <SubPageLanding
      h1="Kapwing Alternative No Watermark"
      h1Highlight="— Free Online Video Cropper"
      subtitle="the easiest way to crop videos without Kapwing's watermark. Same features, no branding, no account needed."
      description="Kapwing adds a watermark to free exports and requires you to upgrade to remove it. FreeCropper is different — no watermark, ever. Same AI-powered cropping, same aspect ratios, no signup, and everything runs in your browser with no file uploads."
      secondaryDescription="Kapwing also limits your file size on the free tier and pushes for a subscription. FreeCropper handles files up to 2GB without any upsells. Just open the page and start cropping videos instantly."
      features={[
        {
          title: "No watermark — ever",
          text: "Kapwing adds watermark to free exports. FreeCropper exports clean video every time.",
        },
        {
          title: "No account required",
          text: "Kapwing asks for sign-up. FreeCropper works instantly without account.",
        },
        {
          title: "2GB file support",
          text: "Kapwing has strict limits on free tier. FreeCropper supports files up to 2GB.",
        },
        {
          title: "100% browser-based",
          text: "Kapwing uploads your files to their servers. FreeCropper processes locally — videos never leave your device.",
        },
        {
          title: "AI face detection",
          text: "Same intelligent auto-cropping as Kapwing's AI features. Keeps subjects centered.",
        },
        {
          title: "All aspect ratios",
          text: "Export 9:16, 16:9, 4:5, 1:1 — all formats for social media.",
        },
      ]}
      internalLinks={[
        { href: "/vs/veed", label: "Veed.io Alternative" },
        { href: "/vs/clideo", label: "Clideo Alternative" },
        { href: "/tiktok-video-cropper", label: "TikTok Video Cropper" },
        { href: "/video-cropper-no-signup", label: "Free Video Cropper — No Signup" },
        { href: "/", label: "All video cropping tools" },
      ]}
      faqItems={[
        {
          question: "Does Kapwing free add a watermark?",
          answer: "Yes. Kapwing’s free exports include a watermark. FreeCropper exports without any watermark, so your videos stay clean.",
        },
        {
          question: "Is FreeCropper as good as Kapwing for cropping?",
          answer: "For cropping specifically? Yes. Same AI face detection, no watermark, no file size restrictions. Kapwing is great for more advanced editing, but if you just need to change aspect ratio or resize, FreeCropper is faster and doesn't add branding.",
        },
        {
          question: "Why use a Kapwing alternative?",
          answer: "Kapwing adds watermarks to free exports, requires account creation, and has restrictive file size limits on free tier. If you just need to crop or resize videos, FreeCropper gives you the same result without watermarks, accounts, or file size restrictions.",
        },
        {
          question: "Can I use FreeCropper on my phone?",
          answer: "Yes. FreeCropper runs in any modern browser, including Safari on iPhone and Chrome on Android. No app download required — just open the website.",
        },
        {
          question: "Does FreeCropper have Kapwing's aspect ratios?",
          answer: "Yes. We support 9:16 (vertical), 16:9 (landscape), 4:5 (portrait), and 1:1 (square) — all the formats Kapwing and other tools offer for social media videos.",
        },
        {
          question: "Is my video safe with FreeCropper?",
          answer: "Absolutely. Unlike Kapwing which processes on their servers, FreeCropper processes everything locally in your browser. Your video never leaves your device.",
        },
      ]}
      bottomCTA={{
        text: "Ready to crop without watermarks?",
        buttonText: "Try Kapwing Alternative →",
      }}
    />
  );
}
