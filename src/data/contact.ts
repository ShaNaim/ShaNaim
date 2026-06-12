import type { SocialLink } from "@/lib/types";
import { personal } from "./personal";

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shanaim/" },
  { label: "GitHub", href: "https://github.com/ShaNaim/" },
  { label: "Phone", href: `tel:${personal.phone}` },
  { label: "Email Me", href: `mailto:${personal.email}`, highlight: true },
];
