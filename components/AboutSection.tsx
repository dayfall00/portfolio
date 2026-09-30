"use client";

import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { timelineEvents } from "@/data/timeline";
import { ArrowUpRight, GraduationCap, Trophy, Code2, Sparkles, Terminal } from "lucide-react";

export default function AboutSection() {
  const getEventIcon = (type: string) => {
    switch (type) {
      case "Education":
        return GraduationCap;
      case "Hackathon":
        return Trophy;
      case "Project":
        return Code2;
      case "Research":
        return Terminal;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08] scroll-mt-20">
      <SectionHeading
        badge="05 // BIOGRAPHY & TRAJECTORY"
        title="ABOUT ADITYA"
        subtitle="Computer science student. Builder. Curious about machines that learn."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Editorial Narrative */}
        <div className="lg:col-span-6 space-y-6 text-stone-300 font-light text-base sm:text-lg leading-relaxed">
          <p className="text-xl sm:text-2xl text-stone-100 font-normal leading-snug">
            I am a Computer Science & Engineering student driven by a simple question:{" "}
            <span className="text-lime-400 font-medium">
              how can we engineer intelligence into systems that solve tangible human coordination problems?
            </span>
          </p>

          <p>
            My work oscillates between deep backend infrastructure—geospatial indexing,
            concurrency locks, and high-frequency stream processing—and applied machine
            learning, including gradient boosted decision trees, computer vision pipelines,
            and retrieval augmented generation.
          </p>

          <p>
            I treat engineering as a craft. When designing database schemas or training
            neural networks, I care intensely about latency margins, algorithmic complexity,
            and memory footprint. Outside the terminal, I explore the world through 35mm
            focal lenses, studying light, geometry, and structural rhythms in brutalist
            architecture.
          </p>

          {/* Quick Stats / Bio Callout */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/[0.08] font-mono text-xs">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-stone-500 block">DSA PROBLEMS</span>
              <span className="text-xl font-bold text-lime-400 mt-1 block">450+</span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-stone-500 block">CORE SYSTEMS</span>
              <span className="text-xl font-bold text-white mt-1 block">5 Shipped</span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-stone-500 block">HACKATHONS</span>
              <span className="text-xl font-bold text-lime-400 mt-1 block">Top 3 Finishes</span>
            </div>
          </div>

          <div className="pt-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime-400 hover:text-white transition-colors"
            >
              <span>READ EXTENDED ESSAY & CV →</span>
            </Link>
          </div>
        </div>

        {/* Timeline Column */}
        <div className="lg:col-span-6 bg-zinc-950/70 border border-white/[0.08] rounded-2xl p-6 sm:p-8">
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
            <h3 className="text-lg font-bold uppercase tracking-tight text-stone-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lime-400" />
              CHRONOLOGY & MILESTONES
            </h3>
            <span className="text-xs font-mono text-stone-500">2023 — 2026</span>
          </div>

          <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/[0.08]">
            {timelineEvents.map((event, idx) => {
              const Icon = getEventIcon(event.type);

              return (
                <div key={idx} className="relative pl-8 group">
                  {/* Timeline Node Dot */}
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-zinc-900 border border-white/[0.15] flex items-center justify-center group-hover:border-lime-400 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-3 h-3 text-lime-400" />
                  </div>

                  {/* Header Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <span className="text-lime-400 font-bold">{event.year}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/[0.05] text-stone-400 uppercase">
                      {event.type}
                    </span>
                  </div>

                  {/* Title & Org */}
                  <h4 className="text-base font-bold text-stone-100 tracking-tight mt-1">
                    {event.title}
                  </h4>
                  <div className="text-xs font-mono text-stone-400 mt-0.5">
                    {event.organization}
                  </div>

                  {/* Narrative Description */}
                  <p className="text-xs sm:text-sm text-stone-400 mt-2 font-light leading-relaxed">
                    {event.description}
                  </p>

                  {event.highlight && (
                    <div className="mt-2 text-[11px] font-mono text-stone-300 flex items-center gap-1.5">
                      <span className="text-lime-400">↳</span>
                      <span>{event.highlight}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
