import type { ReactNode } from "react";
import { HeritageDivider } from "@/components/ui/HeritageDivider";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: ReactNode;
  description?: ReactNode;
  eyebrow?: string;
  align?: "center" | "left";
  className?: string;
};

/**
 * Shared section title: optional eyebrow, headline, body, HeritageDivider.
 * Keeps homepage / page headings visually consistent.
 */
export function SectionHeading({
  title,
  description,
  eyebrow,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        centered ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-4">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "font-body-lg text-on-surface-variant mt-4",
            centered && "max-w-2xl mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
      <HeritageDivider
        className={cn("mt-8", centered ? "max-w-xs mx-auto" : "max-w-xs")}
        align={centered ? "right" : "left"}
      />
    </div>
  );
}
