import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { CareerSection } from "./components/CareerSection";
import { ProjectSection } from "./components/ProjectSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CareerSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
