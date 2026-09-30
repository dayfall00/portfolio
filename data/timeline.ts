export interface TimelineEvent {
  year: string;
  quarter?: string;
  type: "Education" | "Hackathon" | "Project" | "Research";
  title: string;
  organization: string;
  description: string;
  highlight?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "2024 — Present",
    type: "Education",
    title: "B.Tech in Computer Science & Engineering",
    organization: "School of Engineering & Applied Sciences",
    description: "Deepening coursework in Operating Systems, Database Management Systems, Theory of Computation, Computer Networks, and Artificial Intelligence. Maintaining top-tier academic standing while actively shipping open-source software.",
    highlight: "Dean's Honor List & Active Core Member of the Developer Student Club",
  },
  {
    year: "2025",
    quarter: "Q1",
    type: "Project",
    title: "Samanvay Resource Engine",
    organization: "Independent Systems Architecture",
    description: "Designed an asynchronous bipartite matching engine for rapid disaster relief distribution, handling 10k concurrent simulated nodes with sub-50ms dispatch latency.",
    highlight: "Full-Stack System Architecture",
  },
  {
    year: "2024",
    quarter: "Q4",
    type: "Hackathon",
    title: "RootBridge — Top 3 Winner",
    organization: "Regional Civic-Tech Hackathon",
    description: "Built a voice-first multilingual marketplace connecting informal artisans with clients. Spearheaded accessibility UX and regional phonetics translation.",
    highlight: "Awarded Top 3 Innovation Award out of 80+ competing teams",
  },
  {
    year: "2024",
    quarter: "Q3",
    type: "Research",
    title: "ML Entity Resolution Pipeline",
    organization: "Data Science Exploration Lab",
    description: "Engineered blocking rules with MinHash LSH and gradient boosted trees (LightGBM) to resolve ambiguous corporate records across large noisy registries with 94.8% F1-score.",
    highlight: "99.7% pairwise candidate reduction rate",
  },
  {
    year: "2024",
    quarter: "Q2",
    type: "Project",
    title: "Fleet VMS Real-Time Telemetry",
    organization: "Systems Prototype",
    description: "Engineered a WebSocket-driven geospatial vehicle telemetry visualization system rendering 1,000+ simultaneous moving vehicle streams at smooth 60fps.",
    highlight: "WebGL & TimescaleDB compression",
  },
  {
    year: "2023 — 2024",
    type: "Education",
    title: "Algorithmic Problem Solving & Competitive Programming",
    organization: "Self-Directed DSA Deep Dive",
    description: "Solved 450+ complex algorithmic challenges across LeetCode and Codeforces covering dynamic programming, graph algorithms (Dijkstra, Tarjan, MST), disjoint sets, and segment trees.",
    highlight: "Ranked in top 5% on algorithmic contests",
  },
];
