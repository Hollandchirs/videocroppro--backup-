import type { Metadata } from "next";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
