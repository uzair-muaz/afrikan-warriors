import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block bg-primary text-on-primary font-label-caps text-xs uppercase tracking-widest px-3 py-1",
        className,
      )}
    >
      {children}
    </span>
  );
}
