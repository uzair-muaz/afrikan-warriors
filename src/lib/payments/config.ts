export function isStripeConfigured() {
  return Boolean(
    process.env.STRIPE_SECRET_KEY?.trim() &&
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.trim(),
  );
}

export function isShopLive() {
  return process.env.SHOP_LIVE === "true";
}

export function siteOrigin() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (configured) return configured;

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

export function resendFromEmail() {
  return process.env.RESEND_FROM_EMAIL?.trim() || "";
}

export function readShippingPence(name: string): number | null {
  const raw = process.env[name]?.trim();
  if (!raw || !/^\d+$/.test(raw)) return null;

  const pence = Number(raw);
  if (!Number.isSafeInteger(pence) || pence > 200_000) return null;

  return pence;
}
