import images from "@/constants/images.json";
import { liveFeatures } from "@/constants/live-features";
import { youtubeThumbnail, youtubeVideos } from "@/constants/media";

const gallery = images.gallery;
const source = images.source;
const acts = images.acts;
const tokomile = images.tokomile;
const rizombe = images.rizombeKing;
const pirate = images.africanPirate;
const freedom = images.freedom;

export const showFilters = [
  "All",
  "Tokomile",
  "Rizombe King",
  "African Pirate",
  "Freedom",
  "Afrikan Warriors Live",
  "Television",
  "Behind the Scenes",
] as const;

export const disciplineFilters = [
  "All",
  "Acrobatics",
  "Dance",
  "Fire",
  "Music",
  "Theatre",
  "Festivals",
] as const;

export type ShowFilter = (typeof showFilters)[number];
export type DisciplineFilter = (typeof disciplineFilters)[number];

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  headline: string;
  detail: string;
  show: Exclude<ShowFilter, "All">;
  discipline: Exclude<DisciplineFilter, "All">;
};

export const galleryItems: GalleryItem[] = [
  {
    src: source[0],
    alt: "Afrikan Warriors acrobats forming a human pyramid",
    title: "Human Pyramid — Afrikan Warriors Live",
    headline: "Human Pyramid — Afrikan Warriors Live",
    detail: "Acrobatics • Afrikan Warriors",
    show: "Afrikan Warriors Live",
    discipline: "Acrobatics",
  },
  {
    src: source[4],
    alt: "High-energy tumbling during a live performance",
    title: "Afrikan Warriors Live",
    headline: "Afrikan Warriors Live",
    detail: "Acrobatics • Afrikan Warriors",
    show: "Afrikan Warriors Live",
    discipline: "Acrobatics",
  },
  {
    src: source[2],
    alt: "Fire limbo on stage",
    title: "Fire Limbo",
    headline: "Fire Limbo",
    detail: "Afrikan Warriors Live • Afrikan Warriors",
    show: "Afrikan Warriors Live",
    discipline: "Fire",
  },
  {
    src: acts[2],
    alt: "Acrobat diving through stacked hoops",
    title: "Hoop Diving — Afrikan Warriors Live",
    headline: "Hoop Diving — Afrikan Warriors Live",
    detail: "Acrobatics • Afrikan Warriors",
    show: "Afrikan Warriors Live",
    discipline: "Acrobatics",
  },
  {
    src: gallery[2],
    alt: "Large-scale festival stage performance",
    title: "International Festival Performance",
    headline: "International Festival Performance",
    detail: "Festivals • Afrikan Warriors",
    show: "Afrikan Warriors Live",
    discipline: "Festivals",
  },
  {
    src: acts[8],
    alt: "Traditional Tanzanian dance ensemble",
    title: "Traditional Tanzanian Dance",
    headline: "Traditional Tanzanian Dance",
    detail: "Dance • Afrikan Warriors",
    show: "Afrikan Warriors Live",
    discipline: "Dance",
  },
  {
    src: gallery[1],
    alt: "Cultural performance still",
    title: "Cultural Performance",
    headline: "Cultural Performance",
    detail: "Dance • Afrikan Warriors",
    show: "Afrikan Warriors Live",
    discipline: "Dance",
  },
  {
    src: acts[7],
    alt: "Live percussion on stage",
    title: "Live Percussion",
    headline: "Live Percussion",
    detail: "Music • Afrikan Warriors",
    show: "Afrikan Warriors Live",
    discipline: "Music",
  },
  {
    src: source[3],
    alt: "Tokomile ensemble in the Kingdom of Zaramu",
    title: "TOKOMILE — Live on Stage",
    headline: "TOKOMILE — Kingdom of Zaramu",
    detail: "Live theatre production • Afrikan Warriors",
    show: "Tokomile",
    discipline: "Theatre",
  },
  {
    src: tokomile[1],
    alt: "Tokomile theatrical ensemble",
    title: "TOKOMILE — Theatre Production",
    headline: "TOKOMILE — Kingdom of Zaramu",
    detail: "Live theatre production • Afrikan Warriors",
    show: "Tokomile",
    discipline: "Theatre",
  },
  {
    src: tokomile[2],
    alt: "Tokomile dramatic scene",
    title: "Theatre Production",
    headline: "TOKOMILE — Theatre Production",
    detail: "Live theatre production • Afrikan Warriors",
    show: "Tokomile",
    discipline: "Theatre",
  },
  {
    src: rizombe[4],
    alt: "Dance from Rizombe King",
    title: "RIZOMBE KING",
    headline: "RIZOMBE KING",
    detail: "Dance • Afrikan Warriors",
    show: "Rizombe King",
    discipline: "Dance",
  },
  {
    src: rizombe[3],
    alt: "Acrobatics from Rizombe King",
    title: "RIZOMBE KING — Acrobatics",
    headline: "RIZOMBE KING",
    detail: "Acrobatics • Afrikan Warriors",
    show: "Rizombe King",
    discipline: "Acrobatics",
  },
  {
    src: rizombe[6],
    alt: "Dramatic scene from Rizombe King",
    title: "RIZOMBE KING — Theatre Production",
    headline: "RIZOMBE KING",
    detail: "Theatre production • Afrikan Warriors",
    show: "Rizombe King",
    discipline: "Theatre",
  },
  {
    src: pirate[0],
    alt: "African Pirate adventure still",
    title: "AFRICAN PIRATE",
    headline: "AFRICAN PIRATE",
    detail: "Family theatre adventure • Afrikan Warriors",
    show: "African Pirate",
    discipline: "Theatre",
  },
  {
    src: freedom[0],
    alt: "Freedom production leap",
    title: "FREEDOM",
    headline: "FREEDOM",
    detail: "Acrobatics • Afrikan Warriors",
    show: "Freedom",
    discipline: "Acrobatics",
  },
  {
    src: freedom[1],
    alt: "Freedom live percussion",
    title: "FREEDOM — Live Music",
    headline: "FREEDOM",
    detail: "Music • Afrikan Warriors",
    show: "Freedom",
    discipline: "Music",
  },
  {
    src: source[5],
    alt: "Vocal performance from Freedom",
    title: "FREEDOM — Vocal",
    headline: "FREEDOM",
    detail: "Music • Afrikan Warriors",
    show: "Freedom",
    discipline: "Music",
  },
  {
    src: source[9],
    alt: "The company on stage with the audience in the dark",
    title: "Afrikan Warriors Live",
    headline: "Afrikan Warriors Live",
    detail: "Festivals • Afrikan Warriors",
    show: "Afrikan Warriors Live",
    discipline: "Festivals",
  },
];

