import { CoverImage } from "@/components/ui/CoverImage";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { storyTimeline } from "@/constants/home";
import { cn } from "@/lib/cn";

type StoryTimelineProps = {
  variant?: "journey" | "line";
};

export function StoryTimeline({ variant = "journey" }: StoryTimelineProps) {
  if (variant === "line") {
    return (
      <section
        id="story"
        className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto scroll-mt-32"
      >
        <ol className="relative border-l border-primary/30 ml-3 md:ml-6 space-y-10">
          {storyTimeline.map((item) => (
            <li key={item.year} className="pl-8 md:pl-12 relative">
              <span className="absolute left-[-5px] top-1.5 size-2.5 bg-primary rotate-45" />
              <h3 className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-2">
                {item.year}
              </h3>
              <p className="font-body-md text-on-surface-variant">{item.body}</p>
            </li>
          ))}
        </ol>
      </section>
    );
  }

  return (
    <section
      id="story"
      className="py-stack-xl bg-surface-container-lowest border-y border-primary/10 scroll-mt-32"
    >
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <SectionHeading
          title={
            <>
              Our <span className="text-primary">Journey</span>
            </>
          }
          description="From Dar es Salaam to international stages — a story told through touring, television and theatre."
          className="mb-12"
        />

        <div
          className="flex items-center gap-3 overflow-x-auto pb-6 mb-12 border-b border-primary/20"
          aria-label="Journey path"
        >
          {storyTimeline.map((item, index) => (
            <div key={item.year} className="flex items-center gap-3 shrink-0">
              <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
                {item.year}
              </span>
              {index < storyTimeline.length - 1 ? (
                <Icon
                  name="arrow_forward"
                  className="text-primary/50 text-sm"
                />
              ) : null}
            </div>
          ))}
        </div>

        <ol className="space-y-6">
          {storyTimeline.map((item, index) => {
            const last = index === storyTimeline.length - 1;
            return (
              <li
                key={item.year}
                className={cn(
                  "group relative grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden border-t border-primary/20 hover:border-primary transition-colors duration-500 min-h-72",
                  last && "border-primary",
                )}
              >
                <div className="relative min-h-56 md:min-h-full order-1 md:order-none">
                  {item.image ? (
                    <CoverImage
                      src={item.image}
                      alt=""
                      className="hover-media-slow group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-platform" />
                  )}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent to-surface-container-lowest/80 hidden md:block" />
                </div>
                <div className="relative flex flex-col justify-center p-8 md:p-12 bg-platform/80">
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <Icon
                      name={item.icon}
                      className="text-primary text-3xl group-hover:scale-110 transition-[scale] duration-500 ease-in-out"
                    />
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                      {item.mark}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-2xl text-on-surface uppercase mb-4">
                    {item.year}
                  </h3>
                  <p className="font-body-md text-on-surface-variant max-w-lg">
                    {item.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
