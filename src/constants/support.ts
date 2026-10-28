export const support = {
  title: "Support Afrikan Warriors",
  formLabel: "Support Afrikan Warriors",
  customAmountLabel: "Custom amount",
  submitLabel: "Continue to Payment →",
  pendingLabel: "Opening payment…",
  closedNote:
    "Card payment is not configured yet. Add Stripe keys to enable contributions.",
  openNote:
    "You will continue to a secure Afrikan Warriors payment page. Card details go only to Stripe.",
  cancelledNote: "Payment was cancelled. Nothing was charged.",
  checkoutEyebrow: "Secure payment",
  checkoutTitle: "Complete your support",
  checkoutLead: "Your contribution stays with Afrikan Warriors.",
  checkoutPayLabel: "Pay securely",
  checkoutPendingLabel: "Processing…",
  checkoutBackLabel: "← Back to Support",
  checkoutSecureNote:
    "Payments are processed by Stripe. Card numbers never touch Afrikan Warriors servers.",
  productName: "Support Afrikan Warriors",
  productDescription:
    "A contribution toward Afrikan Warriors productions, performers, costumes, equipment, touring, music, choreography, and African cultural projects.",
  successBody: "is with Afrikan Warriors. Thank you for supporting the company.",
} as const;

export const supportAmounts = [10, 25, 50, 100] as const;

export const supportUses = [
  "Productions",
  "Performers",
  "Costumes",
  "Equipment",
  "Touring",
  "Music",
  "Choreography",
  "African cultural projects",
] as const;
