import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { HeritageDivider } from "@/components/ui/HeritageDivider";
import { Icon } from "@/components/ui/Icon";
import { faqItems } from "@/constants/faq";

export const metadata: Metadata = { title: "Frequently Asked Questions" };

export default function FaqPage() {
  const col1 = faqItems.slice(0, 6);
  const col2 = faqItems.slice(6);

  return (
    <div className="pt-[140px] pb-stack-xl max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <header className="text-center mb-stack-xl">
        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-6 uppercase tracking-tighter">
          Frequently Asked Questions
        </h1>
        <HeritageDivider className="max-w-[200px] mx-auto mb-6" />
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Everything you need to know about booking, requirements, and the
          unparalleled cinematic heritage experience of the Afrikan Warriors.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
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
                <div className="p-6 pt-0 font-body-md text-on-surface-variant border-l-2 border-primary ml-6 mb-6">
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
            Our management team is ready to discuss the specific requirements for
            your next premium event.
          </p>
          <Button href="/packages#inquiry-form" variant="ghost" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}