export type MediaVideo = {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  videoId?: string;
  start?: number;
  end?: number;
  href?: string;
};

const performanceVideos: MediaVideo[] = liveFeatures.flatMap((feature) =>
  feature.clips.map((clip) => ({
    title: feature.title,
    subtitle:
      feature.clips.length > 1
        ? clip.label
        : (feature.note ?? clip.label),
    image: clip.videoId ? youtubeThumbnail(clip.videoId) : source[4],
    alt: feature.title,
    videoId: clip.videoId,
    start: clip.start,
    end: clip.end,
    href: clip.href,
  })),
);

const catalogueVideos: MediaVideo[] = [
  {
    title: "Tokomile Trailer",
    subtitle: "Enter the Kingdom of Zaramu",
    image: youtubeThumbnail(youtubeVideos.tokomile),
    alt: "Tokomile trailer",
    videoId: youtubeVideos.tokomile,
  },
  {
    title: "Britain's Got Talent",
    subtitle: "Semi-Finalists",
    image: youtubeThumbnail(youtubeVideos.interview),
    alt: "Britain's Got Talent interview",
    videoId: youtubeVideos.interview,
  },
];

export const mediaVideos: MediaVideo[] = [
  ...performanceVideos,
  ...catalogueVideos,
].filter((item, index, all) => {
  const key = item.videoId ?? item.href ?? `${item.title}-${item.subtitle}`;
  return (
    all.findIndex(
      (other) => (other.videoId ?? other.href ?? `${other.title}-${other.subtitle}`) === key,
    ) === index
  );
});

export const archiveChapters: {
  era: string;
  src: string;
  alt: string;
}[] = [
  {
    era: "Tanzania",
    src: source[0],
    alt: "Acrobatics from the company's Tanzanian roots",
  },
  {
    era: "Early International Tours",
    src: source[4],
    alt: "Live tumbling on an international stage",
  },
  {
    era: "Circus Years",
    src: source[8],
    alt: "Hand-to-hand balance from the circus years",
  },
  {
    era: "Britain's Got Talent",
    src: source[1],
    alt: "Theatrical still from the television years",
  },
  {
    era: "Australia",
    src: source[5],
    alt: "Vocal performance from the Australia chapter",
  },
  {
    era: "European Festivals",
    src: gallery[2],
    alt: "Festival stage performance in Europe",
  },
  {
    era: "Afrikan Warriors Today",
    src: source[9],
    alt: "The company on stage today",
  },
];
