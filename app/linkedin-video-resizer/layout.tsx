import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resize Video for LinkedIn Free — 1:1 Square & 16:9 | Freecropper",
  description:
    "Free tool to resize videos for LinkedIn. Crop to 1:1 square, 16:9 landscape, or 9:16 vertical. AI face detection, no signup, no watermark.",
  keywords:
    "resize video for linkedin, linkedin video size, linkedin video dimensions, crop video linkedin, square video linkedin, linkedin video aspect ratio",
  alternates: {
    canonical: "https://freecropper.com/resize-video-for-linkedin",
  },
  openGraph: {
    title: "Resize Video for LinkedIn Free — 1:1 Square & 16:9",
    description: "Crop videos for LinkedIn feed and ads. AI face detection, no signup, no watermark.",
    type: "website",
    url: "https://freecropper.com/resize-video-for-linkedin",
    siteName: "Freecropper",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resize Video for LinkedIn Free — 1:1 Square & 16:9",
    description: "Crop videos for LinkedIn feed and ads. AI face detection, no signup, no watermark.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
