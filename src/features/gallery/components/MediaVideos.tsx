import { SectionHeading } from "@/components/ui/SectionHeading";
import { mediaVideos } from "@/constants/gallery";
import { TrailerPlaceholder } from "@/features/shows/components/TrailerPlaceholder";

export function MediaVideos() {
  return (
    <section
      id="videos"
      className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-stack-xl scroll-mt-32"
    >
      <SectionHeading
        eyebrow="Watch Afrikan Warriors"
        title={
          <>
            Watch Afrikan <span className="text-primary">Warriors</span>
          </>
        }
        className="mb-10"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {mediaVideos.map((item) => (
          <article
            key={`${item.title}-${item.subtitle}`}
            className={
              item.videoId || item.href
                ? "flex h-full flex-col"
                : "flex h-full flex-col pointer-events-none opacity-50"
            }
          >
            <TrailerPlaceholder
              image={item.image}
              alt={item.alt}
              videoId={item.videoId}
              videoTitle={`${item.title} — ${item.subtitle}`}
              start={item.start}
              end={item.end}
              href={item.href}
            />
            <h3 className="font-headline-md text-xl leading-7 text-on-surface uppercase mt-4 line-clamp-2 min-h-14">
              {item.title}
            </h3>
            <p className="font-label-caps text-label-caps leading-5 text-primary uppercase tracking-widest mt-2 line-clamp-2 min-h-10">
              {item.subtitle}
              {item.videoId || item.href ? null : " · Coming soon"}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
