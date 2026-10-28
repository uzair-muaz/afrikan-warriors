import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeLiveHighlights } from "@/constants/live-features";
import { youtubeThumbnail } from "@/constants/media";
import { TrailerPlaceholder } from "@/features/shows/components/TrailerPlaceholder";

export function HomeLiveClips() {
  return (
    <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <SectionHeading
        eyebrow="From the stage"
        title={
          <>
            Afrikan Warriors <span className="text-primary">Live</span>
          </>
        }
        description="Performances from the stage, television and festivals."
        className="mb-12"
      />
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {homeLiveHighlights.map((feature) => {
          const clip = feature.clips[0];
          if (!clip?.videoId) return null;
          return (
            <li key={feature.title} className="flex h-full flex-col">
              <TrailerPlaceholder
                image={youtubeThumbnail(clip.videoId)}
                alt={feature.title}
                videoId={clip.videoId}
                videoTitle={feature.title}
                start={clip.start}
                end={clip.end}
              />
              <h3 className="font-headline-md text-xl leading-7 text-on-surface uppercase mt-4 line-clamp-3 min-h-[5.25rem]">
                {feature.title}
              </h3>
              <p className="font-body-md text-sm leading-5 text-on-surface-variant mt-2 line-clamp-2 min-h-10">
                {feature.note ?? "\u00a0"}
              </p>
            </li>
          );
        })}
      </ul>
      <p className="mt-10 text-center">
        <Link
          href="/shows/regular-show"
          className="inline-flex font-label-caps text-label-caps uppercase tracking-widest text-primary border-b border-primary pb-1"
        >
          All live performances →
        </Link>
      </p>
    </section>
  );
}
