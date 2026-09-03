import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { quoteBlurb } from "@/constants/copy";
import { performancePackages, specialistAddOns } from "@/constants/packages";
import { cn } from "@/lib/cn";

export function PackagesTeaser() {
  return (
    <section
      id="packages"
      className="py-stack-lg bg-surface-container px-margin-mobile md:px-margin-desktop scroll-mt-32"
    >
      <div className="max-w-container-max mx-auto">
        <h2 className="text-center font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase mb-6">
          Performance <span className="text-primary">Packages</span>
        </h2>
        <p className="font-body-lg text-on-surface-variant text-center max-w-2xl mx-auto mb-16">
          {quoteBlurb}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {performancePackages.map((pkg) => (
            <article
              key={pkg.id}
              className={cn(
                "bg-surface-container-lowest p-8 border flex flex-col h-full relative",
                pkg.featured
                  ? "border-primary/50 shadow-gold-glow md:-translate-y-4"
                  : "border-primary/20",
              )}
            >
              {pkg.featured ? (
                <Badge className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  Most Popular
                </Badge>
              ) : null}
              <Icon name={pkg.icon} className="text-primary text-4xl mb-5" />
              <h3 className="font-headline-md text-headline-md text-primary uppercase mb-2">
                {pkg.name}
              </h3>
              <p className="font-label-caps text-on-surface uppercase tracking-widest mb-6 pb-4 border-b border-primary/20">
                {pkg.features[0]}
              </p>
              <p className="text-on-surface-variant font-body-md mb-6 grow">
                {pkg.id === "silver" &&
                  "A compact Afrikan Warriors experience designed for smaller events and venues."}
                {pkg.id === "bronze" &&
                  "Our classic Afrikan Warriors package and one of our most versatile options."}
                {pkg.id === "gold" &&
                  "Our premium high-energy performance package, taking the scale, pace and visual impact to the next level."}
              </p>
              <p className="text-sm text-on-surface-variant mb-8">{pkg.detail}</p>
              <Button
                href="/#inquiry"
                variant={pkg.featured ? "primary" : "ghost"}
                fullWidth
              >
                {pkg.cta}
              </Button>
            </article>
          ))}
        </div>

        <div className="mt-stack-lg flex flex-col md:flex-row items-center justify-between gap-8 border-t border-primary/20 pt-12">
          <div className="md:w-1/3 text-center md:text-left">
            <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-2">
              Specialist Add-Ons
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm border-l-2 border-primary pl-4">
              Scale the performance to the venue. Minimum 5m x 5m space required
              for large acts.
            </p>
          </div>
          <div className="md:w-2/3 flex flex-wrap gap-4 justify-center md:justify-end">
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
  );
}
