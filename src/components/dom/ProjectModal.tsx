'use client';

import { ProjectSpec } from '@/types';
import { X, ExternalLink, Layers, Code2, Database } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectSpec | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-xl animate-fade-in"
    >
      {/* Click backdrop to close */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0d] border border-border rounded-xl p-6 sm:p-8 md:p-10 shadow-2xl z-10 space-y-8">
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-border/80 pb-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-foreground-muted mb-2">
              <span className="px-2.5 py-0.5 rounded bg-white/[0.06] border border-border text-foreground">
                {project.category}
              </span>
              <span>• {project.systemRole}</span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-display font-bold text-foreground">
              {project.title}
            </h2>
            <p className="text-sm font-sans text-foreground-muted mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-foreground-muted hover:text-white rounded-lg border border-border hover:border-foreground/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overview */}
        <div className="space-y-2.5">
          <h3 className="text-xs font-mono tracking-wider text-foreground-subtle uppercase flex items-center space-x-2">
            <Code2 className="w-4 h-4 text-white" />
            <span>PROJECT OVERVIEW</span>
          </h3>
          <p className="text-sm sm:text-base text-foreground/90 leading-relaxed font-sans">
            {project.overview}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          {project.metricsOrFeatures.map((m, i) => (
            <div
              key={i}
              className="p-4 rounded-lg bg-background-surface/80 border border-border space-y-1"
            >
              <div className="text-[10px] font-mono text-foreground-subtle uppercase">
                {m.label}
              </div>
              <div className="text-base sm:text-lg font-mono font-bold text-foreground">
                {m.value}
              </div>
              <div className="text-[11px] text-foreground-muted leading-snug">
                {m.description}
              </div>
            </div>
          ))}
        </div>

        {/* Key Engineering Highlights */}
        <div className="space-y-3.5">
          <h3 className="text-xs font-mono tracking-wider text-foreground-subtle uppercase flex items-center space-x-2">
            <Layers className="w-4 h-4 text-white" />
            <span>KEY ENGINEERING HIGHLIGHTS</span>
          </h3>
          <div className="space-y-2.5">
            {project.architectureHighlights.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-3 text-sm text-foreground/90 font-sans leading-relaxed bg-white/[0.02] p-3.5 rounded-lg border border-border/60"
              >
                <span className="font-mono text-xs text-foreground-subtle mt-0.5">
                  0{idx + 1}.
                </span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-2.5">
          <h3 className="text-xs font-mono tracking-wider text-foreground-subtle uppercase flex items-center space-x-2">
            <Database className="w-4 h-4 text-white" />
            <span>TECHNOLOGY STACK</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded bg-background-surface border border-border text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-6 border-t border-border flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-xs font-mono text-black bg-white hover:bg-neutral-200 font-semibold px-4 py-2.5 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          >
            <span>View Source on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="text-xs font-mono text-foreground-muted hover:text-white transition-colors"
          >
            Close [ESC]
          </button>
        </div>
      </div>
    </div>
  );
}
