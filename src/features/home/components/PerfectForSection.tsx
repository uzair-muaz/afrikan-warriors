import { Icon } from "@/components/ui/Icon";
import { eventTypes } from "@/constants/home";

export function PerfectForSection() {
  return (
    <section className="py-stack-xl px-margin-mobile md:px-margin-desktop bg-void border-y border-primary/10">
      <div className="max-w-container-max mx-auto text-center">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-12">
          Perfect <span className="text-on-surface">For</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {eventTypes.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-3 p-4 bg-surface-container border border-primary/20 hover:border-primary transition-colors"
            >
              <Icon name={item.icon} className="text-primary text-3xl font-light" />
              <span className="font-label-caps text-sm uppercase tracking-widest text-on-surface">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
