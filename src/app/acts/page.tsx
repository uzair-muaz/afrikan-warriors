import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { acts } from "@/constants/acts";
import { site } from "@/constants/nav";
import { ActGrid } from "@/features/acts/components/ActGrid";
import { ShowHero } from "@/features/shows/components/ShowHero";

export const metadata: Metadata = {
  title: "Our Acts",
};

export default function ActsPage() {
  const heroImage = acts.find((a) => a.featured)?.image ?? acts[0].image;

  return (
    <>
      <ShowHero
        image={heroImage}
        alt="Afrikan Warriors performing fire limbo and specialty acts on stage"
        eyebrow="Individually Spectacular"
        title="Our Acts"
        titlePrimary
        subtitle="Skills inside the productions — pyramids, fire limbo, hoop diving, tumbling and more."
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <Button href="#acts" size="lg">
            Explore Acts
          </Button>
          <Button href={site.inquiryHref} variant="ghost" size="lg">
            Book Afrikan Warriors
          </Button>
        </div>
      </ShowHero>

      <div
        id="acts"
        className="scroll-mt-32 pb-stack-xl max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop"
      >
        <ActGrid />
      </div>
    </>
  );
}
