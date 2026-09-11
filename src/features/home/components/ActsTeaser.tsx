"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CoverImage } from "@/components/ui/CoverImage";
import { HeritageDivider } from "@/components/ui/HeritageDivider";
import { acts } from "@/constants/acts";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Extra vertical scroll → slower horizontal scrub */
const SCROLL_SLOWDOWN = 2.25;

/**
 * Fake horizontal scroll (GSAP ScrollTrigger).
 * pinReparent avoids broken fixed positioning when an ancestor had a transform
 * (e.g. page-enter animation).
 */
export function ActsTeaser() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;

      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          /**
           * Stop when the track’s right edge meets the viewport —
           * last cards fill the frame (no empty black on the right).
           */
          const getDistance = () =>
            Math.max(1, track.scrollWidth - window.innerWidth);

          const tween = gsap.to(track, {
            x: () => -getDistance(),
            ease: "none",
            scrollTrigger: {
              trigger: container,
              pin: true,
              pinReparent: true,
              scrub: 1,
              start: "top top",
              end: () => `+=${getDistance() * SCROLL_SLOWDOWN}`,
              invalidateOnRefresh: true,
              anticipatePin: 0,
            },
          });

          const refresh = () => ScrollTrigger.refresh();
          window.addEventListener("aw:curtain-done", refresh);

          const images = gsap.utils.toArray<HTMLImageElement>("img", track);
          images.forEach((img) => {
            if (!img.complete) {
              img.addEventListener("load", refresh, { once: true });
            }
          });

          // Defer setup until after page-enter transform is cleared
          requestAnimationFrame(refresh);
          const later = window.setTimeout(refresh, 800);

          return () => {
            window.clearTimeout(later);
            window.removeEventListener("aw:curtain-done", refresh);
            tween.scrollTrigger?.kill();
            tween.kill();
            gsap.set(track, { clearProps: "transform" });
          };
        },
      );

      return () => mm.revert();
    },
    { scope: containerRef },
  );

  return (
    <section
      id="acts"
      className="border-t border-primary/10 scroll-mt-32"
      aria-label="Our Acts"
    >
      <div
        ref={containerRef}
        className="relative h-auto w-full overflow-hidden bg-stage md:h-svh"
      >
        <div className="flex h-full flex-col">
          <header className="shrink-0 px-margin-mobile pt-20 pb-4 text-center md:px-margin-desktop md:pt-28 md:pb-3">
            <p className="mb-3 font-label-caps text-label-caps uppercase tracking-widest text-primary">
              Gallery
            </p>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile uppercase text-on-surface md:font-headline-lg md:text-headline-lg">
              Our <span className="text-primary">Acts</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl font-body-lg text-on-surface-variant">
              Keep scrolling — the gallery moves with you.
            </p>
            <HeritageDivider className="mx-auto mt-6 max-w-xs" />
          </header>

          <div className="relative min-h-0 flex-1 overflow-hidden">
            <div className="flex h-full items-center">
              <div
                ref={trackRef}
                className="relative flex w-max gap-4 px-margin-mobile will-change-transform md:gap-6 md:px-margin-desktop max-md:overflow-x-auto max-md:pb-2"
              >
                {acts.map((act) => (
                  <article
                    key={act.title}
                    className="group relative aspect-3/4 w-[78vw] shrink-0 overflow-hidden border border-primary/20 sm:w-[48vw] md:w-[340px] lg:w-[380px]"
                  >
                    <CoverImage
                      src={act.image}
                      alt={act.alt}
                      sizes="(max-width: 768px) 78vw, 380px"
                      className="hover-media group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-stage via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-stage/10 transition-colors duration-500 group-hover:bg-stage/45" />
                    <h3 className="absolute inset-x-0 bottom-0 p-5 font-label-caps text-label-caps uppercase tracking-widest text-on-surface">
                      {act.title}
                    </h3>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <footer className="flex shrink-0 flex-col items-center gap-3 px-margin-mobile py-6 md:px-margin-desktop md:pb-10 md:pt-4">
            <p className="hidden font-label-caps text-[0.65rem] uppercase tracking-[0.25em] text-primary/80 md:block motion-reduce:hidden">
              Scroll to explore
            </p>
            <Link
              href="/acts"
              className="border-b border-primary pb-1 font-label-caps text-label-caps uppercase tracking-widest text-primary hover:opacity-80"
            >
              Explore All Acts →
            </Link>
          </footer>
        </div>
      </div>
    </section>
  );
}
