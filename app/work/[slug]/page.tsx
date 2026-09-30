import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import ProjectVisual from "@/components/ProjectVisual";
import { ArrowLeft, ArrowUpRight, ExternalLink, Calendar, CheckCircle2, ChevronRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found — Aditya Bhardwaj",
    };
  }

  return {
    title: `${project.title} — Case Study by Aditya Bhardwaj`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — ${project.category}`,
      description: project.shortDescription,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <article className="min-h-screen pt-24 pb-32 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Top Breadcrumb & Back Link */}
      <div className="flex items-center justify-between pb-8 border-b border-white/[0.08] mb-12">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-400 hover:text-lime-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO SELECTED WORK</span>
        </Link>

        <span className="text-xs font-mono text-lime-400 font-bold">
          CASE STUDY // {project.number} OF 05
        </span>
      </div>

      {/* Hero Header */}
      <header className="mb-12">
        <div className="text-xs font-mono tracking-widest uppercase text-stone-500 mb-2">
          {project.category} · {project.year}
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-stone-100 font-sans leading-[0.95]">
          {project.title}
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-stone-300 font-light leading-relaxed max-w-4xl">
          {project.shortDescription}
        </p>

        {/* Project Meta Details Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 rounded-2xl bg-zinc-950/70 border border-white/[0.08] font-mono text-xs">
          <div>
            <span className="text-stone-500 block uppercase">ROLE</span>
            <span className="text-stone-200 font-medium mt-1 block">
              {project.role}
            </span>
          </div>

          <div>
            <span className="text-stone-500 block uppercase">TIMELINE</span>
            <span className="text-stone-200 font-medium mt-1 block">
              {project.timeline}
            </span>
          </div>

          <div>
            <span className="text-stone-500 block uppercase">STATUS</span>
            <span className="text-lime-400 font-medium mt-1 block flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
              {project.status}
            </span>
          </div>

          <div>
            <span className="text-stone-500 block uppercase">LINKS</span>
            <div className="flex items-center gap-3 mt-1">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-200 hover:text-lime-400 transition-colors flex items-center gap-1"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Code</span>
                </Link>
              )}
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-200 hover:text-lime-400 transition-colors flex items-center gap-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Demo</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Project Visual Graphic */}
      <div className="my-12">
        <ProjectVisual project={project} />
      </div>

      {/* Key Metrics Highlight Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-black border border-white/[0.08] my-16">
        {project.metrics.map((m) => (
          <div key={m.label} className="p-3 text-center sm:text-left">
            <span className="font-mono text-xs text-stone-500 uppercase block">
              {m.label}
            </span>
            <span className="text-2xl sm:text-3xl font-mono font-bold text-lime-400 mt-1 block">
              {m.value}
            </span>
          </div>
        ))}
      </div>

      {/* Editorial Case Study Content Sections */}
      <div className="space-y-20 divide-y divide-white/[0.08]">
        {/* 01 Context */}
        <section className="pt-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime-400 mb-4">
            <span>01 // CONTEXT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-stone-100 mb-6">
            The Problem & Real-World Domain
          </h2>
          <p className="text-lg sm:text-xl text-stone-300 font-light leading-relaxed max-w-4xl">
            {project.context}
          </p>
        </section>

        {/* 02 Challenge */}
        <section className="pt-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime-400 mb-4">
            <span>02 // THE CHALLENGE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-stone-100 mb-6">
            Technical Bottlenecks & Complexity
          </h2>
          <p className="text-lg sm:text-xl text-stone-300 font-light leading-relaxed max-w-4xl">
            {project.challenge}
          </p>
        </section>

        {/* 03 Approach */}
        <section className="pt-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime-400 mb-4">
            <span>03 // ENGINEERING APPROACH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-stone-100 mb-6">
            Architectural & Design Decisions
          </h2>
          <p className="text-lg sm:text-xl text-stone-300 font-light leading-relaxed max-w-4xl mb-8">
            {project.approach}
          </p>

          {/* Key Features Bullet Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {project.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3.5"
              >
                <CheckCircle2 className="w-5 h-5 text-lime-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-stone-300 font-light leading-relaxed">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 04 Implementation & Architecture */}
        <section className="pt-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime-400 mb-4">
            <span>04 // SYSTEM IMPLEMENTATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-stone-100 mb-6">
            End-to-End Execution Topology
          </h2>

          <ArchitectureDiagram
            projectTitle={project.title}
            architecture={project.architecture}
          />
        </section>

        {/* 05 Results */}
        <section className="pt-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime-400 mb-4">
            <span>05 // RESULTS & EVALUATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-stone-100 mb-6">
            What Was Achieved
          </h2>
          <div className="p-8 rounded-2xl bg-zinc-950/70 border border-lime-400/30">
            <p className="text-lg sm:text-xl text-stone-200 font-light leading-relaxed">
              {project.results}
            </p>
          </div>
        </section>

        {/* 06 Learnings */}
        <section className="pt-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime-400 mb-4">
            <span>06 // KEY LEARNINGS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-stone-100 mb-6">
            Engineering Insights & Trade-offs
          </h2>
          <p className="text-lg sm:text-xl text-stone-300 font-light leading-relaxed max-w-4xl">
            {project.learnings}
          </p>
        </section>

        {/* 07 Next Steps */}
        <section className="pt-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime-400 mb-4">
            <span>07 // FUTURE ITERATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-stone-100 mb-6">
            Where This System Evolves Next
          </h2>
          <p className="text-lg sm:text-xl text-stone-300 font-light leading-relaxed max-w-4xl">
            {project.nextSteps}
          </p>
        </section>
      </div>

      {/* Next Project Footer Card */}
      <div className="mt-24 pt-12 border-t border-white/[0.1]">
        <span className="text-xs font-mono tracking-widest uppercase text-stone-500 block mb-4">
          NEXT CASE STUDY //
        </span>
        <Link
          href={`/work/${nextProject.slug}`}
          className="group block p-8 sm:p-12 rounded-2xl bg-zinc-950 border border-white/[0.08] hover:border-lime-400/50 transition-all duration-300"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-lime-400 font-bold">
                {nextProject.number} · {nextProject.year}
              </span>
              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-stone-100 group-hover:text-lime-400 transition-colors mt-2">
                {nextProject.title}
              </h3>
              <p className="text-sm sm:text-base text-stone-400 mt-2 font-light">
                {nextProject.shortDescription}
              </p>
            </div>

            <div className="w-12 h-12 rounded-full border border-white/[0.2] group-hover:border-lime-400 group-hover:bg-lime-400 text-stone-200 group-hover:text-black flex items-center justify-center flex-shrink-0 transition-all duration-300">
              <ChevronRight className="w-6 h-6" />
            </div>
          </div>
        </Link>
      </div>
    </article>
  );
}
