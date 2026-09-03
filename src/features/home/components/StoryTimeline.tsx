import { HeritageDivider } from "@/components/ui/HeritageDivider";
import { Icon } from "@/components/ui/Icon";
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
        <div className="text-center mb-12">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase mb-4">
            Our <span className="text-primary">Story</span>
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            30+ years from the streets of Dar es Salaam to international stages.
          </p>
          <HeritageDivider className="max-w-xs mx-auto mt-8" />
        </div>

        <div
          className="flex items-center gap-3 overflow-x-auto pb-6 mb-12 border-b border-primary/20"
          aria-label="Journey"
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

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {storyTimeline.map((item, index) => {
            const last = index === storyTimeline.length - 1;
            return (
              <li
                key={item.year}
                className={cn(
                  "group relative flex flex-col min-h-65 p-8 bg-platform border-t overflow-hidden transition-colors duration-500",
                  last
                    ? "border-primary md:col-span-2 lg:col-span-1"
                    : "border-primary/20 hover:border-primary",
                )}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-2 right-4 font-display-lg text-6xl text-primary/10 group-hover:text-primary/20 transition-colors"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <Icon
                    name={item.icon}
                    className="text-primary text-3xl group-hover:scale-110 transition-[scale] duration-500 ease-in-out"
                  />
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                    {item.mark}
                  </span>
                </div>
                <h3 className="font-headline-md text-xl text-on-surface uppercase mb-4 relative z-10">
                  {item.year}
                </h3>
                <p className="font-body-md text-on-surface-variant relative z-10 grow">
                  {item.body}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
