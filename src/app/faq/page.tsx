import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { faqItems } from "@/constants/faq";
import images from "@/constants/images.json";
import { site } from "@/constants/nav";
import { ShowHero } from "@/features/shows/components/ShowHero";

export const metadata: Metadata = { title: "Frequently Asked Questions" };

const faqHero = images.pages.faqHero;

export default function FaqPage() {
  const col1 = faqItems.slice(0, 6);
  const col2 = faqItems.slice(6);

  return (
    <>
      <ShowHero
        image={faqHero}
        alt="Quiet Afrikan Warriors stage with a musician and warm spotlight"
        eyebrow="Support"
        title="FAQ"
        titlePrimary
        subtitle="Everything you need to know about booking, requirements, and performing with Afrikan Warriors."
        imagePositionClassName="object-[center_40%]"
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <Button href="#questions" size="lg">
            Browse Questions
          </Button>
          <Button href={site.inquiryHref} variant="ghost" size="lg">
            Get in Touch
          </Button>
        </div>
      </ShowHero>

      <div className="pb-stack-xl max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div
          id="questions"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 scroll-mt-32 pt-stack-lg"
        >
          {[col1, col2].map((col, i) => (
            <div key={i} className="space-y-4">
              {col.map((item) => (
                <details
                  key={item.q}
                  className="group bg-surface-container border-l border-transparent hover:border-primary/20 transition-all open:border-primary open:bg-surface-container-highest"
                >
                  <summary className="flex justify-between items-center p-6 font-headline-md text-[20px] text-on-surface cursor-pointer">
                    {item.q}
                    <Icon
                      name="add"
                      className="faq-icon text-primary transition-transform duration-300"
                    />
                  </summary>
                  <div className="px-6 pb-6 font-body-md text-body-md text-on-surface-variant">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          ))}
        </div>

        <section className="mt-stack-xl text-center bg-surface-container p-12 relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              Still have questions?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg mx-auto">
              Our management team is ready to discuss the specific requirements
              for your next premium event.
            </p>
            <Button href="/#inquiry" variant="ghost" size="lg">
              Get in Touch
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
