"use client";

import { useState, useEffect, useRef } from "react";

const STORAGE_KEY = "freecropper_onboarding_v2_done";

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
  // -1 = intro screen, 0..3 = steps
  const [step, setStep] = useState(-1);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      // localStorage not available
    }
  }, []);

  // Play current video, pause all others
  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === step) {
        vid.currentTime = 0;
        vid.play().catch(() => {});
      } else {
        vid.pause();
      }
    });
  }, [step, visible]);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    setVisible(false);
  };

  const startTour = () => setStep(0);

  const next = () => {
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      dismiss();
    }
  };

  const prev = () => {
    if (step > 0) setStep(step - 1);
    else setStep(-1); // back to intro
  };

  if (!visible) return null;

  const isIntro = step === -1;
  const current = isIntro ? null : STEPS[step];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 w-full max-w-sm mx-4 overflow-hidden">

        {/* ── INTRO SCREEN ── */}
        {isIntro && (
          <div className="flex flex-col items-center px-7 pt-10 pb-8 text-center">
            {/* Animated icon */}
            <div className="relative mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#C2F159] flex items-center justify-center shadow-lg animate-bounce-slow">
                <svg className="w-8 h-8 text-neutral-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-2xl bg-[#C2F159]/30 animate-ping-slow" />
            </div>

            <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
              Welcome to <span className="text-[#C2F159]" style={{WebkitTextFillColor: undefined}}>Free</span>cropper
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8">
              Let's walk you through the 4 key steps to crop and export your video like a pro — takes under 30s.
            </p>

            {/* Step preview pills */}
            <div className="flex flex-col gap-2 w-full mb-8">
              {STEPS.map((s, i) => (
                <div key={i} className="flex items-center gap-3 text-left">
                  <span className="w-5 h-5 rounded-full bg-[#C2F159]/20 text-[#7aaa1a] text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">{s.title}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={startTour}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#C2F159] px-6 py-3 text-sm font-bold text-neutral-900 hover:opacity-90 transition-opacity mb-3"
            >
              Start Tour
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={dismiss}
              className="text-xs text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
            >
              Skip for now
            </button>
          </div>
        )}

        {/* ── STEP SCREENS ── */}
        {!isIntro && (
          <>
            {/* Video area - all preloaded, CSS opacity toggle */}
            <div className="relative w-full bg-black" style={{ aspectRatio: "16/9" }}>
              {STEPS.map((s, i) => (
                <video
                  key={s.video}
                  ref={(el) => { videoRefs.current[i] = el; }}
                  src={s.video}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-200"
                  style={{ opacity: i === step ? 1 : 0 }}
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
                {current!.title}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5">
                {current!.description}
              </p>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <button
                  onClick={prev}
                  className="text-sm text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
                >
                  {step === 0 ? "Back" : "Back"}
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
          </>
        )}
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-ping-slow { animation: ping-slow 2s ease-out infinite; }
      `}</style>
    </div>
  );
}
