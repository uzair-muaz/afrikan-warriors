import { cn } from "@/lib/cn";

type HeritageDividerProps = {
  className?: string;
  align?: "right" | "left";
};

export function HeritageDivider({
  className,
  align = "right",
}: HeritageDividerProps) {
  return (
    <div
      className={cn(
        "heritage-divider",
        align === "left" && "heritage-divider-left",
        className,
      )}
    />
  );
}
