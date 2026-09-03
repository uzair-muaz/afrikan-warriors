import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const backgrounds = {
  stage: "bg-stage",
  surface: "bg-surface",
  container: "bg-surface-container",
  lowest: "bg-surface-container-lowest",
  void: "bg-void",
  none: "",
} as const;

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: keyof typeof backgrounds;
  spacing?: "lg" | "xl" | "none";
};

export function Section({
  children,
  className,
  id,
  background = "none",
  spacing = "xl",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        backgrounds[background],
        spacing === "lg" && "py-stack-lg",
        spacing === "xl" && "py-stack-xl",
        className,
      )}
    >
      {children}
    </section>
  );
}
