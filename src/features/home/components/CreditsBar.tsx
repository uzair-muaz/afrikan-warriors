import { creditPhrases } from "@/constants/home";

export function CreditsBar() {
  return (
    <section
      className="border-y border-primary/30 bg-void py-8 overflow-hidden"
      aria-label="Major credits"
    >
      <div className="hidden motion-reduce:flex flex-wrap justify-center gap-x-8 gap-y-4 px-margin-mobile md:px-margin-desktop">
        {creditPhrases.map((phrase) => (
          <p
            key={phrase}
            className="font-label-caps text-label-caps text-primary uppercase tracking-widest"
          >
            {phrase}
          </p>
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
      className="flex shrink-0 items-center animate-marquee-track-slow"
      aria-hidden={ariaHidden || undefined}
    >
      {creditPhrases.map((phrase) => (
        <div key={phrase} className="flex items-center px-3 md:px-5">
          <span aria-hidden className="text-primary/80 text-xs">
            ✦
          </span>
          <p className="px-6 md:px-10 font-label-caps text-label-caps text-primary uppercase tracking-[0.2em] whitespace-nowrap">
            {phrase}
          </p>
        </div>
      ))}
    </div>
  );
}
