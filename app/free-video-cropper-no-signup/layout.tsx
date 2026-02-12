import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Video Cropper No Signup — No Watermark, No Account | Freecropper",
  description:
    "Free online video cropper with no signup required. Crop and resize videos for TikTok, Instagram, YouTube with AI face detection. No watermark, no account, browser-based.",
  keywords:
    "free video cropper no signup, video cropper no account, free video cropper no watermark, crop video online free, video resizer no registration, free video editor no login",
  alternates: {
    canonical: "https://freecropper.com/free-video-cropper-no-signup",
  },
  openGraph: {
    title: "Free Video Cropper No Signup — No Watermark, No Account",
    description:
      "Crop and resize videos for any social platform. No account, no watermark. AI face detection.",
    type: "website",
    url: "https://freecropper.com/free-video-cropper-no-signup",
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
    title: "Free Video Cropper No Signup — No Watermark, No Account",
    description:
      "Crop and resize videos for any social platform. No account, no watermark. AI face detection.",
  },
};

export default function FreeVideoCropperNoSignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
