import { Icon } from "@/components/ui/Icon";
import { clients } from "@/constants/home";

export function ClientsMarquee() {
  const loop = [...clients, ...clients];

  return (
    <section className="py-8 bg-surface border-y border-primary/20 overflow-hidden">
      <div className="flex w-max whitespace-nowrap animate-marquee items-center gap-16 font-headline-md text-on-surface-variant opacity-60">
        {loop.map((name, i) => (
          <span key={`${name}-${i}`} className="flex items-center gap-16">
            <span className="uppercase tracking-widest hover:text-primary transition-colors">
              {name}
            </span>
            <Icon name="star" className="text-primary text-sm" />
          </span>
        ))}
      </div>
    </section>
  );
}
