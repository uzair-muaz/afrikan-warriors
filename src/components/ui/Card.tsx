import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
};

export function Card({ children, className, as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={cn(
        "bg-surface-container border border-gold-border rounded-none",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
