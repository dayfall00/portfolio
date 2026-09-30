"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import ProjectVisual from "./ProjectVisual";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Alternate layout alignment for editorial asymmetry on large screens
  const isReversed = index % 2 !== 0;

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative border-b border-white/[0.08] py-16 md:py-24 last:border-b-0 transition-colors"
    >
      <div
        className={`flex flex-col ${
          isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-stretch gap-8 lg:gap-16`}
      >
        {/* Large Visual Area (Clickable) */}
        <div className="w-full lg:w-7/12 flex-shrink-0">
          <Link
            href={`/work/${project.slug}`}
            className="block relative transform group-hover:scale-[1.01] transition-transform duration-500 ease-out"
          >
            <ProjectVisual project={project} isHovered={isHovered} />
          </Link>
        </div>

        {/* Narrative & Metadata Area */}
        <div className="w-full lg:w-5/12 flex flex-col justify-between py-2">
          <div>
            {/* Top Index & Year Row */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
              <span className="font-mono text-xs tracking-widest text-lime-400 font-bold">
                {project.number} // 05
              </span>
              <span className="font-mono text-xs tracking-widest text-stone-500 uppercase">
                {project.year} · {project.status}
              </span>
            </div>

            {/* Project Title */}
            <Link href={`/work/${project.slug}`} className="block group/title">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase text-stone-100 group-hover/title:text-lime-400 transition-colors duration-300">
                {project.title}
              </h3>
            </Link>

            {/* Category / Role */}
            <p className="mt-2 text-xs font-mono uppercase tracking-widest text-stone-400">
              {project.category}
            </p>

            {/* Editorial Description */}
            <p className="mt-6 text-base sm:text-lg text-stone-300 font-light leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Key Metrics Highlight */}
            <div className="mt-6 grid grid-cols-2 gap-3 py-4 border-y border-white/[0.06]">
              {project.metrics.slice(0, 2).map((m) => (
                <div key={m.label} className="flex flex-col">
                  <span className="font-mono text-xs text-stone-500 uppercase">
                    {m.label}
                  </span>
                  <span className="text-base sm:text-lg font-bold font-mono text-lime-400 mt-0.5">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Technology Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] border border-white/[0.08] text-stone-300 group-hover:border-white/[0.15] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Link & Expandable Accent Line */}
          <div className="mt-8 pt-4">
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center gap-3 text-sm font-mono tracking-wider uppercase text-stone-100 group-hover:text-lime-400 transition-colors"
            >
              <span>EXPLORE CASE STUDY</span>
              <div className="w-8 h-8 rounded-full border border-white/[0.15] group-hover:border-lime-400 group-hover:bg-lime-400/10 flex items-center justify-center transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>

            {/* Accent Line Expand */}
            <div className="mt-4 w-full h-[1px] bg-white/[0.08] overflow-hidden">
              <div
                className="h-full bg-lime-400 transition-all duration-500 ease-out"
                style={{
                  width: isHovered ? "100%" : "0%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
