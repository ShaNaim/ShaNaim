import { Noise } from "@/components/effects/noise";
import { Marquee } from "@/components/ui/marquee";
import { Nav, Hero, Experience, Skills, Hobbies, Contact, Footer } from "@/components/sections";
import { techStack } from "@/data";

const MANTRA = ["Minimalism", "Brutalism", "Pixel Precision", "Clean Code", "Fast Loads", "Fewer Bugs", "More Coffee"];

export default function Home() {
  return (
    <>
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
    </>
  );
}
