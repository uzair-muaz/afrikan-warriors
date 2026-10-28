import { site } from "@/constants/nav";
import { sendBrandedEmail } from "@/lib/email";
import { paymentNotifyEmails } from "@/lib/email/recipients";
import { formatGbp } from "@/lib/money";
import { siteOrigin } from "@/lib/payments/config";
import { getStripe } from "@/lib/payments/stripe";
import type Stripe from "stripe";

function oneLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function formatAddress(address: Stripe.Address | null | undefined) {
  if (!address) return "";
  return [address.line1, address.line2, address.city, address.state, address.postal_code, address.country]
    .filter(Boolean)
    .join(", ");
}

export async function notifyCheckoutPaid(eventId: string, sessionId: string) {
  const stripe = getStripe();
  const notify = paymentNotifyEmails();

  if (!stripe || notify.length === 0) {
    console.error("Payment email skipped: Stripe or notify recipients are not configured.");
    return;
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "shipping_cost.shipping_rate"],
  });

  if (session.payment_status !== "paid") return;

  const kind = session.metadata?.kind === "shop" ? "shop" : "support";
  const amount = formatGbp(session.amount_total ?? 0);
  const email = session.customer_details?.email ?? session.customer_email ?? "";
  const name = oneLine(
    session.metadata?.customer_name ||
      session.customer_details?.name ||
      session.collected_information?.shipping_details?.name ||
      "A supporter",
  );
  const note = session.metadata?.note?.trim() ?? "";
  const lines = (session.line_items?.data ?? []).map((item) => {
    const quantity = item.quantity ?? 1;
    const lineAmount = formatGbp(item.amount_total ?? 0);
    return `${item.description ?? "Item"} × ${quantity} — ${lineAmount}`;
  });

  const rate = session.shipping_cost?.shipping_rate;
  const rateName = rate && typeof rate !== "string" ? rate.display_name : "";
  const shippingAmount =
    session.shipping_cost != null ? formatGbp(session.shipping_cost.amount_total) : "";
  const destination = formatAddress(session.collected_information?.shipping_details?.address);
  const origin = siteOrigin();

  const companyRows = [
    { label: "Amount", value: amount },
    { label: "Name", value: name },
    ...(email ? [{ label: "Email", value: email }] : []),
    ...(rateName
      ? [
          {
            label: "Delivery",
            value: `${rateName}${shippingAmount ? ` — ${shippingAmount}` : ""}`,
          },
        ]
      : []),
    ...(destination ? [{ label: "Address", value: destination }] : []),
    ...(note ? [{ label: "Note", value: note }] : []),
    ...(lines.length ? [{ label: "Items", value: lines.join("\n") }] : []),
    { label: "Stripe session", value: session.id },
  ];

  const company = await sendBrandedEmail({
    to: notify,
    subject:
      kind === "shop" ? `Shop order paid — ${amount}` : `Support contribution — ${amount}`,
    replyTo: email || undefined,
    preheader:
      kind === "shop"
        ? `New shop order paid: ${amount}`
        : `New support contribution: ${amount}`,
    eyebrow: kind === "shop" ? "Shop order" : "Support contribution",
    title: kind === "shop" ? "Order paid" : "Support received",
    intro:
      kind === "shop"
        ? "A shop order has been paid through Stripe."
        : "A support contribution has been paid through Stripe.",
    rows: companyRows,
    footerNote: "Reply to this email to contact the customer directly.",
    idempotencyKey: `${eventId}:company`,
  });

  if (!company.ok) {
    console.error("Company payment email failed", company.error);
  }

  if (!email) return;

  const customer = await sendBrandedEmail({
    to: email,
    subject:
      kind === "shop"
        ? "Your Afrikan Warriors order"
        : "Thank you for supporting Afrikan Warriors",
    preheader:
      kind === "shop"
        ? `We received your order of ${amount}.`
        : `We received your support contribution of ${amount}.`,
    eyebrow: kind === "shop" ? "Order confirmation" : "Support received",
    title: `Thank you, ${name}.`,
    intro:
      kind === "shop"
        ? `We received your order of ${amount}, including delivery.`
        : `We received your support contribution of ${amount}.`,
    rows: [
      { label: "Amount", value: amount },
      ...(note ? [{ label: "Your note", value: note }] : []),
    ],
    cta: {
      label: "Visit Afrikan Warriors",
      href: origin,
    },
    footerNote: `Questions? Write to ${site.email}.`,
    idempotencyKey: `${eventId}:customer`,
  });

  if (!customer.ok) {
    console.error("Customer payment email failed", customer.error);
  }
}
