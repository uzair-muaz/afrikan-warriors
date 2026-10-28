"use client";

import {
  CheckoutElementsProvider,
  ExpressCheckoutElement,
  PaymentElement,
  useCheckoutElements,
} from "@stripe/react-stripe-js/checkout";
import Link from "next/link";
import { useState, type ComponentProps, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { support } from "@/constants/support";
import { formatGbp } from "@/lib/money";
import { stripeAppearance } from "@/lib/payments/appearance";
import { getStripeBrowser } from "@/lib/payments/stripe-browser";

type ExpressConfirmEvent = Parameters<
  NonNullable<ComponentProps<typeof ExpressCheckoutElement>["onConfirm"]>
>[0];

type Props = {
  clientSecret: string;
  amountTotal: number;
  customerEmail: string;
  customerName: string;
  note: string;
};

export function SupportCheckout(props: Props) {
  return (
    <section className="px-margin-mobile pb-32 pt-12 md:px-margin-desktop md:pb-40 md:pt-16">
      <div className="mx-auto max-w-container-max">
        <Link
          href="/support?cancelled=1"
          className="mb-12 inline-block font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-primary md:mb-16"
        >
          {support.checkoutBackLabel}
        </Link>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          <Summary
            amountTotal={props.amountTotal}
            customerEmail={props.customerEmail}
            customerName={props.customerName}
            note={props.note}
          />

          <div className="flex flex-col border border-primary/20 bg-surface-container p-8 md:p-12 lg:col-span-7">
            <CheckoutElementsProvider
              stripe={getStripeBrowser()}
              options={{
                clientSecret: props.clientSecret,
                elementsOptions: {
                  appearance: stripeAppearance,
                  loader: "auto",
                },
              }}
            >
              <PaymentPanel
                amountTotal={props.amountTotal}
                customerName={props.customerName}
                customerEmail={props.customerEmail}
              />
            </CheckoutElementsProvider>
          </div>
        </div>
      </div>
    </section>
  );
}

function Summary({
  amountTotal,
  customerEmail,
  customerName,
  note,
}: Omit<Props, "clientSecret">) {
  return (
    <aside className="flex h-full flex-col border border-primary/20 bg-surface-container-low p-8 md:p-12 lg:col-span-5 lg:sticky lg:top-[calc(var(--header-h)+1.5rem)] lg:self-start">
      <p className="mb-5 font-label-caps text-label-caps uppercase tracking-widest text-primary">
        {support.checkoutEyebrow}
      </p>
      <h1 className="mb-5 font-headline-md text-3xl uppercase tracking-tight text-on-surface md:text-4xl">
        {support.checkoutTitle}
      </h1>
      <p className="mb-10 font-body-md text-body-md text-on-surface-variant">
        {support.checkoutLead}
      </p>

      <dl className="flex flex-col gap-7 border-t border-primary/15 pt-8">
        <div>
          <dt className="mb-2 font-label-caps text-label-caps uppercase text-on-surface-variant">
            Amount
          </dt>
          <dd className="font-display-lg text-3xl text-primary">
            {formatGbp(amountTotal)}
          </dd>
        </div>
        {customerName ? (
          <div>
            <dt className="mb-2 font-label-caps text-label-caps uppercase text-on-surface-variant">
              From
            </dt>
            <dd className="font-body-md text-on-surface">{customerName}</dd>
          </div>
        ) : null}
        {customerEmail ? (
          <div>
            <dt className="mb-2 font-label-caps text-label-caps uppercase text-on-surface-variant">
              Email
            </dt>
            <dd className="break-all font-body-md text-on-surface">{customerEmail}</dd>
          </div>
        ) : null}
        {note ? (
          <div>
            <dt className="mb-2 font-label-caps text-label-caps uppercase text-on-surface-variant">
              Note
            </dt>
            <dd className="whitespace-pre-wrap font-body-md text-on-surface-variant">
              {note}
            </dd>
          </div>
        ) : null}
      </dl>

      <p className="mt-auto max-w-sm pt-12 font-body-md text-sm text-on-surface-variant md:pt-16">
        {support.checkoutSecureNote}
      </p>
    </aside>
  );
}

function PaymentPanel({
  amountTotal,
  customerName,
  customerEmail,
}: {
  amountTotal: number;
  customerName: string;
  customerEmail: string;
}) {
  const checkoutState = useCheckoutElements();
  const [message, setMessage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [expressReady, setExpressReady] = useState(false);

  if (checkoutState.type === "loading") {
    return (
      <div className="flex min-h-[22rem] flex-col gap-6" aria-busy="true">
        <div className="h-12 animate-pulse bg-surface-container-high" />
        <div className="h-48 flex-1 animate-pulse bg-surface-container-high" />
        <div className="h-14 animate-pulse bg-surface-container-high" />
      </div>
    );
  }

  if (checkoutState.type === "error") {
    return (
      <div className="flex min-h-[22rem] flex-col justify-center">
        <p className="font-body-md text-primary" role="alert">
          {checkoutState.error.message || "Payment could not be loaded. Please try again."}
        </p>
        <Link
          href="/support?cancelled=1"
          className="mt-6 inline-block font-label-caps text-label-caps uppercase tracking-widest text-primary hover:underline"
        >
          {support.checkoutBackLabel}
        </Link>
      </div>
    );
  }

  const { checkout } = checkoutState;
  const displayAmount = checkout.total?.total?.amount ?? formatGbp(amountTotal);

  function resetPayment() {
    setSubmitting(false);
    setMessage(null);
  }

  async function confirmPayment(expressEvent?: ExpressConfirmEvent) {
    if (submitting) return;

    setSubmitting(true);
    setMessage(null);

    try {
      const result = await checkout.confirm(
        expressEvent ? { expressCheckoutConfirmEvent: expressEvent } : undefined,
      );

      if (result.type === "error") {
        setMessage(result.error.message ?? "Payment could not be completed.");
        setSubmitting(false);
      }
      // On success Stripe redirects — leave submitting true until navigation
    } catch {
      setMessage("Payment was cancelled. You can try again with another method.");
      setSubmitting(false);
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await confirmPayment();
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-1 flex-col">
      <div className={`flex min-w-0 flex-1 flex-col ${submitting ? "opacity-80" : ""}`}>
        <div className={expressReady ? "mb-12" : "mb-0"}>
          {expressReady ? (
            <p className="mb-4 font-label-caps text-label-caps uppercase text-on-surface-variant">
              Express checkout
            </p>
          ) : null}
          <ExpressCheckoutElement
            onConfirm={(event) => {
              void confirmPayment(event);
            }}
            onCancel={() => {
              resetPayment();
              setMessage("PayPal was closed. Choose a card or try again.");
            }}
            onLoadError={() => {
              resetPayment();
              setMessage("Express checkout could not load. Please pay by card.");
            }}
            onReady={({ availablePaymentMethods }) => {
              setExpressReady(
                Boolean(
                  availablePaymentMethods &&
                    Object.values(availablePaymentMethods).some(Boolean),
                ),
              );
            }}
          />
          {expressReady ? (
            <div className="relative mt-10 flex items-center gap-4">
              <span className="h-px flex-1 bg-primary/20" />
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
                Or pay with card
              </span>
              <span className="h-px flex-1 bg-primary/20" />
            </div>
          ) : null}
        </div>

        <div className="mb-12">
          <p className="mb-5 font-label-caps text-label-caps uppercase text-on-surface-variant">
            Payment method
          </p>
          <PaymentElement
            options={{
              layout: {
                type: "accordion",
                defaultCollapsed: false,
                radios: "always",
                spacedAccordionItems: true,
              },
              fields: {
                billingDetails: {
                  name: customerName ? "never" : "auto",
                  email: customerEmail ? "never" : "auto",
                  phone: "never",
                },
              },
              wallets: {
                link: "never",
              },
            }}
          />
        </div>

        {message ? (
          <p className="mb-8 font-body-md text-sm text-primary" role="alert">
            {message}
          </p>
        ) : null}

        <div className="mt-auto border-t border-primary/15 pt-10 md:pt-12">
          <Button
            type="submit"
            size="lg"
            fullWidth
            disabled={submitting || !checkout.canConfirm}
          >
            {submitting
              ? support.checkoutPendingLabel
              : `${support.checkoutPayLabel} · ${displayAmount}`}
          </Button>

          {submitting ? (
            <button
              type="button"
              onClick={resetPayment}
              className="mt-5 w-full text-center font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-primary"
            >
              Cancel and try another method
            </button>
          ) : null}
        </div>
      </div>
    </form>
  );
}
