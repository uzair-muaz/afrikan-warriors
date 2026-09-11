import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { promoterBookingTypes, promoterLinks } from "@/constants/home";
import { site } from "@/constants/nav";

export function ForPromotersSection() {
  return (
    <section
      id="promoters"
      className="py-stack-xl px-margin-mobile md:px-margin-desktop bg-stage border-y border-primary/20 scroll-mt-32"
    >
      <div className="max-w-container-max mx-auto">
        <SectionHeading
          eyebrow="For Promoters & Venues"
          title={
            <>
              Booking <span className="text-primary">Afrikan Warriors</span>
            </>
          }
          description="Professional buyers — festivals, theatres, circuses and more — book with the materials and clarity you need."
          className="mb-12"
        />

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-14">
          {promoterBookingTypes.map((item) => (
            <li
              key={item.label}
              className="flex flex-col items-center gap-3 border border-primary/20 bg-surface-container p-6 text-center"
            >
              <Icon name={item.icon} className="text-primary text-3xl" />
              <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest">
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {promoterLinks.map((link) => (
            <Button
              key={link.label}
              href={link.href}
              variant="ghost"
              className="w-full"
            >
              {link.label}
            </Button>
          ))}
        </div>

        <div className="text-center">
          <Button href={site.inquiryHref} size="lg">
            Request Availability
          </Button>
        </div>
      </div>
    </section>
  );
}
