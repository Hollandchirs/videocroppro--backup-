"use client";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#C2F159]">
              <svg className="h-4 w-4 text-neutral-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                <line x1="7" y1="2" x2="7" y2="22" />
                <line x1="17" y1="2" x2="17" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
              </svg>
            </div>
            <span className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
              <span className="text-[#C2F159]">Free</span>cropper
            </span>
          </div>

          <p className="max-w-md text-sm text-neutral-600 dark:text-neutral-400">
            Free multi-platform video cropping tool. One upload, every aspect ratio.
            AI-powered subject tracking. No watermarks, no sign-up, no limits.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
            <span>Free Forever</span>
            <span className="h-1 w-1 rounded-full bg-neutral-400" />
            <span>No Watermark</span>
            <span className="h-1 w-1 rounded-full bg-neutral-400" />
            <span>Privacy First</span>
          </div>

          {/* Internal links for SEO */}
          <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-neutral-500 dark:text-neutral-500 max-w-4xl">
            {/* Platform Pages */}
            <a href="/tiktok-video-cropper" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">TikTok Video Cropper</a>
            <span className="h-1 w-1 rounded-full bg-neutral-400" />
            <a href="/reels-video-cropper" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">Reels Video Cropper</a>
            <span className="h-1 w-1 rounded-full bg-neutral-400" />
            <a href="/shorts-video-cropper" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">Shorts Video Cropper</a>
            <span className="h-1 w-1 rounded-full bg-neutral-400" />
            <a href="/linkedin-video-resizer" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">LinkedIn Video Resizer</a>
            <span className="h-1 w-1 rounded-full bg-neutral-400" />
            <a href="/twitter-video-cropper" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">Twitter Video Cropper</a>
            <span className="h-1 w-1 rounded-full bg-neutral-400" />
            <a href="/16-9-to-9-16-converter" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">16:9 to 9:16 Converter</a>
            <span className="h-1 w-1 rounded-full bg-neutral-400" />
            {/* Ratio Pages */}
            <a href="/landscape-to-vertical" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">Landscape to Vertical</a>
            <span className="h-1 w-1 rounded-full bg-neutral-400" />
            <a href="/4-5-video-converter" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">4:5 Portrait Converter</a>
            <span className="h-1 w-1 rounded-full bg-neutral-400" />
            <a href="/1-1-square-video-converter" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">1:1 Square Converter</a>
            <span className="h-1 w-1 rounded-full bg-neutral-400" />
            {/* Feature Pages */}
            <a href="/video-cropper-no-signup" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">Free Cropper No Signup</a>
            <span className="h-1 w-1 rounded-full bg-neutral-400" />
            <a href="/video-cropper-no-watermark" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">Cropper No Watermark</a>
            <span className="h-1 w-1 rounded-full bg-neutral-400" />
            <a href="/auto-crop-face-detection" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">Auto Crop Face Detection</a>
            <span className="h-1 w-1 rounded-full bg-neutral-400" />
            {/* Alternative Pages */}
            <a href="/vs/capcut" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">CapCut Alternative</a>
            <span className="h-1 w-1 rounded-full bg-neutral-400" />
            <a href="/vs/kapwing" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">Kapwing Alternative</a>
            <span className="h-1 w-1 rounded-full bg-neutral-400" />
            <a href="/vs/clideo" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">Clideo Alternative</a>
            <span className="h-1 w-1 rounded-full bg-neutral-400" />
            <a href="/vs/veed" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">Veed Alternative</a>
            <span className="h-1 w-1 rounded-full bg-neutral-400" />
            <a href="/vs/inshot" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">InShot Alternative</a>
            <span className="h-1 w-1 rounded-full bg-neutral-400" />
            {/* Audience Pages */}
            <a href="/for/podcasters" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">For Podcasters</a>
            <span className="h-1 w-1 rounded-full bg-neutral-400" />
            <a href="/for/content-creators" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">For Content Creators</a>
            <span className="h-1 w-1 rounded-full bg-neutral-400" />
            <a href="/for/social-media-managers" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">For Social Media Managers</a>
            <span className="h-1 w-1 rounded-full bg-neutral-400" />
            <a href="/for/agencies" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">For Agencies</a>
            <span className="h-1 w-1 rounded-full bg-neutral-400" />
            {/* Best-of Pages */}
            <a href="/best/video-cropper-2026" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">Best Video Cropper 2026</a>
          </nav>

          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            © {new Date().getFullYear()} Freecropper · Built for creators
          </p>
        </div>
      </div>
    </footer>
  );
}
