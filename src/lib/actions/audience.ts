"use server";

import { redirect } from "next/navigation";
import { deliveryCountries, shopProducts } from "@/constants/shop";
import { sendInboxEmail } from "@/lib/email";
import { poundsToPence } from "@/lib/money";
import { allowFormSubmit, rateLimitMessage } from "@/lib/rate-limit";
import { createShopCheckout, createSupportCheckout, shopIsOpen } from "@/lib/payments/checkout";

export type AudienceState = {
  ok: boolean;
  error?: string;
};

function readEmail(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();

  if (!name || !email) {
    return { name, email, error: "Please provide your name and email." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { name, email, error: "Please enter a valid email address." };
  }

  return { name, email, error: undefined };
}

export async function submitSupport(
  _prev: AudienceState,
  formData: FormData,
): Promise<AudienceState> {
  const { name, email, error } = readEmail(formData);
  if (error) return { ok: false, error };

  const preset = String(formData.get("amount") ?? "").trim();
  const other = String(formData.get("otherAmount") ?? "").trim();
  const amount = preset === "other" ? other : preset;
  const amountPence = poundsToPence(amount);

  if (amountPence == null) {
    return { ok: false, error: "Choose an amount from £1 to £10,000." };
  }

  const note = String(formData.get("note") ?? "").trim().slice(0, 450);

  if (!(await allowFormSubmit("support"))) {
    return { ok: false, error: rateLimitMessage };
  }

  const result = await createSupportCheckout({ name, email, note, amountPence });

  if ("error" in result) return { ok: false, error: result.error };

  redirect(`/support/checkout?session_id=${encodeURIComponent(result.sessionId)}`);
}

export async function submitShopInterest(
  _prev: AudienceState,
  formData: FormData,
): Promise<AudienceState> {
  const { name, email, error } = readEmail(formData);
  if (error) return { ok: false, error };

  let items: { id?: string; size?: string }[] = [];
  try {
    items = JSON.parse(String(formData.get("items") ?? "[]"));
  } catch {
    items = [];
  }

  const known = new Set(shopProducts.map((product) => product.id));
  const valid = items.filter((item) => item.id && known.has(item.id));

  if (valid.length === 0) {
    return { ok: false, error: "Add at least one piece before sending." };
  }

  const line1 = String(formData.get("line1") ?? "").trim();
  const city = String(formData.get("city") ?? "").trim();
  const postcode = String(formData.get("postcode") ?? "").trim();
  const country = String(formData.get("country") ?? "").trim();

  if (!line1 || !city || !postcode) {
    return { ok: false, error: "Add a delivery address, city and postcode." };
  }

  if (!deliveryCountries.includes(country as (typeof deliveryCountries)[number])) {
    return { ok: false, error: "Choose a delivery country." };
  }

  const phone = String(formData.get("phone") ?? "").trim();
  const line2 = String(formData.get("line2") ?? "").trim();
  const county = String(formData.get("county") ?? "").trim();
  const pieces = valid
    .map((item) => {
      const product = shopProducts.find((entry) => entry.id === item.id);
      const size = item.size ? ` (${item.size})` : "";
      return `${product?.name ?? item.id}${size}`;
    })
    .join("\n");

  const address = [
    line1,
    line2,
    city,
    county,
    postcode,
    country,
  ]
    .filter(Boolean)
    .join(", ");

  if (!(await allowFormSubmit("shop-interest"))) {
    return { ok: false, error: rateLimitMessage };
  }

  const sent = await sendInboxEmail({
    subject: `Shop request from ${name.replace(/[\r\n]+/g, " ").slice(0, 80)}`,
    eyebrow: "Shop request",
    title: "New shop interest",
    intro: "A visitor requested pieces from the shop. Nothing has been charged.",
    rows: [
      { label: "Name", value: name },
      { label: "Email", value: email },
      ...(phone ? [{ label: "Phone", value: phone }] : []),
      { label: "Pieces", value: pieces },
      { label: "Delivery", value: address },
    ],
    replyTo: email,
  });

  if (!sent.ok) return { ok: false, error: sent.error };

  return { ok: true };
}

type CartRequest = { id?: string; size?: string };

export async function startShopCheckout(
  _prev: AudienceState,
  formData: FormData,
): Promise<AudienceState> {
  if (!shopIsOpen()) {
    return { ok: false, error: "The shop is not open yet." };
  }

  const { name, email, error } = readEmail(formData);
  if (error) return { ok: false, error };

  let items: CartRequest[] = [];
  try {
    const parsed = JSON.parse(String(formData.get("items") ?? "[]")) as unknown;
    items = Array.isArray(parsed) ? parsed : [];
  } catch {
    items = [];
  }

  const known = new Map(shopProducts.map((product) => [product.id, product]));
  const grouped = new Map<string, { id: string; size?: string; quantity: number }>();

  for (const item of items) {
    if (!item?.id || !known.has(item.id)) continue;
    const product = known.get(item.id);
    const size = product?.sizes ? String(item.size ?? "") : undefined;
    const key = `${item.id}:${size ?? ""}`;
    const current = grouped.get(key);
    if (current) current.quantity += 1;
    else grouped.set(key, { id: item.id, size, quantity: 1 });
  }

  const lines = [...grouped.values()];
  const units = lines.reduce((sum, line) => sum + line.quantity, 0);

  if (lines.length === 0) {
    return { ok: false, error: "Add at least one piece before checkout." };
  }

  if (units > 20) {
    return { ok: false, error: "An order can include up to 20 pieces." };
  }

  if (!(await allowFormSubmit("shop-checkout"))) {
    return { ok: false, error: rateLimitMessage };
  }

  const result = await createShopCheckout({ name, email, lines });
  if ("error" in result) return { ok: false, error: result.error };

  redirect(result.url);
}
