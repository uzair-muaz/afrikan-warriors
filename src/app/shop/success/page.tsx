import type { Metadata } from "next";
import { formatGbp } from "@/lib/money";
import { readCheckoutSession } from "@/lib/payments/checkout";
import { PaymentResult } from "@/features/payments/PaymentResult";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Order received",
  description: "Your Afrikan Warriors shop payment has been received.",
  path: "/shop/success",
  index: false,
});

export default async function ShopSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string | string[] }>;
}) {
  const query = await searchParams;
  const sessionId = Array.isArray(query.session_id) ? query.session_id[0] : query.session_id;
  const session = sessionId ? await readCheckoutSession(sessionId, "shop") : null;
  const paid = session?.payment_status === "paid";
  const amount = session?.amount_total != null ? formatGbp(session.amount_total) : null;

  if (!session) {
    return (
      <PaymentResult
        eyebrow="Shop"
        title="We could not confirm this order."
        body="If you completed a payment, write to booking@afrikanwarriors.com and we will check it."
        href="/shop"
        action="Back to the Shop"
      />
    );
  }

  if (!paid) {
    return (
      <PaymentResult
        eyebrow="Shop"
        title="Your payment is processing."
        body="The order is held until the payment clears. We will email you when it does."
        href="/shop"
        action="Back to the Shop"
      />
    );
  }

  return (
    <PaymentResult
      eyebrow="Order received"
      title="Thank you."
      body={
        amount
          ? `${amount} is paid, including delivery. A confirmation is on its way to your email.`
          : "Your order is paid. A confirmation is on its way to your email."
      }
      href="/"
      action="Back to the stage"
    />
  );
}
