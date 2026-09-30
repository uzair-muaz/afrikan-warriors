import type { Metadata } from "next";
import { CoverImage } from "@/components/ui/CoverImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import images from "@/constants/images.json";
import { supportUses } from "@/constants/support";
import { SupportForm } from "@/features/support/SupportForm";
import { ShowHero } from "@/features/shows/components/ShowHero";

export const metadata: Metadata = { title: "Support Afrikan Warriors" };

export default function SupportPage() {
  return (
    <>
      <ShowHero
        image={images.pages.supportHero}
        alt="Afrikan Warriors performers on stage under gold light"
        eyebrow="Support Afrikan Warriors"
        title="Keep the Spirit Moving."
        lead="Support the next generation of Afrikan Warriors."
        subtitle="More than three decades of African acrobatics, theatre, dance, music and storytelling. Your support builds the next chapter."
        align="start"
        imagePositionClassName="object-[center_30%]"
      />

      <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="What it goes toward"
              title={
                <>
                  Help us take African performance{" "}
                  <span className="text-primary">further</span>
                </>
              }
              description="Whether you have followed the company for years, booked a show, or simply believe in African creativity, a support contribution makes a difference."
              className="mb-8"
            />
            <ul className="flex flex-col gap-3">
              {supportUses.map((item) => (
                <li
                  key={item}
                  className="border-l border-primary pl-4 font-body-md text-body-md text-on-surface"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <SupportForm />
          </div>
        </div>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-stack-xl">
        <figure className="relative min-h-[480px] overflow-hidden border border-primary/20">
          <CoverImage
            src={images.pages.supportCompany}
            alt="The company holding a flyer in a stage pyramid"
            sizes="(min-width: 1280px) 90rem, 100vw"
          />
          <figcaption className="absolute inset-x-0 bottom-0 z-10 p-8 md:p-12 bg-linear-to-t from-stage via-stage/70 to-transparent">
            <p className="font-display-lg text-3xl md:text-5xl text-on-surface uppercase tracking-tighter">
              A new generation. A bigger vision.
            </p>
          </figcaption>
        </figure>
      </section>
    </>
  );
}
