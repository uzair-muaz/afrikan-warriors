import { cn } from "@/lib/cn";
import { youtubeEmbedSrc } from "@/constants/media";

type YouTubeEmbedProps = {
  videoId: string;
  title: string;
  className?: string;
};

export function YouTubeEmbed({ videoId, title, className }: YouTubeEmbedProps) {
  return (
    <div className={cn("w-full relative", className)}>
      <div className="aspect-video w-full bg-platform relative border-l border-primary/20 overflow-hidden">
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full z-10"
          src={youtubeEmbedSrc(videoId)}
          title={title}
        />
      </div>
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary z-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary z-20 pointer-events-none" />
    </div>
  );
}
