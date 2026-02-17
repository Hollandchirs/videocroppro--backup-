import type { Metadata } from "next";
import { SubPageLanding } from "@/components/SubPageLanding";

export const metadata: Metadata = {
  metadataBase: new URL("https://freecropper.com"),
  title: "InShot Alternative No Watermark — Free Video Cropper | FreeCropper",
  description: "InShot alternative with no watermark. Free video cropper with AI face detection. No signup, 2GB files, 100% browser-based.",
  alternates: {
    canonical: "https://freecropper.com/vs/inshot",
  },
  openGraph: {
    title: "InShot Alternative No Watermark — Free Video Cropper",
    description: "InShot alternative with no watermark. Free video cropper with AI face detection.",
    type: "website",
    url: "https://freecropper.com/vs/inshot",
    siteName: "FreeCropper",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
    }],
  },
};

export default function InShotAlternativePage() {
  return (
    <SubPageLanding
      h1="InShot Alternative No Watermark"
      h1Highlight="— Free Video Cropper"
      subtitle="the easiest way to crop videos without InShot's watermark. Same features, no branding, no account needed."
      description="InShot's free version adds a watermark to every video export. To remove it, you have to pay for the premium version. FreeCropper is different — no watermark, ever. Same AI-powered cropping, same aspect ratios, no signup, and processing happens entirely in your browser."
      secondaryDescription="InShot also forces you to download an app. FreeCropper runs in your browser — no installation, no app store download, no permissions to grant. Just open the page and start cropping videos instantly."
      features={[
        {
          title: "No watermark — ever",
          text: "InShot adds watermark to free exports. FreeCropper exports clean video every time.",
        },
        {
          title: "No app download",
          text: "InShot requires app installation. FreeCropper runs in your browser — no download.",
        },
        {
          title: "No account required",
          text: "InShot asks for sign-up. FreeCropper works instantly without account.",
        },
        {
          title: "2GB file support",
          text: "Process videos up to 2GB. No file size restrictions like mobile apps.",
        },
        {
          title: "AI face detection",
          text: "Same intelligent auto-cropping as InShot's AI features. Keeps subjects centered.",
        },
        {
          title: "All aspect ratios",
          text: "Export 9:16, 16:9, 4:5, 1:1 — all formats for social media.",
        },
      ]}
      internalLinks={[
        { href: "/vs/capcut", label: "CapCut Alternative" },
        { href: "/tiktok-video-cropper", label: "TikTok Video Cropper" },
        { href: "/video-cropper-no-signup", label: "Free Video Cropper — No Signup" },
        { href: "/", label: "All video cropping tools" },
      ]}
      faqItems={[
        {
          question: "Is FreeCropper as good as InShot for cropping?",
          answer: "For cropping specifically? Yes. Same AI face detection, no watermark, no app download. InShot is a full mobile video editor, but if you just need to change aspect ratio or resize, FreeCropper is faster and doesn't add branding.",
        },
        {
          question: "Why use an InShot alternative?",
          answer: "InShot adds watermarks to free exports, requires app download, and pushes for premium upgrades. If you just need to crop or resize videos, FreeCropper gives you the same result without watermarks, downloads, or account requirements.",
        },
        {
          question: "Can I use FreeCropper on my phone?",
          answer: "Yes. FreeCropper runs in any modern browser, including Safari on iPhone and Chrome on Android. No app download required — just open the website.",
        },
        {
          question: "Does FreeCropper have the same aspect ratios as InShot?",
          answer: "Yes. We support 9:16 (vertical), 16:9 (landscape), 4:5 (portrait), and 1:1 (square) — all the formats InShot offers for social media videos.",
        },
        {
          question: "Is my video safe with FreeCropper?",
          answer: "Absolutely. Unlike InShot which processes on their servers, FreeCropper processes everything locally in your browser. Your video never leaves your device.",
        },
      ]}
      bottomCTA={{
        text: "Ready to crop without watermarks?",
        buttonText: "Try the InShot Alternative →",
      }}
    />
  );
}
