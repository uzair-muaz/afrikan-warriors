import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { HeritageDivider } from "@/components/ui/HeritageDivider";
import { promoterAssets } from "@/constants/home";
import { site } from "@/constants/nav";
import { CreditsBar } from "@/features/home/components/CreditsBar";
import { StoryTimeline } from "@/features/home/components/StoryTimeline";

export const metadata: Metadata = { title: "About Afrikan Warriors" };

export default function AboutPage() {
  return (
    <div className="pt-[120px] pb-stack-xl">
      <header className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-stack-lg text-center">
        <h1 className="font-headline-lg-mobile md:font-display-lg text-headline-lg-mobile md:text-display-lg text-primary uppercase mb-6">
          Our Story
        </h1>
        <HeritageDivider className="max-w-[200px] mx-auto mb-6" />
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Tanzanian-born. UK-based. A touring production company with 30+ years
          of African acrobatics, theatre and live entertainment.
        </p>
      </header>
      <CreditsBar />
      <StoryTimeline variant="line" />
      <section
        id="promoters"
        className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto scroll-mt-32 border-t border-primary/10"
      >
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase mb-4 text-center">
          For Promoters <span className="text-primary">&amp; Venues</span>
        </h2>
        <p className="font-body-lg text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
          Request technical and promotional materials. We will send what your
          venue needs to book Afrikan Warriors with confidence.
        </p>
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
          <Button href={site.inquiryHref} size="lg">
            Booking / Production Enquiry
          </Button>
          <Button href={`mailto:${site.email}`} variant="ghost" size="lg">
            Email {site.email}
          </Button>
        </div>
      </section>
    </div>
  );
}
