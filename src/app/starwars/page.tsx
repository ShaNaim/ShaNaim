import type { Metadata } from "next";
import { Noise } from "@/components/shared/noise";
import { DesignSwitch } from "@/components/shared/design-switch";
import { HoloTicker } from "@/components/starwars/ui/holo-ticker";
import { SaberDivider } from "@/components/starwars/ui/saber-divider";
import { Nav, Hero, Force, Training, Service, Cantina, Transmission, Footer } from "@/components/starwars/sections";
import { techStack } from "@/data";

export const metadata: Metadata = {
  title: "Shanaim Shourov — Holonet Edition",
  description:
    "The Star Wars cut of the portfolio. A full-stack developer from a galaxy far, far away — React, TypeScript, Next.js, Node.js, and a well-trained lightsaber.",
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
