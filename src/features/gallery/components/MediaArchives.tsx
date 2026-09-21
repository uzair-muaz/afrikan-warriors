import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { archiveChapters } from "@/constants/gallery";

export function MediaArchives() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-stack-xl">
      <SectionHeading
        eyebrow="From the Archives"
        title={
          <>
            30+ Years of Afrikan{" "}
            <span className="text-primary">Warriors</span>
          </>
        }
        className="mb-10"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
        {archiveChapters.map((chapter) => (
          <article key={chapter.era} className="group">
            <div className="relative aspect-3/4 overflow-hidden border border-primary/15">
              <Image
                src={chapter.src}
                alt={chapter.alt}
                fill
                sizes="(max-width: 768px) 50vw, 14vw"
                className="object-cover hover-media group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-stage via-stage/20 to-transparent" />
              <p className="absolute inset-x-2 bottom-3 font-label-caps text-[0.6rem] md:text-label-caps text-primary uppercase tracking-widest text-center">
                {chapter.era}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
