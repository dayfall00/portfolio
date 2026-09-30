import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectGrid() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
      <SectionHeading
        badge="02 // ARCHITECTURE & SYSTEMS"
        title="SELECTED WORK"
        subtitle="A collection of things I've built, explored and shipped."
        description="Focused on high-concurrency systems, spatial indexing, machine learning pipelines, and accessible digital products."
        action={
          <div className="flex items-center gap-4 text-xs font-mono text-stone-400">
            <span>5 COMPREHENSIVE CASE STUDIES AVAILABLE</span>
            <span className="text-lime-400">● LIVE</span>
          </div>
        }
      />

      {/* Projects List */}
      <div className="mt-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

      {/* Bottom CTA to view all github projects */}
      <div className="mt-16 pt-12 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h4 className="text-xl font-bold uppercase tracking-tight text-stone-100">
            WANT TO DIVE INTO THE CODE REPOSITORIES?
          </h4>
          <p className="text-sm text-stone-400 mt-1 font-mono">
            Explore 20+ public repositories, benchmarks, and experimental scripts on GitHub.
          </p>
        </div>

        <Link
          href="https://github.com/adityabhardwaj"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.15] bg-white/[0.02] hover:bg-white/[0.06] text-stone-200 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors"
        >
          <span>EXPLORE GITHUB DIRECTORY</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-lime-400" />
        </Link>
      </div>
    </section>
  );
}
