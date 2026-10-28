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
import { TokomileKingdomTeaser } from "@/features/home/components/TokomileKingdomTeaser";
import { HomeLiveClips } from "@/features/home/components/HomeLiveClips";
import { VideoShowcase } from "@/features/home/components/VideoShowcase";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Afrikan Warriors | African acrobatics and live theatre",
  description:
    "Tanzanian-born company based in Northern Ireland. African acrobatics, dance, theatre and live music for festivals, theatres and events in the UK and Ireland.",
  path: "/",
  absolute: true,
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CreditsBar />
      <HomeLiveClips />
      <AboutSection />
      <BringAfricaSection />
      <FeaturedShows />
      <TokomileKingdomTeaser />
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
