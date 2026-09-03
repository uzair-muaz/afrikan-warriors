import { iconShapes, type IconName } from "@/components/ui/icon-shapes";
import { cn } from "@/lib/cn";

export type { IconName };

type IconProps = {
  name: IconName;
  className?: string;
  /** Kept for callers; icons are always filled. */
  filled?: boolean;
};

function hasTextSize(className?: string) {
  return Boolean(className && /\btext-(xs|sm|base|lg|xl|\d+xl|\[)/.test(className));
}

export function Icon({ name, className }: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      className={cn(
        "inline-block shrink-0 align-middle",
        !hasTextSize(className) && "text-2xl",
        className,
      )}
    >
      {iconShapes[name]}
    </svg>
  );
}
