"use client";

import { currentlyExploring } from "@/data/skills";
import Reveal from "./Reveal";
import { Compass, Sparkles } from "lucide-react";

export default function CurrentlyExploring() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <Reveal direction="down" duration={0.4}>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-lime-400 mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>ACTIVE RESEARCH HORIZON</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-stone-100 font-sans">
              CURRENTLY EXPLORING
            </h2>
          </Reveal>
        </div>

        <p className="text-xs font-mono text-stone-400 max-w-sm">
          Topics under active investigation, reading groups, and local prototyping notebooks.
        </p>
      </div>

      {/* Grid of Exploring Pills / Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentlyExploring.map((item, index) => (
          <Reveal key={item.topic} delay={0.07 * index} duration={0.5}>
            <div className="group p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-lime-400/40 hover:bg-white/[0.04] transition-all duration-300 flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-100 group-hover:text-lime-400 transition-colors tracking-tight font-mono">
                  {item.topic}
                </h3>
                <p className="text-xs text-stone-400 mt-1 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
