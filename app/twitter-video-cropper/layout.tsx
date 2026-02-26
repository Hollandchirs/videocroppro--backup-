import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crop Video for X (Twitter) Free — 16:9 & 1:1 | Freecropper",
  description:
    "Free tool to crop and resize videos for X (Twitter). Export 16:9 landscape or 1:1 square with AI face detection. No signup, no watermark.",
  keywords:
    "crop video for twitter, twitter video size, x video dimensions, resize video twitter, twitter video aspect ratio, crop video for x",
  alternates: {
    canonical: "https://freecropper.com/twitter-video-cropper",
  },
  openGraph: {
    title: "Crop Video for X (Twitter) Free — 16:9 & 1:1",
    description: "Resize videos for X/Twitter. AI face detection, no signup, no watermark.",
    type: "website",
    url: "https://freecropper.com/twitter-video-cropper",
    siteName: "Freecropper",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crop Video for X (Twitter) Free — 16:9 & 1:1",
    description: "Resize videos for X/Twitter. AI face detection, no signup, no watermark.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
