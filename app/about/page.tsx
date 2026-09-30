import { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import CurrentlyExploring from "@/components/CurrentlyExploring";
import Link from "next/link";
import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Aditya Bhardwaj — AI/ML Engineer & Systems Developer",
  description:
    "Biography, timeline, technical skills, and engineering philosophy of Aditya Bhardwaj.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 pb-32">
      {/* Extended Header Banner */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto pt-8 pb-12 border-b border-white/[0.08]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="text-xs font-mono tracking-widest uppercase text-lime-400 mb-4">
              // CURRICULUM VITAE & ESSAY
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-stone-100 font-sans leading-[0.95]">
              ADITYA BHARDWAJ
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-stone-300 font-light max-w-3xl">
              Computer Science & Engineering student at the intersection of machine learning, systems architecture, and sensory software craft.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="mailto:aditya.bhardwaj.dev@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-lime-400 text-stone-950 font-bold font-mono text-xs uppercase tracking-wider hover:bg-lime-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>CONTACT DIRECTLY</span>
            </Link>

            <Link
              href="https://github.com/adityabhardwaj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.15] bg-white/[0.02] text-stone-200 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 text-lime-400" />
              <span>GITHUB</span>
            </Link>

            <Link
              href="https://linkedin.com/in/adityabhardwaj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.15] bg-white/[0.02] text-stone-200 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-lime-400" />
              <span>LINKEDIN</span>
            </Link>
          </div>
        </div>
      </div>

      <AboutSection />
      <SkillsSection />
      <CurrentlyExploring />
    </div>
  );
}
