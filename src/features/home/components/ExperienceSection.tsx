import { tvAppearances, venues } from "@/constants/home";

export function ExperienceSection() {
  return (
    <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative border-t border-primary/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-start">
        <div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-8">
            International Stages & Television
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            Over more than three decades, members of the company have developed
            their skills through performances across Africa, the United Kingdom,
            Ireland, Europe and Australia. We are equally comfortable performing
            for an audience of hundreds at a private event or entertaining
            thousands at major festivals and outdoor celebrations.
          </p>
          <div className="bg-surface-container-low p-6 border border-primary/20">
            <h4 className="font-label-caps text-on-surface uppercase tracking-widest mb-4">
              Notable TV Appearances
            </h4>
            <ul className="space-y-3 font-body-lg text-primary">
              {tvAppearances.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:pl-12">
          <h4 className="font-headline-md text-headline-md text-on-surface uppercase mb-6">
            Where We Have Performed
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-on-surface-variant font-body-md">
            {venues.map((item) => (
              <li key={item}>
                <span className="text-primary mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
