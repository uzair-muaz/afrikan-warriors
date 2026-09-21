import type { Metadata } from "next";
import { GalleryView } from "@/features/gallery/components/GalleryView";
import { MediaArchives } from "@/features/gallery/components/MediaArchives";
import { MediaCloser } from "@/features/gallery/components/MediaCloser";
import { MediaOnScreen } from "@/features/gallery/components/MediaOnScreen";
import { MediaPress } from "@/features/gallery/components/MediaPress";
import {
  MediaFeaturedShowreel,
  MediaVideos,
} from "@/features/gallery/components/MediaVideos";
import { ShowHero } from "@/features/shows/components/ShowHero";
import images from "@/constants/images.json";

export const metadata: Metadata = { title: "Media" };

const jumps = [
  { href: "#photos", label: "Photos" },
  { href: "#videos", label: "Videos" },
  { href: "#screen", label: "Television & Press" },
] as const;

export default function MediaPage() {
  return (
    <>
      <ShowHero
        image={images.pages.mediaHero}
        alt="Afrikan Warriors acrobats mid hoop diving and hat juggling on stage"
        title="Media"
        titlePrimary
        lead="See Afrikan Warriors in Action"
        subtitle="Explore the energy, culture and spectacle of Afrikan Warriors through photography, live performance and film."
        imagePositionClassName="object-[center_35%]"
      >
        <nav
          aria-label="Media sections"
          className="flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {jumps.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </ShowHero>
      <MediaFeaturedShowreel />
      <GalleryView />
      <MediaVideos />
      <MediaOnScreen />
      <MediaArchives />
      <MediaPress />
      <MediaCloser />
    </>
  );
}
