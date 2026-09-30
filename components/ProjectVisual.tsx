"use client";

import { Project } from "@/data/projects";

interface ProjectVisualProps {
  project: Project;
  isHovered?: boolean;
}

export default function ProjectVisual({ project }: ProjectVisualProps) {
  const { graphicType } = project.visualTheme;

  return (
    <div className="relative w-full h-full min-h-[320px] md:min-h-[420px] overflow-hidden rounded-2xl bg-zinc-950 border border-white/[0.08] flex items-center justify-center p-6 select-none group-hover:border-lime-400/40 transition-colors duration-500">
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Atmospheric Radial Glow */}
      <div
        className="absolute w-72 h-72 rounded-full blur-[90px] opacity-25 pointer-events-none transition-all duration-700 group-hover:scale-125 group-hover:opacity-40"
        style={{ backgroundColor: project.visualTheme.accentGlow }}
      />

      {/* Top Bar HUD inside Card */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono tracking-widest text-stone-500 uppercase pointer-events-none">
        <span className="flex items-center gap-1.5 text-stone-400">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
          SYS_ID // {project.slug.toUpperCase()}
        </span>
        <span className="text-stone-500">{project.year} // RELEASE</span>
      </div>

      {/* Specific Graphic Renderers */}
      {graphicType === "network" && (
        <div className="relative z-10 w-full max-w-md flex flex-col items-center">
          <svg className="w-full h-52 overflow-visible" viewBox="0 0 400 200">
            {/* Connection Lines */}
            <line x1="80" y1="50" x2="200" y2="100" stroke="#ccff00" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 4" className="animate-pulse" />
            <line x1="80" y1="150" x2="200" y2="100" stroke="#ccff00" strokeWidth="1.5" strokeOpacity="0.6" />
            <line x1="200" y1="100" x2="320" y2="60" stroke="#ccff00" strokeWidth="2" strokeOpacity="0.8" />
            <line x1="200" y1="100" x2="320" y2="140" stroke="#ccff00" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" />

            {/* Left Ingestion Nodes */}
            <circle cx="80" cy="50" r="14" fill="#18181b" stroke="#ccff00" strokeWidth="2" />
            <text x="80" y="54" fill="#f4f4f0" fontSize="9" fontFamily="monospace" textAnchor="middle">VOL_A</text>
            <circle cx="80" cy="150" r="14" fill="#18181b" stroke="#ccff00" strokeWidth="2" />
            <text x="80" y="154" fill="#f4f4f0" fontSize="9" fontFamily="monospace" textAnchor="middle">VOL_B</text>

            {/* Center Matching Engine Core */}
            <rect x="160" y="70" width="80" height="60" rx="8" fill="#090a0d" stroke="#ccff00" strokeWidth="2.5" />
            <text x="200" y="96" fill="#ccff00" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">BIPARTITE</text>
            <text x="200" y="112" fill="#a1a1aa" fontSize="8" fontFamily="monospace" textAnchor="middle">SCORE &lt;42ms</text>

            {/* Right Dispatch Nodes */}
            <circle cx="320" cy="60" r="16" fill="#18181b" stroke="#ffffff" strokeWidth="1.5" />
            <text x="320" y="64" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle">SITE_1</text>
            <circle cx="320" cy="140" r="16" fill="#18181b" stroke="#ffffff" strokeWidth="1.5" />
            <text x="320" y="144" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle">SITE_2</text>
          </svg>
          <div className="mt-2 text-center text-xs font-mono text-lime-400/90 tracking-wider">
            RADIAL BOUNDING · ZERO DOUBLE-BOOKING GUARANTEE
          </div>
        </div>
      )}

      {graphicType === "collaboration" && (
        <div className="relative z-10 w-full max-w-md flex flex-col items-center">
          <div className="w-full bg-black/60 rounded-xl border border-white/[0.08] p-4 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 text-[11px] text-stone-400">
              <span className="text-blue-400">PROJECT_CANVAS // TEAM_FORMATION</span>
              <span className="text-lime-400">ACTIVE SPRINT</span>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between bg-white/[0.03] p-2 rounded">
                <span className="text-stone-300">Roles Needed: [ML_Researcher, Systems_Dev]</span>
                <span className="text-emerald-400 text-[10px]">2/4 FILLED</span>
              </div>
              <div className="flex items-center justify-between bg-white/[0.03] p-2 rounded">
                <span className="text-stone-300">Milestone: Alpha Architecture Brief</span>
                <span className="text-lime-400 text-[10px]">VERIFIED ✓</span>
              </div>
              <div className="flex items-center gap-2 pt-1 text-[10px] text-stone-500">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                <span>850+ builders active across 34 hackathon sprints</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {graphicType === "marketplace" && (
        <div className="relative z-10 w-full max-w-md flex flex-col items-center text-center">
          <div className="relative w-36 h-36 flex items-center justify-center">
            {/* Radar scan ring */}
            <div className="absolute inset-0 rounded-full border border-amber-500/30 animate-ping opacity-30" />
            <div className="absolute inset-4 rounded-full border border-amber-400/40" />
            <div className="absolute inset-10 rounded-full border border-dashed border-amber-400/60" />
            <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-300 font-mono font-bold text-xs">
              VOICE
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-stone-300">
            <span className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.1]">HINDI</span>
            <span className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.1]">MARATHI</span>
            <span className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.1]">ENGLISH</span>
          </div>
          <p className="mt-2 text-[11px] font-mono text-stone-500">
            VOICE-FIRST PROXIMITY DISCOVERY · ZERO-TEXT ONBOARDING
          </p>
        </div>
      )}

      {graphicType === "telemetry" && (
        <div className="relative z-10 w-full max-w-md flex flex-col">
          <div className="bg-black/70 rounded-xl border border-cyan-500/20 p-4 font-mono text-xs">
            <div className="flex items-center justify-between text-cyan-400 border-b border-cyan-500/20 pb-2">
              <span>STREAM // 5,000 PTS/SEC</span>
              <span className="text-lime-400">60 FPS DECK.GL</span>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
              <div className="bg-white/[0.02] p-2 rounded border border-white/[0.04]">
                <div className="text-stone-500">LATENCY</div>
                <div className="text-stone-200 font-bold mt-0.5">&lt; 120ms WS</div>
              </div>
              <div className="bg-white/[0.02] p-2 rounded border border-white/[0.04]">
                <div className="text-stone-500">TIMESCALEDB COMPR</div>
                <div className="text-lime-400 font-bold mt-0.5">92% RATIO</div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-[10px] text-stone-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>GEOFENCE EVALUATION ENGINE: ACTIVE</span>
            </div>
          </div>
        </div>
      )}

      {graphicType === "vector" && (
        <div className="relative z-10 w-full max-w-md flex flex-col items-center">
          <div className="w-full bg-black/70 rounded-xl border border-purple-500/30 p-4 font-mono text-xs">
            <div className="flex items-center justify-between text-purple-300 border-b border-purple-500/20 pb-2">
              <span>LSH BLOCKING + LIGHTGBM</span>
              <span className="text-lime-400">F1: 0.948</span>
            </div>
            <div className="mt-3 space-y-1.5 text-[11px]">
              <div className="flex justify-between text-stone-300">
                <span>Pairwise Reduction:</span>
                <span className="text-lime-400 font-bold">99.72%</span>
              </div>
              <div className="w-full bg-stone-900 rounded-full h-1.5 overflow-hidden">
                <div className="bg-lime-400 h-full w-[99.72%]" />
              </div>
              <div className="flex justify-between text-stone-400 pt-1 text-[10px]">
                <span>Throughput: 45k pairs/s</span>
                <span>Inference: 1.8ms</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Visual Overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-stone-400">
        <span className="opacity-60">{project.role}</span>
        <span className="text-lime-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          VIEW SYSTEM SPECS →
        </span>
      </div>
    </div>
  );
}
