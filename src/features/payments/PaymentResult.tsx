import { Button } from "@/components/ui/Button";

export function PaymentResult({
  eyebrow,
  title,
  body,
  href,
  action,
}: {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  action: string;
}) {
  return (
    <section className="flex min-h-[calc(100svh-var(--header-h))] flex-col justify-center px-margin-mobile py-stack-xl md:px-margin-desktop md:py-24">
      <div className="mx-auto w-full max-w-container-max">
        <div className="mx-auto w-full max-w-3xl border border-primary/30 bg-surface-container p-10 md:p-16">
          <p className="mb-5 font-label-caps text-label-caps uppercase tracking-widest text-primary">
            {eyebrow}
          </p>
          <h1 className="mb-8 font-headline-md text-4xl uppercase text-on-surface md:text-5xl">
            {title}
          </h1>
          <p className="mb-10 max-w-xl font-body-md text-body-md text-on-surface-variant">
            {body}
          </p>
          <Button href={href} size="lg">
            {action}
          </Button>
        </div>
      </div>
    </section>
  );
}
