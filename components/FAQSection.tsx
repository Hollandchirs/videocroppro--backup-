"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is it really free? What's the catch?",
    answer:
      "Yes, it's completely free with no catch. No premium tiers, no watermarks on exports, no feature limits. We built this tool because we needed it ourselves and wanted to share it with the creator community.",
  },
  {
    question: "What aspect ratios can I export?",
    answer:
      "You can export 9:16 (TikTok, Instagram Reels, YouTube Shorts), 16:9 (YouTube, Twitter), 4:5 (Instagram Feed, Facebook), and 1:1 (LinkedIn, cross-platform). All from a single upload.",
  },
  {
    question: "How does the AI subject detection work?",
    answer:
      "Our AI automatically detects faces and key subjects in your video frame. When cropping to different aspect ratios, it keeps these subjects centered so important content never gets cut off.",
  },
  {
    question: "Are my videos uploaded to a server?",
    answer:
      "No. All processing happens locally in your browser. Your videos never leave your device, ensuring complete privacy and faster processing times.",
  },
  {
    question: "What video formats are supported?",
    answer:
      "We support all common video formats including MP4, MOV, WebM, and AVI. Maximum file size is 2GB to ensure smooth browser-based processing.",
  },
  {
    question: "Can I use the exported videos commercially?",
    answer:
      "Absolutely. There are no restrictions on how you use your exported videos. They're your videos — post them anywhere, monetize them, use them in ads.",
  },
  {
    question: "Why no account or sign-up?",
    answer:
      "We believe tools should be accessible without friction. No email harvesting, no marketing spam — just open the page and start editing.",
  },
  {
    question: "How do I crop a video for TikTok for free?",
    answer:
      "Upload your video to Freecropper, select the 9:16 aspect ratio (TikTok's vertical format), and the AI will automatically keep subjects centered. Click Export and download your TikTok-ready video — no signup, no watermark.",
  },
  {
    question: "How do I convert a 16:9 landscape video to 9:16 vertical?",
    answer:
      "Upload your 16:9 video, choose 9:16 as the output ratio, and Freecropper's AI face detection will reframe the video to keep people and subjects visible. The whole process takes seconds and runs in your browser.",
  },
  {
    question: "What is the best aspect ratio for Instagram Reels?",
    answer:
      "Instagram Reels uses 9:16 (1080x1920 pixels) for full-screen vertical video. For Instagram Feed posts, 4:5 (1080x1350) takes up more screen space than square. Freecropper supports both formats.",
  },
  {
    question: "Can I crop a video without losing quality?",
    answer:
      "Yes. Freecropper processes video at the original resolution and re-encodes at 1080p output quality. The crop only changes framing, not compression — so you get clean output without extra artifacts.",
  },
  {
    question: "Is there a free video cropper without watermark?",
    answer:
      "Yes — Freecropper exports videos with no watermark, no branding, and no limitations. Unlike most \"free\" tools that add watermarks or lock features behind a paywall, everything here is actually free.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-neutral-100 dark:bg-neutral-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Everything you need to know about Freecropper
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-xl border bg-white dark:bg-neutral-900 px-6 transition-colors ${
                  openIndex === index
                    ? "border-[#C2F159]/30"
                    : "border-neutral-200 dark:border-neutral-800"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left py-4 flex items-center justify-between gap-4"
                >
                  <span className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                    {faq.question}
                  </span>
                  <svg
                    className={`h-5 w-5 text-neutral-500 dark:text-neutral-400 transition-transform flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="pb-4">
                    <p className="text-neutral-600 dark:text-neutral-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
