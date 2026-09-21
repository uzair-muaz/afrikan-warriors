"use client";

import { DayPicker, type DayPickerProps } from "react-day-picker";
import { cn } from "@/lib/cn";
import "react-day-picker/style.css";

function Calendar({ className, ...props }: DayPickerProps) {
  return (
    <DayPicker
      className={cn("aw-daypicker", className)}
      {...props}
    />
  );
}

export { Calendar };
