import type { Metadata } from "next";
import { Noise } from "@/components/shared/noise";
import { DesignSwitch } from "@/components/shared/design-switch";
import { Marquee } from "@/components/brutalist/ui/marquee";
import { Nav, Hero, Experience, Skills, Hobbies, Contact, Footer } from "@/components/brutalist/sections";
import { techStack } from "@/data";

export const metadata: Metadata = {
  // No title override here — inherits "Shanaim Shourov" from the root layout.
  description:
    "Shanaim Shourov, full-stack developer with 3+ years shipping production web applications using React, TypeScript, Next.js, Node.js, and PostgreSQL. Includes full work experience, technical skills, and contact information.",
  alternates: { canonical: "/brutalist/" },
  openGraph: {
    title: "Shanaim Shourov — Full-Stack Developer",
    description: "Full-stack developer with 3+ years shipping production web applications using React, TypeScript, Next.js, Node.js, and PostgreSQL.",
    url: "/brutalist/",
    siteName: "Shanaim Shourov — Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shanaim Shourov — Full-Stack Developer",
    description: "Full-stack developer with 3+ years shipping production web applications using React, TypeScript, Next.js, Node.js, and PostgreSQL.",
  },
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
