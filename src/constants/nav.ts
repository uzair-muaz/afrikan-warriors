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

export type NavItem = {
  href: string;
  label: string;
  match?: "exact" | "prefix" | "shows";
  children?: { href: string; label: string }[];
};

export const navItems: NavItem[] = [
  {
    href: "/#shows",
    label: "Shows",
    match: "shows",
    children: featuredShows.map((show) => ({
      href: show.href,
      label: show.title,
    })),
  },
  { href: "/about", label: "About", match: "prefix" },
  { href: "/media", label: "Media", match: "prefix" },
  { href: "/workshops", label: "Workshops", match: "prefix" },
  { href: "/promoters", label: "For Promoters", match: "prefix" },
  { href: "/faq", label: "FAQ", match: "prefix" },
  { href: "/#inquiry", label: "Contact" },
];

export const footerExplore = [
  { href: "/", label: "Home" },
  { href: "/#shows", label: "Shows" },
  { href: "/about", label: "About" },
  { href: "/media", label: "Media" },
  { href: "/acts", label: "Acts" },
  { href: "/workshops", label: "Workshops" },
  { href: "/team", label: "AW-Team" },
  { href: "/faq", label: "FAQ" },
  { href: "/promoters", label: "For Promoters" },
] as const;

export const footerLegal = [
  { href: "/promoters", label: "Press Kit" },
  { href: "/#inquiry", label: "Contact" },
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
