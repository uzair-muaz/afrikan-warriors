import Link from "next/link";
import { CoverImage } from "@/components/ui/CoverImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeImages } from "@/constants/home";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative scroll-mt-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="col-span-1 md:col-span-6 order-2 md:order-1">
          <SectionHeading
            align="left"
            title={
              <>
                Three Decades of{" "}
                <span className="text-primary">African Entertainment</span>
              </>
            }
            className="mb-8"
          />
          <p className="font-headline-md text-xl text-primary uppercase tracking-widest mb-6">
            Born in Tanzania. Built for the world.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
            Afrikan Warriors is an international performing arts company bringing
            together extraordinary African acrobatics, theatre, dance, comedy,
            music and cultural storytelling.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            From the streets and cultural stages of Dar es Salaam to television,
            theatres, circuses and festivals around the world — our journey has
            spanned more than three decades.
          </p>
          <Link
            href="/about"
            className="font-label-caps text-label-caps uppercase tracking-widest text-primary border-b border-primary pb-1 hover:opacity-80"
          >
            Discover Our Story →
          </Link>
        </div>
        <div className="col-span-1 md:col-span-6 order-1 md:order-2">
          <div className="relative w-full h-[500px] border-l border-primary/20 pl-8">
            <div className="relative w-full h-full overflow-hidden">
              <CoverImage
                src={homeImages.about}
                alt="Afrikan Warriors acrobat in mid-air with live musicians on stage"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
