import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";
import { HeritageDivider } from "@/components/ui/HeritageDivider";
import { Icon } from "@/components/ui/Icon";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { youtubeVideos } from "@/constants/media";
import { site } from "@/constants/nav";
import {
  showImages,
  tokomileCharacters,
  tokomileExpect,
  tokomileGallery,
  tokomileSections,
  tokomileTechnical,
} from "@/constants/shows";
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
          <p className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-4">
            Afrikan Warriors Presents
          </p>
          <h1 className="font-display-lg text-display-lg text-primary uppercase leading-none mb-6">
            TOKOMILE
          </h1>
          <p className="font-headline-lg text-headline-md text-on-surface-variant mb-4 uppercase tracking-widest">
            An African Adventure Like No Other
          </p>
          <HeritageDivider className="mb-8" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button href="#trailer" size="lg" className="gap-2">
              <Icon name="play_arrow" filled />
              Watch Trailer
            </Button>
            <Button href={site.inquiryHref} variant="ghost" size="lg">
              Book TOKOMILE
            </Button>
          </div>
        </div>
      </header>

      <nav
        aria-label="Tokomile sections"
        className="border-y border-primary/20 bg-surface-container-lowest px-margin-mobile md:px-margin-desktop"
      >
        <ul className="max-w-container-max mx-auto flex gap-6 overflow-x-auto py-4 font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
          {tokomileSections.map((item) => (
            <li key={item.label} className="shrink-0">
              <a href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-xl space-y-stack-xl">
        <section id="trailer" className="w-full relative scroll-mt-32">
          <YouTubeEmbed
            videoId={youtubeVideos.tokomile}
            title="Tokomile Show Trailer"
          />
        </section>

        <section id="story" className="grid grid-cols-1 md:grid-cols-12 gap-gutter scroll-mt-32">
          <div className="md:col-span-5 relative">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6 uppercase">
              The Story
            </h2>
            <HeritageDivider className="mb-6" />
            <div className="relative w-full aspect-4/5 border-t border-primary/30">
              <CoverImage
                src={showImages.tokomile.story}
                alt="Two African warriors in a dramatic stare-down under golden stage lighting"
                className="contrast-125"
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
            </div>
          </div>
        </section>

        <section id="experience" className="py-stack-lg scroll-mt-32">
          <div className="text-center md:text-left mb-12">
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase">
              The Experience
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

        <section id="characters" className="scroll-mt-32">
          <h2 className="font-headline-lg text-headline-lg text-primary uppercase mb-12">
            Characters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tokomileCharacters.map((character) => (
              <article
                key={character.name}
                className="bg-surface-container border-t border-primary/30 p-8"
              >
                <h3 className="font-headline-md text-headline-md text-primary uppercase mb-2">
                  {character.name}
                </h3>
                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-4">
                  {character.role}
                </p>
                <p className="font-body-md text-on-surface-variant">
                  {character.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="scroll-mt-32">
          <h2 className="font-headline-lg text-headline-lg text-primary uppercase mb-12">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tokomileGallery.map((item) => (
              <div key={item.src} className="relative aspect-4/5 border border-primary/20">
                <CoverImage src={item.src} alt={item.alt} className="vignette" />
              </div>
            ))}
          </div>
        </section>

        <section id="technical" className="scroll-mt-32 bg-platform p-8 md:p-12 border-l border-primary">
          <h2 className="font-headline-lg text-headline-lg text-primary uppercase mb-8">
            Technical Information
          </h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {tokomileTechnical.map((item) => (
              <div key={item.label}>
                <dt className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">
                  {item.label}
                </dt>
                <dd className="font-headline-md text-headline-md text-on-surface text-xl">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>

      <CtaBanner
        title="Book TOKOMILE"
        body="The full production runs 85 minutes with a 30-warrior cast, and can be tailored in running time, cast size and scale to the venue — without losing cinematic impact."
        primaryHref={site.inquiryHref}
        primaryLabel="Book TOKOMILE"
        className="bg-platform border-l-2 border-primary mx-margin-mobile md:mx-margin-desktop mb-stack-xl"
      />
    </>
  );
}
