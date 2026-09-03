import type { IconName } from "@/components/ui/Icon";
import images from "@/constants/images.json";

export type ShowCard = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
};

export const featuredShows: ShowCard[] = [
  {
    slug: "tokomile",
    title: "TOKOMILE SHOW",
    subtitle: "African Theatre. Acrobatics. Music. Comedy. Adventure.",
    description:
      "Our signature African pantomime-style theatre production. Set in the fictional African kingdom of Zaramu and inspired by the traditions and culture of Tanzania, the story follows a theatrical adventure filled with rivalry, humour, celebration, and spectacular African performance.",
    href: "/shows/tokomile",
  },
  {
    slug: "rizombe-king",
    title: "RIZOMBE KING",
    subtitle: "Power. Culture. Rhythm. African Storytelling.",
    description:
      "An original theatrical production bringing African storytelling together with acrobatics, dance, music, drama and spectacular physical performance. Created for audiences who want more than a traditional acrobatic act, combining powerful movement, humour, and extraordinary physical skill.",
    href: "/shows/rizombe-king",
  },
  {
    slug: "african-pirate",
    title: "AFRICAN PIRATE",
    subtitle: "An African Twist on a Classic Adventure.",
    description:
      "Prepare for an energetic theatrical adventure as Afrikan Warriors brings the world of pirates together with African music, dance, comedy and acrobatics. A family entertainment production filled with colourful characters and the unique African personality of our team.",
    href: "/shows/african-pirate",
  },
  {
    slug: "freedom",
    title: "FREEDOM",
    subtitle: "Movement. Music. Culture. Expression.",
    description:
      "FREEDOM celebrates the power of movement, African culture, music and human expression. Combining acrobatics, dance, theatre, rhythm and storytelling, the production presents the dynamic performance style that Afrikan Warriors has developed through decades of international touring.",
    href: "/shows/freedom",
  },
  {
    slug: "regular-show",
    title: "REGULAR SHOW",
    subtitle: "Classic African Acrobatics & Entertainment.",
    description:
      "Our flexible core performance offering raw, high-energy African acrobatics. Perfect for galas, festivals, and corporate events requiring spectacular visual impact and fast-paced entertainment without a full narrative structure.",
    href: "/shows/regular-show",
  },
];

const tokomile = images.tokomile_show_zaramu_kingdom_final;
const rizombe = images.rizombe_king_power_rhythm_final;
const pirate = images.african_pirate_an_african_adventure_final;
const freedom = images.freedom_movement_culture_final;
const regular = images.performance_regular_show;

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

export const regularElements: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "group",
    title: "Human Pyramids",
    body: "Breathtaking displays of strength, balance, and ancestral teamwork.",
  },
  {
    icon: "sports_gymnastics",
    title: "Limbo Dance",
    body: "Incredible flexibility, available with our exhilarating Limbo Fire option.",
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
