import type { Metadata } from "next";
import { SubPageLanding } from "@/components/SubPageLanding";

export const metadata: Metadata = {
  metadataBase: new URL("https://freecropper.com"),
  title: "Clideo Alternative No Watermark — Free Video Cropper | FreeCropper",
  description: "Clideo alternative with no watermark. Free online video cropper with AI face detection. No signup, 2GB files, 100% browser-based.",
  alternates: {
    canonical: "https://freecropper.com/vs/clideo",
  },
  openGraph: {
    title: "Clideo Alternative No Watermark — Free Video Cropper",
    description: "Clideo alternative with no watermark. Free online video cropper with AI face detection.",
    type: "website",
    url: "https://freecropper.com/vs/clideo",
    siteName: "FreeCropper",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
    }],
  },
};

export default function ClideoAlternativePage() {
  return (
    <SubPageLanding
      h1="Clideo Alternative No Watermark"
      h1Highlight="— Free Online Video Cropper"
      subtitle="the easiest way to crop videos without Clideo's watermark. Same features, no branding, no account needed."
      description="Clideo adds a watermark to free exports and limits video length. FreeCropper is different — no watermark, ever. Same aspect ratio support, no signup, and everything runs in your browser with no file uploads."
      secondaryDescription="Clideo also requires you to upload your videos to their servers. FreeCropper handles everything locally — your video never leaves your device, which means faster processing and complete privacy. No app download, no account required."
      features={[
        {
          title: "No watermark — ever",
          text: "Clideo adds watermark to free exports. FreeCropper exports clean video every time.",
        },
        {
          title: "No account required",
          text: "Clideo asks for email. FreeCropper works instantly without sign-up.",
        },
        {
          title: "No video length limits",
          text: "Clideo limits how long your video can be. FreeCropper supports files up to 2GB.",
        },
        {
          title: "100% browser-based",
          text: "Clideo uploads your files. FreeCropper processes locally — videos never leave your device.",
        },
        {
          title: "AI face detection",
          text: "Advanced face tracking keeps subjects centered automatically when cropping.",
        },
        {
          title: "All aspect ratios",
          text: "Export 9:16, 16:9, 4:5, 1:1 — all formats Clideo supports.",
        },
      ]}
      internalLinks={[
        { href: "/vs/kapwing", label: "Kapwing Alternative" },
        { href: "/vs/veed", label: "Veed.io Alternative" },
        { href: "/video-cropper-no-watermark", label: "Video Cropper No Watermark" },
        { href: "/", label: "All video cropping tools" },
      ]}
      faqItems={[
        {
          question: "Is FreeCropper as good as Clideo for cropping?",
          answer: "For cropping specifically? Better. AI face detection keeps people centered, no watermark, no video length restrictions. Clideo is simple and easy to use, but FreeCropper offers the same simplicity without the watermark.",
        },
        {
          question: "Why use a Clideo alternative?",
          answer: "Clideo adds watermarks to free exports, requires your email address, and limits video length. If you just need to crop or resize videos, FreeCropper gives you the same result without watermarks, email requirements, or length limits.",
        },
        {
          question: "Can I use FreeCropper on mobile?",
          answer: "Yes. FreeCropper runs in any modern browser, including Safari on iPhone and Chrome on Android. No app download required — just open the website and start.",
        },
        {
          question: "Does FreeCropper support Clideo's formats?",
          answer: "Yes. We support all major aspect ratios: 9:16 (vertical for TikTok/Reels/Shorts), 16:9 (landscape for YouTube), 4:5 (portrait for Instagram), and 1:1 (square for LinkedIn).",
        },
        {
          question: "Is FreeCropper really free?",
          answer: "Yes. No premium tier, no watermark removal fee, no file size upsell. Everything works for free, with no hidden charges.",
        },
      ]}
      bottomCTA={{
        text: "Ready to crop without watermarks?",
        buttonText: "Try Clideo Alternative →",
      }}
    />
  );
}
