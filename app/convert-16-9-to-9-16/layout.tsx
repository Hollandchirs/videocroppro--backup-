import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert 16:9 to 9:16 Free — Landscape to Portrait Video | Freecropper",
  description:
    "Free online tool to convert 16:9 landscape video to 9:16 vertical. AI face detection keeps subjects centered. No signup, no watermark, browser-based.",
  keywords:
    "convert 16:9 to 9:16, landscape to portrait video, 16:9 to 9:16 converter, change video aspect ratio, horizontal to vertical video, free aspect ratio converter",
  alternates: {
    canonical: "https://freecropper.com/convert-16-9-to-9-16",
  },
  openGraph: {
    title: "Convert 16:9 to 9:16 Free — Landscape to Portrait Video",
    description:
      "Turn landscape videos into vertical with AI face detection. Free, no signup, no watermark.",
    type: "website",
    url: "https://freecropper.com/convert-16-9-to-9-16",
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
    title: "Convert 16:9 to 9:16 Free — Landscape to Portrait Video",
    description:
      "Turn landscape videos into vertical with AI face detection. Free, no signup, no watermark.",
  },
};

export default function Convert169To916Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
