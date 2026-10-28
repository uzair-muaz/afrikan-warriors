import type { NextConfig } from "next";
import path from "node:path";

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://*.js.stripe.com https://static.cloudflareinsights.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https://*.stripe.com https://i.ytimg.com https://*.ytimg.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "frame-src 'self' https://js.stripe.com https://hooks.stripe.com https://*.js.stripe.com https://checkout.stripe.com https://www.youtube.com https://www.youtube-nocookie.com",
  "connect-src 'self' https://api.stripe.com https://*.stripe.com https://*.stripe.network https://cloudflareinsights.com",
  "media-src 'self' blob: https://www.youtube.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://checkout.stripe.com https://hooks.stripe.com",
  "frame-ancestors 'none'",
].join("; ");

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  // Allow ngrok / tunnel hosts to use Next.js client navigation in dev
  allowedDevOrigins: ["*.ngrok-free.app", "*.ngrok.app", "*.ngrok.io"],
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
  async headers() {
    const headers = [
      { key: "Content-Security-Policy", value: contentSecurityPolicy },
      {
        key: "Permissions-Policy",
        value: 'payment=(self "https://js.stripe.com" "https://checkout.stripe.com")',
      },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
    ];

    if (process.env.NODE_ENV === "production") {
      headers.push({
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains",
      });
    }

    return [{ source: "/:path*", headers }];
  },
};

export default nextConfig;
