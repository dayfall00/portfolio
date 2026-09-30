"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#07080a] py-16 px-6 md:px-12 text-stone-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left Identity */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-stone-100 font-bold uppercase tracking-tight text-base sm:text-lg">
            <span className="w-2.5 h-2.5 bg-lime-400 rounded-sm" />
            <span>ADITYA BHARDWAJ</span>
          </div>
          <p className="text-xs text-stone-500 tracking-widest uppercase">
            AI / ML · SOFTWARE · CREATIVE TECHNOLOGY
          </p>
        </div>

        {/* Center Links */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 tracking-widest uppercase text-stone-400">
          <Link
            href="https://github.com/adityabhardwaj"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-400 transition-colors"
          >
            GITHUB
          </Link>
          <Link
            href="https://linkedin.com/in/adityabhardwaj"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-400 transition-colors"
          >
            LINKEDIN
          </Link>
          <Link
            href="mailto:aditya.bhardwaj.dev@gmail.com"
            className="hover:text-lime-400 transition-colors"
          >
            EMAIL
          </Link>
          <Link href="/about" className="hover:text-lime-400 transition-colors">
            RESUME / CV
          </Link>
        </div>

        {/* Right Back to Top & Copyright */}
        <div className="flex items-center gap-6 self-stretch md:self-auto justify-between md:justify-end border-t md:border-t-0 border-white/[0.06] pt-6 md:pt-0">
          <span className="text-[11px] text-stone-500">
            © 2026 Aditya Bhardwaj
          </span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-stone-300 hover:text-lime-400 uppercase tracking-widest transition-colors py-1 px-2 rounded-md hover:bg-white/[0.04]"
            aria-label="Scroll Back to Top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-lime-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
