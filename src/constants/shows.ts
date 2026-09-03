import type { IconName } from "@/components/ui/Icon";
import { limboFireNote } from "@/constants/copy";
import images from "@/constants/images.json";

const tokomile = images.tokomile_show_zaramu_kingdom_final;
const rizombe = images.rizombe_king_power_rhythm_final;
const pirate = images.african_pirate_an_african_adventure_final;
const freedom = images.freedom_movement_culture_final;
const regular = images.performance_regular_show;

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
    title: "TOKOMILE SHOW",
    subtitle: "African Theatre • Culture • Acrobatics • Adventure",
    description:
      "Our signature African pantomime-style theatre production. Set in the fictional African kingdom of Zaramu and inspired by the traditions and culture of Tanzania, the story follows a theatrical adventure filled with rivalry, humour, celebration, and spectacular African performance.",
    href: "/shows/tokomile",
    image: tokomile[0],
    alt: "Dramatic silhouette of African acrobats in mid-air under a theatrical spotlight",
    featured: true,
  },
  {
    slug: "rizombe-king",
    title: "RIZOMBE KING",
    subtitle: "Power • Rhythm • African Storytelling",
    description:
      "An original theatrical production bringing African storytelling together with acrobatics, dance, music, drama and spectacular physical performance. Created for audiences who want more than a traditional acrobatic act, combining powerful movement, humour, and extraordinary physical skill.",
    href: "/shows/rizombe-king",
    image: rizombe[0],
    alt: "Lead performer in the Rizombe King production",
  },
  {
    slug: "african-pirate",
    title: "AFRICAN PIRATE",
    subtitle: "An African Adventure for the Whole Family",
    description:
      "Prepare for an energetic theatrical adventure as Afrikan Warriors brings the world of pirates together with African music, dance, comedy and acrobatics. A family entertainment production filled with colourful characters and the unique African personality of our team.",
    href: "/shows/african-pirate",
    image: pirate[0],
    alt: "African Pirate production on stage",
  },
  {
    slug: "freedom",
    title: "FREEDOM",
    subtitle: "Movement • Music • Culture • Expression",
    description:
      "FREEDOM celebrates the power of movement, African culture, music and human expression. Combining acrobatics, dance, theatre, rhythm and storytelling, the production presents the dynamic performance style that Afrikan Warriors has developed through decades of international touring.",
    href: "/shows/freedom",
    image: freedom[0],
    alt: "FREEDOM production with live percussion and dance",
  },
  {
    slug: "regular-show",
    title: "REGULAR SHOW",
    subtitle: "High-Energy African Acrobatics & Entertainment",
    description:
      "Our flexible core performance offering raw, high-energy African acrobatics. Perfect for galas, festivals, and corporate events requiring spectacular visual impact and fast-paced entertainment without a full narrative structure.",
    href: "/shows/regular-show",
    image: regular[0],
    alt: "High-energy African acrobatics on stage",
  },
];

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
