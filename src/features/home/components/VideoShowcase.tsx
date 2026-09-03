import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { youtubeVideos } from "@/constants/media";

export function VideoShowcase() {
  return (
    <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-primary/10">
      <YouTubeEmbed
        videoId={youtubeVideos.interview}
        title="Afrikan Warriors Interview — Britain's Got Talent 2009"
      />
    </section>
  );
}
