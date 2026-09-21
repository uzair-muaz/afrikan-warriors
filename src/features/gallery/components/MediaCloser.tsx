import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";
import { homeImages } from "@/constants/home";
import { site } from "@/constants/nav";

export function MediaCloser() {
  return (
    <section className="relative min-h-[80svh] flex items-end overflow-hidden border-y border-primary/20">
      <div className="absolute inset-0">
        <CoverImage
          src={homeImages.closer}
          alt="Afrikan Warriors performing in front of a live audience"
        />
        <div className="absolute inset-0 bg-linear-to-t from-stage via-stage/55 to-stage/20" />
      </div>
      <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop py-stack-xl text-center">
        <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface uppercase tracking-tighter leading-none mb-6">
          Bring This Energy To Your
          <br />
          <span className="text-primary">Stage</span>
        </h2>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
          From international festivals and theatres to television, corporate
          events and spectacular live productions.
        </p>
        <Button href={site.inquiryHref} size="lg">
          Request Availability →
        </Button>
      </div>
    </section>
  );
}
