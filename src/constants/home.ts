import type { IconName } from "@/components/ui/Icon";
import images from "@/constants/images.json";

const homeUrls = images.afrikan_warriors_home_final_integrated;

export const homeImages = {
  hero: homeUrls[0],
  about: homeUrls[1],
  video: homeUrls[2],
};

export const skillTags = [
  "African Acrobatics",
  "Traditional Dance",
  "Physical Comedy",
  "Live Percussion",
  "Fire Performance",
  "Theatrical Storytelling",
  "Contortion",
  "Human Pyramids",
  "Interactive Workshops",
];

export const eventTypes: { icon: IconName; label: string }[] = [
  { icon: "festival", label: "Festivals" },
  { icon: "celebration", label: "Carnivals" },
  { icon: "theater_comedy", label: "Theatres" },
  { icon: "business", label: "Corporate Events" },
  { icon: "park", label: "Theme Parks" },
  { icon: "shopping_cart", label: "Shopping Centres" },
  { icon: "local_bar", label: "Nightclubs" },
  { icon: "school", label: "Schools" },
  { icon: "groups", label: "Community Events" },
  { icon: "sports_soccer", label: "Sporting Events" },
  { icon: "tv", label: "Television" },
  { icon: "movie", label: "Film & Media" },
  { icon: "restaurant", label: "Gala Dinners" },
  { icon: "volunteer_activism", label: "Charity Events" },
  { icon: "cake", label: "Private Parties" },
  { icon: "attractions", label: "Circus Tours" },
  { icon: "campaign", label: "Product Launches" },
  { icon: "diversity_3", label: "Cultural Events" },
];

export const tvAppearances = [
  "Britain's Got Talent (2009)",
  "Australia's Got Talent (2011)",
  "Le Cirque Roger Lanzac (World Tour)",
  "North West Talent Show (Finalists 2015)",
  "Durham Street Theatre Festival (Champions / Award Winners 2016)",
];

export const venues = [
  "Zippos Circus – England",
  "Gandey’s Christmas Circus – Jersey",
  "Circus Starr – England",
  "Circus Vegas – UK & Ireland",
  "Planet Circus – Ireland",
  "Daredevil Circus – Ireland",
  "Uncle Sam's American Circus",
  "Flamingo Land Resort",
  "Bagamoyo Festival – Tanzania",
  "Festival of Fools – Northern Ireland",
];

export const homeTeam = [
  {
    name: "Rahim Saphy",
    role: "Founder | CEO | Director",
    bio: "A self-taught acrobat who began performing at age 12 in Dar es Salaam. He established the company in 1996 and has since led performers through productions worldwide.",
  },
  {
    name: "Alex Cuna",
    role: "Assistant Director | Artist",
    bio: "With almost two decades of experience, Alex helped establish the Afrikan Warriors presence in Australia in 2011 and represents the company's commitment to high-quality entertainment.",
  },
  {
    name: "Lawrence Ntauka",
    role: "Assistant Director | Artist",
    bio: "Approximately 25 years of experience. A self-taught acrobat who began at age 15, he joined in 1997 and has become a crucial performer and leader within the team.",
  },
  {
    name: 'Ally Kimbunga "Chika"',
    role: "Artist | Actor | Comedian",
    bio: "One of the most experienced all-round entertainers with a career spanning 30 years across Africa, Europe, Russia, Australia and the UK. Highly skilled in acting, comedy and music.",
  },
];

export const testimonials = [
  {
    quote:
      "A brilliant addition to our festival. The crowd absolutely loved them. Energy, skill, and fantastic interaction with the audience. Highly recommended.",
    name: "Will Chamberlain",
    title: "Director, Festival of Fools",
  },
  {
    quote:
      "Some of the craziest and funniest acrobats I have ever seen. Excellent tumblers, great comedy and brilliant dancers. Afrikan Warriors are great fun to have at any event.",
    name: "John Courtney",
    title: "CEO, Circus Vegas",
  },
  {
    quote:
      "Outstanding performers. They brought a unique flair and immense energy to our stage. Professional, talented, and an absolute joy to work with.",
    name: "Steve Cousins",
    title: "Director, Let's Circus",
  },
];

export const clients = [
  "Zippos Circus",
  "Britain's Got Talent",
  "Circus Vegas",
  "Festival of Fools",
  "Flamingo Land",
  "Australia's Got Talent",
];
