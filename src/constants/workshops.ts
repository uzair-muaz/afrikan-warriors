import images from "@/constants/images.json";

const workshopUrls = images.workshops_packages_final;

export const workshopImages = {
  hero: workshopUrls[0],
  acro: workshopUrls[1],
  circus: workshopUrls[2],
};

export const workshopTiers = [
  {
    name: "The Intimate",
    size: "Duo Performance",
    body: "A concentrated display of strength, balance, and precision. Perfect for smaller venues requiring high impact.",
    ideal: ["Private Dinners", "VIP Receptions", "Gallery Openings"],
    featured: false,
  },
  {
    name: "The Dynamic",
    size: "Trio Performance",
    body: "Introducing complex formations, mid-air transitions, and synchronized agility that commands attention.",
    ideal: ["Corporate Galas", "Weddings", "Brand Activations"],
    featured: false,
  },
  {
    name: "The Spectacle",
    size: "5-Man Team",
    body: "Our most popular package. A full-scale kinetic assault featuring human pyramids, tumbling, and dramatic choreography.",
    ideal: ["Award Ceremonies", "Theatre Stages", "Mid-Size Festivals"],
    featured: true,
  },
  {
    name: "The Epic",
    size: "7-Man Spectacular",
    body: "A monumental display of ancestral prestige. Overwhelming scale, maximum energy, and unforgettable stage presence.",
    ideal: ["International Tours", "Major Festivals", "Arena Events"],
    featured: false,
  },
];

export const workshopEventTags = [
  "Festivals",
  "Corporate Events",
  "Weddings",
  "Theatres",
  "Schools",
  "Private Events",
  "International Tours",
];

export const workshopInquiryTypes = [
  { value: "workshop", label: "Workshop / Masterclass" },
  { value: "performance", label: "Live Performance" },
  { value: "both", label: "Combined Package" },
];
