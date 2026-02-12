import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert Video to 1:1 Square Free — All Platforms | Freecropper",
  description:
    "Free tool to convert videos to 1:1 square (1080x1080) for LinkedIn, Instagram, Facebook, and more. AI face detection, no signup, no watermark.",
  keywords:
    "convert video to square, 1:1 video converter, square video maker, 1080x1080 video, crop video to square, resize video square free",
  alternates: {
    canonical: "https://freecropper.com/convert-video-to-1-1",
  },
  openGraph: {
    title: "Convert Video to 1:1 Square Free — All Platforms",
    description: "Resize videos to 1:1 square for any social platform. AI face detection, no watermark.",
    type: "website",
    url: "https://freecropper.com/convert-video-to-1-1",
    siteName: "Freecropper",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert Video to 1:1 Square Free — All Platforms",
    description: "Resize videos to 1:1 square for any social platform. AI face detection, no watermark.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
