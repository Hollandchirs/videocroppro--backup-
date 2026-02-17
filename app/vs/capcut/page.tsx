import type { Metadata } from "next";
import { SubPageLanding } from "@/components/SubPageLanding";

export const metadata: Metadata = {
  metadataBase: new URL("https://freecropper.com"),
  title: "CapCut Alternative No Watermark — Free Video Cropper | FreeCropper",
  description: "CapCut alternative with no watermark. Free video cropper with AI face detection. No signup, 2GB files, 100% browser-based.",
  alternates: {
    canonical: "https://freecropper.com/vs/capcut",
  },
  openGraph: {
    title: "CapCut Alternative No Watermark — Free Video Cropper",
    description: "CapCut alternative with no watermark. Free video cropper with AI face detection.",
    type: "website",
    url: "https://freecropper.com/vs/capcut",
    siteName: "FreeCropper",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
    }],
  },
};

const jsonLdHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Crop Video Without Watermark",
  "description": "FreeCropper alternative to CapCut with no watermark",
  "step": [
    {
      "@type": "HowToStep",
      "text": "Upload your video to FreeCropper",
      "name": "Upload video"
    },
    {
      "@type": "HowToStep",
      "text": "Select your target aspect ratio (9:16, 16:9, etc.)",
      "name": "Select aspect ratio"
    },
    {
      "@type": "HowToStep",
      "text": "AI detects faces and auto-frames crop",
      "name": "AI auto-crop"
    },
    {
      "@type": "HowToStep",
      "text": "Export without watermark",
      "name": "Export video"
    }
  ],
};

export default function CapCutAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <SubPageLanding
        h1="CapCut Alternative No Watermark"
        h1Highlight="— Free Video Cropper"
        subtitle="the easiest way to crop videos without CapCut's watermark. Everything good about CapCut, none of the watermark."
        description="CapCut's free version adds a watermark to all exports. You have to pay to remove it. FreeCropper doesn't. It's a CapCut alternative with no watermark — ever. Same AI-powered cropping, same aspect ratios, no signup, and your video never leaves your browser."
        secondaryDescription="CapCut also limits you to 500MB file size. FreeCropper handles files up to 2GB — 4x larger. No account creation, no app download, no premium tier. Just open the page and start cropping."
        features={[
          {
            title: "No watermark — ever",
            text: "CapCut adds watermark to free exports. FreeCropper exports clean video every time.",
          },
          {
            title: "No account required",
            text: "CapCut forces account creation. FreeCropper works instantly without sign-up.",
          },
          {
            title: "2GB file limit",
            text: "CapCut limits to 500MB. FreeCropper supports files up to 2GB — 4x larger.",
          },
          {
            title: "100% browser-based",
            text: "CapCut uploads your files. FreeCropper processes locally — videos never leave your device.",
          },
          {
            title: "Same AI cropping",
            text: "Auto-reframe and face detection works just like CapCut's AI features.",
          },
          {
            title: "All aspect ratios",
            text: "Export 9:16, 16:9, 4:5, 1:1 — same formats CapCut supports.",
          },
        ]}
        internalLinks={[
          { href: "/tiktok-video-cropper", label: "TikTok Video Cropper" },
          { href: "/vs/inshot", label: "InShot Alternative" },
          { href: "/video-cropper-no-signup", label: "Free Video Cropper — No Signup" },
          { href: "/", label: "All video cropping tools" },
        ]}
        faqItems={[
          {
            question: "Is FreeCropper as good as CapCut for cropping?",
            answer: "For cropping specifically? Better. Same AI, no watermark, larger files, no account. CapCut is great for full video editing, but if you just need to change aspect ratio, FreeCropper is faster and cleaner.",
          },
          {
            question: "Why use a CapCut alternative?",
            answer: "CapCut adds watermarks to free exports, forces account creation, and has a 500MB file limit. If you just need to crop or resize videos, FreeCropper gives you the same result without these restrictions.",
          },
          {
            question: "Does FreeCropper have the same aspect ratios as CapCut?",
            answer: "Yes. We support 9:16 (TikTok, Reels, Shorts), 16:9 (YouTube, Twitter), 4:5 (Instagram Feed), and 1:1 (LinkedIn) — all the formats CapCut offers for social media.",
          },
          {
            question: "Can I use FreeCropper for TikTok?",
            answer: "Absolutely. Export 9:16 vertical video at 1080x1920 resolution — the exact format TikTok requires. AI face detection keeps you centered, and the export has no watermark.",
          },
          {
            question: "Is FreeCropper really free?",
            answer: "Yes. No premium tier, no watermark removal fee, no file size upsell. Everything works for free. We built this tool because we needed it ourselves.",
          },
        ]}
        bottomCTA={{
          text: "Ready to crop without watermarks?",
          buttonText: "Try the CapCut Alternative →",
        }}
      />
    </>
  );
}
