import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import images from "@/constants/images.json";
import { ComingSoonModal } from "@/features/shop/ComingSoonModal";
import { ShopCatalogue } from "@/features/shop/ShopCatalogue";
import { ShowHero } from "@/features/shows/components/ShowHero";
import { shopIsOpen } from "@/lib/payments/checkout";

import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Shop",
  description:
    "Official Afrikan Warriors merchandise. The shop opens for UK and international orders when the collection is ready.",
  path: "/shop",
});

const showMerch = [
  "Tokomile",
  "Rizombe King",
  "African Pirate",
  "Freedom",
  "Afrikan Warriors Live",
] as const;

export default function ShopPage() {
  return (
    <>
      {shopIsOpen() ? null : <ComingSoonModal />}
      <ShowHero
        image={images.pages.shopHero}
        alt="Afrikan Warriors in a human pyramid under warm stage light"
        eyebrow="The Official Afrikan Warriors Shop"
        title="Wear the Spirit."
        subtitle="Official merchandise inspired by the performances, the culture and the journey from Tanzania to the world."
        imagePositionClassName="object-[center_35%]"
      >
        <Button href="#collection" size="lg">
          Shop Now →
        </Button>
      </ShowHero>

      <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <SectionHeading
          eyebrow="Featured collection"
          title={
            <>
              Take the spirit of Africa <span className="text-primary">home</span>
            </>
          }
          description="Eight pieces to start. Prices and card payment are still being agreed. Delivery details are collected with each request."
          className="mb-12"
        />
        <ShopCatalogue />
      </section>

      <section className="pb-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <SectionHeading
          align="left"
          eyebrow="Show merchandise"
          title={
            <>
              Pieces from the <span className="text-primary">productions</span>
            </>
          }
          className="mb-10"
        />
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-gutter">
          {showMerch.map((show) => (
            <li
              key={show}
              className="border border-primary/20 px-5 py-8 font-headline-md text-xl text-on-surface uppercase"
            >
              {show}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
