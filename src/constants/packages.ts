import type { IconName } from "@/components/ui/Icon";

export type PerformancePackage = {
  id: "silver" | "bronze" | "gold";
  name: string;
  detail: string;
  features: string[];
  cta: string;
  featured?: boolean;
  icon: IconName;
};

export const performancePackages: PerformancePackage[] = [
  {
    id: "silver",
    name: "COOL SILVER",
    detail: "Up to 2 x 30-minute sets",
    features: [
      "2 Master Performers",
      "Up to 2x 30-minute sets",
      "Standard Acrobatic Repertoire",
    ],
    cta: "Enquire About Silver",
    icon: "swords",
  },
  {
    id: "bronze",
    name: "WARM BRONZE",
    detail: "Up to 2 x 30-minute sets",
    features: [
      "3 Master Performers",
      "Up to 2x 30-minute sets",
      "3-set option available",
      "Enhanced Choreography",
    ],
    cta: "Enquire About Bronze",
    featured: true,
    icon: "local_fire_department",
  },
  {
    id: "gold",
    name: "HOT GOLD",
    detail: "Based on cast size & location",
    features: [
      "4-5 Master Performers",
      "Premium High-Energy Package",
      "Ideal for Opening Ceremonies & Major Festivals",
    ],
    cta: "Enquire About Gold",
    icon: "workspace_premium",
  },
];

export const specialistAddOns = [
  "Chair Balance",
  "Chinese Pole",
  "Live Percussion",
  "Stilt Walking",
  "Roller Balance",
  "Additional Musicians",
  "Larger Cast Pyramids",
];

export const eventTypeOptions = [
  "Festival",
  "Corporate",
  "Wedding",
  "Theatre",
  "Other",
];
