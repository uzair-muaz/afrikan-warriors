import type { Metadata } from "next";
import { AboutSection } from "@/features/home/components/AboutSection";
import { BringAfricaSection } from "@/features/home/components/BringAfricaSection";
import { ClientsMarquee } from "@/features/home/components/ClientsMarquee";
import { ExperienceSection } from "@/features/home/components/ExperienceSection";
import { FeaturedShows } from "@/features/home/components/FeaturedShows";
import { HeroSection } from "@/features/home/components/HeroSection";
import { HomeInquirySection } from "@/features/home/components/HomeInquirySection";
import { PackagesTeaser } from "@/features/home/components/PackagesTeaser";
import { PerfectForSection } from "@/features/home/components/PerfectForSection";
import { TeamTeaser } from "@/features/home/components/TeamTeaser";
import { TestimonialsSection } from "@/features/home/components/TestimonialsSection";
import { VideoShowcase } from "@/features/home/components/VideoShowcase";

export const metadata: Metadata = {
  title: "AFRIKAN WARRIORS - Extraordinary African Acrobatics",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BringAfricaSection />
      <FeaturedShows />
      <PerfectForSection />
      <PackagesTeaser />
      <ExperienceSection />
      <TeamTeaser />
      <VideoShowcase />
      <TestimonialsSection />
      <ClientsMarquee />
      <HomeInquirySection />
    </>
  );
}
