import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Cropper No Watermark — Free, No Signup | Freecropper",
  description:
    "Free video cropper with no watermark on exports. Crop and resize for TikTok, Instagram, YouTube and more. AI face detection, no signup, no paywall.",
  keywords:
    "video cropper no watermark, free video cropper without watermark, crop video no watermark, video resizer no watermark, watermark free video editor, no watermark video tool",
  alternates: {
    canonical: "https://freecropper.com/video-cropper-no-watermark",
  },
  openGraph: {
    title: "Video Cropper No Watermark — Free, No Signup",
    description: "Crop videos without any watermark or branding. AI face detection, no signup, truly free.",
    type: "website",
    url: "https://freecropper.com/video-cropper-no-watermark",
    siteName: "Freecropper",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Cropper No Watermark — Free, No Signup",
    description: "Crop videos without any watermark or branding. AI face detection, no signup, truly free.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
