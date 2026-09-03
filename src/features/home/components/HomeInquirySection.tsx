import { Icon, type IconName } from "@/components/ui/Icon";
import { InquiryForm } from "@/features/inquiry/InquiryForm";

const prompts: { icon: IconName; label: string }[] = [
  { icon: "location_on", label: "Where is your event?" },
  { icon: "calendar_today", label: "When is it happening?" },
  { icon: "groups", label: "What type of audience?" },
  { icon: "schedule", label: "How long would you like us to perform?" },
];

export function HomeInquirySection() {
  return (
    <section
      className="py-stack-xl relative overflow-hidden bg-surface-container scroll-mt-32"
      id="inquiry"
    >
      <div className="absolute inset-0 bg-primary/5" />
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase mb-6">
              Request a Quote
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-8">
              Every event is different. Tell us about yours and we&apos;ll create
              the right performance for your audience, venue and budget.
            </p>
            <ul className="space-y-4 font-label-caps text-on-surface tracking-widest uppercase mb-10">
              {prompts.map((item) => (
                <li key={item.label} className="flex items-center gap-4">
                  <Icon name={item.icon} className="text-primary" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-stage p-8 border border-primary/20">
            <h3 className="font-headline-md text-2xl text-primary uppercase mb-6">
              Get A Quote
            </h3>
            <InquiryForm variant="home" />
          </div>
        </div>
      </div>
    </section>
  );
}
