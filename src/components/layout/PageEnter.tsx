"use client";

import { useRef, type ReactNode } from "react";

/**
 * Route enter fade. The class is removed when the animation ends so it
 * cannot linger on the page wrapper.
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
