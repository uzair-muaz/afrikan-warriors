import { SectionHeading } from "@/components/ui/SectionHeading";
import { youtubeThumbnail, youtubeVideos } from "@/constants/media";
import { TrailerPlaceholder } from "@/features/shows/components/TrailerPlaceholder";

const screenCards = [
  {
    title: "Britain's Got Talent",
    note: "Semi-Finalists",
    videoId: youtubeVideos.interview,
  },
  {
    title: "Australia’s Got Talent",
    note: "Part 1 · Semi-Finalists",
    videoId: "8AkDyX1DnZg",
  },
  {
    title: "Festival of Fools",
    note: "Highlights",
    videoId: "iBv7FKrUzs8",
  },
] as const;

export function VideoShowcase() {
  return (
    <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-primary/10">
      <SectionHeading
        eyebrow="On screen"
        title={
          <>
            Seen on <span className="text-primary">television</span>
          </>
        }
        description="National television and festival appearances from the company."
        className="mb-12"
      />
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {screenCards.map((card) => (
          <li key={card.videoId} className="flex h-full flex-col">
            <TrailerPlaceholder
              image={youtubeThumbnail(card.videoId)}
              alt={card.title}
              videoId={card.videoId}
              videoTitle={card.title}
            />
            <h3 className="font-headline-md text-xl leading-7 text-on-surface uppercase mt-4 line-clamp-3 min-h-[5.25rem]">
              {card.title}
            </h3>
            <p className="font-body-md text-sm leading-5 text-on-surface-variant mt-2 line-clamp-2 min-h-10">
              {card.note}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
