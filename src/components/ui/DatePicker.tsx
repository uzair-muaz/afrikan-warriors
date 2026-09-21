"use client";

import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { fieldBoxed, fieldUnderline, type FieldVariant } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/cn";

function toIso(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function startOfToday() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date;
}

function formatLabel(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function DatePicker({
  id,
  name,
  fieldVariant = "boxed",
  className,
}: {
  id?: string;
  name: string;
  fieldVariant?: FieldVariant;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Date | undefined>();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <input type="hidden" name={name} value={selected ? toIso(selected) : ""} />
      <PopoverTrigger asChild>
        <button
          id={id}
          type="button"
          className={cn(
            "flex cursor-pointer items-center justify-between gap-3 text-left font-body-md",
            fieldVariant === "underline" ? fieldUnderline : fieldBoxed,
            className,
          )}
        >
          <span className={selected ? "text-on-surface" : "text-muted-foreground"}>
            {selected ? formatLabel(selected) : "Select a date"}
          </span>
          <CalendarIcon className="size-4 shrink-0 text-primary opacity-80" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-3" align="start">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={(date) => {
            setSelected(date);
            if (date) setOpen(false);
          }}
          disabled={{ before: startOfToday() }}
        />
      </PopoverContent>
    </Popover>
  );
}
