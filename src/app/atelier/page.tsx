import { Noise } from "@/components/shared/noise";
import { Spotlight } from "@/components/shared/spotlight";
import { DesignSwitch } from "@/components/shared/design-switch";
import { Ticker } from "@/components/atelier/ui/ticker";
import { Nav, Hero, Craft, Arsenal, Journey, Quests, Contact, Footer } from "@/components/atelier/sections";
import { techStack } from "@/data";

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
