import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/constants/nav";

export function ExperienceDiscuss() {
  return (
    <section
      className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container border-y border-primary/10"
      id="discuss-event"
    >
      <div className="max-w-container-max mx-auto text-center md:max-w-3xl">
        <SectionHeading
          title={
            <>
              Every Performance{" "}
              <span className="text-primary">Is Different</span>
            </>
          }
          description="From intimate events to full theatrical productions, we create the right Afrikan Warriors experience for your venue, audience and production requirements."
          className="mb-10"
        />
        <Button href={site.inquiryHref} size="lg">
          Discuss Your Event
        </Button>
      </div>
    </section>
  );
}
