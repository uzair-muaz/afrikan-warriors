import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

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

      <div className="flex flex-col flex-wrap justify-center gap-4 sm:flex-row">
        <a
          href="/documents/promoters/afrikan-warriors-logo.png"
          download
          className="inline-flex items-center justify-center whitespace-nowrap border border-primary px-6 py-3 text-center font-label-caps text-label-caps uppercase tracking-widest text-primary transition-colors hover:bg-primary/10"
        >
          Download Logo
        </a>
        <Button href="/promoters">Promoter Resources</Button>
      </div>
    </section>
  );
}
