import type { Metadata } from "next";
import { company } from "@/constants/legal";
import { footerSocial, site } from "@/constants/nav";

/** Production origin. Local tunnels are ignored so share links and canonicals stay on the public site. */
export const productionOrigin = "https://afrikanwarriors.com";

export function publicSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (
    configured?.startsWith("https://") &&
    !configured.includes("localhost") &&
    !configured.includes("ngrok")
  ) {
    return configured;
  }
  return productionOrigin;
}

export const shareImage = {
  url: "/og/afrikan-warriors.jpg",
  width: 1200,
  height: 630,
  alt: "Afrikan Warriors performing on stage",
} as const;

const brand = "Afrikan Warriors";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  absolute?: boolean;
  index?: boolean;
};

export function pageSeo({
  title,
  description,
  path,
  absolute = false,
  index = true,
}: PageSeo): Metadata {
  const socialTitle = absolute ? title : `${title} | ${brand}`;

  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    robots: index
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : { index: false, follow: false },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: brand,
      locale: "en_GB",
      type: "website",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [shareImage.url],
    },
  };
}

export function organizationJsonLd() {
  const origin = publicSiteUrl();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "PerformingGroup",
        "@id": `${origin}/#organization`,
        name: brand,
        legalName: company.legalName,
        url: origin,
        email: site.email,
        image: `${origin}${shareImage.url}`,
        logo: `${origin}/documents/promoters/afrikan-warriors-logo.png`,
        address: {
          "@type": "PostalAddress",
          streetAddress: company.office[0],
          addressLocality: company.office[1],
          postalCode: company.office[2],
          addressCountry: "GB",
        },
        sameAs: footerSocial.map((item) => item.href),
      },
      {
        "@type": "WebSite",
        "@id": `${origin}/#website`,
        url: origin,
        name: brand,
        publisher: { "@id": `${origin}/#organization` },
      },
    ],
  };
}

export const indexablePaths = [
  "/",
  "/about",
  "/shows/tokomile",
  "/shows/rizombe-king",
  "/shows/african-pirate",
  "/shows/freedom",
  "/shows/regular-show",
  "/acts",
  "/media",
  "/workshops",
  "/tour",
  "/team",
  "/faq",
  "/promoters",
  "/support",
  "/shop",
  "/legal",
] as const;
