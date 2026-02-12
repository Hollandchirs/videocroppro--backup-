import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crop Video for TikTok Free — No Signup, No Watermark | Freecropper",
  description:
    "Free online tool to crop and resize videos for TikTok. Convert 16:9 to 9:16 with AI face detection. No signup, no watermark, runs in your browser.",
  keywords:
    "crop video for tiktok, tiktok video cropper, resize video for tiktok, tiktok 9:16, convert video to tiktok format, free tiktok video editor",
  alternates: {
    canonical: "https://freecropper.com/crop-video-for-tiktok",
  },
  openGraph: {
    title: "Crop Video for TikTok Free — No Signup, No Watermark",
    description:
      "Convert any video to TikTok's 9:16 format with AI face detection. Free, no watermark.",
    type: "website",
    url: "https://freecropper.com/crop-video-for-tiktok",
    siteName: "Freecropper",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crop Video for TikTok Free — No Signup, No Watermark",
    description:
      "Convert any video to TikTok's 9:16 format with AI face detection. Free, no watermark.",
  },
};

export default function CropVideoForTikTokLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
