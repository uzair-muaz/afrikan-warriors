import { SectionHeading } from "@/components/ui/SectionHeading";
import { mediaVideos } from "@/constants/gallery";
import { TrailerPlaceholder } from "@/features/shows/components/TrailerPlaceholder";

export function MediaFeaturedShowreel() {
  const featured = mediaVideos.find((item) => item.featured);
  if (!featured) return null;

  return (
    <section
      id="videos"
      className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-stack-xl scroll-mt-32"
    >
      <TrailerPlaceholder
        image={featured.image}
        alt={featured.alt}
        label={`${featured.title} — ${featured.subtitle}${featured.videoId ? "" : " · Coming soon"}`}
        videoId={featured.videoId}
        videoTitle={featured.title}
      />
    </section>
  );
}

export function MediaVideos() {
  const rest = mediaVideos.filter((item) => !item.featured);

  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-stack-xl">
      <SectionHeading
        eyebrow="Watch Afrikan Warriors"
        title={
          <>
            Watch Afrikan <span className="text-primary">Warriors</span>
          </>
        }
        className="mb-10"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rest.map((item) => (
          <article
            key={item.title}
            className={item.videoId ? undefined : "pointer-events-none opacity-50"}
          >
            <TrailerPlaceholder
              image={item.image}
              alt={item.alt}
              videoId={item.videoId}
              videoTitle={item.title}
            />
            <h3 className="font-headline-md text-xl text-on-surface uppercase mt-4">
              {item.title}
            </h3>
            <p className="font-label-caps text-label-caps text-primary uppercase tracking-widest mt-2">
              {item.subtitle}
              {item.videoId ? null : " · Coming soon"}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
