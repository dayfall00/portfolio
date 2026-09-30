"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import HeroCanvas from "./HeroCanvas";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const headlineWords = [
    { text: "BUILDING" },
    { text: "INTELLIGENT" },
    { text: "EXPERIENCES." },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background Interactive Data Field */}
      <HeroCanvas />

      {/* Top Metadata Header */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6"
        >
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-stone-400">
            <span className="text-lime-400">00 //</span>
            <span>COMPUTER SCIENCE · AI/ML · SOFTWARE</span>
          </div>

          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-stone-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400" />
            </span>
            <span className="tracking-wide text-[11px] uppercase">
              Available for Internships & Collaborations
            </span>
          </div>
        </motion.div>
      </div>

      {/* Main Massive Editorial Typography */}
      <div className="relative z-10 my-auto py-10 md:py-16">
        <div className="flex flex-col">
          {headlineWords.map((item, index) => (
            <div key={item.text} className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.15 + index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase font-sans leading-[0.9] select-none ${
                  index === 1
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-stone-100 via-stone-200 to-lime-300"
                    : "text-stone-100"
                }`}
              >
                {item.text}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Narrative Description & Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-12 max-w-2xl"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-stone-300 font-light leading-relaxed">
            Hi, I&apos;m{" "}
            <span className="font-semibold text-white underline decoration-lime-400 decoration-2 underline-offset-4">
              Aditya Bhardwaj
            </span>{" "}
            — a computer science student exploring machine learning, software
            engineering, and creative technology.
          </p>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
        >
          <MagneticButton strength={0.2}>
            <Link
              href="#work"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-lime-400 text-stone-950 font-bold text-sm uppercase tracking-wider hover:bg-lime-300 transition-colors shadow-lg shadow-lime-400/10"
            >
              <span>VIEW SELECTED WORK</span>
              <ArrowDown className="w-4 h-4 transform group-hover:translate-y-1 transition-transform" />
            </Link>
          </MagneticButton>

          <MagneticButton strength={0.2}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/[0.15] bg-white/[0.02] hover:bg-white/[0.06] text-stone-200 hover:text-white font-medium text-sm uppercase tracking-wider transition-colors"
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight className="w-4 h-4 text-lime-400 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </MagneticButton>

          <Link
            href="/experiments"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-400 hover:text-lime-400 transition-colors py-2 px-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-lime-400" />
            <span>ENTER LAB →</span>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Metadata & Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="relative z-10 flex flex-wrap items-end justify-between gap-6 border-t border-white/[0.08] pt-6 text-xs font-mono text-stone-500 uppercase tracking-widest"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <span>LOC: NEW DELHI, INDIA</span>
          <span className="hidden sm:inline-block">·</span>
          <span>FOCUS: HIGH-THROUGHPUT ML & SYSTEMS</span>
        </div>

        <div className="flex items-center gap-2 text-stone-400 group">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 text-lime-400 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
