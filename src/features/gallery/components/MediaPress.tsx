import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pressDownloads } from "@/constants/gallery";

export function MediaPress() {
  return (
    <section
      id="press"
      className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-stack-xl scroll-mt-32"
    >
      <SectionHeading
        title={
          <>
            Press & Promoter <span className="text-primary">Media</span>
          </>
        }
        description="Need images for your programme, website, press release or festival promotion?"
        className="mb-10"
      />

      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
        {pressDownloads.map((item) => (
          <Button
            key={item.label}
            type="button"
            variant="ghost"
            disabled
            className="pointer-events-none cursor-not-allowed opacity-50 grayscale border-on-surface-variant/30 text-on-surface-variant hover:translate-y-0 hover:bg-transparent"
          >
            {item.label} ↓
          </Button>
        ))}
        <Button href="/promoters">View Press Kit →</Button>
      </div>
    </section>
  );
}
