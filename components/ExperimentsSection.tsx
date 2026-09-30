"use client";

import { useState } from "react";
import Link from "next/link";
import { experiments } from "@/data/experiments";
import SectionHeading from "./SectionHeading";
import { Terminal, Play, Cpu, ArrowUpRight, Check, Search, Sparkles } from "lucide-react";

export default function ExperimentsSection() {
  const [selectedDemo, setSelectedDemo] = useState<string>("yolo-tracking");
  const [activeRagQuery, setActiveRagQuery] = useState("transformer attention memory");
  const [visionFilter, setVisionFilter] = useState<"canny" | "sobel" | "threshold">("canny");
  const [yoloDetecting, setYoloDetecting] = useState(true);

  return (
    <section id="lab" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08] scroll-mt-20">
      <SectionHeading
        badge="03 // COMPUTATIONAL SANDBOX"
        title="EXPERIMENTS & LAB"
        subtitle="Unpolished prototypes, algorithm benchmarks, and machine learning proofs-of-concept."
        description="Not every piece of engineering belongs in a polished product wrapper. The lab represents where I test hypotheses, profile models, and push performance boundaries."
        action={
          <Link
            href="/experiments"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime-400 hover:text-white transition-colors"
          >
            <span>OPEN FULL LAB TERMINAL</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        }
      />

      {/* Experiments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiments.map((exp) => {
          const isSelected = selectedDemo === exp.id;

          return (
            <div
              key={exp.id}
              onClick={() => setSelectedDemo(exp.id)}
              className={`cursor-pointer rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? "bg-zinc-900/90 border-lime-400/50 shadow-xl shadow-lime-400/5"
                  : "bg-white/[0.02] border-white/[0.06] hover:border-white/[0.15] hover:bg-white/[0.04]"
              }`}
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between text-xs font-mono pb-4 border-b border-white/[0.06] mb-4">
                  <span className="text-lime-400 font-bold">{exp.number}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-white/[0.05] text-stone-400">
                    {exp.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-tight uppercase text-stone-100 mb-2">
                  {exp.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs font-mono text-lime-400/90 mb-3">
                  {exp.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-stone-400 font-light leading-relaxed mb-6">
                  {exp.description}
                </p>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/40 text-stone-400 border border-white/[0.05]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer Insight */}
                <div className="mt-4 pt-3 flex items-center justify-between text-[11px] font-mono text-stone-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                    {exp.status}
                  </span>
                  <span className="text-lime-400 font-semibold group-hover:translate-x-1 transition-transform">
                    {isSelected ? "ACTIVE DEMO ▼" : "TEST INTERACTION →"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Live Playground Box */}
      <div className="mt-12 rounded-2xl bg-black border border-lime-400/30 p-6 md:p-8 overflow-hidden relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-2 font-mono text-xs text-stone-400 tracking-wider">
              INTERACTIVE_EXPERIMENT_CONSOLE // {selectedDemo.toUpperCase()}
            </span>
          </div>

          <div className="text-xs font-mono text-lime-400 flex items-center gap-2">
            <Cpu className="w-4 h-4 animate-spin text-lime-400" />
            <span>RUNTIME: CLIENT WEBASSEMBLY / V8 ENGINE</span>
          </div>
        </div>

        {/* Demo Stage */}
        <div className="py-8">
          {selectedDemo === "yolo-tracking" && (
            <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
              {/* Simulated Computer Vision Feed */}
              <div className="relative w-full max-w-lg aspect-video rounded-xl bg-zinc-900 border border-white/[0.1] overflow-hidden flex items-center justify-center p-4">
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 font-mono text-[10px] text-lime-400 z-10 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  FEED: 60 FPS // MODEL: YOLOv8-NANO
                </div>

                {/* Bounding box 1 */}
                <div className="absolute top-[20%] left-[15%] w-[38%] h-[60%] border-2 border-lime-400 rounded-sm bg-lime-400/5 p-1 flex flex-col justify-between">
                  <span className="font-mono text-[10px] bg-lime-400 text-black font-bold px-1 py-0.5 rounded-xs w-max">
                    engineer: 0.96
                  </span>
                  <span className="font-mono text-[9px] text-lime-400 self-end">
                    id: #104 [x:120, y:84]
                  </span>
                </div>

                {/* Bounding box 2 */}
                <div className="absolute top-[45%] right-[18%] w-[28%] h-[35%] border-2 border-cyan-400 rounded-sm bg-cyan-400/5 p-1 flex flex-col justify-between">
                  <span className="font-mono text-[10px] bg-cyan-400 text-black font-bold px-1 py-0.5 rounded-xs w-max">
                    workstation: 0.91
                  </span>
                  <span className="font-mono text-[9px] text-cyan-400 self-end">
                    id: #105
                  </span>
                </div>

                <div className="text-center font-mono text-xs text-stone-600">
                  [LIVE CAMERA DETECTION SIMULATION]
                </div>
              </div>

              {/* Telemetry & Controls */}
              <div className="w-full lg:w-1/2 font-mono text-xs space-y-4">
                <div className="bg-zinc-950 p-4 rounded-xl border border-white/[0.06] space-y-2">
                  <div className="text-stone-400">INFERENCE TELEMETRY:</div>
                  <div className="flex justify-between text-stone-300">
                    <span>Forward Pass Latency:</span>
                    <span className="text-lime-400 font-bold">14.2 ms</span>
                  </div>
                  <div className="flex justify-between text-stone-300">
                    <span>IoU Overlap Threshold:</span>
                    <span className="text-stone-200">0.45</span>
                  </div>
                  <div className="flex justify-between text-stone-300">
                    <span>ByteTrack Kalman Filter:</span>
                    <span className="text-emerald-400">CONVERGED ✓</span>
                  </div>
                </div>

                <p className="text-stone-400 text-xs font-sans leading-relaxed">
                  Notice how ByteTrack retains persistent entity tracking IDs even when bounding boxes briefly intersect, preventing tracklet fragmentation during multi-agent movement.
                </p>
              </div>
            </div>
          )}

          {selectedDemo === "rag-lab" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-3 w-4 h-4 text-stone-500" />
                  <input
                    type="text"
                    value={activeRagQuery}
                    onChange={(e) => setActiveRagQuery(e.target.value)}
                    placeholder="Enter semantic query..."
                    className="w-full bg-zinc-950 border border-white/[0.1] rounded-xl pl-10 pr-4 py-2.5 text-xs font-mono text-stone-200 focus:outline-none focus:border-lime-400"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveRagQuery("transformer attention memory")}
                    className="px-3 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-[11px] font-mono text-stone-300"
                  >
                    Query 1
                  </button>
                  <button
                    onClick={() => setActiveRagQuery("optimistic concurrency locks")}
                    className="px-3 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-[11px] font-mono text-stone-300"
                  >
                    Query 2
                  </button>
                </div>
              </div>

              {/* RRF Results Preview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                <div className="bg-zinc-950 p-4 rounded-xl border border-white/[0.06]">
                  <div className="flex items-center justify-between text-stone-400 border-b border-white/[0.06] pb-2 mb-3">
                    <span>SPARSE BM25 RETRIEVAL</span>
                    <span className="text-amber-400">EXACT TOKENS</span>
                  </div>
                  <div className="space-y-2 text-[11px] text-stone-300">
                    <div className="p-2 rounded bg-white/[0.02]">
                      1. &quot;FlashAttention reduces quadratic memory to O(N)...&quot; (Score: 4.82)
                    </div>
                    <div className="p-2 rounded bg-white/[0.02]">
                      2. &quot;Multi-head latent memory caching techniques...&quot; (Score: 3.91)
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-950 p-4 rounded-xl border border-lime-400/30">
                  <div className="flex items-center justify-between text-stone-400 border-b border-white/[0.06] pb-2 mb-3">
                    <span>HYBRID RRF + CROSS-ENCODER</span>
                    <span className="text-lime-400 font-bold">RERANKED TOP-1</span>
                  </div>
                  <div className="space-y-2 text-[11px] text-stone-200">
                    <div className="p-2 rounded bg-lime-400/10 border border-lime-400/20">
                      ★ &quot;Self-attention compute vs memory-bound arithmetic intensity...&quot; (Fused: 0.942)
                    </div>
                    <div className="p-2 rounded bg-white/[0.02]">
                      ★ &quot;KV cache paging in high-throughput LLM engines...&quot; (Fused: 0.887)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedDemo !== "yolo-tracking" && selectedDemo !== "rag-lab" && (
            <div className="text-center py-6 font-mono text-xs text-stone-400">
              <Sparkles className="w-6 h-6 text-lime-400 mx-auto mb-2" />
              <span>Experiment &quot;{selectedDemo}&quot; loaded. View full benchmarks and interactive parameter tuning in the dedicated Lab section.</span>
              <div className="mt-4">
                <Link
                  href="/experiments"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-lime-400 text-stone-950 font-bold hover:bg-lime-300 transition"
                >
                  <span>LAUNCH FULL LAB PAGE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
