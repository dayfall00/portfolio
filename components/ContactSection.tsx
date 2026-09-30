"use client";

import { useState } from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";
import SectionHeading from "./SectionHeading";
import { Mail, Copy, Check, ArrowUpRight, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "aditya.bhardwaj.dev@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08] scroll-mt-20">
      <SectionHeading
        badge="08 // INITIALIZE TRANSMISSION"
        title="LET'S BUILD SOMETHING."
        subtitle="Have an ambitious problem or an interesting project?"
        description="I'm always interested in high-concurrency systems, machine learning research, hackathon teams, and people who like building things with uncompromising craft."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-lime-400 uppercase">
              DIRECT REACHOUT
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-stone-100 mt-2">
              START A CONVERSATION
            </h3>
            <p className="mt-4 text-base text-stone-300 font-light leading-relaxed">
              Whether you are scouting for an engineering internship, seeking a technical co-builder for a hackathon, or looking to discuss machine learning architectures—my inbox is open.
            </p>
          </div>

          {/* Quick Copy Email Box */}
          <div className="p-5 rounded-2xl bg-zinc-950/70 border border-white/[0.08] flex items-center justify-between gap-4">
            <div className="overflow-hidden">
              <span className="text-[11px] font-mono text-stone-500 uppercase block">
                PRIMARY EMAIL
              </span>
              <span className="text-sm sm:text-base font-mono text-stone-200 font-medium truncate block mt-0.5">
                {emailAddress}
              </span>
            </div>

            <button
              onClick={handleCopyEmail}
              className="p-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-stone-300 hover:text-white border border-white/[0.1] transition-colors flex-shrink-0"
              title="Copy email address"
              aria-label="Copy Email"
            >
              {copied ? (
                <Check className="w-4 h-4 text-lime-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Social Channels */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-stone-500 uppercase tracking-widest block mb-1">
              EXTERNAL NETWORKS
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="mailto:aditya.bhardwaj.dev@gmail.com"
                className="group p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-lime-400/40 hover:bg-white/[0.04] transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-lime-400" />
                  <span className="text-xs font-mono font-bold text-stone-200">EMAIL ME</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-500 group-hover:text-lime-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Link>

              <Link
                href="https://github.com/adityabhardwaj"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-lime-400/40 hover:bg-white/[0.04] transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-4 h-4 text-lime-400" />
                  <span className="text-xs font-mono font-bold text-stone-200">GITHUB</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-500 group-hover:text-lime-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Link>

              <Link
                href="https://linkedin.com/in/adityabhardwaj"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-lime-400/40 hover:bg-white/[0.04] transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-4 h-4 text-lime-400" />
                  <span className="text-xs font-mono font-bold text-stone-200">LINKEDIN</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-500 group-hover:text-lime-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Link>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between opacity-70">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                  <span className="text-xs font-mono text-stone-300">GMT+05:30 (IST)</span>
                </div>
                <span className="text-[10px] font-mono text-stone-500">NEW DELHI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
