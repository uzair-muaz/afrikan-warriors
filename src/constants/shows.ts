import type { IconName } from "@/components/ui/Icon";
import { limboFireNote } from "@/constants/copy";
import images from "@/constants/images.json";

const tokomile = images.tokomile;
const rizombe = images.rizombeKing;
const pirate = images.africanPirate;
const freedom = images.freedom;
const regular = images.regularShow;

export type ShowCard = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  image: string;
  alt: string;
  featured?: boolean;
};

export const featuredShows: ShowCard[] = [
  {
    slug: "tokomile",
    title: "TOKOMILE",
    subtitle: "An African Kingdom. A Battle for the Throne.",
    description:
      "Our flagship theatre production. Set in the fictional African kingdom of Zaramu — rivalry, humour, celebration, and spectacular African performance.",
    href: "/shows/tokomile",
    image: tokomile[0],
    alt: "Tokomile theatrical ensemble on stage in the Kingdom of Zaramu",
    featured: true,
  },
  {
    slug: "rizombe-king",
    title: "RIZOMBE KING",
    subtitle: "Power. Rhythm. African Storytelling.",
    description:
      "An original theatrical production bringing African storytelling together with acrobatics, dance, music, drama and spectacular physical performance.",
    href: "/shows/rizombe-king",
    image: rizombe[0],
    alt: "Lead performers in the Rizombe King production",
  },
  {
    slug: "african-pirate",
    title: "AFRICAN PIRATE",
    subtitle: "An African Adventure for the Whole Family.",
    description:
      "Pirates meet African music, dance, comedy and acrobatics — colourful family entertainment with the personality of our team.",
    href: "/shows/african-pirate",
    image: pirate[0],
    alt: "High-energy Afrikan Warriors acrobatics — African Pirate adventure",
  },
  {
    slug: "freedom",
    title: "FREEDOM",
    subtitle: "Movement. Music. Culture. Expression.",
    description:
      "Acrobatics, dance, theatre, rhythm and storytelling — the dynamic performance style forged through decades of international touring.",
    href: "/shows/freedom",
    image: freedom[0],
    alt: "FREEDOM production with live percussion and dance",
  },
  {
    slug: "regular-show",
    title: "AFRIKAN WARRIORS LIVE",
    subtitle: "The Original High-Energy African Acrobatics Experience.",
    description:
      "Our original core act — raw, high-energy African acrobatics for galas, festivals, theatres and corporate events.",
    href: "/shows/regular-show",
    image: regular[0],
    alt: "High-energy African acrobatics on stage",
  },
];

export const tokomileFlagship = {
  label: "Our Flagship Theatre Production",
  title: "TOKOMILE",
  welcome: "Welcome to the Kingdom of Zaramu.",
  meta: "80 Minutes • Theatre • Live Music • Acrobatics • Dance • Drama • Family Entertainment",
  cta: "Enter the Kingdom",
  href: "/shows/tokomile",
  image: tokomile[0],
  alt: "Tokomile theatrical ensemble on stage in the Kingdom of Zaramu",
} as const;

export const showInterestOptions = [
  "Tokomile Show",
  "Rizombe King",
  "African Pirate",
  "Freedom",
  "Afrikan Warriors Live",
  "Not Sure",
] as const;

export const showImages = {
  tokomile: { hero: tokomile[0], video: tokomile[1], story: tokomile[2] },
  rizombe: {
    hero: rizombe[0],
    portrait: rizombe[1],
    trailer: rizombe[2],
    acrobatics: rizombe[3],
    dance: rizombe[4],
    music: rizombe[5],
    drama: rizombe[6],
  },
  pirate: { hero: pirate[0], trailer: pirate[1] },
  freedom: { hero: freedom[0], drum: freedom[1], trailer: freedom[2] },
  regular: { hero: regular[0] },
};

export const tokomileExpect: { icon: IconName; label: string }[] = [
  { icon: "bolt", label: "African Acrobatics" },
  { icon: "celebration", label: "Traditional Dance" },
  { icon: "accessibility_new", label: "Contemporary Dance" },
  { icon: "music_note", label: "Live Percussion" },
  { icon: "mic", label: "Singing" },
  { icon: "mood", label: "Physical Comedy" },
  { icon: "theater_comedy", label: "Drama" },
  { icon: "sports_gymnastics", label: "Tumbling" },
  { icon: "sports_martial_arts", label: "Tokomile Fight Dance" },
  { icon: "groups", label: "Audience Interaction" },
];

export const tokomileSections = [
  { href: "#story", label: "The Story" },
  { href: "#experience", label: "The Experience" },
  { href: "#characters", label: "Characters" },
  { href: "#gallery", label: "Gallery" },
  { href: "#trailer", label: "Trailer" },
  { href: "#technical", label: "Technical Information" },
  { href: "/#inquiry", label: "Book TOKOMILE" },
] as const;

export const tokomileCharacters = [
  {
    name: "Prince Zagayo",
    role: "The Rival Heir",
    body: "A fierce competitor whose strength and pride drive the succession contest.",
  },
  {
    name: "Prince Zomola",
    role: "The Rival Heir",
    body: "Wit, rhythm and theatrical daring — the other half of the brothers' clash.",
  },
  {
    name: "Chief Zuwadiswa",
    role: "King of Zaramu",
    body: "The father preparing for succession, around whom the kingdom's fate turns.",
  },
];

export const tokomileGallery = [
  {
    src: tokomile[0],
    alt: "Tokomile acrobats in mid-air under theatrical light",
  },
  {
    src: tokomile[1],
    alt: "Tokomile performance on a grand stage",
  },
  {
    src: tokomile[2],
    alt: "Two warriors in a dramatic stare-down",
  },
];

export const tokomileTechnical = [
  { label: "Running time", value: "85 minutes, adaptable to the venue" },
  { label: "Cast", value: "Up to 30 warriors, scalable to the event" },
  { label: "Direction", value: "Rahim Saphy" },
  { label: "Choreography", value: "AW-Team" },
  { label: "Stage", value: "Minimum 5m × 5m flat, non-slip surface" },
  { label: "Height", value: "Minimum 4m ceiling clearance" },
];

export const regularElements: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "group",
    title: "Human Pyramids",
    body: "Breathtaking displays of strength, balance, and ancestral teamwork.",
  },
  {
    icon: "sports_gymnastics",
    title: "Limbo Dance",
    body: `Incredible flexibility under the bar. ${limboFireNote}`,
  },
  {
    icon: "adjust",
    title: "Hoops Diving",
    body: "Precision aerial maneuvers through stacked hoops at high speeds.",
  },
];

export const regularChecklist = [
  "Hat Juggling",
  "Tumbling",
  "Skipping Rope",
  "Chinese Pole",
  "Chair Balancing",
  "Physical Comedy",
  "Traditional Dance",
  "Live Percussion",
  "Audience Participation",
];
