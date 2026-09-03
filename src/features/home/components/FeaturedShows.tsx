import { Button } from "@/components/ui/Button";
import { featuredShows } from "@/constants/shows";

export function FeaturedShows() {
  return (
    <section
      className="py-stack-lg bg-surface-container-lowest px-margin-mobile md:px-margin-desktop scroll-mt-32"
      id="shows"
    >
      <div className="max-w-container-max mx-auto">
        <h2 className="text-center font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase mb-16">
          Featured <span className="text-primary">Shows</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredShows.map((show) => (
            <article
              key={show.slug}
              className="bg-surface-container p-10 border-t border-primary/30 hover:border-primary transition-colors flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="font-headline-lg text-headline-md text-primary uppercase mb-4">
                  {show.title}
                </h3>
                <p className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest mb-6 border-b border-primary/20 pb-4">
                  {show.subtitle}
                </p>
                <p className="text-on-surface-variant font-body-lg mb-6">
                  {show.description}
                </p>
              </div>
              <Button
                href={show.href}
                variant="ghost"
                className="self-start mt-6"
              >
                Discover {show.title.replace(" SHOW", "").replace("REGULAR SHOW", "Regular Show")}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
