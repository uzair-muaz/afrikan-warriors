"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { cn } from "@/lib/cn";
import {
  liveFeatures,
  type LiveClip,
  type LiveFeature,
} from "@/constants/live-features";

export function LiveFeatures({
  features = liveFeatures,
  eyebrow = "Afrikan Warriors Live",
  title = (
    <>
      Featured <span className="text-primary">performances</span>
    </>
  ),
  description = "Shows and events from the company on stage, on television and at festivals.",
  moreHref,
  moreLabel,
}: {
  features?: readonly LiveFeature[];
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  moreHref?: string;
  moreLabel?: string;
}) {
  return (
    <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
        className="mb-12"
      />
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-stretch">
        {features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </ul>
      {moreHref && moreLabel ? (
        <p className="mt-10 text-center">
          <Link
            href={moreHref}
            className="inline-flex font-label-caps text-label-caps uppercase tracking-widest text-primary border-b border-primary pb-1"
          >
            {moreLabel} →
          </Link>
        </p>
      ) : null}
    </section>
  );
}

function FeatureCard({ feature }: { feature: LiveFeature }) {
  const [index, setIndex] = useState(0);
  const clip = feature.clips[index] ?? feature.clips[0];

  return (
    <li className="border border-primary/20 bg-surface-container p-6 md:p-8 flex h-full flex-col">
      <h3 className="font-headline-md text-2xl leading-8 text-on-surface uppercase line-clamp-3 min-h-24">
        {feature.title}
      </h3>
      <p className="font-body-md text-sm leading-5 text-on-surface-variant mt-3 line-clamp-2 min-h-10">
        {feature.note ?? "\u00a0"}
      </p>
      <div className="mt-6 flex min-h-11 flex-wrap items-center gap-2">
        {feature.clips.length > 1
          ? feature.clips.map((item, clipIndex) => (
              <button
                key={item.label}
                type="button"
                aria-pressed={clipIndex === index}
                onClick={() => setIndex(clipIndex)}
                className={cn(
                  "border px-4 py-2 font-label-caps text-label-caps uppercase tracking-widest",
                  clipIndex === index
                    ? "border-primary bg-primary text-on-primary"
                    : "border-primary/40 text-primary",
                )}
              >
                {item.label}
              </button>
            ))
          : null}
      </div>
      {clip ? (
        <div className="mt-auto pt-4">
          <ClipPlayer title={feature.title} clip={clip} />
        </div>
      ) : null}
    </li>
  );
}

function ClipPlayer({ title, clip }: { title: string; clip: LiveClip }) {
  const label = `${title} — ${clip.label}`;

  if (clip.videoId) {
    return (
      <YouTubeEmbed
        videoId={clip.videoId}
        title={label}
        start={clip.start}
        end={clip.end}
      />
    );
  }

  return (
    <a
      href={clip.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group w-full relative block"
    >
      <div className="aspect-video w-full bg-platform relative border-l border-primary/20 overflow-hidden flex flex-col items-center justify-center gap-4">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-on-primary transition-transform duration-500 group-hover:scale-105">
          <Icon name="play_arrow" filled className="text-4xl" />
        </span>
        <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary">
          {clip.label}
        </span>
      </div>
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary z-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary z-20 pointer-events-none" />
    </a>
  );
}
