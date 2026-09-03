"use client";

import { useState } from "react";
import { site } from "@/constants/nav";

export function ShutterIntro() {
  const [done, setDone] = useState(false);

  if (done) return null;

  return (
    <div
      className="shutter-intro"
      aria-hidden
      onAnimationEnd={(event) => {
        if (event.animationName === "curtain-split-top") {
          setDone(true);
        }
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
