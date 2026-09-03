import images from "@/constants/images.json";

const urls = images.gallery_final;

export const galleryFilters = [
  "All",
  "Acrobatics",
  "Traditional Dance",
  "Stage Productions",
] as const;

export type GalleryFilter = (typeof galleryFilters)[number];

export const galleryItems = [
  {
    src: urls[0],
    alt: "Acrobatics Performance",
    category: "Acrobatics" as const,
    title: "The Human Pyramid",
  },
  {
    src: urls[1],
    alt: "Traditional Dance Close-up",
    category: "Traditional Dance" as const,
    title: "Ancestral Echoes",
  },
  {
    src: urls[2],
    alt: "Large Stage Production",
    category: "Stage Productions" as const,
    title: "Global Arena Tour",
  },
  {
    src: urls[3],
    alt: "Night-time stage performance",
    category: "Stage Productions" as const,
    title: "Stage Spectacle",
  },
  {
    src: urls[4],
    alt: "Solo Silhouette",
    category: "Acrobatics" as const,
    title: "The Sentinel",
  },
];
