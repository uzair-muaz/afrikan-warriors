import { CoverImage } from "@/components/ui/CoverImage";
import { acts } from "@/constants/acts";
import { cn } from "@/lib/cn";

export function ActGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter auto-rows-[400px]">
      {acts.map((act) => (
        <article
          key={act.title}
          className={cn(
            "group relative overflow-hidden bg-surface border border-primary/20 hover:border-primary/50 transition-colors",
            act.featured && "md:col-span-2",
          )}
        >
          <CoverImage
            src={act.image}
            alt={act.alt}
            className="contrast-125 group-hover:scale-105"
          />
          <div className="absolute inset-0 vignette-overlay mix-blend-multiply" />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
          <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
            <h2 className="font-headline-md text-primary uppercase tracking-tight mb-2">
              {act.title}
            </h2>
            <p className="font-body-md text-on-surface-variant uppercase text-sm tracking-wider">
              {act.subtitle}
            </p>
            <div className="mt-4 border-t border-primary/30 pt-4 bg-background/80 backdrop-blur-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
              <p className="font-body-md text-on-surface">{act.body}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
