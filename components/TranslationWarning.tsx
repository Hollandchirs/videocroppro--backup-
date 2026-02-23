"use client";

import { useEffect, useState } from "react";

export function TranslationWarning() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const check = () => {
      const lang = document.documentElement.lang;
      // Browser translation changes lang away from "en"
      if (lang && lang !== "en" && !lang.startsWith("en")) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    // Check immediately
    check();

    // Watch for lang attribute changes (browser translation kicks in)
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang", "class"],
    });

    return () => observer.disconnect();
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#f7f7f8]/90 backdrop-blur-sm">
      <div translate="no" className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 w-full max-w-sm mx-4 p-8 flex flex-col items-center text-center">

        {/* Icon */}
        <div className="w-14 h-14 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center mb-5">
          <svg className="w-7 h-7 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 3l14 0M3 7l2 0M19 7l2 0M5 7l1 5a7 7 0 0 0 12 0l1-5" />
            <line x1="4" y1="20" x2="20" y2="20" />
          </svg>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-1.5 mb-4">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#C2F159]">
            <svg className="h-4 w-4 text-neutral-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
              <line x1="7" y1="2" x2="7" y2="22" />
              <line x1="17" y1="2" x2="17" y2="22" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <line x1="2" y1="7" x2="7" y2="7" />
              <line x1="2" y1="17" x2="7" y2="17" />
              <line x1="17" y1="17" x2="22" y2="17" />
              <line x1="17" y1="7" x2="22" y2="7" />
            </svg>
          </div>
          <span className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
            <span className="text-[#C2F159]">Free</span>cropper
          </span>
        </div>

        <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
          Please disable browser translation
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
          Browser translation modifies the page structure and causes display errors. Please turn it off and refresh to continue.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="w-full rounded-full bg-[#C2F159] py-2.5 text-sm font-semibold text-neutral-900 hover:opacity-90 transition-opacity"
        >
          Refresh page
        </button>

        <p className="mt-3 text-xs text-neutral-400 dark:text-neutral-500">
          Right-click the page → "Translate to" → turn off translation
        </p>
      </div>
    </div>
  );
}
