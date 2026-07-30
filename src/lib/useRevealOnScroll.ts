import { useEffect, useRef, useState } from "react";

/**
 * Reveals an element the first time it scrolls into view.
 *
 * Returns `revealed: true` immediately when the visitor prefers reduced motion,
 * when the section opts out, or when IntersectionObserver is unavailable, so the
 * content is never hidden behind an animation that will not run.
 */
export function useRevealOnScroll<T extends HTMLElement>(enabled = true) {
  const ref = useRef<T | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setRevealed(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [enabled]);

  return { ref, revealed };
}
