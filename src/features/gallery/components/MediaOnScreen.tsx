import { SectionHeading } from "@/components/ui/SectionHeading";
import { onScreenItems } from "@/constants/gallery";
import { TrailerPlaceholder } from "@/features/shows/components/TrailerPlaceholder";

export function MediaOnScreen() {
  return (
    <section
      id="screen"
      className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-stack-xl scroll-mt-32"
    >
      <SectionHeading
        eyebrow="Television"
        title={
          <>
            Afrikan Warriors{" "}
            <span className="text-primary">On Screen</span>
          </>
        }
        className="mb-10"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {onScreenItems.map((item) => (
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
              {item.videoId ? null : " · Archive footage coming soon"}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
