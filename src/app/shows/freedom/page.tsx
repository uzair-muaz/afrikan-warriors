import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";
import { Icon, type IconName } from "@/components/ui/Icon";
import { showImages } from "@/constants/shows";
import { TrailerPlaceholder } from "@/features/shows/components/TrailerPlaceholder";

export const metadata: Metadata = { title: "FREEDOM" };

const pillars: {
  n: string;
  icon: IconName;
  title: string;
  body: string;
  featured: boolean;
}[] = [
  {
    n: "01",
    icon: "graphic_eq",
    title: "Ancestral Rhythm",
    body: "A sonic landscape built on traditional polyrhythms, elevated with modern, cinematic sound design that vibrates through the auditorium.",
    featured: false,
  },
  {
    n: "02",
    icon: "theater_comedy",
    title: "Visual Storytelling",
    body: "Narratives woven not through words, but through intense physical expression, synchronized lighting, and stark geometric stage design.",
    featured: true,
  },
  {
    n: "03",
    icon: "fitness_center",
    title: "Peak Acrobatics",
    body: "Defying human limits. Our performers undergo rigorous training to execute breathtaking aerial and grounded acrobatic sequences.",
    featured: false,
  },
];

export default function FreedomPage() {
  return (
    <>
      <header className="relative w-full h-screen min-h-[700px] flex items-center justify-center pt-24">
        <div className="absolute inset-0">
          <CoverImage
            src={showImages.freedom.hero}
            alt="Powerful African dancer in mid-leap on a dark stage"
            priority
          />
          <div className="absolute inset-0 vignette-overlay mix-blend-multiply opacity-90" />
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center flex flex-col items-center">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-[0.2em] mb-6">
            The Premier Experience
          </span>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary uppercase mb-6 tracking-tighter leading-none">
            FREEDOM
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            A visceral celebration of movement, rhythm, and ancestral prestige.
            Experience the pinnacle of physical storytelling, forged through
            decades of global performance.
          </p>
          <Button variant="ghost" size="lg" className="gap-3">
            <Icon name="play_arrow" filled />
            Watch Trailer
          </Button>
        </div>
      </header>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg md:py-stack-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 flex flex-col items-start gap-6">
            <span className="font-label-caps text-label-caps text-primary uppercase">
              The Origin
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-tight">
              The Expression <br />
              Of <span className="text-primary italic font-light">Heritage</span>
            </h2>
            <div className="w-12 h-0.5 bg-primary mb-2" />
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              &apos;FREEDOM&apos; is more than a performance; it is a cinematic
              journey through the essence of human expression. Rooted deeply in
              the rhythmic traditions of Africa, this show has been meticulously
              honed across international stages to deliver an adrenaline-fueled
              masterclass in agility and passion.
            </p>
            <p className="font-body-md text-body-md text-outline">
              Witness a stage where gravity is challenged, and ancient narratives
              are reborn through high-performance athleticism.
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7 relative mt-12 md:mt-0">
            <div className="aspect-4/5 relative border-l border-t border-primary/30 p-4">
              <div className="relative w-full h-full overflow-hidden">
                <CoverImage
                  src={showImages.freedom.drum}
                  alt="Tribal drum being played by muscular hands in mid-strike"
                  className="grayscale hover:grayscale-0 opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg bg-surface-container-lowest">
        <div className="flex flex-col items-center mb-12">
          <span className="font-label-caps text-label-caps text-primary mb-4 uppercase">
            Immerse
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-center uppercase tracking-tight">
            Witness The Spectacle
          </h2>
        </div>
        <TrailerPlaceholder
          image={showImages.freedom.trailer}
          alt="Epic stage shot from the FREEDOM performance"
          label="Live Recording • London 2023"
        />
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-xl">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-tight mb-12 border-b border-primary/20 pb-6">
          Core Pillars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <article
              key={pillar.n}
              className={`bg-surface-container border-t p-8 flex flex-col ${pillar.featured ? "border-primary" : "border-primary/30"}`}
            >
              <div className="mb-8 flex justify-between items-start">
                <Icon name={pillar.icon} className="text-primary text-[40px]" />
                <span className={`font-label-caps text-label-caps ${pillar.featured ? "text-primary" : "text-outline-variant"}`}>
                  {pillar.n}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4 uppercase">
                {pillar.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-b border-primary/20 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-xl flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <span className="font-label-caps text-label-caps text-primary uppercase mb-4 block">
              Secure Your Date
            </span>
            <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg uppercase tracking-tighter leading-none mb-4 text-on-surface">
              Bring Freedom <br />
              <span className="text-outline">To Your Stage</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mx-auto md:mx-0">
              Available for exclusive international bookings, cultural festivals,
              and premium private showcases.
            </p>
          </div>
          <Button href="/#inquiry" size="lg" className="gap-4 px-12 py-6">
            Inquire Now
            <Icon name="arrow_forward" className="text-[20px]" />
          </Button>
        </div>
      </section>
    </>
  );
}
