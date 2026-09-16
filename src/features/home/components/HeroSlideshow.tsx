"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const SLIDE_MS = 5000;

type Slide = {
  src: string;
  alt: string;
};

export function useHeroSlides(length: number) {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduceMotion || length < 2) return;
    const id = window.setTimeout(() => {
      setIndex((current) => (current + 1) % length);
    }, SLIDE_MS);
    return () => window.clearTimeout(id);
  }, [index, reduceMotion, length]);

  return { index, setIndex, reduceMotion };
}

export function HeroSlideshow({
  slides,
  index,
  reduceMotion,
}: {
  slides: readonly Slide[];
  index: number;
  reduceMotion: boolean;
}) {
  return (
    <>
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-in-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={i === index ? slide.alt : ""}
            fill
            sizes="100vw"
            priority={i === 0}
            className={cn(
              "object-cover object-top",
              // i === index && !reduceMotion && "animate-ken-burns",
            )}
          />
        </div>
      ))}
    </>
  );
}

export function HeroPager({
  slides,
  index,
  reduceMotion,
  onSelect,
}: {
  slides: readonly Slide[];
  index: number;
  reduceMotion: boolean;
  onSelect: (next: number) => void;
}) {
  return (
    <nav
      className="relative z-20 mt-10 flex justify-center"
      aria-label="Hero slides"
    >
      <div className="flex cursor-pointer items-center gap-2.5 rounded-full border border-primary/20 bg-void/5 px-5 py-3 backdrop-blur-md">
        {slides.map((slide, i) => {
          const active = i === index;
          return (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show image ${i + 1} of ${slides.length}`}
              aria-current={active ? "true" : undefined}
              onClick={() => onSelect(i)}
              className={cn(
                "relative h-2 cursor-pointer overflow-hidden rounded-full transition-[width,transform,background-color] duration-500 ease-in-out hover:scale-125 motion-reduce:hover:scale-100",
                active
                  ? "w-10 bg-on-surface/20"
                  : "w-2 bg-on-surface/45 hover:bg-on-surface/70",
              )}
            >
              {active && !reduceMotion ? (
                <span
                  key={`${index}-fill`}
                  className="hero-timer-fill absolute inset-0 bg-primary"
                />
              ) : active ? (
                <span className="absolute inset-0 bg-primary" />
              ) : null}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
