"use server";

import { sendInboxEmail, type EmailRow } from "@/lib/email";
import { allowFormSubmit, rateLimitMessage } from "@/lib/rate-limit";

export type InquiryState = {
  ok: boolean;
  error?: string;
};

function row(label: string, value: string): EmailRow | null {
  const trimmed = value.trim();
  return trimmed ? { label, value: trimmed } : null;
}

export async function submitInquiry(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const showInterest = String(formData.get("showInterest") ?? "").trim();
  const eventType = String(formData.get("eventType") ?? "").trim();
  const date = String(formData.get("date") ?? "").trim();
  const location = String(formData.get("location") ?? "").trim();
  const audience = String(formData.get("audience") ?? "").trim();
  const venueSetting = String(formData.get("venueSetting") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();
  const source = String(formData.get("source") ?? "Enquiry").trim() || "Enquiry";

  if (!name || !email) {
    return { ok: false, error: "Please provide your name and email." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  if (!(await allowFormSubmit("inquiry"))) {
    return { ok: false, error: rateLimitMessage };
  }

  const rows = [
    row("Form", source),
    row("Name", name),
    row("Email", email),
    row("Show", showInterest),
    row("Event type", eventType),
    row("Date", date),
    row("Location", location),
    row("Audience", audience),
    row("Setting", venueSetting),
    row("Budget", budget),
  ].filter((entry): entry is EmailRow => entry != null);

  const sent = await sendInboxEmail({
    subject: `${source} from ${name.replace(/[\r\n]+/g, " ").slice(0, 80)}`,
    eyebrow: "New enquiry",
    title: source,
    intro: "A new enquiry was submitted on the Afrikan Warriors website.",
    rows,
    message: message || undefined,
    replyTo: email,
  });

  if (!sent.ok) return { ok: false, error: sent.error };

  return { ok: true };
}
