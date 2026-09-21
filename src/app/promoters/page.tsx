import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeImages, promoterResources } from "@/constants/home";
import { site } from "@/constants/nav";
import { ShowHero } from "@/features/shows/components/ShowHero";

export const metadata: Metadata = { title: "Promoter Resources" };

export default function PromotersPage() {
  return (
    <>
      <ShowHero
        image={homeImages.closer}
        alt="Afrikan Warriors company on a theatrical stage"
        eyebrow="For Promoters & Venues"
        title="Promoter Resources"
        titlePrimary
        subtitle="The materials professional touring companies provide — press, technical, insurance and production information, sent to your production office."
        imagePositionClassName="object-center"
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <Button href={site.inquiryHref} size="lg">
            Speak to Our Team
          </Button>
          <Button href={`mailto:${site.email}`} variant="ghost" size="lg">
            Email {site.email}
          </Button>
        </div>
      </ShowHero>

      <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <SectionHeading
          title={
            <>
              Booking <span className="text-primary">Materials</span>
            </>
          }
          description="Request the file you need. We send press kits, riders and insurance documents directly to programmers and production managers."
          className="mb-12"
        />

        <ul className="divide-y divide-primary/15 border border-primary/20">
          {promoterResources.map((item) => (
            <li
              key={item.label}
              className="flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-6 bg-surface-container"
            >
              <div className="flex-1">
                <h2 className="font-headline-md text-xl text-on-surface uppercase">
                  {item.label}
                </h2>
                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mt-1">
                  {item.format}
                </p>
              </div>
              <Button
                type="button"
                variant="ghost"
                disabled
                className="pointer-events-none cursor-not-allowed opacity-50 grayscale border-on-surface-variant/30 text-on-surface-variant hover:translate-y-0 hover:bg-transparent"
              >
                Request ↓
              </Button>
            </li>
          ))}
        </ul>

        <div className="text-center mt-16">
          <Button href={site.inquiryHref} size="lg">
            Speak to Our Team
          </Button>
        </div>
      </section>
    </>
  );
}
