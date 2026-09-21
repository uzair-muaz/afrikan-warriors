"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CoverImage } from "@/components/ui/CoverImage";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { storyTimeline } from "@/constants/home";
import { cn } from "@/lib/cn";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type StoryTimelineProps = {
  variant?: "journey" | "line";
};

export function StoryTimeline({ variant = "journey" }: StoryTimelineProps) {
  if (variant === "line") {
    return <LineTimeline />;
  }

  return (
    <div id="story" className="scroll-mt-32">
      <JourneyDesktop />
      <JourneyMobile />
    </div>
  );
}

function LineTimeline() {
  return (
    <section
      id="story"
      className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto scroll-mt-32"
    >
      <ol className="relative border-l border-primary/30 ml-3 md:ml-6 space-y-10">
        {storyTimeline.map((item) => (
          <li key={item.year} className="pl-8 md:pl-12 relative">
            <span className="absolute left-[-5px] top-1.5 size-2.5 bg-primary rotate-45" />
            <h3 className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-2">
              {item.year}
            </h3>
            <p className="font-body-md text-on-surface-variant">{item.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function JourneyMobile() {
  return (
    <section
      id="story"
      className="md:hidden py-stack-xl bg-surface-container-lowest border-y border-primary/10"
    >
      <div className="px-margin-mobile max-w-container-max mx-auto">
        <SectionHeading
          title={
            <>
              Our <span className="text-primary">Journey</span>
            </>
          }
          description="From Dar es Salaam to international stages — a story told through touring, television and theatre."
          className="mb-12"
        />
        <ol className="relative border-l border-primary/40 ml-3 space-y-12">
          {storyTimeline.map((item) => (
            <li key={item.year} className="pl-8 relative">
              <span className="absolute left-[-5px] top-1.5 size-2.5 bg-primary rotate-45" />
              <p className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-2">
                {item.mark}
              </p>
              <h3 className="font-headline-md text-xl text-on-surface uppercase mb-3">
                {item.year}
              </h3>
              {item.image ? (
                <div className="relative aspect-video mb-4 overflow-hidden border border-primary/20">
                  <CoverImage src={item.image} alt="" />
                </div>
              ) : null}
              <p className="font-body-md text-on-surface-variant">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function JourneyDesktop() {
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

          const tween = gsap.fromTo(
            track,
            { x: () => -getDistance() },
            {
              x: 0,
              ease: "none",
              immediateRender: true,
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
            },
          );

          return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
            gsap.set(track, { clearProps: "transform" });
            ScrollTrigger.removeEventListener("refreshInit", applyHeight);
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
    <section className="hidden md:block bg-surface-container-lowest border-y border-primary/10 scroll-mt-32">
      <div ref={containerRef} className="relative w-full">
        <div
          ref={stickyRef}
          className="relative z-10 flex h-auto w-full flex-col overflow-hidden bg-surface-container-lowest md:sticky md:top-0 md:h-svh"
        >
          <header className="shrink-0 px-margin-desktop pt-24 pb-6 text-center">
            <SectionHeading
              title={
                <>
                  Our <span className="text-primary">Journey</span>
                </>
              }
              description="From Dar es Salaam to international stages — a story told through touring, television and theatre."
            />
            <div className="relative mx-auto mt-10 h-px max-w-5xl bg-primary/20">
              <div
                ref={fillRef}
                className="absolute inset-y-0 right-0 w-0 bg-primary"
              />
            </div>
          </header>

          <div className="relative min-h-0 flex-1 overflow-hidden">
            <div
              ref={trackRef}
              className="flex h-full w-max flex-row-reverse items-stretch gap-8 px-margin-desktop will-change-transform"
            >
              {storyTimeline.map((item, index) => (
                <article
                  key={item.year}
                  className={cn(
                    "relative grid w-[72vw] max-w-5xl shrink-0 grid-cols-2 overflow-hidden border border-primary/20",
                    index === storyTimeline.length - 1 && "border-primary",
                  )}
                >
                  <div className="relative min-h-full">
                    {item.image ? (
                      <CoverImage src={item.image} alt="" />
                    ) : (
                      <div className="absolute inset-0 bg-platform" />
                    )}
                  </div>
                  <div className="flex flex-col justify-center bg-platform p-12">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <Icon name={item.icon} className="text-primary text-3xl" />
                      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                        {item.mark}
                      </span>
                    </div>
                    <h3 className="font-headline-md text-3xl text-on-surface uppercase mb-4">
                      {item.year}
                    </h3>
                    <p className="font-body-md text-on-surface-variant max-w-lg">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
