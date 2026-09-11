import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import images from "@/constants/images.json";
import { youtubeVideos } from "@/constants/media";
import { site } from "@/constants/nav";
import { teamMembers } from "@/constants/team";
import { ShowHero } from "@/features/shows/components/ShowHero";

export const metadata: Metadata = { title: "Meet the AW-Team" };

export default function TeamPage() {
  return (
    <>
      <ShowHero
        image={images.home[3]}
        alt="Afrikan Warriors ensemble performing on stage"
        eyebrow="The Company"
        title="Meet the AW-Team"
        titlePrimary
        subtitle="The cinematic heritage and ancestral prestige brought to life by master athletes, acrobats, and performers."
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <Button href="#roster" size="lg">
            Meet The Artists
          </Button>
          <Button href={site.inquiryHref} variant="ghost" size="lg">
            Book Afrikan Warriors
          </Button>
        </div>
      </ShowHero>

      <div className="pb-stack-xl max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop flex flex-col gap-stack-lg">
        <section
          id="roster"
          className="grid grid-cols-1 md:grid-cols-4 gap-gutter scroll-mt-32 pt-stack-lg"
        >
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="bg-surface-container border-t border-primary overflow-hidden flex flex-col group"
            >
              <div className="relative w-full aspect-3/4 overflow-hidden bg-stage">
                <CoverImage src={member.image} alt="" className="opacity-90" />
              </div>
              <div className="p-6 flex flex-col gap-2 relative">
                <h3 className="font-headline-md text-headline-md text-primary uppercase truncate">
                  {member.name}
                </h3>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
                  {member.role}
                </span>
                <p className="font-body-md text-body-md text-on-surface mt-2 line-clamp-3 opacity-80">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </section>
        <section
          id="interview"
          className="scroll-mt-32 flex flex-col gap-8 pt-stack-lg"
        >
          <div className="text-center">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-unit">
              Watch the team
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Afrikan Warriors on Britain&apos;s Got Talent, 2009.
            </p>
          </div>
          <YouTubeEmbed
            videoId={youtubeVideos.interview}
            title="Afrikan Warriors Interview — Britain's Got Talent 2009"
          />
        </section>
      </div>
    </>
  );
}
