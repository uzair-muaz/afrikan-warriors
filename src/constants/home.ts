import type { IconName } from "@/components/ui/Icon";
import images from "@/constants/images.json";

export const homeImages = {
  hero: images.home[0],
  about: images.home[1],
  bring: images.home[2],
  ensemble: images.home[3],
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
  { title: "Circus Vegas", detail: "UK & Ireland Tour" },
  { title: "American Circus", detail: "UK & Ireland Tour" },
  { title: "Planet Circus", detail: "Irish Tour" },
  { title: "Durham Festival", detail: "Street Theatre Champions" },
  { title: "Le Cirque Roger Lanzac", detail: "World Tour" },
  { title: "30+ Years", detail: "International Entertainment" },
] as const;

export const storyTimeline: {
  year: string;
  mark: string;
  icon: IconName;
  body: string;
  image?: string;
}[] = [
  {
    year: "Dar es Salaam",
    mark: "Origins",
    icon: "location_on",
    body: "Street theatre and cultural performance in Tanzania, where founder Rahim Saphy began as a young acrobat.",
    image: images.source[0],
  },
  {
    year: "United Kingdom",
    mark: "UK Base",
    icon: "flag",
    body: "A UK home, circus residencies, and a growing reputation on British stages.",
    image: images.source[4],
  },
  {
    year: "Britain's Got Talent",
    mark: "2009",
    icon: "tv",
    body: "National television introduces Afrikan Warriors to millions — followed by Australia's Got Talent.",
    image: images.source[1],
  },
  {
    year: "Australia",
    mark: "2011",
    icon: "campaign",
    body: "A presence established down under, widening the company's international reach.",
    image: images.source[5],
  },
  {
    year: "European Touring",
    mark: "Global",
    icon: "directions_run",
    body: "Circuses and festivals across Europe, plus performances in the UAE, Kuwait, Qatar and Bahrain.",
    image: images.source[3],
  },
  {
    year: "Afrikan Warriors Today",
    mark: "Now",
    icon: "theater_comedy",
    body: "A touring production company with a catalogue of bookable shows. 30+ years on — Durham Street Theatre Champions (2016).",
    image: images.source[2],
  },
];

export const promoterBookingTypes: { icon: IconName; label: string }[] = [
  { icon: "festival", label: "Festivals" },
  { icon: "theater_comedy", label: "Theatres" },
  { icon: "attractions", label: "Circuses" },
  { icon: "park", label: "Theme Parks" },
  { icon: "business", label: "Corporate Events" },
  { icon: "tv", label: "Television" },
  { icon: "cake", label: "Private Events" },
];

export const promoterLinks = [
  { label: "Download Press Kit", href: "/about#promoters" },
  { label: "Technical Requirements", href: "/about#promoters" },
  { label: "Risk & Safety Information", href: "/about#promoters" },
  { label: "Request Availability", href: "/#inquiry" },
] as const;

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
