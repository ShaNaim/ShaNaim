import type { Metadata } from "next";
import { DesignSwitch } from "@/components/shared/design-switch";
import { Nav, Hero, Experience, Skills, Hobbies, Contact, Footer } from "@/components/personal/sections";

export const metadata: Metadata = {
  // No title override here — inherits "Shanaim Shourov" from the root layout.
  description:
    "Shanaim Shourov — full-stack developer with 3+ years of experience building end-to-end web applications with React, Next.js, Node.js, and PostgreSQL. See his work experience, technical skills, and how to get in touch.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Shanaim Shourov — Full-Stack Developer",
    description: "Full-stack developer with 3+ years of experience across React, Next.js, Node.js, and PostgreSQL. Experience, skills, and contact details.",
    url: "/",
    siteName: "Shanaim Shourov — Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shanaim Shourov — Full-Stack Developer",
    description: "Full-stack developer with 3+ years of experience across React, Next.js, Node.js, and PostgreSQL.",
  },
};

export default function PersonalPage() {
  return (
    <div className="theme-personal min-h-screen font-mono overflow-x-hidden" style={{ backgroundColor: "#080808", color: "#e8e8e8" }}>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
      <DesignSwitch on="personal" />
    </div>
  );
}
