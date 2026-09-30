"use client";

import { useActionState, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { supportAmounts } from "@/constants/support";
import { submitSupport, type AudienceState } from "@/lib/actions/audience";
import { cn } from "@/lib/cn";

const initial: AudienceState = { ok: false };

export function SupportForm() {
  const [state, action, pending] = useActionState(submitSupport, initial);
  const [amount, setAmount] = useState<string>("25");

  if (state.ok) {
    return (
      <div className="border border-primary/30 bg-surface-container p-8 md:p-10">
        <p className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-4">
          Support received
        </p>
        <h2 className="font-headline-md text-3xl text-on-surface uppercase mb-4">
          Thank you.
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
          This records your support contribution. It is not a card charge, and
          it is not a charitable donation. The company will confirm how to
          complete it.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="border border-primary/20 bg-surface-container p-6 md:p-10">
      <p className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-6">
        Support contribution
      </p>
      <div className="flex flex-wrap gap-3 mb-6">
        {supportAmounts.map((value) => {
          const selected = amount === String(value);
          return (
            <button
              key={value}
              type="button"
              onClick={() => setAmount(String(value))}
              className={cn(
                "min-w-20 border px-4 py-3 font-label-caps text-label-caps uppercase tracking-widest transition-colors",
                selected
                  ? "border-primary bg-primary text-on-primary"
                  : "border-primary/40 text-primary hover:border-primary",
              )}
            >
              £{value}
            </button>
          );
        })}
        <button
          type="button"
          onClick={() => setAmount("other")}
          className={cn(
            "border px-4 py-3 font-label-caps text-label-caps uppercase tracking-widest transition-colors",
            amount === "other"
              ? "border-primary bg-primary text-on-primary"
              : "border-primary/40 text-primary hover:border-primary",
          )}
        >
          Other amount
        </button>
      </div>

      <input type="hidden" name="amount" value={amount} />

      {amount === "other" ? (
        <div className="mb-6">
          <Field label="Amount (£)" htmlFor="support-amount">
            <Input
              id="support-amount"
              name="otherAmount"
              type="number"
              min={1}
              step="1"
              inputMode="numeric"
              required
              placeholder="Enter an amount"
            />
          </Field>
        </div>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Field label="Name" htmlFor="support-name">
          <Input id="support-name" name="name" required autoComplete="name" />
        </Field>
        <Field label="Email" htmlFor="support-email">
          <Input
            id="support-email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </Field>
      </div>
      <div className="mb-6">
        <Field label="Note" htmlFor="support-note">
          <Textarea id="support-note" name="note" rows={4} placeholder="Optional" />
        </Field>
      </div>

      <p className="font-body-md text-sm text-on-surface-variant mb-6 max-w-2xl">
        Afrikan Warriors Ltd is not a registered charity. A support contribution
        is not a donation and does not qualify for Gift Aid. Card payment is
        not connected on this page yet — sending this form does not take money.
      </p>

      {state.error ? (
        <p className="text-primary mb-4 font-body-md text-sm" role="alert">
          {state.error}
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={pending}>
        {pending ? "Sending…" : "Support Now →"}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="font-label-caps text-label-caps uppercase text-on-surface-variant"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
