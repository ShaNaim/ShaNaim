import { DesignSwitch } from "@/components/shared/design-switch";
import { Nav, Hero, Experience, Skills, Hobbies, Contact, Footer } from "@/components/personal/sections";

export default function PersonalPage() {
  return (
    <div
      className="theme-personal min-h-screen font-mono overflow-x-hidden"
      style={{ backgroundColor: "#080808", color: "#e8e8e8" }}
    >
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
