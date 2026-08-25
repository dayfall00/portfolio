'use client';

import { PERSONAL_INFO, EDUCATION_DATA, CORE_STRENGTHS } from '@/data/portfolioData';
import { GraduationCap, Code2, Layers } from 'lucide-react';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-24 pointer-events-auto"
      aria-label="About & Engineering Philosophy"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Narrative & Engineering Mindset */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-foreground-subtle tracking-widest uppercase">
            <span>// 01 ENGINEERING MINDSET</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
            Engineering robust architectures from first principles.
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-foreground/90 font-sans leading-relaxed">
            <p>
              I am a Computer Science & Engineering undergraduate at PSIT Kanpur (AKTU) who loves building complete software systems—from normalized database schemas and decoupled backend services to responsive, high-performance interfaces.
            </p>
            <p>
              My engineering approach is rooted in core computer science fundamentals: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks. I focus on writing modular, readable, and maintainable code that scales cleanly.
            </p>
          </div>

          {/* Core Strengths */}
          <div className="pt-2 space-y-3">
            <h3 className="text-xs font-mono text-foreground-subtle uppercase tracking-wider flex items-center space-x-2">
              <Code2 className="w-3.5 h-3.5 text-white" />
              <span>CORE STRENGTHS</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {CORE_STRENGTHS.map((strength) => (
                <span
                  key={strength}
                  className="text-xs font-mono px-3 py-1 rounded bg-background-surface border border-border text-foreground/90 hover:border-foreground/40 transition-colors"
                >
                  {strength}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Academic Credentials */}
        <div className="lg:col-span-6 space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-foreground-subtle tracking-widest uppercase mb-2">
            <GraduationCap className="w-4 h-4 text-white" />
            <span>ACADEMIC BACKGROUND</span>
          </div>

          <div className="space-y-4">
            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg bg-background-surface/70 border border-border/80 hover:border-border-active transition-all backdrop-blur-sm space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-foreground-subtle">
                    {edu.period} • {edu.location}
                  </span>
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-white/[0.08] text-white border border-border">
                    {edu.scoreLabel}: {edu.score}
                  </span>
                </div>

                <h4 className="text-base font-display font-semibold text-foreground">
                  {edu.degree}
                </h4>

                <p className="text-xs font-mono text-foreground-muted">
                  {edu.institution} • {edu.boardOrUniversity}
                </p>
              </div>
            ))}
          </div>

          {/* 3D Visual Context Note */}
          <div className="p-4 rounded-lg bg-white/[0.02] border border-border/60 text-xs font-mono text-foreground-subtle flex items-center space-x-2.5">
            <Layers className="w-4 h-4 text-white shrink-0" />
            <span>3D SPATIAL METAPHOR // Controller → Service → Repository → Database</span>
          </div>
        </div>
      </div>
    </section>
  );
}
