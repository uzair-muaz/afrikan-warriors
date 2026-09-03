import { CoverImage } from "@/components/ui/CoverImage";
import { Icon } from "@/components/ui/Icon";
import { homeImages } from "@/constants/home";

export function VideoShowcase() {
  return (
    <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-primary/10">
      <a
        href="/gallery"
        className="relative w-full h-[60vh] md:h-[80vh] border border-primary/20 flex items-center justify-center group overflow-hidden block"
      >
        <CoverImage
          src={homeImages.video}
          alt="Cinematic wide shot of African acrobats performing on a grand stage"
          className="hover-media-slow group-hover:scale-110 opacity-60"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 ease-in-out" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full border-2 border-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-105 transition-[background-color,scale,box-shadow] duration-700 ease-in-out accent-glow">
            <Icon
              name="play_arrow"
              filled
              className="text-5xl text-primary group-hover:text-on-primary ml-2 transition-colors duration-500 ease-in-out"
            />
          </div>
          <h3 className="font-label-caps text-headline-md text-on-surface uppercase tracking-widest drop-shadow-lg">
            Watch Now
          </h3>
        </div>
      </a>
    </section>
  );
}
