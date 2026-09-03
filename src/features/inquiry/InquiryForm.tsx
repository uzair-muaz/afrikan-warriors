"use client";

import type { ReactNode } from "react";
import { useActionState } from "react";
import { Button } from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { eventTypeOptions } from "@/constants/packages";
import { workshopInquiryTypes } from "@/constants/workshops";
import { submitInquiry, type InquiryState } from "@/lib/actions/inquiry";
import { cn } from "@/lib/cn";

type Variant = "home" | "workshops" | "packages";

const initial: InquiryState = { ok: false };

export function InquiryForm({ variant }: { variant: Variant }) {
  const [state, action, pending] = useActionState(submitInquiry, initial);

  if (state.ok) {
    return (
      <p className="font-body-lg text-on-surface-variant border border-primary/30 p-8 bg-surface-container">
        Thank you. Your enquiry has been received. Our team will be in touch.
      </p>
    );
  }

  if (variant === "home") {
    return (
      <form action={action} className="space-y-4">
        <FormError error={state.error} />
        <Input name="name" type="text" placeholder="Your Name" required />
        <Input name="email" type="email" placeholder="Your Email" required />
        <Textarea
          name="message"
          rows={4}
          placeholder="Tell us about your event — audience, venue and budget."
        />
        <Button type="submit" fullWidth size="lg" disabled={pending}>
          {pending ? "Submitting…" : "Submit Enquiry"}
        </Button>
      </form>
    );
  }

  if (variant === "workshops") {
    return (
      <form action={action} className="space-y-6">
        <FormError error={state.error} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Name / Organization" htmlFor="name">
            <Input
              id="name"
              name="name"
              fieldVariant="underline"
              placeholder="Enter name"
              required
            />
          </Field>
          <Field label="Email Address" htmlFor="email">
            <Input
              id="email"
              name="email"
              type="email"
              fieldVariant="underline"
              placeholder="Enter email"
              required
            />
          </Field>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Event Type" htmlFor="eventType">
            <Select id="eventType" name="eventType" fieldVariant="underline">
              <option value="">Select type</option>
              {workshopInquiryTypes.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-stage">
                  {opt.label}
                </option>
              ))}
            </Select>
          </Field>
          <Field label="Estimated Date" htmlFor="date">
            <Input
              id="date"
              name="date"
              type="date"
              fieldVariant="underline"
              className="[color-scheme:dark]"
            />
          </Field>
        </div>
        <Field label="Project Details" htmlFor="message">
          <Textarea
            id="message"
            name="message"
            fieldVariant="underline"
            rows={4}
            placeholder="Tell us about the scale, venue, and specific requirements..."
          />
        </Field>
        <Button type="submit" fullWidth size="lg" disabled={pending}>
          {pending ? "Submitting…" : "Submit Inquiry"}
        </Button>
      </form>
    );
  }

  return (
    <form action={action} className="space-y-6">
      <FormError error={state.error} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Name / Organization" htmlFor="pkg-name" gold>
          <Input
            id="pkg-name"
            name="name"
            placeholder="Your Name"
            required
            className="bg-surface-container-low p-4"
          />
        </Field>
        <Field label="Email Address" htmlFor="pkg-email" gold>
          <Input
            id="pkg-email"
            name="email"
            type="email"
            placeholder="email@example.com"
            required
            className="bg-surface-container-low p-4"
          />
        </Field>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Event Type" htmlFor="pkg-type" gold>
          <Select
            id="pkg-type"
            name="eventType"
            className="bg-surface-container-low p-4"
          >
            {eventTypeOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-stage">
                {opt}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Estimated Date" htmlFor="pkg-date" gold>
          <Input
            id="pkg-date"
            name="date"
            type="date"
            className="bg-surface-container-low p-4 [color-scheme:dark]"
          />
        </Field>
      </div>
      <Field label="Project Details" htmlFor="pkg-message" gold>
        <Textarea
          id="pkg-message"
          name="message"
          rows={4}
          placeholder="Location, duration, and specific requirements..."
          className="bg-surface-container-low p-4"
        />
      </Field>
      <Button type="submit" fullWidth size="lg" disabled={pending}>
        {pending ? "Submitting…" : "Submit Enquiry"}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  gold,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  gold?: boolean;
}) {
  return (
    <div className={cn("flex flex-col gap-2")}>
      <label
        htmlFor={htmlFor}
        className={cn(
          "font-label-caps text-label-caps uppercase",
          gold ? "text-xs text-primary tracking-widest" : "text-on-surface-variant",
        )}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function FormError({ error }: { error?: string }) {
  if (!error) return null;
  return <p className="text-error font-body-md">{error}</p>;
}
