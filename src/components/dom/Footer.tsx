'use client';

import { PERSONAL_INFO } from '@/data/portfolioData';
import { ArrowUp, Code, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border bg-[#050507] py-12 px-4 sm:px-6 lg:px-8 z-20 pointer-events-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Concept */}
        <div className="flex items-center space-x-3 text-left">
          <div className="w-8 h-8 rounded border border-border flex items-center justify-center bg-background-surface">
            <Code className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-xs font-mono font-bold text-foreground">
              ADITYA BHARDWAJ
            </div>
            <div className="text-[11px] font-sans text-foreground-muted">
              Building Systems That Move • PSIT Kanpur
            </div>
          </div>
        </div>

        {/* Social / Direct Links */}
        <div className="flex items-center space-x-5 text-xs font-mono text-foreground-muted">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center space-x-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center space-x-2 text-xs font-mono text-foreground-muted hover:text-white px-3.5 py-1.5 rounded-lg border border-border hover:border-foreground/40 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
          aria-label="Back to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
