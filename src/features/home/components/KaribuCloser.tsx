import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";
import { homeImages } from "@/constants/home";
import { site } from "@/constants/nav";

export function KaribuCloser() {
  return (
    <section className="relative min-h-svh flex items-end overflow-hidden border-y border-primary/20">
      <div className="absolute inset-0">
        <CoverImage
          src={homeImages.closer}
          alt="The full Afrikan Warriors company on stage, with the audience in the dark"
        />
        <div className="absolute inset-0 bg-linear-to-t from-stage via-stage/55 to-stage/20" />
      </div>
      <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop py-stack-xl text-center">
        <p className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface uppercase tracking-tighter leading-none mb-6">
          From Tanzania.
          <br />
          To the World.
        </p>
        <p className="font-label-caps text-label-caps text-primary uppercase tracking-[0.2em] mb-4">
          30+ Years. 5,000+ Performances. One Afrikan Warriors.
        </p>
        <p className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest mb-10">
          Karibu Sana.
        </p>
        <Button href={site.inquiryHref} size="lg">
          Bring Afrikan Warriors to Your Stage →
        </Button>
      </div>
    </section>
  );
}
