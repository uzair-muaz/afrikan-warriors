import images from "@/constants/images.json";

const urls = images.acts;

export type ActItem = {
  title: string;
  subtitle: string;
  body: string;
  image: string;
  alt: string;
  featured?: boolean;
};

/** Visual gallery order aligned to client brief — images from media/v1 */
export const acts: ActItem[] = [
  {
    title: "Human Pyramids",
    subtitle: "Strength & Balance",
    body: "Towering formations built on absolute trust and raw strength. A monumental display of human architecture and collective power.",
    image: urls[0],
    alt: "Towering human pyramid formed by athletic performers",
  },
  {
    title: "Fire Limbo",
    subtitle: "Limbo Fire option",
    body: "A display of extreme flexibility under the bar. Limbo Fire option available subject to venue approval, risk assessment and appropriate safety conditions.",
    image: urls[1],
    alt: "African acrobat performing fire limbo on stage",
    featured: true,
  },
  {
    title: "Hoop Diving",
    subtitle: "Airborne Agility",
    body: "Explosive leaps and pinpoint accuracy as performers thread the needle through stacked hoops in a display of fearless aerial acrobatics.",
    image: urls[2],
    alt: "Acrobat diving through stacked wooden hoops",
  },
  {
    title: "Hat Juggling",
    subtitle: "Rhythmic Precision",
    body: "Lightning-fast coordination and rhythmic manipulation of traditional hats in a mesmerizing blur of motion and dexterity.",
    image: urls[3],
    alt: "Juggler rapidly manipulating multiple woven hats",
  },
  {
    title: "Tumbling",
    subtitle: "Raw Velocity",
    body: "Continuous, high-impact acrobatic sequences traversing the stage with explosive power, speed, and spatial awareness.",
    image: urls[4],
    alt: "Tumbler mid-flip above a dark stage",
  },
  {
    title: "Chinese Pole",
    subtitle: "Vertical Mastery",
    body: "Gravity-defying drops and rigid holds executed on a vertical axis, demanding supreme core strength and flawless control.",
    image: urls[5],
    alt: "Acrobat holding a flag pose on a metallic pole",
  },
  {
    title: "Chair Balance",
    subtitle: "Ascending Tension",
    body: "A breathtaking ascent on an ever-growing, unstable tower of chairs. A testament to unparalleled focus and equilibrium.",
    image: urls[6],
    alt: "Performer balancing atop a towering stack of chairs",
  },
  {
    title: "Live Percussion",
    subtitle: "Rhythm & Force",
    body: "Live drums and African rhythm drive every performance — energy the audience feels as much as they see.",
    image: urls[7],
    alt: "Live percussion and acrobatics on stage",
  },
  {
    title: "Traditional Dance",
    subtitle: "Culture in Motion",
    body: "Traditional and contemporary African dance woven through the productions — culture as spectacle.",
    image: urls[8],
    alt: "Traditional African dance ensemble on stage",
  },
];
