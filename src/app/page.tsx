'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useLenis } from '@/hooks/useLenis';
import { PROJECTS_DATA } from '@/data/portfolioData';
import { ProjectSpec } from '@/types';

// DOM Components
import { Navigation } from '@/components/dom/Navigation';
import { ScrollProgress } from '@/components/dom/ScrollProgress';
import { ProjectModal } from '@/components/dom/ProjectModal';
import { Footer } from '@/components/dom/Footer';

// Narrative Sections
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SamanvaySection } from '@/components/sections/SamanvaySection';
import { SVMSSection } from '@/components/sections/SVMSSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { LearningSection } from '@/components/sections/LearningSection';
import { ContactSection } from '@/components/sections/ContactSection';

// Persistent WebGL Canvas (Client-side only)
const SceneContainer = dynamic(
  () => import('@/components/canvas/SceneContainer').then((mod) => mod.SceneContainer),
  { ssr: false }
);

export default function Home() {
  useLenis();
  const [inspectedProject, setInspectedProject] = useState<ProjectSpec | null>(null);

  const samanvayProject = PROJECTS_DATA.find((p) => p.id === 'samanvay') || PROJECTS_DATA[0];
  const svmsProject = PROJECTS_DATA.find((p) => p.id === 'svms') || PROJECTS_DATA[1];

  return (
    <main className="relative min-h-screen bg-[#050505] text-[#f4f4f6]">
      {/* Persistent Fullscreen 3D WebGL Canvas Layer */}
      <SceneContainer />

      {/* Top HUD Navigation */}
      <Navigation />

      {/* Right Spatial Coordinate & Progress HUD */}
      <ScrollProgress />

      {/* Continuous Narrative DOM Sections */}
      <div className="relative z-10 space-y-12 sm:space-y-24">
        <HeroSection />
        <AboutSection />
        <SamanvaySection project={samanvayProject} onInspect={setInspectedProject} />
        <SVMSSection project={svmsProject} onInspect={setInspectedProject} />
        <SkillsSection />
        <LearningSection />
        <ContactSection />
      </div>

      {/* Technical Architecture Deep-Dive Drawer/Modal */}
      <ProjectModal
        project={inspectedProject}
        onClose={() => setInspectedProject(null)}
      />

      {/* Technical Footer */}
      <Footer />
    </main>
  );
}
