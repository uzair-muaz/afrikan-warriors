"use server";

export type InquiryState = {
  ok: boolean;
  error?: string;
};

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

  if (!name || !email) {
    return { ok: false, error: "Please provide your name and email." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  void message;
  void showInterest;
  void eventType;
  void date;
  void location;
  void audience;
  void venueSetting;
  void budget;

  return { ok: true };
}
