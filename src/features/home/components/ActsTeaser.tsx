import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";
import { acts } from "@/constants/acts";

export function ActsTeaser() {
  const preview = acts.slice(0, 4);

  return (
    <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-primary/10">
      <div className="text-center mb-12">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase mb-4">
          Our <span className="text-primary">Acts</span>
        </h2>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Individual performance skills that sit inside the productions — not the
          shows themselves.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {preview.map((act) => (
          <article
            key={act.title}
            className="relative aspect-3/4 overflow-hidden border border-primary/20"
          >
            <CoverImage src={act.image} alt={act.alt} />
            <div className="absolute inset-0 bg-linear-to-t from-stage to-transparent" />
            <h3 className="absolute bottom-4 left-4 right-4 font-label-caps text-label-caps text-on-surface uppercase">
              {act.title}
            </h3>
          </article>
        ))}
      </div>
      <div className="text-center">
        <Button href="/acts" variant="ghost">
          Explore Our Acts
        </Button>
      </div>
    </section>
  );
}
