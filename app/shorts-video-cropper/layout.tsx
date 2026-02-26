import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crop Video for YouTube Shorts Free — 9:16 Vertical | Freecropper",
  description:
    "Free tool to crop and resize videos for YouTube Shorts. Convert landscape to 9:16 vertical with AI face detection. No signup, no watermark.",
  keywords:
    "crop video for youtube shorts, youtube shorts video size, resize video youtube shorts, youtube shorts aspect ratio, vertical video youtube, 9:16 youtube",
  alternates: {
    canonical: "https://freecropper.com/shorts-video-cropper",
  },
  openGraph: {
    title: "Crop Video for YouTube Shorts Free — 9:16 Vertical",
    description: "Convert landscape to vertical for YouTube Shorts. AI face detection, no signup, no watermark.",
    type: "website",
    url: "https://freecropper.com/shorts-video-cropper",
    siteName: "Freecropper",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crop Video for YouTube Shorts Free — 9:16 Vertical",
    description: "Convert landscape to vertical for YouTube Shorts. AI face detection, no signup, no watermark.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
