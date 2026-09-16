"use client";

import type { ReactNode } from "react";
import { useActionState, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { budgetRanges } from "@/constants/home";
import { eventTypeOptions } from "@/constants/packages";
import { showInterestOptions } from "@/constants/shows";
import { workshopInquiryTypes } from "@/constants/workshops";
import { submitInquiry, type InquiryState } from "@/lib/actions/inquiry";
import { cn } from "@/lib/cn";

type Variant = "home" | "workshops" | "packages";

const initial: InquiryState = { ok: false };

const venueSettingOptions = ["Indoor", "Outdoor", "Either / Not Sure"] as const;

const homeSteps = ["Show", "Event", "Details", "Contact"] as const;

export function InquiryForm({ variant }: { variant: Variant }) {
  const [state, action, pending] = useActionState(submitInquiry, initial);
  const [step, setStep] = useState(0);
  const [interest, setInterest] = useState("");

  if (state.ok) {
    return (
      <p className="font-body-lg text-on-surface-variant border border-primary/30 p-8 bg-surface-container">
        Thank you. Your availability request has been received. Our team will be
        in touch.
      </p>
    );
  }

  if (variant === "home") {
    return (
      <form action={action} className="space-y-8">
        <FormError error={state.error} />
        <ol className="grid grid-cols-4 gap-3">
          {homeSteps.map((label, i) => (
            <li key={label}>
              <span
                className={cn(
                  "mb-2 block h-px",
                  i <= step ? "bg-primary" : "bg-primary/20",
                )}
              />
              <span
                className={cn(
                  "font-label-caps text-[0.6rem] uppercase tracking-widest",
                  i === step
                    ? "text-primary"
                    : i < step
                      ? "text-on-surface"
                      : "text-on-surface-variant/50",
                )}
              >
                {i + 1}. {label}
              </span>
            </li>
          ))}
        </ol>

        <div className={cn(step !== 0 && "hidden")}>
          <p className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mb-4">
            What are you interested in?
          </p>
          <input type="hidden" name="showInterest" value={interest} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {showInterestOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setInterest(opt)}
                className={cn(
                  "min-h-14 cursor-pointer border px-4 py-4 text-left font-label-caps text-label-caps uppercase tracking-widest transition-colors duration-300",
                  interest === opt
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-primary/20 text-on-surface hover:border-primary/60",
                )}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-4", step !== 1 && "hidden")}>
          <Field label="Event type" htmlFor="eventType">
            <Select id="eventType" name="eventType">
              <option value="">Select type</option>
              {eventTypeOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-stage">
                  {opt}
                </option>
              ))}
            </Select>
          </Field>
          <Field label="Event date" htmlFor="date">
            <Input
              id="date"
              name="date"
              type="date"
              className="[color-scheme:dark]"
            />
          </Field>
          <Field label="Location" htmlFor="location">
            <Input id="location" name="location" placeholder="City / venue" />
          </Field>
          <Field label="Expected audience" htmlFor="audience">
            <Input
              id="audience"
              name="audience"
              placeholder="e.g. 500 festival attendees"
            />
          </Field>
          <Field label="Indoor / Outdoor" htmlFor="venueSetting">
            <Select id="venueSetting" name="venueSetting">
              <option value="">Select</option>
              {venueSettingOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-stage">
                  {opt}
                </option>
              ))}
            </Select>
          </Field>
          <Field label="Estimated budget (optional)" htmlFor="budget">
            <Select id="budget" name="budget">
              <option value="">Prefer not to say</option>
              {budgetRanges.map((opt) => (
                <option key={opt} value={opt} className="bg-stage">
                  {opt}
                </option>
              ))}
            </Select>
          </Field>
        </div>

        <div className={cn(step !== 2 && "hidden")}>
          <Field label="Tell us about your event" htmlFor="message">
            <Textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Venue, running time, technical notes…"
            />
          </Field>
        </div>

        <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-4", step !== 3 && "hidden")}>
          <Field label="Your name" htmlFor="name">
            <Input id="name" name="name" type="text" placeholder="Your Name" required />
          </Field>
          <Field label="Email" htmlFor="email">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              required
            />
          </Field>
        </div>

        <div className="flex gap-3">
          {step > 0 ? (
            <Button
              type="button"
              variant="ghost"
              className="flex-1"
              onClick={() => setStep((s) => s - 1)}
            >
              Back
            </Button>
          ) : null}
          {step < homeSteps.length - 1 ? (
            <Button
              type="button"
              className="flex-1"
              disabled={step === 0 && !interest}
              onClick={() => setStep((s) => s + 1)}
            >
              Continue
            </Button>
          ) : (
            <Button type="submit" className="flex-1" size="lg" disabled={pending}>
              {pending ? "Submitting…" : "Request Availability"}
            </Button>
          )}
        </div>
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
