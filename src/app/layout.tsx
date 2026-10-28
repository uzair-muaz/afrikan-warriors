import type { Metadata } from "next";
import { Anybody, Hanken_Grotesk, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ShutterIntro } from "@/components/layout/ShutterIntro";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { BackToTop } from "@/components/layout/BackToTop";
import { CloudflareBeacon } from "@/components/analytics/CloudflareBeacon";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { organizationJsonLd, pageSeo, publicSiteUrl } from "@/lib/seo";
import "./globals.css";
import "lenis/dist/lenis.css";

const anybody = Anybody({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-anybody",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-hanken",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-space",
  display: "swap",
});

const homeSeo = pageSeo({
  title: "Afrikan Warriors | African acrobatics and live theatre",
  description:
    "Tanzanian-born company based in Northern Ireland. African acrobatics, dance, theatre and live music for festivals, theatres and events in the UK and Ireland.",
  path: "/",
  absolute: true,
});

export const metadata: Metadata = {
  ...homeSeo,
  metadataBase: new URL(publicSiteUrl()),
  title: {
    default: "Afrikan Warriors | African acrobatics and live theatre",
    template: "%s | Afrikan Warriors",
  },
  applicationName: "Afrikan Warriors",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anybody.variable} ${hanken.variable} ${spaceGrotesk.variable} h-full dark antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stage font-body-md text-body-md text-on-surface">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()).replaceAll("<", "\\u003c"),
          }}
        />
        <SmoothScroll />
        <ShutterIntro />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
        <WhatsAppFloat />
        <CloudflareBeacon />
      </body>
    </html>
  );
}
