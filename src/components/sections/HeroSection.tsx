'use client';

import { PERSONAL_INFO } from '@/data/portfolioData';
import { ArrowDown, ArrowUpRight, Code2 } from 'lucide-react';

export function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-28 pb-16 pointer-events-auto"
      aria-label="Introduction"
    >
      <div className="max-w-3xl space-y-6">
        {/* Authentic Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded border border-border bg-background-surface/80 backdrop-blur-sm text-xs font-mono text-foreground-muted">
          <Code2 className="w-3.5 h-3.5 text-white" />
          <span>CSE UNDERGRADUATE // FULL-STACK DEVELOPER</span>
        </div>

        {/* Hero Title */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-foreground uppercase leading-[1.08]">
            Building Systems <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
              That Move.
            </span>
          </h1>
        </div>

        {/* Authentic Supporting Statement */}
        <p className="text-base sm:text-lg text-foreground-muted max-w-2xl font-sans leading-relaxed">
          {PERSONAL_INFO.heroStatement}
        </p>

        {/* Core Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono text-foreground-subtle">
          <span className="px-3 py-1 rounded bg-white/[0.03] border border-border text-foreground/90">
            React & Next.js
          </span>
          <span className="px-3 py-1 rounded bg-white/[0.03] border border-border text-foreground/90">
            Node.js & Express
          </span>
          <span className="px-3 py-1 rounded bg-white/[0.03] border border-border text-foreground/90">
            PostgreSQL & MongoDB
          </span>
          <span className="px-3 py-1 rounded bg-white/[0.03] border border-border text-foreground/90">
            WebSockets & Telemetry
          </span>
          <span className="px-3 py-1 rounded bg-white/[0.03] border border-border text-foreground/90">
            Solidity & Web3
          </span>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 flex flex-wrap items-center gap-4">
          <button
            onClick={() => scrollTo('samanvay')}
            className="flex items-center space-x-2 text-xs font-mono bg-white hover:bg-neutral-200 text-black font-semibold px-5 py-3 rounded transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="flex items-center space-x-2 text-xs font-mono bg-white/[0.06] hover:bg-white/[0.12] text-foreground border border-border px-5 py-3 rounded transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[11px] font-mono tracking-wider text-foreground-subtle uppercase">
          Scroll to explore
        </span>
        <div className="w-4 h-7 rounded-full border border-border flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
