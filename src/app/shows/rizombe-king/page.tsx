import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";
import { HeritageDivider } from "@/components/ui/HeritageDivider";
import { Icon, type IconName } from "@/components/ui/Icon";
import { showImages } from "@/constants/shows";
import { CtaBanner } from "@/features/shows/components/CtaBanner";
import { ShowHero } from "@/features/shows/components/ShowHero";
import { TrailerPlaceholder } from "@/features/shows/components/TrailerPlaceholder";

export const metadata: Metadata = { title: "RIZOMBE KING" };

const experience: {
  title: string;
  body: string;
  icon: IconName;
  image: string;
  className: string;
}[] = [
  {
    title: "Defying Gravity",
    body: "World-class acrobatics pushing the limits of human potential.",
    icon: "accessibility_new",
    image: showImages.rizombe.acrobatics,
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Kinetic Rhythm",
    body: "High-energy choreography rooted in traditional forms.",
    icon: "directions_run",
    image: showImages.rizombe.dance,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Sonic Force",
    body: "Live percussion and vocal mastery.",
    icon: "music_note",
    image: showImages.rizombe.music,
    className: "md:col-span-1",
  },
  {
    title: "Epic Drama",
    body: "Compelling narratives of heritage and honor.",
    icon: "theater_comedy",
    image: showImages.rizombe.drama,
    className: "md:col-span-1",
  },
];

export default function RizombeKingPage() {
  return (
    <>
      <ShowHero
        image={showImages.rizombe.hero}
        alt="African acrobatic performer suspended mid-air against a pitch black background"
        eyebrow="Theatrical Production"
        title="Rizombe King"
        subtitle="Power. Culture. Rhythm. An original Afrikan Warriors theatrical production merging ancestral storytelling with breathtaking physical performance."
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button href="/packages#inquiry-form" size="lg">
            Secure Tickets
          </Button>
          <Button variant="ghost" size="lg" className="gap-2">
            <Icon name="play_circle" />
            Watch Trailer
          </Button>
        </div>
      </ShowHero>

      <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
          <div className="order-2 md:order-1">
            <HeritageDivider align="left" className="mb-8" />
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6 uppercase">
              The Ancestral Narrative
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Rizombe King is not merely a show; it is a cinematic journey into
              the heart of African mythology. Witness a tale of triumph, lineage,
              and the enduring human spirit, told through a groundbreaking fusion
              of disciplines.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Every movement on stage is a word in a visual language passed down
              through generations, now elevated to a global standard of theatrical
              excellence.
            </p>
            <Button variant="ghost" className="gap-2">
              Discover the Lore <Icon name="arrow_forward" />
            </Button>
          </div>
          <div className="order-1 md:order-2 relative aspect-4/5 md:aspect-square bg-surface-container border-l border-primary/20">
            <CoverImage
              src={showImages.rizombe.portrait}
              alt="Lead performer in the Rizombe King production with tribal face paint"
              className="vignette"
            />
          </div>
        </div>
      </section>

      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <TrailerPlaceholder
          image={showImages.rizombe.trailer}
          alt="Dynamic group dance sequence from the Rizombe King trailer"
        />
      </section>

      <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-stack-lg">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase mb-4">
            The Experience
          </h2>
          <HeritageDivider className="w-1/3 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 md:h-[600px]">
          {experience.map((item) => (
            <article
              key={item.title}
              className={`bg-surface-container relative overflow-hidden group border-t border-primary/20 ${item.className}`}
            >
              <CoverImage
                src={item.image}
                alt=""
                className="opacity-40 group-hover:opacity-60 vignette"
              />
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <Icon name={item.icon} className="text-primary mb-4 text-3xl" />
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2 uppercase">
                  {item.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Witness The Legacy"
        body="Secure your place for an unforgettable evening of power and prestige. Limited engagements available."
        primaryHref="/packages#inquiry-form"
        primaryLabel="Reserve Seats"
      />
    </>
  );
}
