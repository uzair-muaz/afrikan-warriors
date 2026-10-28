import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { DownloadList } from "@/components/ui/DownloadList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeImages, promoterResources } from "@/constants/home";
import { site } from "@/constants/nav";
import { ShowHero } from "@/features/shows/components/ShowHero";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Promoters",
  description:
    "Download the Afrikan Warriors risk assessment, logo and insurance confirmation, or ask the team for a technical rider.",
  path: "/promoters",
});

export default function PromotersPage() {
  return (
    <>
      <ShowHero
        image={homeImages.closer}
        alt="Afrikan Warriors company on a theatrical stage"
        eyebrow="For Promoters & Venues"
        title="Promoter Resources"
        titlePrimary
        subtitle="Files you can download now. For a technical rider, biography or press photos, speak to the team and we will send them to your production office."
        imagePositionClassName="object-center"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <Button href="#documents" size="lg">
            Download Files
          </Button>
          <Button href={site.inquiryHref} variant="ghost" size="lg">
            Speak to Our Team
          </Button>
        </div>
      </ShowHero>

      <section
        id="documents"
        className="mx-auto max-w-container-max scroll-mt-32 px-margin-mobile py-stack-xl md:px-margin-desktop"
      >
        <SectionHeading
          title={
            <>
              Booking <span className="text-primary">Materials</span>
            </>
          }
          description="These are the files we can share today."
          className="mb-12"
        />

        <DownloadList items={promoterResources} />

        <p className="mt-8 text-center font-body-md text-body-md text-on-surface-variant">
          Company records, including the certificate of incorporation, are on
          the{" "}
          <a href="/legal" className="text-primary underline-offset-4 hover:underline">
            Legal
          </a>{" "}
          page.
        </p>

        <div className="mt-16 text-center">
          <Button href={site.inquiryHref} size="lg">
            Speak to Our Team
          </Button>
        </div>
      </section>
    </>
  );
}
