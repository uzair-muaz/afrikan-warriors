import type { MetadataRoute } from "next";
import { indexablePaths, publicSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = publicSiteUrl();
  return indexablePaths.map((path) => ({
    url: path === "/" ? origin : `${origin}${path}`,
  }));
}
