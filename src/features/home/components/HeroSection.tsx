import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";
import { homeImages } from "@/constants/home";
import { site } from "@/constants/nav";

export function HeroSection() {
  return (
    <header className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 z-10">
        <CoverImage
          src={homeImages.hero}
          alt="Afrikan Warriors acrobats forming a human pyramid on stage under dramatic lighting"
          priority
          className="vignette opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-t from-stage via-transparent to-stage opacity-90" />
      </div>
      <div className="relative z-20 flex flex-col items-center text-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-20">
        <p className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-6">
          30+ Years of International Entertainment
        </p>
        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface uppercase mb-6 drop-shadow-2xl">
          Afrikan Warriors
        </h1>
        <p className="font-headline-md text-headline-md text-primary uppercase tracking-widest mb-10 max-w-2xl">
          {site.tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Button href="#shows" size="lg">
            Explore Our Shows
          </Button>
          <Button href={site.inquiryHref} variant="ghost" size="lg">
            Book Afrikan Warriors
          </Button>
        </div>
      </div>
    </header>
  );
}
