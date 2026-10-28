import Stripe from "stripe";

export const STRIPE_API_VERSION = "2026-09-30.endive" as const;

let client: Stripe | null = null;

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY?.trim();
  if (!key) return null;

  if (!client) {
    client = new Stripe(key, {
      apiVersion: STRIPE_API_VERSION,
      typescript: true,
      appInfo: {
        name: "Afrikan Warriors",
        url: "https://afrikanwarriors.com",
      },
    });
  }

  return client;
}

export function integrationSuffix(length = 8) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let out = "";
  for (let i = 0; i < length; i += 1) {
    out += alphabet[Math.floor(Math.random() * alphabet.length)]!;
  }
  return out;
}
