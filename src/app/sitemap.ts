import type { MetadataRoute } from "next";

import { SITE_URL } from "@/features/marketing/config";
import { trackDetails } from "@/features/marketing/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...trackDetails.map((track) => ({
      url: `${SITE_URL}/tracks/${track.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
