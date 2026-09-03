import type { IconName } from "@/components/ui/Icon";

export const site = {
  name: "AFRIKAN WARRIORS",
  tagline: "CINEMATIC HERITAGE & ANCESTRAL PRESTIGE.",
  email: "booking@afrikanwarriors.com",
  inquiryHref: "/packages#inquiry-form",
} as const;

export type NavItem = {
  href: string;
  label: string;
  match?: "exact" | "prefix" | "shows";
};

export const navItems: NavItem[] = [
  { href: "/acts", label: "Our Acts", match: "prefix" },
  { href: "/workshops", label: "Workshops", match: "prefix" },
  { href: "/gallery", label: "Gallery", match: "prefix" },
  { href: "/packages", label: "Packages", match: "prefix" },
  { href: "/team", label: "Team", match: "prefix" },
  { href: "/faq", label: "FAQ", match: "prefix" },
  { href: "/packages#inquiry-form", label: "Inquiry" },
];

export const footerExplore = [
  { href: "/#shows", label: "Performances" },
  { href: "/acts", label: "Our Acts" },
  { href: "/team", label: "Team" },
  { href: "/faq", label: "FAQ" },
] as const;

export const footerLegal = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "Press Kit" },
  { href: "/packages#inquiry-form", label: "Contact" },
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
