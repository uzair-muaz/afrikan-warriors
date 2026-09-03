import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { performancePackages } from "@/constants/packages";
import { cn } from "@/lib/cn";

export function PackagesTeaser() {
  return (
    <section className="py-stack-lg bg-surface-container px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <h2 className="text-center font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase mb-16">
          Performance <span className="text-primary">Packages</span>
        </h2>
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
              <h3 className="font-headline-md text-headline-md text-primary uppercase mb-2">
                {pkg.name}
              </h3>
              <p className="font-label-caps text-on-surface uppercase tracking-widest mb-6 pb-4 border-b border-primary/20">
                {pkg.features[0]}
              </p>
              <p className="text-on-surface-variant font-body-md mb-6 flex-grow">
                {pkg.id === "silver" &&
                  "A compact Afrikan Warriors experience designed for smaller events and venues."}
                {pkg.id === "bronze" &&
                  "Our classic Afrikan Warriors package and one of our most versatile options."}
                {pkg.id === "gold" &&
                  "Our premium high-energy performance package, taking the scale, pace and visual impact to the next level."}
              </p>
              <div className="mb-8">
                <p className="text-xl font-headline-md text-on-surface mb-2">
                  {pkg.id === "silver" && "From £499"}
                  {pkg.id === "bronze" && "From £895"}
                  {pkg.id === "gold" && "Custom Pricing"}
                </p>
                <p className="text-sm text-on-surface-variant italic">
                  {pkg.detail}
                </p>
              </div>
              <Button
                href="/packages#inquiry-form"
                variant={pkg.featured ? "primary" : "ghost"}
                fullWidth
              >
                {pkg.id === "silver" && "Enquire About Silver"}
                {pkg.id === "bronze" && "Enquire About Bronze"}
                {pkg.id === "gold" && "Enquire About Gold"}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
