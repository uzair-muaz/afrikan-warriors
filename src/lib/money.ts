const gbp = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

export function formatGbp(pence: number) {
  return gbp.format(pence / 100);
}

export function poundsToPence(raw: string): number | null {
  const value = raw.trim();
  if (!/^\d+(\.\d{1,2})?$/.test(value)) return null;

  const [whole, fraction = ""] = value.split(".");
  const pence = Number(whole) * 100 + Number(fraction.padEnd(2, "0"));

  if (!Number.isSafeInteger(pence) || pence < 100 || pence > 1_000_000) {
    return null;
  }

  return pence;
}
