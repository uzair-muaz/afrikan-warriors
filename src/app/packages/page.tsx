import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HeritageDivider } from "@/components/ui/HeritageDivider";
import { Icon } from "@/components/ui/Icon";
import { performancePackages, specialistAddOns } from "@/constants/packages";
import { InquiryForm } from "@/features/inquiry/InquiryForm";
import { cn } from "@/lib/cn";

export const metadata: Metadata = { title: "Performance Packages" };

export default function PackagesPage() {
  return (
    <>
      <main className="pt-32 pb-stack-xl">
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-xl text-center md:text-left">
          <HeritageDivider className="w-24 mb-6 mx-auto md:mx-0" />
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-6 uppercase">
            Cinematic <br />
            <span className="text-primary">Performance</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto md:mx-0">
            Elevate your event with our ancestral prestige and high-octane
            athleticism. Choose a package designed to command the stage and leave
            audiences in awe.
          </p>
        </section>

        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {performancePackages.map((pkg) => (
              <article
                key={pkg.id}
                className={cn(
                  "bg-platform border-t border-l border-gold-border p-8 flex flex-col relative group",
                  pkg.featured &&
                    "border-t-2 border-primary md:-translate-y-4 shadow-2xl",
                )}
              >
                {pkg.featured ? (
                  <Badge className="absolute -top-4 right-8">Most Popular</Badge>
                ) : null}
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <Icon name={pkg.icon} className="text-primary text-4xl" />
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-2 uppercase">
                  {pkg.name}
                </h2>
                <p className="font-label-caps text-label-caps text-primary mb-8 tracking-widest">
                  {pkg.price}
                </p>
                <ul className="flex-grow space-y-4 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Icon name="check_circle" className="text-primary text-sm mt-1" />
                      <span className="text-on-surface-variant">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="#inquiry-form"
                  variant={pkg.featured ? "primary" : "ghost"}
                  fullWidth
                  size="lg"
                >
                  {pkg.cta}
                </Button>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-gold-border bg-surface-container-low py-12">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/3">
                <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-2">
                  Specialist Add-Ons
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm border-l-2 border-primary pl-4">
                  Enhance your package. Additional charges apply. Minimum 5m x 5m
                  performance space required for large acts.
                </p>
              </div>
              <div className="md:w-2/3 flex flex-wrap gap-4 justify-start md:justify-end">
                {specialistAddOns.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 border border-gold-border text-on-surface font-label-caps text-xs uppercase tracking-wider"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <section
        className="py-stack-xl bg-background border-t border-gold-border scroll-mt-32"
        id="inquiry-form"
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-2xl mx-auto">
            <HeritageDivider className="w-24 mb-8 mx-auto" />
            <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-md text-on-surface text-center mb-4 uppercase tracking-tighter">
              Get a Quote
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant text-center mb-12">
              Tell us about your vision. Our team will craft a bespoke performance
              proposal tailored to your event&apos;s scale and prestige.
            </p>
            <InquiryForm variant="packages" />
          </div>
        </div>
      </section>
    </>
  );
}
