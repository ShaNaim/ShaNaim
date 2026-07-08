import type { Metadata } from "next";
import { Noise } from "@/components/shared/noise";
import { Spotlight } from "@/components/shared/spotlight";
import { DesignSwitch } from "@/components/shared/design-switch";
import { Ticker } from "@/components/atelier/ui/ticker";
import { Nav, Hero, Craft, Arsenal, Journey, Quests, Contact, Footer } from "@/components/atelier/sections";
import { techStack } from "@/data";

export const metadata: Metadata = {
  title: "Atelier Edition",
  description:
    "Shanaim Shourov is a full-stack developer with 3+ years of experience building end-to-end web applications — from database design to polished interfaces — using React, TypeScript, Next.js, and Node.js. View his work experience, core skills, and contact details.",
  alternates: { canonical: "/atelier/" },
  openGraph: {
    title: "Shanaim Shourov — Full-Stack Developer",
    description: "Full-stack developer with 3+ years of experience building end-to-end web applications with React, TypeScript, Next.js, and Node.js.",
    url: "/atelier/",
    siteName: "Shanaim Shourov — Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shanaim Shourov — Full-Stack Developer",
    description: "Full-stack developer with 3+ years of experience building end-to-end web applications with React, TypeScript, Next.js, and Node.js.",
  },
};

export default function Home() {
  return (
    <div className="theme-atelier min-h-screen">
      <Noise />
      <Spotlight />
      <Nav />
      <main>
        <Hero />
        <Ticker items={techStack} />
        <Craft />
        <Arsenal />
        <Journey />
        <Quests />
        <Contact />
      </main>
      <Footer />
      <DesignSwitch on="atelier" />
    </div>
  );
}
