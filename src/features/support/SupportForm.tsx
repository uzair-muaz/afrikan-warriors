"use client";

import { useActionState, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { support, supportAmounts } from "@/constants/support";
import { submitSupport, type AudienceState } from "@/lib/actions/audience";
import { cn } from "@/lib/cn";

const initial: AudienceState = { ok: false };

export function SupportForm({
  paymentsReady,
  cancelled,
}: {
  paymentsReady: boolean;
  cancelled?: boolean;
}) {
  const [state, action, pending] = useActionState(submitSupport, initial);
  const [amount, setAmount] = useState<string>("25");

  return (
    <form action={action} className="border border-primary/20 bg-surface-container p-6 md:p-10">
      <fieldset disabled={pending || !paymentsReady} className="min-w-0 border-0 p-0 disabled:opacity-80">
        <p className="mb-6 font-label-caps text-label-caps uppercase tracking-widest text-primary">
          {support.formLabel}
        </p>
        <div className="mb-6 flex flex-wrap gap-3">
          {supportAmounts.map((value) => {
            const selected = amount === String(value);
            return (
              <button
                key={value}
                type="button"
                onClick={() => setAmount(String(value))}
                className={cn(
                  "min-w-20 border px-4 py-3 font-label-caps text-label-caps uppercase tracking-widest transition-colors disabled:cursor-not-allowed",
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
              "border px-4 py-3 font-label-caps text-label-caps uppercase tracking-widest transition-colors disabled:cursor-not-allowed",
              amount === "other"
                ? "border-primary bg-primary text-on-primary"
                : "border-primary/40 text-primary hover:border-primary",
            )}
          >
            {support.customAmountLabel}
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
                max={10000}
                step="0.01"
                inputMode="numeric"
                required
                placeholder="Enter an amount"
              />
            </Field>
          </div>
        ) : null}

        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
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

        {cancelled ? (
          <p className="mb-4 font-body-md text-sm text-on-surface" role="status">
            {support.cancelledNote}
          </p>
        ) : null}

        <p className="mb-6 max-w-2xl font-body-md text-sm text-on-surface-variant">
          {paymentsReady ? support.openNote : support.closedNote}
        </p>

        {state.error ? (
          <p className="mb-4 font-body-md text-sm text-primary" role="alert">
            {state.error}
          </p>
        ) : null}

        <Button type="submit" size="lg" disabled={pending || !paymentsReady}>
          {pending ? support.pendingLabel : support.submitLabel}
        </Button>
      </fieldset>
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
