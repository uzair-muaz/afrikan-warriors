"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { site } from "@/constants/nav";

function scrollToTop() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

/**
 * Remounts on every pathname change so the curtain always starts fresh
 * (same as first load) and scroll is reset under the cover.
 */
export function ShutterIntro() {
  const pathname = usePathname();
  return <CurtainOverlay key={pathname} />;
}

function CurtainOverlay() {
  const [done, setDone] = useState(false);

  useLayoutEffect(() => {
    scrollToTop();
  }, []);

  if (done) return null;

  return (
    <div
      className="shutter-intro"
      aria-hidden
      onAnimationEnd={(event) => {
        if (event.animationName !== "curtain-split-top") return;
        scrollToTop();
        setDone(true);
        window.dispatchEvent(new CustomEvent("aw:curtain-done"));
      }}
    >
      <div className="curtain-panel curtain-panel-top" />
      <div className="curtain-panel curtain-panel-bottom" />
      <div className="curtain-seam" />
      <div className="shutter-brand">
        <p className="font-display-lg text-headline-md md:text-headline-lg text-primary tracking-tighter">
          {site.name}
        </p>
        <div className="heritage-divider max-w-[140px] mx-auto mt-5 opacity-80" />
        <p className="font-label-caps text-label-caps text-on-surface-variant mt-5">
          {site.tagline}
        </p>
      </div>
    </div>
  );
}
