import { CoverImage } from "@/components/ui/CoverImage";
import { HeritageDivider } from "@/components/ui/HeritageDivider";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type ShowHeroProps = {
  image: string;
  alt: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  align?: "center" | "start";
  className?: string;
  /** When true, title uses primary gold (flagship treatment) */
  titlePrimary?: boolean;
  /**
   * object-position for the cover image.
   * Top-biased so heads/faces stay in frame under the transparent nav.
   */
  imagePositionClassName?: string;
};

/**
 * Shared full-bleed page hero — photo runs behind the transparent nav;
 * object-position keeps subjects framed without cutting heads.
 */
export function ShowHero({
  image,
  alt,
  eyebrow,
  title,
  subtitle,
  children,
  align = "center",
  className,
  titlePrimary = false,
  imagePositionClassName = "object-[center_28%]",
}: ShowHeroProps) {
  const centered = align === "center";

  return (
    <header
      className={cn(
        "relative w-full min-h-screen flex items-end overflow-hidden pt-28 pb-stack-xl",
        centered
          ? "justify-center text-center"
          : "justify-end md:justify-start text-center md:text-left",
        className,
      )}
    >
      <div className="absolute inset-0">
        <CoverImage
          src={image}
          alt={alt}
          priority
          className={cn("object-cover", imagePositionClassName)}
        />
        {/* Bottom fade for copy only — no top black band under the nav */}
        <div className="absolute inset-0 bg-linear-to-t from-stage via-stage/45 to-transparent" />
      </div>
      <div
        className={cn(
          "relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full",
          !centered && "md:w-2/3 md:ml-0",
        )}
      >
        {eyebrow ? (
          <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 block">
            {eyebrow}
          </span>
        ) : null}
        <h1
          className={cn(
            "font-display-lg text-headline-lg-mobile md:text-display-lg uppercase mb-6 tracking-tighter leading-none",
            titlePrimary ? "text-primary" : "text-on-surface",
          )}
        >
          {title}
        </h1>
        {subtitle ? (
          <p
            className={cn(
              "font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-6",
              centered && "mx-auto",
            )}
          >
            {subtitle}
          </p>
        ) : null}
        <HeritageDivider
          className={cn("mb-8 max-w-xs", centered && "mx-auto")}
          align={centered ? "right" : "left"}
        />
        {children ? (
          <div className={cn(centered && "flex flex-col items-center")}>
            {children}
          </div>
        ) : null}
      </div>
    </header>
  );
}
