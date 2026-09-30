import { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Selected Work — Aditya Bhardwaj",
  description: "Comprehensive case studies and systems architecture built by Aditya Bhardwaj.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen pt-24 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionHeading
        badge="01 // INDEX"
        title="SELECTED WORK"
        subtitle="A collection of systems I've built, explored, and shipped."
        description="Every project represents an investigation into latency, algorithmic correctness, and real-time interaction."
      />

      <div className="mt-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
