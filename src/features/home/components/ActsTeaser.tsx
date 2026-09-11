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
 * Horizontal gallery driven by vertical scroll.
 * The viewport is CSS-sticky (not a GSAP pin) so the cards stay on screen
 * while you scroll; the extra height is only the scrub track.
 */
export function ActsTeaser() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const sticky = stickyRef.current;
      const track = trackRef.current;
      if (!container || !sticky || !track) return;

      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const getDistance = () =>
            Math.max(1, track.scrollWidth - window.innerWidth);

          const applyHeight = () => {
            const next = `${sticky.offsetHeight + getDistance() * SCROLL_SLOWDOWN}px`;
            if (container.style.height !== next) {
              container.style.height = next;
            }
          };

          ScrollTrigger.addEventListener("refreshInit", applyHeight);
          applyHeight();

          const tween = gsap.to(track, {
            x: () => -getDistance(),
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: "bottom bottom",
              scrub: 1,
              invalidateOnRefresh: true,
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

          return () => {
            ScrollTrigger.removeEventListener("refreshInit", applyHeight);
            window.removeEventListener("aw:curtain-done", refresh);
            tween.scrollTrigger?.kill();
            tween.kill();
            gsap.set(track, { clearProps: "transform" });
            container.style.removeProperty("height");
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
      <div ref={containerRef} className="relative w-full">
        <div
          ref={stickyRef}
          className="relative z-10 flex h-auto w-full flex-col overflow-hidden bg-stage md:sticky md:top-0 md:h-svh"
        >
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
