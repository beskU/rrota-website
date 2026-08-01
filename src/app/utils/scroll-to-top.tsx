"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const VISIBILITY_THRESHOLD = 420;

function ArrowUpIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const updateVisibility = () => {
      frameRef.current = null;

      setIsVisible(
        window.scrollY > VISIBILITY_THRESHOLD
      );
    };

    const handleScroll = () => {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current =
        window.requestAnimationFrame(
          updateVisibility
        );
    };

    updateVisibility();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(
          frameRef.current
        );
      }
    };
  }, []);

  const scrollToTop = useCallback(() => {
    const prefersReducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion
        ? "auto"
        : "smooth",
    });
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      className={`fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/24 bg-[#07101d]/90 text-cyan-100 shadow-[0_14px_40px_rgba(0,0,0,0.35),0_0_24px_rgba(34,211,238,0.12)] backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-cyan-400/[0.14] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050711] motion-reduce:transform-none motion-reduce:transition-none sm:right-6 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUpIcon />
    </button>
  );
}
