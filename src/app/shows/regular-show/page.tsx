import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { HeritageDivider } from "@/components/ui/HeritageDivider";
import { Icon } from "@/components/ui/Icon";
import { regularChecklist, regularElements, showImages } from "@/constants/shows";
import { ShowHero } from "@/features/shows/components/ShowHero";

export const metadata: Metadata = { title: "The Regular Show" };

export default function RegularShowPage() {
  return (
    <>
      <ShowHero
        image={showImages.regular.hero}
        alt="African acrobats performing a mid-air somersault on a dark stage"
        eyebrow="Pure African Acrobatics"
        title="The Regular Show"
        subtitle="Our most adaptable live show for festivals, corporate events, theatres, circuses, theme parks, weddings, gala dinners and private celebrations."
      >
        <HeritageDivider className="w-32 mx-auto" />
      </ShowHero>

      <section className="py-stack-xl px-margin-mobile md:px-margin-desktop bg-surface max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-background uppercase">
            Show Elements
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            A dynamic fusion of traditional artistry and high-performance
            athleticism.
          </p>
          <HeritageDivider className="w-24 mx-auto mt-8" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularElements.map((item) => (
            <article
              key={item.title}
              className="bg-surface-container border-t border-primary-container p-8 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary-container/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
              <Icon
                name={item.icon}
                className="text-primary-container text-4xl mb-4 block"
              />
              <h3 className="font-headline-md text-2xl font-semibold text-on-background mb-2">
                {item.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {item.body}
              </p>
            </article>
          ))}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-8 bg-surface-container-low p-8 border border-outline-variant/30">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {regularChecklist.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Icon name="check_circle" className="text-primary text-sm" />
                  <span className="font-label-caps text-label-caps text-on-surface">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-stack-xl px-margin-mobile md:px-margin-desktop relative overflow-hidden flex items-center justify-center min-h-[512px]">
        <div className="absolute inset-0 bg-surface-container-lowest">
          <div className="absolute inset-0 gold-radial-veil" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-background mb-6 uppercase">
            Bring The Energy
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 italic">
            Performances can be adapted to your venue, audience and running time.
          </p>
          <Button href="/#inquiry" size="lg">
            Book The Regular Show
          </Button>
        </div>
      </section>
    </>
  );
}
