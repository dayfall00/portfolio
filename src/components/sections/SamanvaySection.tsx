'use client';

import { ProjectSpec } from '@/types';
import { Layers, ArrowUpRight, Database, Users, ShieldCheck, GitBranch } from 'lucide-react';

interface SamanvaySectionProps {
  project: ProjectSpec;
  onInspect: (project: ProjectSpec) => void;
}

export function SamanvaySection({ project, onInspect }: SamanvaySectionProps) {
  return (
    <section
      id="samanvay"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-24 pointer-events-auto"
      aria-label="Samanvay Humanitarian Platform"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: System Details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-foreground-subtle tracking-widest uppercase">
            <span>// 02 FEATURED PROJECT</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base font-mono text-foreground-muted">
              {project.tagline}
            </p>
          </div>

          {/* 1. What problem it solves */}
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

          {/* 2 & 3. What I built & Key Engineering Decisions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-4 rounded-lg bg-background-surface/70 border border-border/80 backdrop-blur-sm space-y-1.5">
              <div className="flex items-center space-x-2 text-xs font-mono text-white">
                <Users className="w-3.5 h-3.5 text-white" />
                <span className="font-semibold">Volunteer Engine</span>
              </div>
              <p className="text-xs text-foreground-muted font-sans leading-relaxed">
                Skill registry, certifications, availability scheduling, invitation workflow, and assignment lifecycle.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-background-surface/70 border border-border/80 backdrop-blur-sm space-y-1.5">
              <div className="flex items-center space-x-2 text-xs font-mono text-white">
                <Database className="w-3.5 h-3.5 text-white" />
                <span className="font-semibold">10+ PostgreSQL Models</span>
              </div>
              <p className="text-xs text-foreground-muted font-sans leading-relaxed">
                Normalized relational schema designed via Prisma ORM for data integrity and complex entity relationships.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-background-surface/70 border border-border/80 backdrop-blur-sm space-y-1.5">
              <div className="flex items-center space-x-2 text-xs font-mono text-white">
                <Layers className="w-3.5 h-3.5 text-white" />
                <span className="font-semibold">Repo-Service Architecture</span>
              </div>
              <p className="text-xs text-foreground-muted font-sans leading-relaxed">
                Clean repository-service-controller pattern in Node.js/Express for modular, scalable backend logic.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-background-surface/70 border border-border/80 backdrop-blur-sm space-y-1.5">
              <div className="flex items-center space-x-2 text-xs font-mono text-white">
                <ShieldCheck className="w-3.5 h-3.5 text-white" />
                <span className="font-semibold">Scored Matching & Zod</span>
              </div>
              <p className="text-xs text-foreground-muted font-sans leading-relaxed">
                Automated volunteer matching with experience-aware scoring logic and strict Zod runtime validation.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onInspect(project)}
              className="flex items-center space-x-2 text-xs font-mono bg-white hover:bg-neutral-200 text-black font-semibold px-4 py-2.5 rounded transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Inspect Architecture Blueprint</span>
              <Layers className="w-3.5 h-3.5" />
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

        {/* Right Column: 3D Visual Context Card */}
        <div className="lg:col-span-5 hidden lg:block">
          <div className="p-6 rounded-xl bg-[#09090c]/75 border border-border/80 backdrop-blur-md space-y-4">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-[11px] font-mono text-foreground-subtle">
                3D VISUAL // COORDINATION GRAPH
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                ACTIVE
              </span>
            </div>

            <p className="text-xs text-foreground-muted leading-relaxed font-sans">
              The 3D node lattice behind this section represents the flow of coordination: <strong className="text-white">Organizations → Volunteers → Events → Resources</strong>, with animated energy pulses illustrating real-time volunteer matching and allocation.
            </p>

            <div className="space-y-2.5 font-mono text-xs text-foreground-muted pt-2 border-t border-border/50">
              <div className="flex justify-between">
                <span>DATABASE</span>
                <span className="text-white">PostgreSQL + Prisma ORM</span>
              </div>
              <div className="flex justify-between">
                <span>PATTERN</span>
                <span className="text-white">Repository-Service-Controller</span>
              </div>
              <div className="flex justify-between">
                <span>MATCHING</span>
                <span className="text-white">Scored Experience Logic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
