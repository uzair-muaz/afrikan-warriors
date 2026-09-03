import { CoverImage } from "@/components/ui/CoverImage";
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
};

export function ShowHero({
  image,
  alt,
  eyebrow,
  title,
  subtitle,
  children,
  align = "center",
  className,
}: ShowHeroProps) {
  return (
    <header
      className={cn(
        "relative w-full min-h-screen flex items-center overflow-hidden pt-24",
        align === "center" ? "justify-center text-center" : "justify-end md:justify-start text-center md:text-left",
        className,
      )}
    >
      <div className="absolute inset-0">
        <CoverImage src={image} alt={alt} priority className="opacity-50 vignette" />
        <div className="absolute inset-0 bg-linear-to-t from-stage via-transparent to-stage/60" />
      </div>
      <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full pb-stack-xl">
        {eyebrow ? (
          <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 block">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface uppercase mb-6 tracking-tighter">
          {title}
        </h1>
        {subtitle ? (
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8 mx-auto md:mx-0">
            {subtitle}
          </p>
        ) : null}
        {children}
      </div>
    </header>
  );
}
