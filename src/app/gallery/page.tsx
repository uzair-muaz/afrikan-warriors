import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import images from "@/constants/images.json";
import { youtubeVideos } from "@/constants/media";
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
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-stack-xl">
        <SectionHeading
          eyebrow="Television"
          title={
            <>
              Britain&apos;s Got Talent{" "}
              <span className="text-primary">2009</span>
            </>
          }
          description="The interview that introduced Afrikan Warriors to millions — kept here in Media / Our History."
          className="mb-10"
        />
        <YouTubeEmbed
          videoId={youtubeVideos.interview}
          title="Afrikan Warriors Interview — Britain's Got Talent 2009"
        />
      </section>
    </>
  );
}
