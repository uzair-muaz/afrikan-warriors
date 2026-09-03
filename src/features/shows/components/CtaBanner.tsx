import { Button } from "@/components/ui/Button";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CtaBannerProps = {
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  className?: string;
  children?: ReactNode;
};

export function CtaBanner({
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  className,
  children,
}: CtaBannerProps) {
  return (
    <section className={cn("py-stack-xl px-margin-mobile md:px-margin-desktop", className)}>
      <div className="max-w-container-max mx-auto bg-surface-container-low p-8 md:p-16 text-center relative overflow-hidden border border-gold-border">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary to-transparent opacity-50" />
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6 uppercase">
          {title}
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
          {body}
        </p>
        {children}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button href={primaryHref} size="lg">
            {primaryLabel}
          </Button>
          {secondaryHref && secondaryLabel ? (
            <Button href={secondaryHref} variant="ghost" size="lg">
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
