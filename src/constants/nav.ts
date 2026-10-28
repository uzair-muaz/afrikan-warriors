import type { IconName } from "@/components/ui/Icon";
import { featuredShows } from "@/constants/shows";

export const site = {
  name: "AFRIKAN WARRIORS",
  tagline: "The Spirit of Africa. The Energy of Live Performance.",
  email: "booking@afrikanwarriors.com",
  inquiryHref: "/#inquiry",
  /** International format without +. Empty until the client supplies a number. */
  whatsapp: "+",
} as const;

export type NavChild = { href: string; label: string };

export type NavItem = {
  href?: string;
  label: string;
  match?: "exact" | "prefix" | "shows" | "children";
  children?: NavChild[];
};

/** The company. These stay in the main row. */
export const primaryNav: NavItem[] = [
  {
    href: "/#shows",
    label: "Shows",
    match: "shows",
    children: featuredShows.map((show) => ({
      href: show.href,
      label: show.title,
    })),
  },
  {
    label: "Company",
    match: "children",
    children: [
      { href: "/about", label: "About" },
      { href: "/media", label: "Media" },
      { href: "/workshops", label: "Workshops" },
      { href: "/tour", label: "Tour" },
      { href: "/team", label: "AW-Team" },
    ],
  },
];

/** Audience links. Quieter, so they don't compete with the shows. */
export const utilityNav: NavItem[] = [
  { href: "/shop", label: "Shop", match: "prefix" },
  { href: "/support", label: "Support", match: "prefix" },
  { href: "/promoters", label: "Promoters", match: "prefix" },
];

export const footerColumns = [
  {
    title: "Shows",
    links: featuredShows.map((show) => ({
      href: show.href,
      label: show.title,
    })),
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/media", label: "Media" },
      { href: "/workshops", label: "Workshops" },
      { href: "/tour", label: "Tour" },
      { href: "/acts", label: "Acts" },
      { href: "/team", label: "AW-Team" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: "/shop", label: "Shop" },
      { href: "/support", label: "Support Afrikan Warriors" },
      { href: "/promoters", label: "For Promoters" },
      { href: "/legal", label: "Legal" },
      { href: site.inquiryHref, label: "Contact" },
    ],
  },
] as const;

export const footerSocial: {
  href: string;
  label: string;
  icon: IconName;
}[] = [
  {
    href: "https://www.instagram.com/afrikanwarriorz",
    label: "Instagram",
    icon: "instagram",
  },
  {
    href: "https://www.youtube.com/@aw-team",
    label: "YouTube",
    icon: "youtube",
  },
  {
    href: "https://www.facebook.com/share/1GQJX4EzjG/",
    label: "Facebook",
    icon: "facebook",
  },
  {
    href: "https://www.tiktok.com/@afrikanwarriors",
    label: "TikTok",
    icon: "tiktok",
  },
];
