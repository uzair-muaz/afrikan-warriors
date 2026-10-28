import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-primary-container text-on-primary border border-transparent hover:bg-primary accent-glow",
  ghost:
    "bg-transparent border border-primary text-primary hover:bg-primary/10",
} as const;

const sizes = {
  md: "px-6 py-3",
  lg: "px-8 py-4",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

type Shared = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = Shared &
  Omit<ComponentProps<"button">, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = Shared & {
  href: string;
  type?: never;
  disabled?: boolean;
  download?: boolean | string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  fullWidth,
  className,
  children,
  ...props
}: ButtonProps) {
  const disabled = "disabled" in props && Boolean(props.disabled);
  const classes = cn(
    "inline-flex items-center justify-center rounded-none font-label-caps text-label-caps uppercase tracking-widest transition-[color,background-color,border-color,box-shadow,transform,translate,scale,opacity] duration-500 ease-in-out hover:-translate-y-px active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100",
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    disabled && "pointer-events-none cursor-not-allowed opacity-50 hover:translate-y-0",
    className,
  );

  if ("href" in props && props.href) {
    const { href, disabled: _disabled, ...rest } = props;
    if (disabled) {
      return (
        <span className={classes} aria-disabled="true">
          {children}
        </span>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
