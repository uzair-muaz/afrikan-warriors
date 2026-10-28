# Cloudflare setup

The domain `afrikanwarriors.com` is on the Cloudflare Free plan. Cloudflare is the DNS host. The website itself is served by Vercel, with the website records set to DNS-only so Vercel handles HTTPS, caching, and its own protection. Nothing in this setup is a paid Cloudflare product.

## What is in place

| Piece | State |
| --- | --- |
| Plan | Free Website |
| `afrikanwarriors.com` and `www` | DNS-only. Visitors go straight to Vercel. See the DNS table below |
| HTTPS, cache, and bot protection | Handled by Vercel, because the website is not proxied through Cloudflare |
| `booking@afrikanwarriors.com` | Forwards to `uzair.muaz3k@gmail.com` through Email Routing. Other addresses on the domain are not forwarded |
| Outbound site mail | Still sent by Resend. The Resend DKIM record was left in place. The SPF record allows both Cloudflare forwarding and Resend |

## DNS: proxied or DNS-only

No website record is proxied. Vercel receives visitors directly, so its own cache and deployment protection apply. Mail, Resend, and the old hosting names stay DNS-only as well.

| Name | Type | Points at | Proxied |
| --- | --- | --- | --- |
| `afrikanwarriors.com` | A | `216.198.79.1` (Vercel) | No |
| `www` | CNAME | `9a6801dd5710fec6.vercel-dns-017.com` | No |
| `send`, `rsend` | CNAME | Resend | No |
| MX, SPF, DKIM, DMARC | MX / TXT | Cloudflare Email Routing and Resend | No |
| `mail`, `webmail`, `cpanel`, `ftp`, `whm`, and the other old hosting names | A | `23.153.104.17` | No |

`mail` used to be a proxied alias of the website. It is now a DNS-only address on the old host, same as `webmail`. There is no IPv6 record. Vercel does not use one for this domain.

## Web Analytics

Cloudflare Web Analytics for this zone was already created. It is the free, cookieless product. It does not set a cookie and does not use Google Analytics.

| Field | Value |
| --- | --- |
| Site | `afrikanwarriors.com` |
| Beacon token | `5871600fe4f841a4903f9bf58852905b` |
| Env var | `NEXT_PUBLIC_CLOUDFLARE_BEACON_TOKEN` |
| Script | `https://static.cloudflareinsights.com/beacon.min.js` |

The token is public. Cloudflare’s own snippet prints it in the HTML. It is not an API token and it cannot change the account.

### How the site loads it

`CloudflareBeacon` in `src/components/analytics/CloudflareBeacon.tsx` is rendered from the root layout. It outputs the beacon only when both of these are true:

1. `NEXT_PUBLIC_CLOUDFLARE_BEACON_TOKEN` is set.
2. `NODE_ENV` is `production`.

Local `npm run dev` does not send analytics. A production build on Vercel does, once that env var is set there to the token above. The sample value is in `.env.example`.

The content security policy in `next.config.ts` allows the script host `https://static.cloudflareinsights.com` and the reporting host `https://cloudflareinsights.com`.

Vercel Web Analytics is loaded from the root layout with `@vercel/analytics/next`. It is also cookieless. On Vercel it uses `/_vercel/insights/script.js`. Enable Web Analytics in the Vercel project or that script does not load.

Automatic installation in Cloudflare only inserts the script when the website is proxied. With DNS-only records it does nothing. Counting depends on the beacon in the Next.js app, which still reports to Cloudflare Web Analytics after the token is set on Vercel and the site is redeployed. Turn **automatic installation** off in Cloudflare → Web Analytics so a later proxy change cannot count the same visit twice.
