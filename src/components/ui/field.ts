export type FieldVariant = "boxed" | "underline";

/** Shared control chrome — matches Input, Select, DatePicker. */
export const fieldBoxed =
  "h-12 w-full rounded-none border border-gold-border bg-surface-container px-3 text-sm text-on-surface shadow-xs transition-[color,box-shadow,border-color] outline-none placeholder:text-muted-foreground hover:border-primary/50 focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-primary/25 disabled:cursor-not-allowed disabled:opacity-50";

export const fieldUnderline =
  "h-11 w-full rounded-none border-0 border-b-2 border-surface-variant bg-transparent px-0 text-sm text-on-surface shadow-none transition-colors outline-none placeholder:text-muted-foreground hover:border-primary/40 focus-visible:border-primary-container focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50";
