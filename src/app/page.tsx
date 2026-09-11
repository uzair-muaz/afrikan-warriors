import type { Metadata } from "next";
import { AboutSection } from "@/features/home/components/AboutSection";
import { ActsTeaser } from "@/features/home/components/ActsTeaser";
import { BringAfricaSection } from "@/features/home/components/BringAfricaSection";
import { ClientsMarquee } from "@/features/home/components/ClientsMarquee";
import { CreditsBar } from "@/features/home/components/CreditsBar";
import { ExperienceDiscuss } from "@/features/home/components/ExperienceDiscuss";
import { FeaturedShows } from "@/features/home/components/FeaturedShows";
import { ForPromotersSection } from "@/features/home/components/ForPromotersSection";
import { HeroSection } from "@/features/home/components/HeroSection";
import { HomeInquirySection } from "@/features/home/components/HomeInquirySection";
import { KaribuCloser } from "@/features/home/components/KaribuCloser";
import { StoryTimeline } from "@/features/home/components/StoryTimeline";
import { TestimonialsSection } from "@/features/home/components/TestimonialsSection";
import { TeamTeaser } from "@/features/home/components/TeamTeaser";
import { VideoShowcase } from "@/features/home/components/VideoShowcase";

export const metadata: Metadata = {
  title: "AFRIKAN WARRIORS - Extraordinary African Acrobatics",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CreditsBar />
      <AboutSection />
      <BringAfricaSection />
      <FeaturedShows />
      <ExperienceDiscuss />
      <VideoShowcase />
      <ActsTeaser />
      <TeamTeaser />
      <TestimonialsSection />
      <StoryTimeline />
      <ForPromotersSection />
      <ClientsMarquee />
      <KaribuCloser />
      <HomeInquirySection />
    </>
  );
}
