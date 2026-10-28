# Cloudflare setup

The domain `afrikanwarriors.com` is on the Cloudflare Free plan. The website stays on Vercel. Cloudflare sits in front of it for DNS, HTTPS, and analytics. Nothing in this setup is a paid Cloudflare product.

## What is in place

| Piece | State |
| --- | --- |
| Plan | Free Website |
| `afrikanwarriors.com` and `www` | Proxied through Cloudflare to the existing Vercel records. See the DNS table below |
| HTTPS | Visitors are redirected to HTTPS. Origin certificate check is Full (strict). Minimum TLS is 1.2 |
| Rocket Loader | Off, so it does not rewrite the Next.js scripts |
| Email address obfuscation | Off, so addresses on the page stay readable |
| DDoS protection | On. This is included on every Cloudflare zone |
| AI training crawlers | Blocked. Ordinary search crawlers are still allowed |
| Bot Fight Mode | Off. The API refused that switch. It can be turned on by hand under Security → Settings → Bot traffic. The free plan cannot exempt Stripe webhooks from it |
| `booking@afrikanwarriors.com` | Forwards to `uzair.muaz3k@gmail.com` through Email Routing. Other addresses on the domain are not forwarded |
| Outbound site mail | Still sent by Resend. The Resend DKIM record was left in place. The SPF record allows both Cloudflare forwarding and Resend |

## DNS: proxied or DNS-only

Only the website goes through Cloudflare. Mail, Resend, and the old hosting names stay DNS-only. SSL is Full (strict), so the proxied names do not redirect-loop.

| Name | Type | Points at | Proxied |
| --- | --- | --- | --- |
| `afrikanwarriors.com` | A | `216.198.79.1` (Vercel) | Yes |
| `www` | CNAME | `9a6801dd5710fec6.vercel-dns-017.com` | Yes |
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

### Automatic injection is also on

In Cloudflare the same site has **automatic installation** enabled, and the “exclude EU visitors” option (`lite`) is on. Automatic installation is supposed to insert the script at the edge for proxied HTML. A check of the live homepage did not find the script in the HTML, so visits are not being counted by that path yet.

Use one method only:

- Preferred: set `NEXT_PUBLIC_CLOUDFLARE_BEACON_TOKEN` on Vercel to the token above, deploy, and turn **automatic installation** off in Cloudflare → Web Analytics. The app then sends one beacon per production page view, including UK and Ireland.
- Otherwise leave the env var empty and rely on automatic installation. EU visitors are currently excluded by the `lite` option, and the live page was not receiving the script when last checked.

If both are left on, each visit can be counted twice after the next production deploy.
