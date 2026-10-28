import Script from "next/script";

/**
 * Cloudflare Web Analytics. Cookieless. Loads only in production when the
 * token from Cloudflare → Web Analytics → "Add the JS snippet" is set.
 * Use the manual snippet there, not automatic injection, or visits are counted twice.
 */
export function CloudflareBeacon() {
  const token = process.env.NEXT_PUBLIC_CLOUDFLARE_BEACON_TOKEN?.trim();
  if (!token || process.env.NODE_ENV !== "production") return null;

  return (
    <Script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      strategy="afterInteractive"
      data-cf-beacon={JSON.stringify({ token })}
    />
  );
}
