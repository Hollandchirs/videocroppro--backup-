"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "freecropper_onboarding_done";

const STEPS = [
  {
    video: "/onboarding-step1.mp4",
    title: "Choose a size to analyze",
    description: "Pick a target platform or aspect ratio. AI will analyze your video and auto-generate smart crop clips.",
  },
  {
    video: "/onboarding-step2.mp4",
    title: "Select a clip to reframe",
    description: "Click any clip in the timeline, then drag left or right on the preview to reposition the crop area.",
  },
  {
    video: "/onboarding-step3.mp4",
    title: "Cut a clip",
    description: "Move the playhead to the exact moment you want, then hit the scissors button to split the clip in two.",
  },
  {
    video: "/onboarding-step4.mp4",
    title: "Drag to rearrange clips",
    description: "Drag a clip over another to quickly swap or merge segments — great for combining similar shots.",
  },
];

export function OnboardingTour() {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      // localStorage not available
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

  const prev = () => {
    if (step > 0) setStep(step - 1);
  };

  if (!visible) return null;

  const current = STEPS[step];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 w-full max-w-sm mx-4 overflow-hidden">

        {/* Video - all rendered at once, CSS toggles visibility to avoid reload black flash */}
        <div className="relative w-full bg-black" style={{ aspectRatio: "16/9" }}>
          {STEPS.map((s, i) => (
            <video
              key={s.video}
              src={s.video}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-200"
              style={{ opacity: i === step ? 1 : 0 }}
              autoPlay={i === step}
              loop
              muted
              playsInline
              preload="auto"
            />
          ))}
          {/* Step badge */}
          <div className="absolute top-3 left-3 bg-black/60 text-white text-xs font-medium rounded-full px-2.5 py-1 z-10">
            {step + 1} / {STEPS.length}
          </div>
          {/* Close */}
          <button
            onClick={dismiss}
            className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white rounded-full w-7 h-7 flex items-center justify-center transition-colors z-10"
            aria-label="Skip tutorial"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Step dots */}
          <div className="flex items-center gap-1.5 mb-4">
            {STEPS.map((_, i) => (
              <button
                key={i}
                onClick={() => setStep(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === step ? "w-5 bg-[#C2F159]" : "w-1.5 bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300"
                }`}
              />
            ))}
          </div>

          <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 mb-1.5">
            {current.title}
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5">
            {current.description}
          </p>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <button
              onClick={step === 0 ? dismiss : prev}
              className="text-sm text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
            >
              {step === 0 ? "Skip" : "Back"}
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
    </div>
  );
}
