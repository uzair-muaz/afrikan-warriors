import { majorCredits } from "@/constants/home";

export function CreditsBar() {
  return (
    <section
      className="border-y border-primary/20 bg-surface-container-lowest py-8 overflow-hidden"
      aria-label="Major credits"
    >
      <div className="hidden motion-reduce:flex flex-wrap justify-center gap-x-10 gap-y-6 px-margin-mobile md:px-margin-desktop">
        {majorCredits.map((item) => (
          <CreditItem key={item.title} title={item.title} detail={item.detail} />
        ))}
      </div>

      <div className="marquee-hover marquee-mask motion-reduce:hidden flex">
        <CreditTrack />
        <CreditTrack ariaHidden />
      </div>
    </section>
  );
}

function CreditTrack({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center animate-marquee-track"
      aria-hidden={ariaHidden || undefined}
    >
      {majorCredits.map((item) => (
        <div key={item.title} className="flex items-center px-4 md:px-8">
          <span aria-hidden className="size-2 rotate-45 bg-primary shrink-0" />
          <div className="px-8 md:px-12">
            <CreditItem title={item.title} detail={item.detail} />
          </div>
        </div>
      ))}
    </div>
  );
}

function CreditItem({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="text-center whitespace-nowrap">
      <p className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-1">
        {title}
      </p>
      <p className="font-headline-md text-on-surface uppercase text-sm tracking-wider">
        {detail}
      </p>
    </div>
  );
}
