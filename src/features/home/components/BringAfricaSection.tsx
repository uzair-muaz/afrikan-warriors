import { CoverImage } from "@/components/ui/CoverImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeImages, skillTags } from "@/constants/home";

export function BringAfricaSection() {
  return (
    <section className="py-stack-xl bg-surface-container px-margin-mobile md:px-margin-desktop border-y border-primary/10">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading
            align="left"
            title={
              <>
                We Bring Africa <span className="text-primary">To You</span>
              </>
            }
            className="mb-6"
          />
          <h3 className="font-headline-md text-xl text-on-surface uppercase mb-6">
            Hakuna Matata — No Worries
          </h3>
          <p className="font-body-lg text-on-surface-variant mb-8">
            Afrikan Warriors is more than just an acrobatic troupe. We are a
            comprehensive entertainment company bringing the rhythm, energy, and
            rich cultural heritage of Africa to audiences worldwide. When you
            book us, you&apos;re not just getting a show; you&apos;re getting an
            immersive cultural experience tailored to your event.
          </p>
          <p className="font-body-lg text-on-surface-variant mb-8">
            From high-energy festivals and corporate galas to intimate private
            events and community workshops, we adapt our performances to create
            unforgettable moments. Our &quot;Hakuna Matata&quot; philosophy
            means we handle the entertainment with flawless professionalism, so
            you can enjoy the event without a worry.
          </p>
          <div className="flex flex-wrap gap-4">
            {skillTags.map((tag) => (
              <span
                key={tag}
                className="inline-block border border-primary text-primary px-6 py-3 font-label-caps uppercase tracking-widest text-sm hover:bg-primary/10 transition-colors duration-500 ease-in-out"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="relative w-full aspect-4/5 overflow-hidden border border-primary/20">
          <CoverImage
            src={homeImages.bring}
            alt="Afrikan Warriors theatrical ensemble in traditional costume on stage"
          />
        </div>
      </div>
    </section>
  );
}
