import type { Metadata } from "next";
import { Noise } from "@/components/shared/noise";
import { DesignSwitch } from "@/components/shared/design-switch";
import { HoloTicker } from "@/components/starwars/ui/holo-ticker";
import { SaberDivider } from "@/components/starwars/ui/saber-divider";
import { Nav, Hero, Force, Training, Service, Cantina, Transmission, Footer } from "@/components/starwars/sections";
import { techStack } from "@/data";

export const metadata: Metadata = {
  title: "Holonet Edition",
  description:
    "Shanaim Shourov is a full-stack developer with 3+ years of experience in React, TypeScript, Next.js, Node.js, and PostgreSQL. Explore his professional experience, technical skills, and ways to get in touch.",
  alternates: { canonical: "/starwars/" },
  openGraph: {
    title: "Shanaim Shourov — Full-Stack Developer",
    description: "Full-stack developer with 3+ years of experience in React, TypeScript, Next.js, Node.js, and PostgreSQL.",
    url: "/starwars/",
    siteName: "Shanaim Shourov — Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shanaim Shourov — Full-Stack Developer",
    description: "Full-stack developer with 3+ years of experience in React, TypeScript, Next.js, Node.js, and PostgreSQL.",
  },
};

export default function StarWarsPage() {
  return (
    <div className="theme-saber min-h-screen">
      <Noise />
      <Nav />
      <main>
        <Hero />
        <HoloTicker items={techStack} />
        <Force />
        <SaberDivider color="blue" />
        <Training />
        <SaberDivider color="green" />
        <Service />
        <SaberDivider color="red" />
        <Cantina />
        <Transmission />
      </main>
      <Footer />
      <DesignSwitch on="saber" />
    </div>
  );
}
