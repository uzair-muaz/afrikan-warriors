import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeImages, promoterAssets } from "@/constants/home";
import { site } from "@/constants/nav";
import { CreditsBar } from "@/features/home/components/CreditsBar";
import { StoryTimeline } from "@/features/home/components/StoryTimeline";
import { ShowHero } from "@/features/shows/components/ShowHero";

export const metadata: Metadata = { title: "About Afrikan Warriors" };

export default function AboutPage() {
  return (
    <>
      <ShowHero
        image={homeImages.about}
        alt="Afrikan Warriors acrobat in mid-air with live musicians on stage"
        eyebrow="Our Story"
        title="Afrikan Warriors"
        titlePrimary
        subtitle="Tanzanian-born. UK-based. A touring production company with 30+ years of African acrobatics, theatre and live entertainment."
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <Button href="#story" size="lg">
            Read The Journey
          </Button>
          <Button href={site.inquiryHref} variant="ghost" size="lg">
            Book Afrikan Warriors
          </Button>
        </div>
      </ShowHero>

      <CreditsBar />
      <StoryTimeline variant="line" />
      <section
        id="promoters"
        className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto scroll-mt-32 border-t border-primary/10"
      >
        <SectionHeading
          title={
            <>
              For Promoters <span className="text-primary">&amp; Venues</span>
            </>
          }
          description="Request technical and promotional materials. We will send what your venue needs to book Afrikan Warriors with confidence."
          className="mb-12"
        />
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {promoterAssets.map((item) => (
            <li
              key={item}
              className="border border-primary/20 bg-surface-container p-6 font-label-caps text-label-caps text-on-surface uppercase tracking-widest"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/promoters" size="lg">
            Promoter Resources
          </Button>
          <Button href={site.inquiryHref} variant="ghost" size="lg">
            Booking / Production Enquiry
          </Button>
        </div>
      </section>
    </>
  );
}
