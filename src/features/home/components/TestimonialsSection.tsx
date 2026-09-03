import { Icon } from "@/components/ui/Icon";
import { testimonials } from "@/constants/home";

export function TestimonialsSection() {
  return (
    <section className="py-stack-lg bg-surface-container-lowest px-margin-mobile md:px-margin-desktop scroll-mt-32" id="reviews">
      <div className="max-w-container-max mx-auto">
        <h2 className="text-center font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase mb-16">
          What They <span className="text-primary">Say</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="bg-surface-container p-8 border-t-2 border-primary flex flex-col"
            >
              <Icon
                name="format_quote"
                filled
                className="text-primary text-4xl opacity-50 mb-4"
              />
              <p className="font-body-lg text-on-surface italic mb-8 flex-grow">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer>
                <p className="font-label-caps text-primary tracking-widest uppercase mb-1">
                  {item.name}
                </p>
                <p className="text-sm text-on-surface-variant font-body-md uppercase">
                  {item.title}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
