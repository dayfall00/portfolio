'use client';

import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { ArrowUpRight, Menu, X, Code } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'samanvay', label: 'Samanvay' },
  { id: 'svms', label: 'SVMS' },
  { id: 'skills', label: 'Skills' },
  { id: 'learning', label: 'Learning' },
  { id: 'contact', label: 'Contact' },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-border/70 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center space-x-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded px-1.5 py-1"
          aria-label="Aditya Bhardwaj Home"
        >
          <div className="w-8 h-8 rounded border border-border group-hover:border-foreground/60 transition-colors flex items-center justify-center bg-background-surface/80">
            <Code className="w-4 h-4 text-foreground group-hover:text-white transition-colors" />
          </div>
          <div className="text-left">
            <span className="text-xs font-mono font-bold tracking-wider text-foreground block">
              ADITYA BHARDWAJ
            </span>
            <span className="text-[10px] font-mono text-foreground-subtle tracking-wider block">
              FULL-STACK DEVELOPER
            </span>
          </div>
        </button>

        {/* Location / Status Badge (Desktop) */}
        <div className="hidden lg:flex items-center space-x-2 text-xs font-mono text-foreground-muted bg-background-surface/60 border border-border/60 px-3.5 py-1.5 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Kanpur, India // PSIT CSE</span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-3.5 py-1.5 text-xs font-mono text-foreground-muted hover:text-white transition-colors rounded hover:bg-white/[0.04] focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              {item.label}
            </button>
          ))}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 flex items-center space-x-1.5 text-xs font-mono text-foreground bg-white/[0.06] hover:bg-white/[0.12] border border-border hover:border-foreground/40 px-3.5 py-1.5 rounded transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-foreground-muted hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded border border-border"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070709]/95 backdrop-blur-xl border-b border-border px-6 py-6 space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono text-foreground-muted pb-3 border-b border-border/60">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>PSIT Kanpur // CSE Undergraduate</span>
          </div>
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left py-2 text-sm font-mono text-foreground hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-border/60 flex items-center justify-between">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-xs font-mono text-foreground hover:text-white"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-xs font-mono bg-white text-black font-semibold px-3 py-1.5 rounded"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
