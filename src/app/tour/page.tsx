import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { storyTimeline, venues } from "@/constants/home";
import images from "@/constants/images.json";
import { site } from "@/constants/nav";
import { tourStages } from "@/constants/tour";
import { CreditsBar } from "@/features/home/components/CreditsBar";
import { ShowHero } from "@/features/shows/components/ShowHero";

import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Tour",
  description:
    "Circuses, resorts and festivals Afrikan Warriors have performed with across the UK, Ireland and beyond.",
  path: "/tour",
});

export default function TourPage() {
  return (
    <>
      <ShowHero
        image={images.pages.tourHero}
        alt="Afrikan Warriors performing for a seated theatre audience"
        eyebrow="International Touring"
        title="The Tour"
        titlePrimary
        subtitle="From Dar es Salaam to theatres, festivals and circus seasons around the world. Every date is built around the stage in front of us."
        imagePositionClassName="object-[center_42%]"
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <Button href={site.inquiryHref} size="lg">
            Book a Date
          </Button>
          <Button href="/#shows" variant="ghost" size="lg">
            See the Shows
          </Button>
        </div>
      </ShowHero>

      <CreditsBar />

      <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <SectionHeading
          eyebrow="Built around your stage"
          title={
            <>
              Where the company <span className="text-primary">plays</span>
            </>
          }
          description="From an intimate cultural evening to a festival headline or a full theatre production. The performance changes with the room, the audience and the event."
          className="mb-12"
        />
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {tourStages.map((stage) => (
            <li
              key={stage.label}
              className="border border-primary/20 bg-surface-container p-6"
            >
              <Icon name={stage.icon} className="text-primary text-3xl mb-4" />
              <h2 className="font-headline-md text-xl text-on-surface uppercase mb-2">
                {stage.label}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {stage.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-stack-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <figure className="relative min-h-[420px] overflow-hidden border border-primary/20">
            <CoverImage
              src={images.pages.tourEnergy}
              alt="A performer caught mid-flight above the company on a lit stage"
              sizes="(min-width: 768px) 45vw, 100vw"
            />
          </figure>
          <figure className="relative min-h-[420px] overflow-hidden border border-primary/20">
            <CoverImage
              src={images.pages.tourCompany}
              alt="Afrikan Warriors in a human pyramid on stage"
              sizes="(min-width: 768px) 45vw, 100vw"
            />
          </figure>
        </div>
      </section>

      <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <SectionHeading
          align="left"
          eyebrow="Already on the road"
          title={
            <>
              Companies and <span className="text-primary">stages</span>
            </>
          }
          description="A selection of circuses, resorts and festivals the company has performed with. Upcoming dates are confirmed with promoters — there is no public calendar until those dates are published."
          className="mb-12"
        />
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-primary/15 border border-primary/15">
          {venues.map((venue) => (
            <li
              key={venue}
              className="bg-surface-container px-6 py-5 font-label-caps text-label-caps uppercase tracking-widest text-on-surface"
            >
              {venue}
            </li>
          ))}
        </ul>
      </section>

      <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <SectionHeading
          eyebrow="The route"
          title={
            <>
              From Tanzania <span className="text-primary">to the world</span>
            </>
          }
          className="mb-12"
        />
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {storyTimeline.map((stop, index) => (
            <li key={stop.year} className="border-t border-primary pt-6">
              <p className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-3">
                0{index + 1} — {stop.mark}
              </p>
              <h2 className="font-headline-md text-2xl text-on-surface uppercase mb-3">
                {stop.year}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {stop.body}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          <Button href={site.inquiryHref} size="lg">
            Bring the Tour to Your Stage
          </Button>
          <Button href="/about" variant="ghost" size="lg">
            Read the Story
          </Button>
        </div>
      </section>
    </>
  );
}
