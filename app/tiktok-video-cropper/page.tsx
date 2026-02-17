import type { Metadata } from "next";
import { SubPageLanding } from "@/components/SubPageLanding";

export const metadata: Metadata = {
  metadataBase: new URL("https://freecropper.com"),
  title: "TikTok Video Cropper No Watermark — Free Online Tool | FreeCropper",
  description: "TikTok video cropper with no watermark. Crop landscape to 9:16 vertical with AI face detection. Free, no signup, 2GB max, works in browser.",
  alternates: {
    canonical: "https://freecropper.com/tiktok-video-cropper",
  },
  openGraph: {
    title: "TikTok Video Cropper No Watermark — Free Online Tool",
    description: "TikTok video cropper with no watermark. Crop landscape to 9:16 vertical with AI face detection.",
    type: "website",
    url: "https://freecropper.com/tiktok-video-cropper",
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
  "name": "How to Crop Video for TikTok Without Watermark",
  "description": "Step by step guide to crop videos for TikTok without watermark using FreeCropper",
  "step": [
    {
      "@type": "HowToStep",
      "text": "Upload your video to FreeCropper (MP4, MOV, WebM, AVI supported)",
      "name": "Upload video"
    },
    {
      "@type": "HowToStep",
      "text": "Select 9:16 aspect ratio (TikTok format)",
      "name": "Select aspect ratio"
    },
    {
      "@type": "HowToStep",
      "text": "AI detects faces and positions crop automatically to keep you centered",
      "name": "AI auto-crop"
    },
    {
      "@type": "HowToStep",
      "text": "Export and download your TikTok-ready video — no watermark, ready to post",
      "name": "Export video"
    }
  ],
};

const jsonLdSoftwareApplication = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "FreeCropper",
  "url": "https://freecropper.com/tiktok-video-cropper",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "Web Browser",
  "browserRequirements": "Requires a modern web browser",
  "description": "Free TikTok video cropper with no watermark. AI face detection keeps subjects centered when cropping to 9:16. No signup, no account, no file size tricks.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
  },
  "featureList": [
    "No watermark on exports",
    "No signup or account required",
    "AI face detection and auto-crop",
    "2GB file size limit",
    "9:16 TikTok format export (1080x1920)",
    "100% browser-based — no uploads to servers",
    "Supports MP4, MOV, WebM, AVI"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "120",
    "bestRating": "5",
  },
};

export default function TikTokVideoCropperPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftwareApplication) }}
      />
      <SubPageLanding
        h1="TikTok Video Cropper No Watermark"
        h1Highlight="— Free Online Tool"
        subtitle="the easiest way to crop videos for TikTok without watermark. AI face detection keeps you centered. No signup."
        description="TikTok requires 9:16 vertical video at 1080x1920 pixels. If you have landscape footage, FreeCropper converts it to TikTok's format in seconds. AI face detection reframes the crop automatically so people stay centered instead of getting cut off at the edges."
        secondaryDescription="Most 'free' TikTok video croppers add a watermark then charge to remove it. FreeCropper doesn't. No watermark, no signup, no file size tricks. Upload up to 2GB, everything runs in your browser, your video never leaves your device."
        features={[
          {
            title: "No watermark",
            text: "Your exported TikTok video has zero branding or watermarks. Clean export every time.",
          },
          {
            title: "No signup required",
            text: "Just use the tool. No email, no password, no account creation.",
          },
          {
            title: "AI auto-crop",
            text: "Face detection keeps you centered when converting from landscape to vertical. No manual adjustment needed.",
          },
          {
            title: "2GB max file size",
            text: "Handles long videos and high-resolution footage. Most other tools limit to 500MB.",
          },
          {
            title: "100% browser-based",
            text: "Nothing uploaded to external servers. Your video stays on your device.",
          },
          {
            title: "Multiple formats",
            text: "Upload MP4, MOV, WebM, or AVI. Export as MP4 ready for TikTok upload.",
          },
        ]}
        internalLinks={[
          { href: "/reels-video-cropper", label: "Instagram Reels Video Cropper" },
          { href: "/shorts-video-cropper", label: "YouTube Shorts Video Cropper" },
          { href: "/landscape-to-vertical", label: "Convert 16:9 to 9:16" },
          { href: "/video-cropper-no-watermark", label: "Video Cropper No Watermark" },
          { href: "/", label: "All video cropping tools" },
        ]}
        faqItems={[
          {
            question: "Does it really have no watermark?",
            answer: "Yes. Ever. We don't add anything to your video. No logos, no branding, no 'made with' text. Your video comes out exactly as you intended.",
          },
          {
            question: "Do I need to create an account?",
            answer: "No. Just open the page, upload your video, select 9:16, and export. No email, no password, no verification required.",
          },
          {
            question: "Is my video uploaded somewhere?",
            answer: "No. All processing happens 100% in your browser using WebAssembly. Your video never leaves your device, which also means it's faster and more private.",
          },
          {
            question: "What video formats can I upload?",
            answer: "MP4, MOV, WebM, and AVI — up to 2GB file size. These cover most cameras, screen recordings, and export formats from other editing tools.",
          },
          {
            question: "What is TikTok's video resolution?",
            answer: "TikTok recommends 1080x1920 (9:16 vertical) for best quality. That's exactly what FreeCropper exports when you select TikTok as the target platform.",
          },
          {
            question: "How long does it take?",
            answer: "Under 2 minutes for most videos. The processing happens in your browser, so there's no waiting for server uploads. Actual time depends on your computer and video length.",
          },
        ]}
        bottomCTA={{
          text: "Ready to crop for TikTok?",
          buttonText: "Crop Your TikTok Video →",
        }}
      />
    </>
  );
}
