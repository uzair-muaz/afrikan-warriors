import { SectionHeading } from "@/components/ui/SectionHeading";
import { InquiryForm } from "@/features/inquiry/InquiryForm";

export function HomeInquirySection() {
  return (
    <section
      className="py-stack-xl relative overflow-hidden bg-surface-container scroll-mt-32"
      id="inquiry"
    >
      <div className="absolute inset-0 bg-primary/5" />
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="md:col-span-5">
            <SectionHeading
              align="left"
              title="Request Availability"
              description="A short booking journey so we can reply with the right production, cast size and technical fit for your venue."
              className="mb-8"
            />
            <ul className="space-y-3 font-label-caps text-on-surface-variant tracking-widest uppercase text-sm">
              <li>1. Choose a show</li>
              <li>2. Event type, date &amp; location</li>
              <li>3. Audience &amp; indoor / outdoor</li>
              <li>4. Your contact details</li>
            </ul>
          </div>
          <div className="md:col-span-7 border border-primary/25 bg-stage p-6 md:p-8">
            <InquiryForm variant="home" />
          </div>
        </div>
      </div>
    </section>
  );
}
