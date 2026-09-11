import type { Metadata } from "next";
import type { IconName } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { showImages } from "@/constants/shows";
import { CtaBanner } from "@/features/shows/components/CtaBanner";
import { ShowHero } from "@/features/shows/components/ShowHero";

export const metadata: Metadata = { title: "AFRICAN PIRATE" };

const cards: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "theater_comedy",
    title: "Physical Comedy",
    body: "Uproarious antics and slapstick humor tailored for all ages, delivering laughs through masterful timing and expressive physical acting.",
  },
  {
    icon: "sports_martial_arts",
    title: "Spectacular Skills",
    body: "Breathtaking acrobatics, precision tumbling, and high-energy stunts that showcase elite athletic prowess on a cinematic stage.",
  },
  {
    icon: "groups",
    title: "Colourful Characters",
    body: "A vibrant cast of unique personalities bringing the African Pirate lore to life, perfect for captivating audiences in theatres and festivals.",
  },
];

export default function AfricanPiratePage() {
  return (
    <>
      <ShowHero
        image={showImages.pirate.hero}
        alt="African acrobats dressed as pirates performing a high-energy leap"
        eyebrow="Family Entertainment Production"
        title="AFRICAN PIRATE"
        titlePrimary
        subtitle="An African Twist on a Classic Adventure. Filled with colourful characters, physical comedy, spectacular skills and a unique personality."
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <Button href="/#inquiry" size="lg">
            Book The Show
          </Button>
          <Button href="/about#promoters" variant="ghost" size="lg">
            Request Press Kit
          </Button>
        </div>
      </ShowHero>

      <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center mb-stack-xl">
          <div className="relative w-full aspect-video overflow-hidden border border-primary/20">
            <CoverImage
              src={showImages.pirate.trailer}
              alt="African pirate character mid-performance on stage"
            />
          </div>
          <div>
            <SectionHeading
              align="left"
              title={
                <>
                  The <span className="text-primary">Experience</span>
                </>
              }
              description="Ideal for theatres, festivals, and premium family attractions seeking high-impact, culturally rich entertainment."
              className="mb-0"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {cards.map((card) => (
            <article
              key={card.title}
              className="bg-platform p-8 border-l border-primary/20 hover:border-primary/50 transition-colors group"
            >
              <Icon name={card.icon} className="text-primary text-4xl mb-6" />
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4 group-hover:text-primary transition-colors">
                {card.title}
              </h3>
              <p className="font-body-md text-on-surface-variant">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Bring the Adventure to Your Stage"
        body="Ideal for theatres, festivals, and premium family attractions seeking high-impact, culturally rich entertainment."
        primaryHref="/#inquiry"
        primaryLabel="Book The Show"
        secondaryHref="/about#promoters"
        secondaryLabel="Request Press Kit"
      />
    </>
  );
}
