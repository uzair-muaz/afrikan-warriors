import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import {
  fieldBoxed,
  fieldUnderline,
  type FieldVariant,
} from "@/components/ui/field";

type InputProps = ComponentProps<"input"> & { fieldVariant?: FieldVariant };

export function Input({
  className,
  fieldVariant = "boxed",
  ...props
}: InputProps) {
  return (
    <input
      data-slot="input"
      className={cn(
        "file:text-on-surface selection:bg-primary selection:text-on-primary file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        fieldVariant === "underline" ? fieldUnderline : fieldBoxed,
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
      data-slot="textarea"
      className={cn(
        "min-h-32 field-sizing-content py-3 resize-none",
        fieldVariant === "underline" ? fieldUnderline : fieldBoxed,
        "h-auto",
        className,
      )}
      {...props}
    />
  );
}
