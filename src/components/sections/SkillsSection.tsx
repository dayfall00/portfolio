'use client';

import { SKILL_GROUPS } from '@/data/portfolioData';
import { Code2, Terminal, Server, Database, Blocks, Wrench, Binary } from 'lucide-react';

const ICONS = [Code2, Terminal, Server, Database, Blocks, Wrench, Binary];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-24 pointer-events-auto"
      aria-label="Technical Skills Matrix"
    >
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-foreground-subtle tracking-widest uppercase">
            <span>// 04 TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Technologies & Foundations
          </h2>
          <p className="text-sm sm:text-base font-sans text-foreground-muted max-w-2xl">
            A balanced foundation of programming languages, modern full-stack frameworks, database design, and core computer science theory.
          </p>
        </div>

        {/* Clean Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={group.category}
                className="p-5 rounded-xl bg-background-surface/70 border border-border/80 hover:border-border-bright transition-all backdrop-blur-md space-y-3.5"
              >
                <div className="flex items-center space-x-3 border-b border-border/60 pb-3">
                  <div className="p-2 rounded bg-white/[0.04] border border-border text-white">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-display font-bold text-foreground">
                      {group.category}
                    </h3>
                    <p className="text-[11px] font-mono text-foreground-subtle">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[#070709] border border-border/70 text-foreground/90 hover:text-white hover:border-foreground/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
