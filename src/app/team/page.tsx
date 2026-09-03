import type { Metadata } from "next";
import { CoverImage } from "@/components/ui/CoverImage";
import { teamMembers } from "@/constants/team";

export const metadata: Metadata = { title: "Meet the AW-Team" };

export default function TeamPage() {
  return (
    <div className="pt-[120px] pb-stack-xl max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop flex flex-col gap-stack-lg">
      <section className="flex flex-col items-center justify-center text-center py-stack-lg border-b border-primary/20 relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rotate-45 translate-y-1/2" />
        <h1 className="font-headline-lg-mobile md:font-display-lg text-headline-lg-mobile md:text-display-lg text-primary uppercase mb-unit">
          Meet the AW-Team
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          The cinematic heritage and ancestral prestige brought to life by master
          athletes, acrobats, and performers.
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-gutter pt-stack-lg">
        {teamMembers.map((member) => (
          <article
            key={member.name}
            className="bg-surface-container border-t border-primary overflow-hidden flex flex-col group"
          >
            <div className="relative w-full aspect-3/4 overflow-hidden bg-surface-container-lowest">
              <CoverImage
                src={member.image}
                alt={`Portrait of ${member.name}`}
                className="grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 vignette"
              />
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
    </div>
  );
}
