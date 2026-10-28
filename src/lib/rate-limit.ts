import { headers } from "next/headers";

const hits = new Map<string, number[]>();

const WINDOW_MS = 10 * 60_000;
const LIMIT = 8;

export const rateLimitMessage =
  "Please wait a few minutes before sending another message.";

export async function allowFormSubmit(action: string) {
  const headerList = await headers();
  const forwarded = headerList.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded || headerList.get("x-real-ip") || "local";
  const key = `${action}:${ip}`;
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((time) => now - time < WINDOW_MS);

  if (recent.length >= LIMIT) {
    hits.set(key, recent);
    return false;
  }

  recent.push(now);
  hits.set(key, recent);

  if (hits.size > 2000) {
    for (const [storedKey, times] of hits) {
      if (times.every((time) => now - time >= WINDOW_MS)) hits.delete(storedKey);
    }
  }

  return true;
}
