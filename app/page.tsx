import Hero from "@/components/Hero";
import EditorialStatement from "@/components/EditorialStatement";
import ProjectGrid from "@/components/ProjectGrid";
import ExperimentsSection from "@/components/ExperimentsSection";
import PhotographySection from "@/components/PhotographySection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import CurrentlyExploring from "@/components/CurrentlyExploring";
import GithubSection from "@/components/GithubSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <EditorialStatement />
      <ProjectGrid />
      <ExperimentsSection />
      <PhotographySection />
      <AboutSection />
      <SkillsSection />
      <CurrentlyExploring />
      <GithubSection />
      <ContactSection />
    </div>
  );
}
