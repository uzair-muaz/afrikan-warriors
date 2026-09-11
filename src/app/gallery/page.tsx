import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import images from "@/constants/images.json";
import { site } from "@/constants/nav";
import { GalleryView } from "@/features/gallery/components/GalleryView";
import { ShowHero } from "@/features/shows/components/ShowHero";

export const metadata: Metadata = { title: "Media" };

const mediaHero = images.pages.mediaHero;

export default function GalleryPage() {
  return (
    <>
      <ShowHero
        image={mediaHero}
        alt="Afrikan Warriors acrobats mid hoop diving and hat juggling on stage"
        eyebrow="Media"
        title="The Gallery"
        titlePrimary
        subtitle="Production stills from theatres, festivals and international touring."
        imagePositionClassName="object-[center_35%]"
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <Button href="#gallery" size="lg">
            Browse Media
          </Button>
          <Button href={site.inquiryHref} variant="ghost" size="lg">
            Book Afrikan Warriors
          </Button>
        </div>
      </ShowHero>
      <div id="gallery" className="scroll-mt-32">
        <GalleryView />
      </div>
    </>
  );
}
