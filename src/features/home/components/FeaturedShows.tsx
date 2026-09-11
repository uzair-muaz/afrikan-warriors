import Link from "next/link";
import { CoverImage } from "@/components/ui/CoverImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredShows, tokomileFlagship } from "@/constants/shows";
import { cn } from "@/lib/cn";

export function FeaturedShows() {
  const galleryShows = featuredShows.filter((s) => !s.featured);

  return (
    <section
      className="py-stack-lg bg-surface-container-lowest px-margin-mobile md:px-margin-desktop scroll-mt-32"
      id="shows"
    >
      <div className="max-w-container-max mx-auto">
        <SectionHeading
          title={
            <>
              Experience <span className="text-primary">Our Shows</span>
            </>
          }
          description="A catalogue of productions — theatre, adventure and high-energy African acrobatics."
          className="mb-16"
        />

        <article className="group relative mb-8 overflow-hidden border border-primary/30 min-h-[70vh] md:min-h-[80vh]">
          <CoverImage
            src={tokomileFlagship.image}
            alt={tokomileFlagship.alt}
            className="hover-media-slow group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-stage via-stage/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-14 max-w-3xl">
            <p className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-4">
              {tokomileFlagship.label}
            </p>
            <h3 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface uppercase mb-4">
              {tokomileFlagship.title}
            </h3>
            <p className="font-headline-md text-xl md:text-2xl text-on-surface-variant uppercase tracking-widest mb-6">
              {tokomileFlagship.welcome}
            </p>
            <p className="font-label-caps text-[0.65rem] md:text-label-caps text-primary/90 uppercase tracking-[0.15em] mb-8">
              {tokomileFlagship.meta}
            </p>
            <Link
              href={tokomileFlagship.href}
              className="inline-flex self-start items-center gap-2 font-label-caps text-label-caps uppercase tracking-widest text-primary border-b border-primary pb-1 opacity-100 md:opacity-0 md:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-[opacity,translate] duration-500"
            >
              {tokomileFlagship.cta} →
            </Link>
          </div>
        </article>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryShows.map((show) => (
            <Link
              key={show.slug}
              href={show.href}
              className={cn(
                "group relative block overflow-hidden border border-primary/20 hover:border-primary transition-colors duration-500 min-h-[50vh] md:min-h-[56vh]",
              )}
            >
              <CoverImage
                src={show.image}
                alt={show.alt}
                className="hover-media group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-stage via-stage/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="font-headline-lg text-headline-md text-primary uppercase mb-3">
                  {show.title}
                </h3>
                <p className="font-body-md text-on-surface-variant mb-6 max-w-md">
                  {show.subtitle}
                </p>
                <span className="inline-flex self-start font-label-caps text-label-caps uppercase tracking-widest text-on-surface border-b border-primary/60 pb-1 opacity-100 md:opacity-0 md:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-[opacity,translate] duration-500">
                  Discover the Show →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
