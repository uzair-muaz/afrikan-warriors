import images from "@/constants/images.json";

const urls = images.our_acts_showcase;

export type ActItem = {
  title: string;
  subtitle: string;
  body: string;
  image: string;
  alt: string;
  featured?: boolean;
};

export const acts: ActItem[] = [
  {
    title: "Limbo Dance",
    subtitle: "Limbo Fire option",
    body: "A display of extreme flexibility under the bar. Limbo Fire option available subject to venue approval, risk assessment and appropriate safety conditions.",
    image: urls[0],
    alt: "African acrobat performing extreme limbo",
    featured: true,
  },
  {
    title: "Human Pyramids",
    subtitle: "Strength & Balance",
    body: "Towering formations built on absolute trust and raw strength. A monumental display of human architecture and collective power.",
    image: urls[1],
    alt: "Towering human pyramid formed by athletic performers",
  },
  {
    title: "Hat Juggling",
    subtitle: "Rhythmic Precision",
    body: "Lightning-fast coordination and rhythmic manipulation of traditional hats in a mesmerizing blur of motion and dexterity.",
    image: urls[2],
    alt: "Juggler rapidly manipulating multiple woven hats",
  },
  {
    title: "Hoops Diving",
    subtitle: "Airborne Agility",
    body: "Explosive leaps and pinpoint accuracy as performers thread the needle through stacked hoops in a display of fearless aerial acrobatics.",
    image: urls[3],
    alt: "Acrobat diving through stacked wooden hoops",
  },
  {
    title: "Chair Comedy",
    subtitle: "Theatrical Levity",
    body: "A masterclass in physical comedy, blending precarious balancing acts with theatrical humor to break the tension.",
    image: urls[4],
    alt: "Performer executing a comedic chair balancing act",
  },
  {
    title: "Skipping Rope",
    subtitle: "Kinetic Synchronization",
    body: "A high-velocity, synchronized display of endurance and timing. Complex rope formations and acrobatic leaps converge in a relentless rhythm.",
    image: urls[5],
    alt: "Performers in a complex skipping rope routine",
    featured: true,
  },
  {
    title: "Chinese Pole",
    subtitle: "Vertical Mastery",
    body: "Gravity-defying drops and rigid holds executed on a vertical axis, demanding supreme core strength and flawless control.",
    image: urls[6],
    alt: "Acrobat holding a flag pose on a metallic pole",
  },
  {
    title: "Chair Balancing",
    subtitle: "Ascending Tension",
    body: "A breathtaking ascent on an ever-growing, unstable tower of chairs. A testament to unparalleled focus and equilibrium.",
    image: urls[7],
    alt: "Performer balancing atop a towering stack of chairs",
  },
  {
    title: "Tumbling",
    subtitle: "Raw Velocity",
    body: "Continuous, high-impact acrobatic sequences traversing the stage with explosive power, speed, and spatial awareness.",
    image: urls[8],
    alt: "Tumbler mid-flip above a dark stage",
  },
];
