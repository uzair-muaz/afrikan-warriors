import { Button } from "@/components/ui/Button";
import { VideoLightbox } from "@/components/ui/VideoLightbox";
import { heroSlides, homeImages } from "@/constants/home";
import { youtubeVideos } from "@/constants/media";
import { site } from "@/constants/nav";
import { ShowHero } from "@/features/shows/components/ShowHero";

export function HeroSection() {
  return (
    <ShowHero
      image={homeImages.hero}
      alt="Afrikan Warriors acrobats forming a human pyramid on stage under dramatic lighting"
      title="Afrikan Warriors"
      imagePositionClassName="object-top"
      slides={heroSlides}
    >
      <p className="font-headline-md text-xl md:text-2xl text-primary uppercase tracking-widest mb-2">
        The Spirit of Africa.
      </p>
      <p className="font-headline-md text-xl md:text-2xl text-primary uppercase tracking-widest mb-6">
        The Energy of Live Performance.
      </p>
      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-8">
        African Acrobatics • Theatre • Dance • Music • Culture
      </p>
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center w-full sm:w-auto">
        <Button href={site.inquiryHref} size="lg" className="min-h-12">
          Book Afrikan Warriors
        </Button>
        <Button href="#shows" variant="ghost" size="lg" className="min-h-12">
          Explore Our Shows
        </Button>
        <VideoLightbox
          videoId={youtubeVideos.showreel}
          title="Afrikan Warriors Showreel"
          label="Watch Showreel"
          className="min-h-12"
        />
      </div>
      <p className="mt-10 font-label-caps text-[0.65rem] md:text-label-caps text-on-surface-variant/80 uppercase tracking-[0.2em]">
        30+ Years • 5,000+ Performances • International Touring • Tanzania → The
        World
      </p>
    </ShowHero>
  );
}
