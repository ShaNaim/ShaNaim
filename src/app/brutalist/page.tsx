import type { Metadata } from "next";
import { Noise } from "@/components/shared/noise";
import { DesignSwitch } from "@/components/shared/design-switch";
import { Marquee } from "@/components/brutalist/ui/marquee";
import { Nav, Hero, Experience, Skills, Hobbies, Contact, Footer } from "@/components/brutalist/sections";
import { techStack } from "@/data";

export const metadata: Metadata = {
  title: "Shanaim Shourov — Print Edition",
  description:
    "The loud, neo-brutalist cut of the portfolio. Same developer, same facts, more ink. Full-stack web development with React, TypeScript, Next.js, Node.js.",
};

const MANTRA = ["Minimalism", "Brutalism", "Pixel Precision", "Clean Code", "Fast Loads", "Fewer Bugs", "More Coffee"];

export default function BrutalistPage() {
  return (
    <div className="theme-print min-h-screen">
      <Noise />
      <Nav />
      <main>
        <Hero />
        <Marquee items={techStack} rotate={-1} />
        <Experience />
        <Skills />
        <Marquee items={MANTRA} rotate={1} speed={34} />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
      <DesignSwitch on="print" />
    </div>
  );
}
