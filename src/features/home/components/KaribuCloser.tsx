import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/constants/nav";

export function KaribuCloser() {
  return (
    <section className="py-stack-xl px-margin-mobile md:px-margin-desktop bg-surface-container border-y border-primary/20">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading
          title={
            <>
              Bring the Energy of Africa{" "}
              <span className="text-primary">to Your Next Event</span>
            </>
          }
          description="From theatres and international festivals to corporate events and private celebrations, Afrikan Warriors creates unforgettable live entertainment."
          className="mb-6"
        />
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
