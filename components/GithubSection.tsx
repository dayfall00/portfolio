"use client";

import Link from "next/link";
import { ArrowUpRight, Star, GitFork, BookOpen, Terminal } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function GithubSection() {
  const repos = [
    {
      name: "samanvay-engine",
      description: "Asynchronous bipartite matching and spatial radius allocation engine with Redis & PostGIS.",
      language: "TypeScript",
      langColor: "#3178c6",
      stars: 38,
      forks: 7,
      updated: "3 days ago",
    },
    {
      name: "ml-entity-resolution",
      description: "MinHash LSH blocking rules + LightGBM pipeline resolving ambiguous business entities with 94.8% F1.",
      language: "Python",
      langColor: "#3572A5",
      stars: 45,
      forks: 9,
      updated: "1 week ago",
    },
    {
      name: "fleet-telemetry-stream",
      description: "High-frequency WebSocket coordinates ingestion daemon writing compressed hypertables to TimescaleDB.",
      language: "Go / TS",
      langColor: "#00ADD8",
      stars: 29,
      forks: 4,
      updated: "2 weeks ago",
    },
    {
      name: "rag-hybrid-rerank",
      description: "Experimental benchmark comparing reciprocal rank fusion (BM25 + BGE) against cross-encoder rerankers.",
      language: "Python",
      langColor: "#3572A5",
      stars: 52,
      forks: 11,
      updated: "Recently",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      <SectionHeading
        badge="07 // OPEN SOURCE CODE"
        title="THE CODE IS OUT THERE."
        subtitle="Public repositories, algorithmic experiments, and benchmark suites."
        description="I write code transparently. All core architectures are documented with reproduction scripts, clean commit hygiene, and benchmark reports."
        action={
          <Link
            href="https://github.com/adityabhardwaj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-lime-400 text-stone-950 font-bold text-xs uppercase tracking-wider hover:bg-lime-300 transition-colors"
          >
            <span>VIEW GITHUB PROFILE</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        }
      />

      {/* Selected Repositories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {repos.map((repo) => (
          <Link
            key={repo.name}
            href={`https://github.com/adityabhardwaj/${repo.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-zinc-950/70 border border-white/[0.08] hover:border-lime-400/40 hover:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-3">
                <span className="flex items-center gap-1.5 text-stone-300 group-hover:text-lime-400 transition-colors">
                  <BookOpen className="w-3.5 h-3.5 text-lime-400" />
                  <span className="font-bold">{repo.name}</span>
                </span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-lime-400 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <p className="text-sm text-stone-400 font-light leading-relaxed mb-6">
                {repo.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] text-xs font-mono text-stone-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-stone-300">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.langColor }}
                  />
                  {repo.language}
                </span>

                <span className="flex items-center gap-1 hover:text-stone-300 transition-colors">
                  <Star className="w-3 h-3 text-amber-400" />
                  {repo.stars}
                </span>

                <span className="flex items-center gap-1 hover:text-stone-300 transition-colors">
                  <GitFork className="w-3 h-3" />
                  {repo.forks}
                </span>
              </div>

              <span className="text-[11px] text-stone-600">{repo.updated}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* GitHub Activity Teaser Banner */}
      <div className="mt-8 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-3">
          <Terminal className="w-4 h-4 text-lime-400" />
          <span className="text-stone-300">
            git commit -m &quot;feat(matching): optimize bipartite heuristic pruning&quot;
          </span>
        </div>
        <div className="text-stone-500 text-[11px]">
          ACTIVE REPOSITORY COMMITS // STABLE BUILD
        </div>
      </div>
    </section>
  );
}
