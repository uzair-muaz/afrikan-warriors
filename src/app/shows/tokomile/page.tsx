import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";
import { HeritageDivider } from "@/components/ui/HeritageDivider";
import { Icon } from "@/components/ui/Icon";
import { Input } from "@/components/ui/Input";
import { showImages, tokomileExpect } from "@/constants/shows";
import { CtaBanner } from "@/features/shows/components/CtaBanner";

export const metadata: Metadata = {
  title: "TOKOMILE SHOW — Zaramu Kingdom",
};

export default function TokomilePage() {
  return (
    <>
      <header className="relative h-screen w-full flex flex-col justify-end items-center md:items-start text-center md:text-left px-margin-mobile md:px-margin-desktop pb-stack-xl max-w-container-max mx-auto pt-32">
        <div className="absolute inset-0 z-[-1]">
          <CoverImage
            src={showImages.tokomile.hero}
            alt="Dramatic silhouette of African acrobats in mid-air under a theatrical spotlight"
            priority
            className="opacity-40"
          />
          <div className="vignette-overlay absolute inset-0" />
          <div className="absolute inset-0 bg-linear-to-t from-stage to-transparent" />
        </div>
        <div className="z-10 w-full md:w-2/3">
          <h1 className="font-display-lg text-display-lg text-primary uppercase leading-none mb-6">
            TOKOMILE SHOW
          </h1>
          <p className="font-headline-lg text-headline-md text-on-surface-variant mb-4 uppercase tracking-widest">
            Zaramu Kingdom
          </p>
          <HeritageDivider className="mb-8" />
          <p className="font-body-lg text-body-lg text-on-surface mb-8 max-w-2xl">
            A cinematic fusion of high-performance athleticism and ancestral
            prestige. Experience the fierce rivalry of the Zaramu Kingdom brought
            to life through breathtaking acrobatics and traditional rhythm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="gap-2">
              <Icon name="play_arrow" filled />
              Watch the Full Show
            </Button>
            <Button href="/packages#inquiry-form" variant="ghost" size="lg">
              Book the Show
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-xl space-y-stack-xl">
        <section className="w-full relative">
          <div className="aspect-video w-full bg-platform relative border-l border-primary/20 overflow-hidden">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full z-10"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&rel=0&modestbranding=1"
              title="Tokomile Show Trailer"
            />
          </div>
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary z-20 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary z-20 pointer-events-none" />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-5 relative">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6 uppercase">
              The Story
            </h2>
            <HeritageDivider className="mb-6" />
            <div className="relative w-full aspect-4/5 border-t border-primary/30">
              <CoverImage
                src={showImages.tokomile.story}
                alt="Two African warriors in a dramatic stare-down under golden stage lighting"
                className="grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-linear-to-t from-stage to-transparent" />
            </div>
          </div>
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="bg-platform p-8 border-l border-primary">
              <p className="font-body-lg text-body-lg text-on-surface mb-6 leading-relaxed">
                Set in the fictional African kingdom of Zaramu, inspired by rich
                Tanzanian traditions. The Tokomile Show chronicles the fierce and
                captivating rivalry between Prince Zagayo and Prince Zomola. As
                their father, Chief Zuwadiswa, prepares for succession, the
                brothers clash in a test of strength, wit, and ancestral right.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-2">
                    Written & Directed By
                  </p>
                  <p className="font-headline-md text-headline-md text-primary text-xl">
                    Rahim Saphy
                  </p>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-2">
                    Choreography
                  </p>
                  <p className="font-headline-md text-headline-md text-primary text-xl">
                    AW-Team
                  </p>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-2">
                    Cast Size
                  </p>
                  <p className="font-headline-md text-headline-md text-primary text-xl">
                    30 Warriors
                  </p>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-2">
                    Running Time
                  </p>
                  <p className="font-headline-md text-headline-md text-primary text-xl">
                    85 Minutes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-stack-lg">
          <div className="text-center md:text-left mb-12">
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase">
              What to Expect
            </h2>
            <HeritageDivider className="mx-auto md:mx-0 w-32" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tokomileExpect.map((item) => (
              <div
                key={item.label}
                className="bg-platform p-6 border-t border-primary/20 hover:border-primary transition-colors group"
              >
                <Icon
                  name={item.icon}
                  className="text-primary mb-4 text-3xl group-hover:scale-110 transition-[scale] duration-500 ease-in-out"
                />
                <h3 className="font-headline-md text-headline-md text-on-surface text-lg">
                  {item.label}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </div>

      <CtaBanner
        title="Adaptable Prestige"
        body="While the full Tokomile Show runs for a spectacular 85 minutes with our complete 30-warrior cast, we understand that exceptional venues require exceptional flexibility. The performance can be tailored in running time, cast size, and budget to perfectly suit your specific event requirements without compromising the cinematic impact."
        primaryHref="/packages#inquiry-form"
        primaryLabel="Inquire Now"
        className="bg-platform border-l-2 border-primary mx-margin-mobile md:mx-margin-desktop mb-stack-xl"
      >
        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-8" action="/packages#inquiry-form">
          <Input
            name="email"
            type="email"
            placeholder="Enter your email for a custom quote"
            className="bg-void border-0 border-b-2 border-primary/50"
          />
        </form>
      </CtaBanner>
    </>
  );
}
