import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const primary = ["", "/about", "/services", "/projects", "/contact"];
  const legal = ["/privacy", "/terms"];
  const lastModified = new Date();

  return [
    ...primary.map((route) => ({
      url: `${site.url}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...legal.map((route) => ({
      url: `${site.url}${route}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
