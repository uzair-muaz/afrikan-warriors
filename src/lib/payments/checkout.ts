import type Stripe from "stripe";
import { shippingCountries, shippingRateDefinitions } from "@/constants/shipping";
import { shopProducts, type ShopProduct } from "@/constants/shop";
import { support } from "@/constants/support";
import { readShippingPence, siteOrigin } from "@/lib/payments/config";
import { getStripe, integrationSuffix } from "@/lib/payments/stripe";

export type HostedCheckoutStart = { url: string } | { error: string };
export type ElementsCheckoutStart =
  | { sessionId: string; clientSecret: string }
  | { error: string };

export function shopIsOpen() {
  return (
    process.env.SHOP_LIVE === "true" &&
    shopProducts.some(
      (product) => product.purchasable && product.pricePence != null && product.pricePence > 0,
    )
  );
}

function shippingOptions(): Stripe.Checkout.SessionCreateParams.ShippingOption[] {
  return shippingRateDefinitions.flatMap((rate) => {
    const amount = readShippingPence(rate.env);
    if (amount == null) return [];

    return [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          display_name: rate.displayName,
          fixed_amount: { amount, currency: "gbp" },
          delivery_estimate: {
            minimum: { unit: "business_day", value: rate.minimumDays },
            maximum: { unit: "business_day", value: rate.maximumDays },
          },
        },
      },
    ];
  });
}

async function openHostedSession(
  params: Stripe.Checkout.SessionCreateParams,
  idempotencyKey: string,
): Promise<HostedCheckoutStart> {
  const stripe = getStripe();
  if (!stripe) {
    return { error: "Card payment is not switched on yet." };
  }

  try {
    const session = await stripe.checkout.sessions.create(params, {
      idempotencyKey: idempotencyKey.replace(/[^a-zA-Z0-9:_@.+-]/g, "").slice(0, 255),
    });

    if (!session.url) {
      return { error: "The payment page could not be opened. Please try again." };
    }

    return { url: session.url };
  } catch (error) {
    console.error("Stripe Checkout session failed", error);
    return { error: "The payment page could not be opened. Please try again." };
  }
}

export async function createSupportCheckout(input: {
  name: string;
  email: string;
  note: string;
  amountPence: number;
}): Promise<ElementsCheckoutStart> {
  const stripe = getStripe();
  if (!stripe) {
    return { error: support.closedNote };
  }

  const origin = siteOrigin();
  const minute = Math.floor(Date.now() / 60_000);
  const idempotencyKey = `support:${input.email}:${input.amountPence}:${input.note.slice(0, 40)}:${minute}`
    .replace(/[^a-zA-Z0-9:_@.+-]/g, "")
    .slice(0, 255);

  try {
    const customerId = await findOrCreateSupportCustomer(stripe, input.name, input.email);

    const session = await stripe.checkout.sessions.create(
      {
        ui_mode: "elements",
        mode: "payment",
        locale: "en-GB",
        ...(customerId
          ? { customer: customerId }
          : { customer_email: input.email }),
        billing_address_collection: "auto",
        line_items: [
          {
            quantity: 1,
            price_data: {
              currency: "gbp",
              unit_amount: input.amountPence,
              product_data: {
                name: support.productName,
                description: support.productDescription,
              },
            },
          },
        ],
        payment_intent_data: {
          receipt_email: input.email,
          metadata: {
            kind: "support",
            customer_name: input.name.slice(0, 200),
          },
        },
        metadata: {
          kind: "support",
          customer_name: input.name.slice(0, 200),
          customer_email: input.email.slice(0, 200),
          ...(input.note ? { note: input.note.slice(0, 450) } : {}),
        },
        integration_identifier: `support-aw-${integrationSuffix()}`,
        return_url: `${origin}/support/success?session_id={CHECKOUT_SESSION_ID}`,
      },
      { idempotencyKey },
    );

    if (!session.client_secret) {
      return { error: "The payment page could not be opened. Please try again." };
    }

    return { sessionId: session.id, clientSecret: session.client_secret };
  } catch (error) {
    console.error("Stripe Support checkout session failed", error);
    return { error: "The payment page could not be opened. Please try again." };
  }
}

