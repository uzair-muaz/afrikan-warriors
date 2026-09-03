import { Button } from "@/components/ui/Button";
import { homeTeam } from "@/constants/home";

export function TeamTeaser() {
  return (
    <section
      className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
      id="team"
    >
      <div className="text-center mb-16">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase mb-4">
          Meet the <span className="text-primary">AW-Team</span>
        </h2>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Afrikan Warriors is powered by performers, directors, musicians,
          actors, filmmakers and creative artists with decades of combined
          international experience.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {homeTeam.map((member) => (
          <article
            key={member.name}
            className="bg-surface-container border border-primary/10 p-6 flex flex-col h-full"
          >
            <h4 className="font-headline-md text-primary text-xl uppercase mb-1">
              {member.name}
            </h4>
            <p className="font-label-caps text-xs text-on-surface-variant tracking-widest uppercase mb-4 pb-4 border-b border-primary/20">
              {member.role}
            </p>
            <p className="text-sm font-body-md text-on-surface-variant">
              {member.bio}
            </p>
          </article>
        ))}
      </div>
      <div className="text-center">
        <Button href="/team" variant="ghost">
          Meet the Full Team
        </Button>
      </div>
    </section>
  );
}
