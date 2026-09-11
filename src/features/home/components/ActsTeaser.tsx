import Link from "next/link";
import { CoverImage } from "@/components/ui/CoverImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { acts } from "@/constants/acts";

export function ActsTeaser() {
  return (
    <section className="py-stack-xl border-t border-primary/10">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-10">
        <SectionHeading
          title={
            <>
              Our <span className="text-primary">Acts</span>
            </>
          }
          description="Skills inside the productions — hover to reveal each act."
        />
      </div>

      <div
        className="flex gap-3 overflow-x-auto px-margin-mobile md:px-margin-desktop pb-4 snap-x snap-mandatory"
        aria-label="Acts gallery"
      >
        {acts.map((act) => (
          <article
            key={act.title}
            className="group relative shrink-0 w-[70vw] sm:w-[40vw] md:w-[28vw] lg:w-[22vw] aspect-3/4 overflow-hidden border border-primary/20 snap-start"
          >
            <CoverImage
              src={act.image}
              alt={act.alt}
              className="hover-media group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-stage via-transparent to-transparent" />
            <div className="absolute inset-0 bg-stage/10 group-hover:bg-stage/45 transition-colors duration-500" />
            <h3 className="absolute inset-x-0 bottom-0 p-6 font-label-caps text-label-caps text-on-surface uppercase tracking-widest opacity-100 md:opacity-0 md:translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-[opacity,translate] duration-500">
              {act.title}
            </h3>
          </article>
        ))}
      </div>

      <div className="text-center mt-10 px-margin-mobile">
        <Link
          href="/acts"
          className="font-label-caps text-label-caps uppercase tracking-widest text-primary border-b border-primary pb-1 hover:opacity-80"
        >
          Explore All Acts →
        </Link>
      </div>
    </section>
  );
}
