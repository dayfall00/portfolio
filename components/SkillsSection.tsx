"use client";

import { skillCategories } from "@/data/skills";
import SectionHeading from "./SectionHeading";

export default function SkillsSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      <SectionHeading
        badge="06 // TECHNICAL REPERTOIRE"
        title="TECHNICAL SKILLS"
        subtitle="Organized by architectural domain and proficiency level."
        description="Structured by core depth rather than superficial tool counts. Every technology listed has been deployed in production, research, or competitive programming."
      />

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {skillCategories.map((category) => (
          <div
            key={category.number}
            className="p-6 sm:p-8 rounded-2xl bg-zinc-950/70 border border-white/[0.08] hover:border-lime-400/30 transition-colors duration-300"
          >
            {/* Category Header */}
            <div className="border-b border-white/[0.08] pb-4 mb-6">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-lime-400 font-bold">
                  {category.number} // CATEGORY
                </span>
                <span className="text-stone-500 uppercase tracking-widest text-[11px]">
                  {category.skills.length} TECHNOLOGIES
                </span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight uppercase text-stone-100 mt-2">
                {category.category}
              </h3>
              <p className="text-xs text-stone-400 mt-1 font-light">
                {category.description}
              </p>
            </div>

            {/* Skills List with Typography & Level */}
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 p-2 rounded-lg hover:bg-white/[0.02] transition-colors"
                >
                  <div>
                    <span className="text-base font-bold text-stone-200 group-hover:text-lime-400 transition-colors font-mono">
                      {skill.name}
                    </span>
                    <p className="text-xs text-stone-400 font-light mt-0.5 max-w-md">
                      {skill.description}
                    </p>
                  </div>

                  <span className="text-[11px] font-mono text-stone-500 uppercase flex-shrink-0 tracking-wider">
                    [{skill.level}]
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
