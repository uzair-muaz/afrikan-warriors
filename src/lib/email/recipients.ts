/** Parse comma/semicolon-separated emails into a unique list. */
export function parseEmailList(raw: string | undefined | null): string[] {
  if (!raw?.trim()) return [];

  const seen = new Set<string>();
  const list: string[] = [];

  for (const part of raw.split(/[,;]+/)) {
    const email = part.trim().toLowerCase();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) continue;
    if (seen.has(email)) continue;
    seen.add(email);
    list.push(email);
  }

  return list;
}

/** Booking / enquiry inbox. Supports multiple addresses. */
export function inquiryNotifyEmails() {
  return parseEmailList(process.env.NOTIFY_EMAIL);
}

/** Support + shop payment notices. Falls back to NOTIFY_EMAIL. */
export function paymentNotifyEmails() {
  const payments = parseEmailList(process.env.PAYMENTS_NOTIFY_EMAIL);
  if (payments.length > 0) return payments;
  return inquiryNotifyEmails();
}
