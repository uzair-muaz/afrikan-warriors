import { Resend } from "resend";
import { inquiryNotifyEmails } from "@/lib/email/recipients";
import { brandEmailHtml, brandEmailText, type EmailRow } from "@/lib/email/templates";
import { resendFromEmail } from "@/lib/payments/config";

export type { EmailRow };

export async function sendBrandedEmail(input: {
  to: string | string[];
  subject: string;
  replyTo?: string;
  preheader: string;
  eyebrow: string;
  title: string;
  intro?: string;
  rows?: EmailRow[];
  message?: string;
  cta?: { label: string; href: string };
  footerNote?: string;
  idempotencyKey?: string;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = resendFromEmail();
  const to = Array.isArray(input.to) ? input.to : [input.to];

  if (!apiKey || !from || to.length === 0) {
    return { ok: false, error: "Email is not configured yet." };
  }

  const html = brandEmailHtml({
    preheader: input.preheader,
    eyebrow: input.eyebrow,
    title: input.title,
    intro: input.intro,
    rows: input.rows,
    message: input.message,
    cta: input.cta,
    footerNote: input.footerNote,
  });

  const text = brandEmailText({
    title: input.title,
    intro: input.intro,
    rows: input.rows,
    message: input.message,
    footerNote: input.footerNote,
  });

  const resend = new Resend(apiKey);
  const result = await resend.emails.send(
    {
      from,
      to,
      replyTo: input.replyTo || undefined,
      subject: input.subject,
      html,
      text,
    },
    input.idempotencyKey ? { idempotencyKey: input.idempotencyKey } : undefined,
  );

  if (result.error) {
    console.error("Resend failed", result.error);
    return {
      ok: false,
      error: "Your message could not be sent. Please try again.",
    };
  }

  return { ok: true };
}

/** Booking / enquiry / shop-interest notices to the team inbox. */
export async function sendInboxEmail(input: {
  subject: string;
  eyebrow: string;
  title: string;
  intro?: string;
  rows?: EmailRow[];
  message?: string;
  replyTo?: string;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const to = inquiryNotifyEmails();
  if (to.length === 0) {
    return { ok: false, error: "Email is not configured yet." };
  }

  return sendBrandedEmail({
    to,
    subject: input.subject,
    replyTo: input.replyTo,
    preheader: input.title,
    eyebrow: input.eyebrow,
    title: input.title,
    intro: input.intro,
    rows: input.rows,
    message: input.message,
    footerNote: "Reply to this email to contact the sender directly.",
  });
}
