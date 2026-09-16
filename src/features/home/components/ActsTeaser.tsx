"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CoverImage } from "@/components/ui/CoverImage";
import { HeritageDivider } from "@/components/ui/HeritageDivider";
import { acts } from "@/constants/acts";
import { cn } from "@/lib/cn";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Horizontal gallery driven by vertical scroll — same sticky + fill-line
 * mapping as Our Journey.
 */
export function ActsTeaser() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const sticky = stickyRef.current;
      const track = trackRef.current;
      const fill = fillRef.current;
      if (!container || !sticky || !track || !fill) return;

      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const getDistance = () =>
            Math.max(1, track.scrollWidth - window.innerWidth);

          const applyHeight = () => {
            const next = `${sticky.offsetHeight + getDistance()}px`;
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
              scrub: 0.6,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                fill.style.width = `${self.progress * 100}%`;
              },
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
            fill.style.width = "0%";
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
      <div className="md:hidden px-margin-mobile py-16">
        <header className="mb-8 text-center">
          <p className="mb-3 font-label-caps text-label-caps uppercase tracking-widest text-primary">
            Gallery
          </p>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile uppercase text-on-surface">
            Our <span className="text-primary">Acts</span>
          </h2>
          <HeritageDivider className="mx-auto mt-6 max-w-xs" />
        </header>
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
          {acts.map((act) => (
            <ActCard key={act.title} act={act} className="w-[78vw] snap-start" />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/acts"
            className="border-b border-primary pb-1 font-label-caps text-label-caps uppercase tracking-widest text-primary hover:opacity-80"
          >
            Explore All Acts →
          </Link>
        </div>
      </div>

      <div ref={containerRef} className="relative hidden w-full md:block">
        <div
          ref={stickyRef}
          className="relative z-10 flex h-auto w-full flex-col overflow-hidden bg-stage md:sticky md:top-0 md:h-svh"
        >
          <header className="shrink-0 px-margin-desktop pt-24 pb-6 text-center">
            <p className="mb-3 font-label-caps text-label-caps uppercase tracking-widest text-primary">
              Gallery
            </p>
            <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface">
              Our <span className="text-primary">Acts</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl font-body-lg text-on-surface-variant">
              Keep scrolling — the gallery moves with you.
            </p>
            <HeritageDivider className="mx-auto mt-6 max-w-xs" />
            <div className="relative mx-auto mt-10 h-px max-w-5xl bg-primary/20">
              <div
                ref={fillRef}
                className="absolute inset-y-0 left-0 w-0 bg-primary"
              />
            </div>
          </header>

          <div className="relative min-h-0 flex-1 overflow-hidden">
            <div
              ref={trackRef}
              className="flex h-full w-max items-center gap-6 px-margin-desktop will-change-transform"
            >
              {acts.map((act) => (
                <ActCard
                  key={act.title}
                  act={act}
                  className="w-[340px] lg:w-[380px]"
                />
              ))}
            </div>
          </div>

          <footer className="flex shrink-0 flex-col items-center gap-3 px-margin-desktop pb-10 pt-4">
            <p className="font-label-caps text-[0.65rem] uppercase tracking-[0.25em] text-primary/80 motion-reduce:hidden">
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

function ActCard({
  act,
  className,
}: {
  act: (typeof acts)[number];
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative aspect-3/4 shrink-0 overflow-hidden border border-primary/20",
        className,
      )}
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
  );
}
