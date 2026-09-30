"use server";

import { deliveryCountries, shopProducts } from "@/constants/shop";

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
  const { error } = readEmail(formData);
  if (error) return { ok: false, error };

  const preset = String(formData.get("amount") ?? "").trim();
  const other = String(formData.get("otherAmount") ?? "").trim();
  const amount = preset === "other" ? other : preset;

  if (!amount || Number(amount) <= 0 || Number.isNaN(Number(amount))) {
    return { ok: false, error: "Choose a support amount." };
  }

  return { ok: true };
}

export async function submitShopInterest(
  _prev: AudienceState,
  formData: FormData,
): Promise<AudienceState> {
  const { error } = readEmail(formData);
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

  return { ok: true };
}
