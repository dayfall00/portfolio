"use client";

import Reveal from "./Reveal";
import { Cpu, Network, Layers, Sparkles } from "lucide-react";

export default function EditorialStatement() {
  const tenets = [
    {
      icon: Cpu,
      title: "Algorithmic Depth",
      description: "Rooted in strong data structures, computational complexity analysis, and mathematical foundations.",
    },
    {
      icon: Network,
      title: "Systems Resilience",
      description: "Designing backend topologies that embrace network volatility, concurrency, and real-time state sync.",
    },
    {
      icon: Layers,
      title: "Pragmatic Machine Learning",
      description: "Bridging the chasm between raw statistical models and high-throughput production inference.",
    },
    {
      icon: Sparkles,
      title: "Sensory Craft",
      description: "Engineering interfaces with tactile microinteractions, spatial typography, and sub-frame fluid motion.",
    },
  ];

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="max-w-5xl">
        <Reveal direction="down" duration={0.4}>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-lime-400 mb-6">
            <span>01 //</span>
            <span>CORE PHILOSOPHY</span>
          </div>
        </Reveal>

        {/* Large Editorial Statement */}
        <Reveal direction="up" delay={0.1} duration={0.8}>
          <blockquote className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-stone-100 font-sans leading-[1.08]">
            &ldquo;I like understanding how things work —{" "}
            <span className="font-bold text-white underline decoration-lime-400 decoration-4 underline-offset-8">
              then building something better.
            </span>
            &rdquo;
          </blockquote>
        </Reveal>

        {/* Supporting Narrative */}
        <Reveal direction="up" delay={0.2} duration={0.8}>
          <p className="mt-8 text-xl sm:text-2xl md:text-3xl text-stone-400 font-light leading-relaxed max-w-4xl">
            I&apos;m interested in the space where machine learning, software
            engineering, and human creativity overlap. Whether optimizing
            graph-matching latency under load or composing spatial light through a
            camera lens, the principle remains constant: eliminate noise, isolate
            signal, and ship with intention.
          </p>
        </Reveal>
      </div>

      {/* Tenets Grid */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/[0.06]">
        {tenets.map((tenet, idx) => {
          const Icon = tenet.icon;
          return (
            <Reveal key={tenet.title} delay={0.1 * idx} duration={0.6}>
              <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-lime-400/40 hover:bg-white/[0.04] transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-stone-100 tracking-tight mb-2">
                  {tenet.title}
                </h3>
                <p className="text-sm text-stone-400 leading-relaxed font-normal">
                  {tenet.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
