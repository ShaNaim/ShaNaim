import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shanaim Shourov — Full-Stack Developer",
    short_name: "Shanaim Shourov",
    description: "Full-stack developer portfolio with four switchable editions: Personal, Atelier, Print, and Holonet.",
    start_url: "/",
    display: "standalone",
    background_color: "#080808",
    theme_color: "#ff4d00",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
  };
}
