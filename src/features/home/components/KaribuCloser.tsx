import { Button } from "@/components/ui/Button";
import { site } from "@/constants/nav";

export function KaribuCloser() {
  return (
    <section className="py-stack-xl px-margin-mobile md:px-margin-desktop bg-surface-container border-y border-primary/20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase mb-6">
          Bring the Energy of Africa{" "}
          <span className="text-primary">to Your Next Event</span>
        </h2>
        <p className="font-body-lg text-on-surface-variant mb-8">
          From theatres and international festivals to corporate events and
          private celebrations, Afrikan Warriors creates unforgettable live
          entertainment.
        </p>
        <p className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-10">
          Karibu Sana.
        </p>
        <Button href={site.inquiryHref} size="lg">
          Book Afrikan Warriors
        </Button>
      </div>
    </section>
  );
}
