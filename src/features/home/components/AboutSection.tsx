import { CoverImage } from "@/components/ui/CoverImage";
import { HeritageDivider } from "@/components/ui/HeritageDivider";
import { Icon } from "@/components/ui/Icon";
import { homeImages } from "@/constants/home";

const facts = [
  "Tanzanian-born",
  "UK-based",
  "30+ Years Experience",
  "International Artists",
];

export function AboutSection() {
  return (
    <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative">
      <HeritageDivider className="mb-16" />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="col-span-1 md:col-span-6 order-2 md:order-1">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-8">
            Three Decades of African Entertainment
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
            Afrikan Warriors is a Tanzanian-born international performing arts
            company specialising in African acrobatics, dance, comedy, music and
            theatrical entertainment.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            Our roots can be traced to the street theatres and cultural
            performance scene of Dar es Salaam, Tanzania, where founder Rahim
            Saphy began performing as a young acrobat. Now based primarily in
            the United Kingdom, we continue to honor our heritage while
            performing on international stages.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-label-caps text-label-caps text-on-surface mb-8">
            {facts.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Icon name="done" className="text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 md:col-span-6 order-1 md:order-2">
          <div className="relative w-full h-[500px] border-l border-primary/20 pl-8">
            <div className="relative w-full h-full">
              <CoverImage
                src={homeImages.about}
                alt="Silhouette of an African acrobat mid-leap against a dark background"
                className="grayscale hover:grayscale-0 vignette"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
