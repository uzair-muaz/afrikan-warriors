import type { IconName } from "@/components/ui/Icon";
import images from "@/constants/images.json";

export const homeImages = {
  hero: images.home[0],
  about: images.home[1],
};

export const skillTags = [
  "African Acrobatics",
  "Traditional Dance",
  "Physical Comedy",
  "Live Percussion",
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

export const majorCredits = [
  { title: "Britain's Got Talent", detail: "Semi-Finalists" },
  { title: "Australia's Got Talent", detail: "Semi-Finalists" },
  { title: "North West Talent Show", detail: "Finalists" },
  { title: "Durham Festival", detail: "Street Theatre Champions" },
  { title: "Le Cirque Roger Lanzac", detail: "World Tour" },
] as const;

export const storyTimeline: {
  year: string;
  mark: string;
  icon: IconName;
  body: string;
}[] = [
  {
    year: "Tanzania",
    mark: "Origins",
    icon: "location_on",
    body: "Street theatre and cultural performance in Dar es Salaam, where founder Rahim Saphy began as a young acrobat.",
  },
  {
    year: "Dar-Boys International",
    mark: "1996",
    icon: "groups",
    body: "The company takes shape as an international African performing-arts ensemble.",
  },
  {
    year: "United Kingdom",
    mark: "UK Base",
    icon: "flag",
    body: "A UK home, circus residencies, and a growing reputation on British stages.",
  },
  {
    year: "International Circus",
    mark: "Tours",
    icon: "attractions",
    body: "Zippos, Circus Vegas, Planet Circus and more — nights under the big top across Britain and Ireland.",
  },
  {
    year: "Television",
    mark: "2009",
    icon: "tv",
    body: "Britain's Got Talent and Australia's Got Talent introduce Afrikan Warriors to millions.",
  },
  {
    year: "Australia",
    mark: "2011",
    icon: "campaign",
    body: "A presence established down under, widening the company's international reach.",
  },
  {
    year: "World Tour",
    mark: "Global",
    icon: "directions_run",
    body: "Le Cirque Roger Lanzac and further touring across Europe, Africa and beyond.",
  },
  {
    year: "Street Theatre Champions",
    mark: "2016",
    icon: "workspace_premium",
    body: "Durham Street Theatre Festival — champions and award winners.",
  },
  {
    year: "Afrikan Warriors Today",
    mark: "Now",
    icon: "theater_comedy",
    body: "A touring production company with a catalogue of bookable shows. 30+ years on.",
  },
];

export const promoterAssets = [
  "Technical Rider",
  "Company Biography",
  "Press Photos",
  "Logos",
  "Risk Assessments",
  "Insurance Information",
  "Promotional Material",
] as const;

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
