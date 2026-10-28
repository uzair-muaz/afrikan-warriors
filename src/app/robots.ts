import type { MetadataRoute } from "next";
import { publicSiteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/support/checkout", "/support/success", "/shop/success", "/api/"],
    },
    sitemap: `${publicSiteUrl()}/sitemap.xml`,
  };
}
