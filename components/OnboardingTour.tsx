"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "freecropper_onboarding_done";

const STEPS = [
  {
    icon: (
      <svg className="w-10 h-10 text-[#C2F159]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
      </svg>
    ),
    title: "Select a clip to edit",
    description: "Click any clip in the timeline below the preview. The selected clip will highlight in green.",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[#C2F159]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20" />
      </svg>
    ),
    title: "Drag to reframe",
    description: "After selecting a clip, drag the video preview to reposition the crop area. Pinch to zoom on mobile.",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[#C2F159]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    ),
    title: "Cut & rearrange clips",
    description: "Drag clip edges to trim. Use the scissors button to split at the playhead. Drag clips to reorder.",
  },
];

export function OnboardingTour() {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    try {
      const done = localStorage.getItem(STORAGE_KEY);
      if (!done) {
        setVisible(true);
      }
    } catch {
      // localStorage not available - skip tour
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    setVisible(false);
  };

  const next = () => {
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      dismiss();
    }
  };

  if (!visible) return null;

  const current = STEPS[step];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 w-full max-w-sm mx-4 p-7">
        {/* Close */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
          aria-label="Skip tutorial"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Step dots */}
        <div className="flex items-center gap-1.5 mb-6">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === step ? "w-5 bg-[#C2F159]" : "w-1.5 bg-neutral-200 dark:bg-neutral-700"
              }`}
            />
          ))}
        </div>

        {/* Icon */}
        <div className="flex items-center justify-center mb-5">
          {current.icon}
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 text-center mb-2">
          {current.title}
        </h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center leading-relaxed mb-7">
          {current.description}
        </p>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <button
            onClick={dismiss}
            className="text-sm text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
          >
            Skip
          </button>
          <button
            onClick={next}
            className="inline-flex items-center gap-2 rounded-full bg-[#C2F159] px-5 py-2 text-sm font-semibold text-neutral-900 hover:opacity-90 transition-opacity"
          >
            {step < STEPS.length - 1 ? "Next" : "Got it!"}
            {step < STEPS.length - 1 && (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
