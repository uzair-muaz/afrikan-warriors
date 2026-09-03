import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";
import { homeImages } from "@/constants/home";

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
        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface uppercase mb-6 drop-shadow-2xl max-w-4xl">
          Extraordinary African Acrobatics. <br />
          <span className="text-primary">Unforgettable Live Entertainment.</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl">
          World-class African acrobatic performances combining breathtaking
          stunts, traditional dance, incredible balance, and audience
          interaction.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Button href="#inquiry" size="lg">
            Book the Show
          </Button>
          <Button href="#shows" variant="ghost" size="lg">
            Explore Our Shows
          </Button>
        </div>
      </div>
    </header>
  );
}
