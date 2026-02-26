import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert Video to 4:5 Free — Instagram Feed & Facebook | Freecropper",
  description:
    "Free tool to convert videos to 4:5 aspect ratio (1080x1350) for Instagram Feed and Facebook. AI face detection, no signup, no watermark.",
  keywords:
    "convert video to 4:5, 4:5 aspect ratio video, instagram feed video size, resize video 4:5, portrait video converter, 1080x1350 video",
  alternates: {
    canonical: "https://freecropper.com/4-5-video-converter",
  },
  openGraph: {
    title: "Convert Video to 4:5 Free — Instagram Feed & Facebook",
    description: "Resize videos to 4:5 for Instagram Feed and Facebook. AI face detection, no watermark.",
    type: "website",
    url: "https://freecropper.com/4-5-video-converter",
    siteName: "Freecropper",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert Video to 4:5 Free — Instagram Feed & Facebook",
    description: "Resize videos to 4:5 for Instagram Feed and Facebook. AI face detection, no watermark.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
