import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const fieldBase =
  "w-full bg-surface-container border border-gold-border p-3 text-on-surface rounded-none outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-on-surface-variant/60";

const underlineBase =
  "w-full bg-transparent border-0 border-b-2 border-surface-variant px-0 py-2 text-on-surface font-body-md rounded-none outline-none transition-colors focus:border-primary-container focus:ring-0 placeholder:text-on-surface-variant/60";

type FieldVariant = "boxed" | "underline";

type InputProps = ComponentProps<"input"> & { fieldVariant?: FieldVariant };

export function Input({
  className,
  fieldVariant = "boxed",
  ...props
}: InputProps) {
  return (
    <input
      className={cn(
        fieldVariant === "underline" ? underlineBase : fieldBase,
        className,
      )}
      {...props}
    />
  );
}

type TextareaProps = ComponentProps<"textarea"> & {
  fieldVariant?: FieldVariant;
};

export function Textarea({
  className,
  fieldVariant = "boxed",
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={cn(
        fieldVariant === "underline" ? underlineBase : fieldBase,
        "resize-none",
        className,
      )}
      {...props}
    />
  );
}

type SelectProps = ComponentProps<"select"> & { fieldVariant?: FieldVariant };

export function Select({
  className,
  fieldVariant = "boxed",
  children,
  ...props
}: SelectProps) {
  return (
    <select
      className={cn(
        fieldVariant === "underline" ? underlineBase : fieldBase,
        "appearance-none",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}
