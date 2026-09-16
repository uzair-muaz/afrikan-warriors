"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { bringAfricaKeywords } from "@/constants/home";
import { scrollToY } from "@/components/layout/SmoothScroll";
import { cn } from "@/lib/cn";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function BringAfricaSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const count = bringAfricaKeywords.length;
  const current = bringAfricaKeywords[active];

  const setIndex = (index: number) => {
    activeRef.current = index;
    setActive(index);
  };

  const goTo = useCallback(
    (index: number) => {
      const trigger = triggerRef.current;

      if (!trigger) {
        setIndex(index >= count ? 0 : Math.max(0, index));
        return;
      }

      if (index >= count) {
        scrollToY(trigger.end + 8);
        return;
      }

      const clamped = Math.max(0, Math.min(count - 1, index));
      const progress = (clamped + 0.5) / count;
      scrollToY(trigger.start + (trigger.end - trigger.start) * progress);
    },
    [count],
  );

  useGSAP(
    () => {
      const container = containerRef.current;
      const sticky = stickyRef.current;
      if (!container || !sticky) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const applyHeight = () => {
          const next = `${sticky.offsetHeight * count}px`;
          if (container.style.height !== next) {
            container.style.height = next;
          }
        };

        ScrollTrigger.addEventListener("refreshInit", applyHeight);
        applyHeight();

        const headerOffset = () =>
          getComputedStyle(document.documentElement)
            .getPropertyValue("--header-h")
            .trim() || "0px";

        const trigger = ScrollTrigger.create({
          trigger: container,
          start: () => `top ${headerOffset()}`,
          end: "bottom bottom",
          scrub: 0.35,
          onUpdate: (self) => {
            const next = Math.min(
              count - 1,
              Math.floor(self.progress * count),
            );
            if (activeRef.current === next) return;
            setIndex(next);
          },
        });

        triggerRef.current = trigger;

        return () => {
          trigger.kill();
          triggerRef.current = null;
          ScrollTrigger.removeEventListener("refreshInit", applyHeight);
          container.style.removeProperty("height");
        };
      });

      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [count] },
  );

  return (
    <section className="relative border-y border-primary/10">
      <div ref={containerRef} className="relative w-full">
        <div
          ref={stickyRef}
          className="sticky top-(--header-h) flex h-[calc(100svh-var(--header-h))] cursor-pointer flex-col overflow-hidden bg-stage select-none"
          onClick={() => goTo(activeRef.current + 1)}
        >
          <div className="absolute inset-0">
            {bringAfricaKeywords.map((item, i) => (
              <div
                key={item.word}
                className={cn(
                  "absolute inset-0 transition-opacity duration-500 ease-in-out",
                  i === active ? "opacity-100" : "opacity-0",
                )}
                aria-hidden={i !== active}
              >
                <Image
                  src={item.image}
                  alt={i === active ? item.alt : ""}
                  fill
                  sizes="100vw"
                  className="pointer-events-none object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-stage via-stage/50 to-stage/25" />
              </div>
            ))}
          </div>

          <div className="relative z-10 flex h-full flex-col justify-end px-margin-mobile pb-10 pt-28 md:px-margin-desktop md:pb-14">
            <p className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-3">
              Hakuna Matata — No Worries
            </p>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase mb-6">
              We Bring Africa <span className="text-primary">To You</span>
            </h2>
            <p
              key={current.word}
              className="font-display-lg text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter text-primary leading-none mb-8"
            >
              {current.word}
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {bringAfricaKeywords.map((item, i) => (
                <li key={item.word}>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      goTo(i);
                    }}
                    className={cn(
                      "font-label-caps text-[0.65rem] md:text-label-caps uppercase tracking-widest transition-colors duration-300",
                      i === active
                        ? "text-primary"
                        : "text-on-surface-variant/50 hover:text-on-surface",
                    )}
                    aria-current={i === active ? "true" : undefined}
                    aria-label={`Skip to ${item.word}`}
                  >
                    {item.word}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
