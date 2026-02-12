import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crop Video for Instagram Reels Free — 9:16 & 4:5 | Freecropper",
  description:
    "Free tool to crop and resize videos for Instagram Reels (9:16) and Feed (4:5). AI face detection, no signup, no watermark. Browser-based.",
  keywords:
    "crop video for instagram reels, instagram reels video size, resize video instagram, instagram video cropper, 9:16 video converter, instagram feed 4:5",
  alternates: {
    canonical: "https://freecropper.com/crop-video-for-instagram-reels",
  },
  openGraph: {
    title: "Crop Video for Instagram Reels Free — 9:16 & 4:5",
    description: "Resize videos for Instagram Reels and Feed. AI face detection, no signup, no watermark.",
    type: "website",
    url: "https://freecropper.com/crop-video-for-instagram-reels",
    siteName: "Freecropper",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crop Video for Instagram Reels Free — 9:16 & 4:5",
    description: "Resize videos for Instagram Reels and Feed. AI face detection, no signup, no watermark.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
