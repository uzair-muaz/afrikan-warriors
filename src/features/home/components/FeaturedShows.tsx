import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";
import { featuredShows } from "@/constants/shows";
import { cn } from "@/lib/cn";

export function FeaturedShows() {
  return (
    <section
      className="py-stack-lg bg-surface-container-lowest px-margin-mobile md:px-margin-desktop scroll-mt-32"
      id="shows"
    >
      <div className="max-w-container-max mx-auto">
        <h2 className="text-center font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase mb-16">
          Experience <span className="text-primary">Our Shows</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredShows.map((show) => (
            <article
              key={show.slug}
              className={cn(
                "group bg-surface-container border-t border-primary/30 hover:border-primary transition-colors flex flex-col h-full overflow-hidden",
                show.featured && "md:col-span-2 lg:col-span-2",
              )}
            >
              <div
                className={cn(
                  "relative w-full overflow-hidden",
                  show.featured ? "aspect-video" : "aspect-4/5",
                )}
              >
                <CoverImage
                  src={show.image}
                  alt={show.alt}
                  className="hover-media group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-headline-lg text-headline-md text-primary uppercase mb-4">
                  {show.title}
                </h3>
                <p className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest mb-6 border-b border-primary/20 pb-4">
                  {show.subtitle}
                </p>
                <p className="text-on-surface-variant font-body-lg mb-6 flex-1">
                  {show.description}
                </p>
                <Button href={show.href} variant="ghost" className="self-start">
                  Discover Show
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
