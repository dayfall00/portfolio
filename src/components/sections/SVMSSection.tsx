'use client';

import { ProjectSpec } from '@/types';
import { Activity, Radio, Navigation, ArrowUpRight, BarChart3, Database } from 'lucide-react';

interface SVMSSectionProps {
  project: ProjectSpec;
  onInspect: (project: ProjectSpec) => void;
}

export function SVMSSection({ project, onInspect }: SVMSSectionProps) {
  return (
    <section
      id="svms"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-24 pointer-events-auto"
      aria-label="SVMS Fleet Telemetry"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column (3D Visual Context on Desktop) */}
        <div className="lg:col-span-5 hidden lg:block order-2 lg:order-1">
          <div className="p-6 rounded-xl bg-[#09090c]/75 border border-border/80 backdrop-blur-md space-y-4">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-[11px] font-mono text-foreground-subtle">
                3D VISUAL // TELEMETRY PIPELINE
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span>STREAMING</span>
              </span>
            </div>

            <p className="text-xs text-foreground-muted leading-relaxed font-sans">
              The 3D trajectory spline illustrates live telemetry flow: <strong className="text-white">Vehicle → GPS / Speed / Fuel → Real-Time Stream → MongoDB → Analytics → Dashboard</strong>, with animated packets tracking across geospatial coordinates.
            </p>

            <div className="space-y-2.5 font-mono text-xs text-foreground-muted pt-2 border-t border-border/50">
              <div className="flex justify-between">
                <span>PROTOCOL</span>
                <span className="text-white">Socket.io WebSockets</span>
              </div>
              <div className="flex justify-between">
                <span>MAPPING</span>
                <span className="text-white">Leaflet.js Coordinates</span>
              </div>
              <div className="flex justify-between">
                <span>ANALYTICS</span>
                <span className="text-white">Recharts Behavior Metrics</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: System Details */}
        <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-foreground-subtle tracking-widest uppercase">
            <span>// 03 REAL-TIME TELEMETRY SYSTEM</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base font-mono text-foreground-muted">
              {project.tagline}
            </p>
          </div>

          {/* 1. What it does */}
          <div className="space-y-2 text-sm sm:text-base text-foreground/90 font-sans leading-relaxed">
            <p>
              {project.overview}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded bg-background-surface border border-border text-foreground/90"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* 2 & 3. Real-Time Telemetry & Architecture */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-4 rounded-lg bg-background-surface/70 border border-border/80 backdrop-blur-sm space-y-1.5">
              <div className="flex items-center space-x-2 text-xs font-mono text-white">
                <Radio className="w-3.5 h-3.5 text-white" />
                <span className="font-semibold">Socket.io Live Stream</span>
              </div>
              <p className="text-xs text-foreground-muted font-sans leading-relaxed">
                Sub-second WebSocket broadcast for live vehicle location, speed, fuel monitoring, and driving events.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-background-surface/70 border border-border/80 backdrop-blur-sm space-y-1.5">
              <div className="flex items-center space-x-2 text-xs font-mono text-white">
                <Navigation className="w-3.5 h-3.5 text-white" />
                <span className="font-semibold">Leaflet.js Mapping</span>
              </div>
              <p className="text-xs text-foreground-muted font-sans leading-relaxed">
                Interactive map layer visualizing live vehicle movement, routes, and geolocation markers with minimal latency.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-background-surface/70 border border-border/80 backdrop-blur-sm space-y-1.5">
              <div className="flex items-center space-x-2 text-xs font-mono text-white">
                <BarChart3 className="w-3.5 h-3.5 text-white" />
                <span className="font-semibold">Recharts Analytics</span>
              </div>
              <p className="text-xs text-foreground-muted font-sans leading-relaxed">
                Trip summaries, fuel consumption trends, and driver behavior scoring rendered in clean responsive charts.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-background-surface/70 border border-border/80 backdrop-blur-sm space-y-1.5">
              <div className="flex items-center space-x-2 text-xs font-mono text-white">
                <Database className="w-3.5 h-3.5 text-white" />
                <span className="font-semibold">MongoDB Fleet Schemas</span>
              </div>
              <p className="text-xs text-foreground-muted font-sans leading-relaxed">
                Scalable document schemas designed for high-frequency telemetry logs, vehicle assets, and trip lifecycles.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onInspect(project)}
              className="flex items-center space-x-2 text-xs font-mono bg-white hover:bg-neutral-200 text-black font-semibold px-4 py-2.5 rounded transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Inspect Telemetry Blueprint</span>
              <Activity className="w-3.5 h-3.5" />
            </button>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs font-mono bg-white/[0.06] hover:bg-white/[0.12] text-foreground border border-border px-4 py-2.5 rounded transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>View on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
