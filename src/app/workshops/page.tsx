import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";
import { HeritageDivider } from "@/components/ui/HeritageDivider";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/constants/nav";
import {
  workshopEventTags,
  workshopImages,
  workshopTiers,
} from "@/constants/workshops";
import { InquiryForm } from "@/features/inquiry/InquiryForm";

export const metadata: Metadata = { title: "Workshops & Events" };

export default function WorkshopsPage() {
  return (
    <div className="pt-[120px] pb-stack-xl">
      <header className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-stack-xl text-center md:text-left flex flex-col md:flex-row gap-gutter items-center">
        <div className="flex-1 space-y-6">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-tight">
            Ignite Your <br />
            <span className="text-primary-container">Potential</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Experience the adrenaline and discipline of ancestral athleticism.
            Our workshops and performances are designed to elevate events,
            inspire teams, and leave a lasting impression of power and precision.
          </p>
          <div className="pt-4 flex gap-4 justify-center md:justify-start">
            <Button href="#workshops" size="lg">
              Explore Workshops
            </Button>
            <Button href="#packages" variant="ghost" size="lg">
              View Packages
            </Button>
          </div>
        </div>
        <div className="flex-1 w-full relative min-h-[400px] md:min-h-[600px]">
          <CoverImage
            src={workshopImages.hero}
            alt="Afrikan Warriors performer mid-leap during a high-energy acrobatic routine"
            className="grayscale opacity-80 mix-blend-screen"
          />
          <div className="absolute inset-0 border border-primary-container/20 m-4 pointer-events-none" />
        </div>
      </header>

      <HeritageDivider className="max-w-container-max mx-auto px-margin-desktop" />

      <section
        className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-stack-lg scroll-mt-32"
        id="workshops"
      >
        <div className="mb-12">
          <h2 className="font-headline-md text-headline-md text-on-surface uppercase mb-4">
            <span className="text-primary-container">01.</span> Masterclasses &
            Training
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
            Immersive experiences led by elite performers. Suitable for all skill
            levels, focusing on strength, teamwork, and cultural expression.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <article className="md:col-span-8 bg-platform border-l border-primary-container/30 relative overflow-hidden group hover:border-primary-container transition-colors min-h-[400px]">
            <CoverImage
              src={workshopImages.acro}
              alt="Two performers demonstrating a gravity-defying acro-balance pose"
              className="grayscale opacity-40 group-hover:opacity-60"
            />
            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
              <div className="inline-flex items-center gap-2 text-primary-container mb-2">
                <Icon name="fitness_center" filled />
                <span className="font-label-caps text-label-caps">Advanced</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-2">
                Acro-Balancing
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Push physical boundaries with expert guidance in partner
                balancing, counter-balance techniques, and structural formations.
              </p>
            </div>
          </article>
          <article className="md:col-span-4 bg-platform border-t border-primary-container/30 p-8 relative flex flex-col min-h-[300px] hover:border-primary-container transition-colors">
            <div className="inline-flex items-center gap-2 text-primary-container mb-4">
              <Icon name="local_fire_department" filled />
              <span className="font-label-caps text-label-caps">All Levels</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-2 text-xl">
              Circus Arts
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
              Juggling, object manipulation, and agility drills designed to
              improve coordination and stage presence.
            </p>
          </article>
          <article className="md:col-span-6 bg-platform border-l border-primary-container/30 p-8 min-h-[250px] flex flex-col justify-center hover:border-primary-container transition-colors">
            <div className="inline-flex items-center gap-2 text-primary-container mb-4">
              <Icon name="groups" filled />
              <span className="font-label-caps text-label-caps">Corporate</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-2 text-2xl">
              Corporate Synergy
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              High-stakes physical teamwork exercises that translate directly to
              workplace trust, communication, and collective problem-solving.
            </p>
          </article>
          <article className="md:col-span-6 bg-platform border-t border-primary-container/30 p-8 min-h-[250px] flex flex-col justify-center hover:border-primary-container transition-colors">
            <div className="inline-flex items-center gap-2 text-primary-container mb-4">
              <Icon name="school" filled />
              <span className="font-label-caps text-label-caps">Youth Focus</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-2 text-2xl">
              Youth Empowerment
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Inspiring the next generation through disciplined movement, cultural
              storytelling, and confidence-building physical activities.
            </p>
          </article>
        </div>
      </section>

      <section
        className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-stack-lg scroll-mt-32"
        id="packages"
      >
        <div className="mb-12 text-center">
          <h2 className="font-headline-md text-headline-md text-on-surface uppercase mb-4">
            <span className="text-primary-container">02.</span> Signature Packages
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Scalable spectacles tailored to the magnitude of your event. From
            intimate displays of strength to stage-dominating theatrical
            productions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {workshopTiers.map((tier) => (
            <article
              key={tier.name}
              className={
                tier.featured
                  ? "bg-surface-container-low border border-primary-container p-6 relative overflow-hidden accent-glow"
                  : "bg-surface-container-low border border-surface-variant p-6 hover:border-primary-container/50 transition-colors"
              }
            >
              {tier.featured ? (
                <div className="absolute inset-0 bg-primary-container/5 pointer-events-none" />
              ) : null}
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase text-xl mb-1 relative z-10">
                {tier.name}
              </h3>
              <div className="font-label-caps text-label-caps text-primary-container mb-4 relative z-10">
                {tier.size}
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 min-h-[80px] relative z-10">
                {tier.body}
              </p>
              <div className="border-t border-surface-variant pt-4 relative z-10">
                <span className="block font-label-caps text-label-caps text-on-surface mb-2">
                  Ideal For:
                </span>
                <ul className="text-sm text-on-surface-variant space-y-1">
                  {tier.ideal.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary-container rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-stack-lg bg-platform border-y border-primary-container/10 overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-8 flex flex-col md:flex-row justify-between items-center">
          <h2 className="font-headline-md text-headline-md text-on-surface uppercase text-2xl">
            Adaptable to Any Arena
          </h2>
          <p className="font-label-caps text-label-caps text-primary-container mt-2 md:mt-0">
            Elevating atmospheres worldwide.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 px-8 py-4">
          {workshopEventTags.map((tag) => (
            <span
              key={tag}
              className="font-display-lg text-headline-md text-on-surface-variant uppercase tracking-wider border border-surface-variant px-6 py-2 hover:text-primary-container hover:border-primary-container transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section
        className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-stack-xl scroll-mt-32"
        id="inquiry"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase mb-6 tracking-tight">
              Secure Your <br />
              <span className="text-primary-container">Spectacle</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-md">
              Provide us with the details of your event, and our management team
              will coordinate a bespoke performance package or workshop tailored
              to your requirements.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="mail" className="text-primary-container mt-1" />
                <div>
                  <h4 className="font-label-caps text-label-caps text-on-surface uppercase mb-1">
                    Direct Inquiry
                  </h4>
                  <a
                    href={`mailto:${site.email}`}
                    className="font-body-md text-body-md text-on-surface-variant hover:text-primary-container transition-colors"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="location_on" className="text-primary-container mt-1" />
                <div>
                  <h4 className="font-label-caps text-label-caps text-on-surface uppercase mb-1">
                    Global Base
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Available for worldwide deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-platform p-8 border-t border-primary-container">
            <InquiryForm variant="workshops" />
          </div>
        </div>
      </section>
    </div>
  );
}