async function findOrCreateSupportCustomer(
  stripe: Stripe,
  name: string,
  email: string,
) {
  try {
    const existing = await stripe.customers.list({ email, limit: 1 });
    const match = existing.data[0];
    if (match) {
      if (match.name !== name) {
        await stripe.customers.update(match.id, { name });
      }
      return match.id;
    }

    const created = await stripe.customers.create({
      name,
      email,
      metadata: { source: "support" },
    });
    return created.id;
  } catch (error) {
    console.error(
      "Stripe Customer create/update failed — add Customers Write on the restricted key",
      error,
    );
    return null;
  }
}

export type SupportCheckoutSession = {
  clientSecret: string;
  amountTotal: number;
  currency: string;
  customerEmail: string;
  customerName: string;
  note: string;
};

export async function loadSupportCheckoutSession(
  sessionId: string,
): Promise<SupportCheckoutSession | null> {
  if (!sessionId.startsWith("cs_")) return null;

  const stripe = getStripe();
  if (!stripe) return null;

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.metadata?.kind !== "support") return null;
    if (session.status !== "open") return null;
    if (!session.client_secret) return null;

    return {
      clientSecret: session.client_secret,
      amountTotal: session.amount_total ?? 0,
      currency: session.currency ?? "gbp",
      customerEmail: session.customer_email ?? session.customer_details?.email ?? "",
      customerName: session.metadata.customer_name ?? "",
      note: session.metadata.note ?? "",
    };
  } catch (error) {
    console.error("Stripe Support session load failed", error);
    return null;
  }
}

function productImages(product: ShopProduct) {
  const origin = siteOrigin();
  if (!origin.startsWith("https://")) return {};
  return { images: [`${origin}${product.image}`] };
}

type CartLine = { id: string; size?: string; quantity: number };

function lineItems(lines: CartLine[]): Stripe.Checkout.SessionCreateParams.LineItem[] | { error: string } {
  const items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

  for (const line of lines) {
    const product = shopProducts.find((item) => item.id === line.id);
    if (!product || !product.purchasable || product.pricePence == null || product.pricePence <= 0) {
      return { error: "One of these pieces is not for sale yet." };
    }

    if (product.sizes && (!line.size || !product.sizes.includes(line.size))) {
      return { error: `Choose a size for ${product.name}.` };
    }

    items.push({
      quantity: line.quantity,
      price_data: {
        currency: "gbp",
        unit_amount: product.pricePence,
        product_data: {
          name: line.size ? `${product.name} (${line.size})` : product.name,
          description: product.description.slice(0, 500),
          ...productImages(product),
        },
      },
    });
  }

  return items;
}

export async function createShopCheckout(input: {
  name: string;
  email: string;
  lines: CartLine[];
}): Promise<HostedCheckoutStart> {
  if (!shopIsOpen()) {
    return { error: "The shop is not open yet." };
  }

  const built = lineItems(input.lines);
  if ("error" in built) return built;

  const shipping = shippingOptions();
  if (shipping.length === 0) {
    return { error: "Delivery prices are not set yet." };
  }

  const origin = siteOrigin();
  const minute = Math.floor(Date.now() / 60_000);
  const summary = input.lines.map((line) => `${line.id}:${line.size ?? ""}:${line.quantity}`).join(",");

  return openHostedSession(
    {
      mode: "payment",
      locale: "en-GB",
      customer_email: input.email,
      billing_address_collection: "auto",
      phone_number_collection: { enabled: true },
      shipping_address_collection: { allowed_countries: [...shippingCountries] },
      shipping_options: shipping,
      line_items: built,
      metadata: {
        kind: "shop",
        customer_name: input.name.slice(0, 200),
      },
      integration_identifier: `shop-aw-${integrationSuffix()}`,
      success_url: `${origin}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/shop?cancelled=1`,
    },
    `shop:${input.email}:${summary}:${minute}`,
  );
}

export async function readCheckoutSession(sessionId: string, kind: "support" | "shop") {
  if (!sessionId.startsWith("cs_")) return null;

  const stripe = getStripe();
  if (!stripe) return null;

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.metadata?.kind !== kind || session.status !== "complete") return null;
    return session;
  } catch (error) {
    console.error("Stripe session lookup failed", error);
    return null;
  }
}
