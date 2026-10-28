import { site } from "@/constants/nav";
import { siteOrigin } from "@/lib/payments/config";

const GOLD = "#f2ca50";
const GOLD_DIM = "#d4af37";
const STAGE = "#0b0b0b";
const SURFACE = "#1e2020";
const SURFACE_LOW = "#171717";
const TEXT = "#e2e2e2";
const MUTED = "#d0c5af";
const RULE = "rgba(212, 175, 55, 0.25)";

export type EmailRow = { label: string; value: string };

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function rowsTable(rows: EmailRow[]) {
  if (rows.length === 0) return "";

  const cells = rows
    .map(
      (row) => `
      <tr>
        <td style="padding:14px 0;border-bottom:1px solid ${RULE};vertical-align:top;width:34%;">
          <p style="margin:0;font-family:'Space Grotesk',Arial,sans-serif;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:${GOLD_DIM};">
            ${escapeHtml(row.label)}
          </p>
        </td>
        <td style="padding:14px 0 14px 16px;border-bottom:1px solid ${RULE};vertical-align:top;">
          <p style="margin:0;font-family:'Hanken Grotesk',Helvetica,Arial,sans-serif;font-size:15px;line-height:1.55;color:${TEXT};white-space:pre-wrap;">
            ${escapeHtml(row.value)}
          </p>
        </td>
      </tr>`,
    )
    .join("");

  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:0 0 28px;">
      ${cells}
    </table>`;
}

export function brandEmailHtml(input: {
  preheader: string;
  eyebrow: string;
  title: string;
  intro?: string;
  rows?: EmailRow[];
  message?: string;
  cta?: { label: string; href: string };
  footerNote?: string;
}) {
  const origin = siteOrigin();
  const year = new Date().getFullYear();
  const intro = input.intro
    ? `<p style="margin:0 0 28px;font-family:'Hanken Grotesk',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.65;color:${MUTED};">${escapeHtml(input.intro)}</p>`
    : "";
  const message = input.message
    ? `<div style="margin:0 0 28px;padding:20px 22px;background:${SURFACE_LOW};border-left:2px solid ${GOLD};">
        <p style="margin:0 0 8px;font-family:'Space Grotesk',Arial,sans-serif;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:${GOLD_DIM};">Message</p>
        <p style="margin:0;font-family:'Hanken Grotesk',Helvetica,Arial,sans-serif;font-size:15px;line-height:1.65;color:${TEXT};white-space:pre-wrap;">${escapeHtml(input.message)}</p>
      </div>`
    : "";
  const cta = input.cta
    ? `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:8px 0 32px;">
        <tr>
          <td style="background:${GOLD_DIM};">
            <a href="${escapeHtml(input.cta.href)}" style="display:inline-block;padding:16px 28px;font-family:'Space Grotesk',Arial,sans-serif;font-size:13px;letter-spacing:0.14em;text-transform:uppercase;text-decoration:none;color:#3c2f00;font-weight:600;">
              ${escapeHtml(input.cta.label)}
            </a>
          </td>
        </tr>
      </table>`
    : "";
  const footerNote = input.footerNote
    ? `<p style="margin:0 0 12px;font-family:'Hanken Grotesk',Helvetica,Arial,sans-serif;font-size:13px;line-height:1.55;color:${MUTED};">${escapeHtml(input.footerNote)}</p>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(input.title)}</title>
</head>
<body style="margin:0;padding:0;background:${STAGE};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
    ${escapeHtml(input.preheader)}
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${STAGE};padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;border-collapse:collapse;">
          <tr>
            <td style="padding:0 0 28px;text-align:center;">
              <a href="${escapeHtml(origin)}" style="text-decoration:none;">
                <p style="margin:0;font-family:'Anybody','Arial Black',Arial,sans-serif;font-size:22px;letter-spacing:0.08em;text-transform:uppercase;color:${GOLD};font-weight:800;">
                  ${escapeHtml(site.name)}
                </p>
              </a>
              <p style="margin:10px 0 0;font-family:'Hanken Grotesk',Helvetica,Arial,sans-serif;font-size:12px;letter-spacing:0.06em;color:${MUTED};">
                ${escapeHtml(site.tagline)}
              </p>
            </td>
          </tr>
          <tr>
            <td style="background:${SURFACE};border:1px solid ${RULE};padding:36px 32px;">
              <p style="margin:0 0 12px;font-family:'Space Grotesk',Arial,sans-serif;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:${GOLD};">
                ${escapeHtml(input.eyebrow)}
              </p>
              <h1 style="margin:0 0 20px;font-family:'Anybody',Arial,sans-serif;font-size:28px;line-height:1.15;letter-spacing:-0.02em;text-transform:uppercase;color:${TEXT};font-weight:700;">
                ${escapeHtml(input.title)}
              </h1>
              ${intro}
              ${rowsTable(input.rows ?? [])}
              ${message}
              ${cta}
              ${footerNote}
            </td>
          </tr>
          <tr>
            <td style="padding:28px 8px 0;text-align:center;">
              <p style="margin:0 0 8px;font-family:'Space Grotesk',Arial,sans-serif;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:${GOLD_DIM};">
                ${escapeHtml(site.name)}
              </p>
              <p style="margin:0 0 8px;font-family:'Hanken Grotesk',Helvetica,Arial,sans-serif;font-size:13px;color:${MUTED};">
                <a href="mailto:${escapeHtml(site.email)}" style="color:${MUTED};text-decoration:none;">${escapeHtml(site.email)}</a>
              </p>
              <p style="margin:0;font-family:'Hanken Grotesk',Helvetica,Arial,sans-serif;font-size:12px;color:#99907c;">
                © ${year} Afrikan Warriors Ltd.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function brandEmailText(input: {
  title: string;
  intro?: string;
  rows?: EmailRow[];
  message?: string;
  footerNote?: string;
}) {
  const parts = [
    site.name,
    "",
    input.title,
    input.intro ? `\n${input.intro}` : "",
    ...(input.rows ?? []).flatMap((row) => [`${row.label}: ${row.value}`]),
    input.message ? `\nMessage:\n${input.message}` : "",
    input.footerNote ? `\n${input.footerNote}` : "",
    "",
    site.email,
  ];

  return parts.filter((part) => part !== "").join("\n");
}
