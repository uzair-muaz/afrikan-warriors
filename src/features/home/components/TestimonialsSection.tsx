"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/constants/home";
import { cn } from "@/lib/cn";

const ROTATE_MS = 8000;

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduceMotion || paused) return;
    const id = window.setTimeout(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, ROTATE_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, reduceMotion]);

  const item = testimonials[index];

  return (
    <section
      className="py-stack-lg bg-surface-container-lowest px-margin-mobile md:px-margin-desktop scroll-mt-32"
      id="reviews"
    >
      <div className="max-w-container-max mx-auto">
        <SectionHeading
          title={
            <>
              What They <span className="text-primary">Say</span>
            </>
          }
          className="mb-16"
        />
        <blockquote
          className="text-center max-w-4xl mx-auto min-h-[280px] md:min-h-[320px] flex flex-col justify-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Icon
            name="format_quote"
            filled
            className="text-primary text-5xl opacity-50 mb-8 mx-auto"
          />
          <p
            key={item.name}
            className="font-headline-md text-2xl md:text-4xl text-on-surface leading-snug mb-10"
          >
            &ldquo;{item.quote}&rdquo;
          </p>
          <footer>
            <p className="font-label-caps text-primary tracking-widest uppercase mb-1">
              {item.name}
            </p>
            <p className="text-sm text-on-surface-variant font-body-md uppercase">
              {item.title}
            </p>
          </footer>
        </blockquote>
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((entry, i) => (
            <button
              key={entry.name}
              type="button"
              aria-label={`Show testimonial from ${entry.name}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={cn(
                "size-2.5 rounded-full transition-colors",
                i === index ? "bg-primary" : "bg-on-surface/30 hover:bg-on-surface/60",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
