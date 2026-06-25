"use client";

import { useState, useEffect } from "react";
import { Logo } from "@/components/shared/logo";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

type SectionId = (typeof LINKS)[number]["id"];

export function Nav() {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.3 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between backdrop-blur-md py-5 px-6 md:px-12"
      style={{ background: "linear-gradient(to bottom, #080808f8, transparent)" }}
    >
      <button
        onClick={() => scrollTo("home")}
        aria-label="Back to top"
        className="transition-opacity duration-200 hover:opacity-80"
        style={{ filter: "brightness(0) saturate(100%) invert(40%) sepia(90%) saturate(2000%) hue-rotate(5deg) brightness(110%) contrast(105%)" }}
      >
        <Logo height={28} />
      </button>

      <div className="flex items-center gap-9">
        {LINKS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`font-mono text-[11px] tracking-[0.15em] uppercase transition-all duration-200 ${
              active === id
                ? "text-[var(--p-brand)] opacity-100"
                : "text-[var(--p-text)] opacity-40 hover:opacity-90"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
