import type { MetadataRoute } from "next";

import { EVENT } from "@/features/marketing/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: EVENT.name,
    short_name: EVENT.shortName,
    description: EVENT.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f3f3f6",
    theme_color: "#f3f3f6",
    orientation: "portrait",
    icons: [
      { src: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { src: "/images/logo_transparent.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
