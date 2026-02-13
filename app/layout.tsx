import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://freecropper.com"),
  title: "Freecropper - Free Video Resizer for Social Media",
  description: "Crop and resize videos for TikTok, Instagram, YouTube, and more. Free, no watermark, no signup. Smart face detection for perfect vertical videos.",
  keywords: "video cropper, video resizer, crop video for tiktok, vertical video, video resize, free video editor",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Freecropper - Free Video Resizer",
    description: "Smart video cropping for all social media platforms",
    type: "website",
    url: "https://freecropper.com",
    siteName: "Freecropper",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freecropper - Free Video Resizer",
    description: "Smart video cropping for all social media platforms",
  },
  alternates: {
    canonical: "https://freecropper.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "saashub-verification": "c6cu0j4vk0n3",
  },
};

// JSON-LD Structured Data
const jsonLdSoftwareApp = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Freecropper",
  "url": "https://freecropper.com",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "Web Browser",
  "browserRequirements": "Requires a modern web browser with WebAssembly support",
  "description": "Free browser-based video cropper with AI face detection. Resize videos for TikTok, Instagram Reels, YouTube Shorts and more. No signup, no watermark, no upload to servers.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
  },
  "featureList": [
    "AI face and subject detection",
    "Export to 9:16, 16:9, 4:5, 1:1 aspect ratios",
    "No watermark on exports",
    "No signup or account required",
    "100% browser-based processing",
    "Supports MP4, MOV, WebM, AVI formats",
  ],
  "screenshot": "https://freecropper.com/og-image.png",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "120",
    "bestRating": "5",
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Freecropper",
  "url": "https://freecropper.com",
  "logo": "https://freecropper.com/icon.png",
  "sameAs": [],
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Freecropper really free? What's the catch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, it's completely free with no catch. No premium tiers, no watermarks on exports, no feature limits. We built this tool because we needed it ourselves and wanted to share it with the creator community.",
      },
    },
    {
      "@type": "Question",
      "name": "What aspect ratios can I export?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can export 9:16 (TikTok, Instagram Reels, YouTube Shorts), 16:9 (YouTube, Twitter), 4:5 (Instagram Feed, Facebook), and 1:1 (LinkedIn, cross-platform). All from a single upload.",
      },
    },
    {
      "@type": "Question",
      "name": "How does the AI subject detection work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our AI automatically detects faces and key subjects in your video frame. When cropping to different aspect ratios, it keeps these subjects centered so important content never gets cut off.",
      },
    },
    {
      "@type": "Question",
      "name": "Are my videos uploaded to a server?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. All processing happens locally in your browser. Your videos never leave your device, ensuring complete privacy and faster processing times.",
      },
    },
    {
      "@type": "Question",
      "name": "What video formats are supported?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We support all common video formats including MP4, MOV, WebM, and AVI. Maximum file size is 2GB to ensure smooth browser-based processing.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I use the exported videos commercially?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. There are no restrictions on how you use your exported videos. They're your videos — post them anywhere, monetize them, use them in ads.",
      },
    },
    {
      "@type": "Question",
      "name": "Why no account or sign-up?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We believe tools should be accessible without friction. No email harvesting, no marketing spam — just open the page and start editing.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I crop a video for TikTok for free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Upload your video to Freecropper, select the 9:16 aspect ratio (TikTok format), and the AI will automatically keep subjects centered. Click Export and download your TikTok-ready video. No signup or watermark.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I convert a 16:9 landscape video to 9:16 vertical?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Upload your 16:9 video, choose the 9:16 output ratio, and Freecropper's AI face detection will intelligently reframe the video to keep people and subjects visible. The whole process takes seconds.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best aspect ratio for Instagram Reels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Instagram Reels uses 9:16 (1080x1920 pixels) for full-screen vertical video. You can also use 4:5 for Instagram Feed posts. Freecropper supports both formats.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I crop a video without losing quality?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Freecropper processes video at the original resolution. When you crop to a different aspect ratio, it re-encodes at 1080p output resolution without additional compression artifacts.",
      },
    },
    {
      "@type": "Question",
      "name": "Is there a free video cropper without watermark?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Freecropper exports videos with no watermark, no branding, and no limitations. Unlike most free tools, there is no premium tier or hidden paywall.",
      },
    },
  ],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Freecropper",
  "url": "https://freecropper.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-54CMP0381Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-54CMP0381Z');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftwareApp) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
