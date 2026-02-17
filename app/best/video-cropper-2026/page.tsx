import type { Metadata } from "next";
import { SubPageLanding } from "@/components/SubPageLanding";

export const metadata: Metadata = {
  metadataBase: new URL("https://freecropper.com"),
  title: "Best Free Video Cropper 2026 — No Watermark | FreeCropper",
  description: "Best free video cropper 2026. FreeCropper ranks #1: no watermark, no signup, AI face detection, 2GB files, 100% browser-based. See how CapCut, Kapwing, and InShot compare.",
  alternates: {
    canonical: "https://freecropper.com/best/video-cropper-2026",
  },
  openGraph: {
    title: "Best Free Video Cropper 2026 — No Watermark | FreeCropper",
    description: "Best free video cropper 2026. FreeCropper ranks #1 — no watermark, no signup, AI face detection.",
    type: "website",
    url: "https://freecropper.com/best/video-cropper-2026",
    siteName: "FreeCropper",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
    }],
  },
};

export default function BestVideoCropper2026Page() {
  return (
    <SubPageLanding
      h1="Best Free Video Cropper 2026"
      h1Highlight="— No Watermark, No Signup"
      subtitle="the #1 ranked free online video cropper in 2026. No watermark ever, AI face detection, 2GB files, 100% browser-based."
      description="Best free video cropper 2026 is FreeCropper — the only tool that combines no watermark, no signup, AI face detection, and 2GB file support entirely in your browser. Your video never leaves your device."
      secondaryDescription="Every major competitor adds a watermark on the free plan or requires an account. FreeCropper does neither. Here's how the top tools compare:"
      rankingList={[
        {
          rank: 1,
          name: "FreeCropper",
          badge: "Best Overall",
          pros: "No watermark ever. No signup. AI face detection. 2GB file support. 100% browser-based — files never leave your device. Free forever, no premium tier.",
        },
        {
          rank: 2,
          name: "CapCut",
          pros: "Good editing features, mobile app available.",
          cons: "Adds CapCut watermark on free exports. Requires account creation. Full features need desktop app install.",
        },
        {
          rank: 3,
          name: "Kapwing",
          pros: "Clean interface, good for teams.",
          cons: "Watermarks all free exports. Paid plan ($16/month) required to remove watermark.",
        },
        {
          rank: 4,
          name: "Canva",
          pros: "Good for short social clips, lots of templates.",
          cons: "250MB file size limit on free accounts. Watermark on video exports without Canva Pro ($13/month).",
        },
        {
          rank: 5,
          name: "InShot",
          pros: "Mobile-first, easy to use.",
          cons: "Adds InShot watermark on free exports. File size and video length limits without paid plan.",
        },
      ]}
      features={[
        {
          title: "No watermark — ever",
          text: "CapCut, Kapwing, Canva, InShot all watermark free exports. FreeCropper never does.",
        },
        {
          title: "No signup required",
          text: "Every competitor requires an account. FreeCropper opens and works immediately.",
        },
        {
          title: "2GB file support",
          text: "Most tools limit to 250–500MB. FreeCropper handles files up to 2GB.",
        },
        {
          title: "AI face detection",
          text: "Automatically keeps faces centered when converting aspect ratios. No manual cropping.",
        },
        {
          title: "100% browser-based",
          text: "No upload to servers. No app install. Runs entirely in your browser via WebAssembly.",
        },
        {
          title: "All major platforms",
          text: "TikTok 9:16, Reels 9:16, Shorts 9:16, LinkedIn 1:1, Instagram 4:5, Twitter 16:9.",
        },
      ]}
      internalLinks={[
        { href: "/video-cropper-no-watermark", label: "Video Cropper No Watermark" },
        { href: "/video-cropper-no-signup", label: "Free Video Cropper No Signup" },
        { href: "/auto-crop-face-detection", label: "Auto Crop Face Detection" },
        { href: "/vs/capcut", label: "FreeCropper vs CapCut" },
        { href: "/vs/kapwing", label: "FreeCropper vs Kapwing" },
        { href: "/", label: "Try FreeCropper free" },
      ]}
      faqItems={[
        {
          question: "What is the best free video cropper in 2026?",
          answer: "FreeCropper is the best free video cropper in 2026. It's the only tool with no watermark, no signup, AI face detection, and 2GB file support — all running in-browser with no uploads to external servers.",
        },
        {
          question: "Why does FreeCropper rank above CapCut and Kapwing?",
          answer: "CapCut adds a watermark on free exports and requires an account. Kapwing watermarks all free exports and charges $16/month to remove it. FreeCropper exports clean video with no watermark, no account, and no payment.",
        },
        {
          question: "Is FreeCropper really free forever?",
          answer: "Yes. No premium tier, no watermark removal fee, no subscription. Everything works free, permanently. No file size upsell, no length limit.",
        },
        {
          question: "Can I crop for TikTok, Reels, and Shorts all in one tool?",
          answer: "Yes. FreeCropper converts to 9:16 (TikTok, Reels, Shorts), 4:5 (Instagram Feed), 1:1 (LinkedIn), and 16:9 (YouTube/Twitter) — all from one upload with AI reframing.",
        },
      ]}
      bottomCTA={{
        text: "Try the #1 rated free video cropper — no signup needed.",
        buttonText: "Crop Your Video Free →",
      }}
    />
  );
}
