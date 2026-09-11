import Link from "next/link";
import { CoverImage } from "@/components/ui/CoverImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeTeam } from "@/constants/home";
import images from "@/constants/images.json";

const placeholder = images.team[0];

export function TeamTeaser() {
  return (
    <section
      id="team"
      className="py-stack-xl px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-y border-primary/10 scroll-mt-32"
    >
      <div className="max-w-container-max mx-auto">
        <SectionHeading
          title={
            <>
              Meet the <span className="text-primary">AW-Team</span>
            </>
          }
          description="Founders and lead artists behind three decades of African theatre and acrobatics."
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {homeTeam.map((member) => (
            <article
              key={member.name}
              className="group bg-surface-container border-t border-primary/30 hover:border-primary transition-colors overflow-hidden flex flex-col"
            >
              <div className="relative aspect-3/4 overflow-hidden bg-stage">
                <CoverImage
                  src={placeholder}
                  alt=""
                  className="opacity-90"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-headline-md text-xl text-primary uppercase mb-2">
                  {member.name}
                </h3>
                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-4">
                  {member.role}
                </p>
                <p className="font-body-md text-on-surface-variant line-clamp-4">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/team"
            className="font-label-caps text-label-caps uppercase tracking-widest text-primary border-b border-primary pb-1 hover:opacity-80"
          >
            View Full AW-Team →
          </Link>
        </div>
      </div>
    </section>
  );
}
