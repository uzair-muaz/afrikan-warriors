import { notifyCheckoutPaid } from "@/lib/payments/notify";
import { getStripe } from "@/lib/payments/stripe";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const stripe = getStripe();
  const secret = process.env.STRIPE_WEBHOOK_SECRET?.trim();
  const signature = request.headers.get("stripe-signature");

  if (!stripe || !secret || !signature) {
    return Response.json({ error: "Webhook is not configured." }, { status: 400 });
  }

  const body = await request.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, secret);
  } catch (error) {
    console.error("Stripe webhook signature failed", error);
    return Response.json({ error: "Invalid signature." }, { status: 400 });
  }

  if (
    event.type === "checkout.session.completed" ||
    event.type === "checkout.session.async_payment_succeeded"
  ) {
    try {
      await notifyCheckoutPaid(event.id, event.data.object.id);
    } catch (error) {
      console.error("Payment notification failed", error);
      return Response.json({ error: "Notification failed." }, { status: 500 });
    }
  }

  if (event.type === "checkout.session.async_payment_failed") {
    console.error("Async payment failed", {
      sessionId: event.data.object.id,
      kind: event.data.object.metadata?.kind,
    });
  }

  return Response.json({ received: true });
}
