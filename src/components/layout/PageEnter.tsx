"use client";

import { useRef, type ReactNode } from "react";

/**
 * Route enter fade. Clears the animation class when finished so a lingering
 * `transform` cannot break `position: fixed` / GSAP ScrollTrigger pinning.
 */
export function PageEnter({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="page-enter"
      onAnimationEnd={(event) => {
        if (event.target !== ref.current) return;
        if (event.animationName !== "page-enter") return;
        event.currentTarget.classList.remove("page-enter");
      }}
    >
      {children}
    </div>
  );
}
