import type { Metadata } from "next";
import { Anybody, Hanken_Grotesk, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ShutterIntro } from "@/components/layout/ShutterIntro";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import "./globals.css";

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

export const metadata: Metadata = {
  title: {
    default: "AFRIKAN WARRIORS - Extraordinary African Acrobatics",
    template: "%s | AFRIKAN WARRIORS",
  },
  description:
    "World-class African acrobatic performances combining breathtaking stunts, traditional dance, incredible balance, and audience interaction.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anybody.variable} ${hanken.variable} ${spaceGrotesk.variable} h-full dark antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stage font-body-md text-body-md text-on-surface overflow-x-hidden">
        <SmoothScroll />
        <ShutterIntro />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
