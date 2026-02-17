import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://freecropper.com";
  const now = new Date();

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },

    // Platform pages (7)
    { url: `${baseUrl}/tiktok-video-cropper`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/reels-video-cropper`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/shorts-video-cropper`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/linkedin-video-resizer`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/twitter-video-cropper`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/16-9-to-9-16-converter`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/landscape-to-vertical`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },

    // Aspect ratio pages (2)
    { url: `${baseUrl}/4-5-video-converter`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/1-1-square-video-converter`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },

    // Feature pages (3)
    { url: `${baseUrl}/video-cropper-no-signup`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/video-cropper-no-watermark`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/auto-crop-face-detection`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },

    // vs / Competitor pages
    { url: `${baseUrl}/vs/capcut`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/vs/inshot`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/vs/kapwing`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/vs/clideo`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/vs/veed`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },

    // For / Audience pages
    { url: `${baseUrl}/for/podcasters`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/for/content-creators`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/for/social-media-managers`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/for/agencies`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },

    // Best-of pages
    { url: `${baseUrl}/best/video-cropper-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}
