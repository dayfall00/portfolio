'use client';

import { CURRENTLY_LEARNING } from '@/data/portfolioData';
import { Brain, Cloud, Network, Compass } from 'lucide-react';

const TRACK_ICONS = [Brain, Cloud, Network];

export function LearningSection() {
  return (
    <section
      id="learning"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-24 pointer-events-auto"
      aria-label="Active Learning & Research"
    >
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-foreground-subtle tracking-widest uppercase">
            <Compass className="w-3.5 h-3.5 text-white" />
            <span>// 05 ACTIVE LEARNING & EXPLORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Current Technical Growth
          </h2>
          <p className="text-sm sm:text-base font-sans text-foreground-muted max-w-2xl">
            Beyond my coursework and current projects, I am actively expanding my engineering depth in artificial intelligence, cloud architectures, and distributed systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CURRENTLY_LEARNING.map((track, idx) => {
            const Icon = TRACK_ICONS[idx % TRACK_ICONS.length];
            return (
              <div
                key={track.title}
                className="p-6 rounded-xl bg-background-surface/70 border border-border/80 hover:border-border-bright transition-all backdrop-blur-md space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded bg-white/[0.04] border border-border text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/[0.06] text-foreground-muted border border-border">
                      {track.status}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-foreground-subtle uppercase">
                      {track.domain}
                    </span>
                    <h3 className="text-lg font-display font-bold text-foreground mt-0.5">
                      {track.title}
                    </h3>
                  </div>

                  <p className="text-xs font-sans text-foreground-muted leading-relaxed">
                    {track.focus}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/50 text-[10px] font-mono text-foreground-subtle flex items-center justify-between">
                  <span>3D VISUAL</span>
                  <span className="text-white">Adaptive Neural Field</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
