import type { Metadata } from "next";
import { support } from "@/constants/support";
import { formatGbp } from "@/lib/money";
import { readCheckoutSession } from "@/lib/payments/checkout";
import { PaymentResult } from "@/features/payments/PaymentResult";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Support received",
  description: "Your support payment for Afrikan Warriors has been received.",
  path: "/support/success",
  index: false,
});

export default async function SupportSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string | string[] }>;
}) {
  const query = await searchParams;
  const sessionId = Array.isArray(query.session_id) ? query.session_id[0] : query.session_id;
  const session = sessionId ? await readCheckoutSession(sessionId, "support") : null;
  const paid = session?.payment_status === "paid";
  const amount = session?.amount_total != null ? formatGbp(session.amount_total) : null;
  const name =
    session?.metadata?.customer_name?.trim() ||
    session?.customer_details?.name?.trim() ||
    "";
  const email =
    session?.customer_details?.email?.trim() ||
    session?.customer_email?.trim() ||
    session?.metadata?.customer_email?.trim() ||
    "";

  if (!session) {
    return (
      <PaymentResult
        eyebrow="Support Afrikan Warriors"
        title="We could not confirm this payment."
        body="If you completed a payment, it will show on your card statement as Afrikan Warriors. Write to booking@afrikanwarriors.com if you need it checked."
        href="/support"
        action="Back to Support"
      />
    );
  }

  if (!paid) {
    return (
      <PaymentResult
        eyebrow="Support Afrikan Warriors"
        title={name ? `Thank you, ${name}.` : "Your payment is processing."}
        body="Nothing else is needed from you. We will email you when the payment clears."
        href="/support"
        action="Back to Support"
      />
    );
  }

  return (
    <PaymentResult
      eyebrow="Support received"
      title={name ? `Thank you, ${name}.` : "Thank you."}
      body={
        [
          amount ? `${amount} ${support.successBody}` : support.successBody,
          email ? `A confirmation is on its way to ${email}.` : "",
        ]
          .filter(Boolean)
          .join(" ")
      }
      href="/"
      action="Back to the stage"
    />
  );
}
