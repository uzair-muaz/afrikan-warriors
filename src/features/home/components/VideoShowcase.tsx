import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { youtubeVideos } from "@/constants/media";

export function VideoShowcase() {
  return (
    <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-primary/10">
      <h2 className="text-center font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase mb-12">
        Watch the Warriors <span className="text-primary">in Action</span>
      </h2>
      <YouTubeEmbed
        videoId={youtubeVideos.interview}
        title="Afrikan Warriors Interview — Britain's Got Talent 2009"
      />
    </section>
  );
}
