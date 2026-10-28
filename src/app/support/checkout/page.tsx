import type { Metadata } from "next";
import { support } from "@/constants/support";
import { SupportCheckout } from "@/features/support/SupportCheckout";
import { PaymentResult } from "@/features/payments/PaymentResult";
import { loadSupportCheckoutSession } from "@/lib/payments/checkout";
import { isStripeConfigured } from "@/lib/payments/config";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Complete support payment",
  description: "Secure support payment for Afrikan Warriors. Card details go to Stripe.",
  path: "/support/checkout",
  index: false,
});

export default async function SupportCheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string | string[] }>;
}) {
  const query = await searchParams;
  const sessionId = Array.isArray(query.session_id) ? query.session_id[0] : query.session_id;

  if (!isStripeConfigured()) {
    return (
      <PaymentResult
        eyebrow={support.title}
        title="Payments are not configured."
        body={support.closedNote}
        href="/support"
        action="Back to Support"
      />
    );
  }

  if (!sessionId) {
    return (
      <PaymentResult
        eyebrow={support.checkoutEyebrow}
        title="No payment session found."
        body="Start again from the Support page to choose an amount."
        href="/support"
        action="Back to Support"
      />
    );
  }

  const session = await loadSupportCheckoutSession(sessionId);

  if (!session) {
    return (
      <PaymentResult
        eyebrow={support.checkoutEyebrow}
        title="This payment session has ended."
        body="It may have expired or already been paid. Start again from Support if you still want to contribute."
        href="/support"
        action="Back to Support"
      />
    );
  }

  return (
    <SupportCheckout
      clientSecret={session.clientSecret}
      amountTotal={session.amountTotal}
      customerEmail={session.customerEmail}
      customerName={session.customerName}
      note={session.note}
    />
  );
}
