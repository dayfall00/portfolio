export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  shortDescription: string;
  tags: string[];
  role: string;
  timeline: string;
  status: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  context: string;
  challenge: string;
  approach: string;
  architecture: {
    frontend: string;
    api: string;
    services: string;
    database: string;
    engine: string;
  };
  keyFeatures: string[];
  metrics: { label: string; value: string }[];
  results: string;
  learnings: string;
  nextSteps: string;
  visualTheme: {
    gradient: string;
    accentGlow: string;
    graphicType: "network" | "collaboration" | "marketplace" | "telemetry" | "vector";
  };
}

export const projects: Project[] = [
  {
    slug: "samanvay",
    number: "01",
    title: "Samanvay",
    category: "Resource Matching & Coordination Engine",
    year: "2025",
    shortDescription: "Resource coordination and intelligent bipartite matching infrastructure designed for rapid disaster relief and high-concurrency volunteer allocation.",
    tags: ["Backend", "AI / Scoring", "PostgreSQL", "Prisma", "TypeScript", "Redis"],
    role: "Systems Architect & Full-Stack Engineer",
    timeline: "4 Months (Active Development)",
    status: "Production Beta",
    githubUrl: "https://github.com/adityabhardwaj/samanvay",
    liveUrl: "https://samanvay-relief.internal",
    featured: true,
    context: "During critical emergencies and rapid disaster relief operations, coordination breakdown is rarely caused by a shortage of human goodwill or available resources. The real chokepoint is matching latency, fragmented inventory ledgers, and conflicting manual dispatchers attempting to book the same volunteer or equipment simultaneously.",
    challenge: "Traditional relational databases degrade when evaluating multi-attribute affinity matrices (e.g. proximity distance, skill certifications, perishable transit timeframes, and urgent demand thresholds) across thousands of simultaneous requests under volatile network connectivity.",
    approach: "Architected a dual-stage matching engine: an asynchronous spatial ingestion queue with Redis geospatial indexing for sub-second candidate pruning, followed by a weighted bipartite scoring pipeline executed via transactional Postgres workers with optimistic concurrency locks.",
    architecture: {
      frontend: "Next.js App Router, Tailwind CSS, Mapbox GL real-time situational dashboard",
      api: "Type-safe tRPC / Express REST endpoints with rate-limiting and payload validation",
      services: "Decoupled asynchronous worker queue (BullMQ + Redis) for continuous scoring",
      database: "PostgreSQL with PostGIS extension managed via Prisma ORM with read replicas",
      engine: "Custom weighted bipartite matching engine factoring dynamic proximity & priority decays",
    },
    keyFeatures: [
      "Sub-50ms candidate filtering across 10,000+ active volunteer nodes using geospatial radial bounding",
      "Optimistic locking mechanism preventing double-allocation of emergency vehicles and critical supplies",
      "Offline-first field dispatch sync with progressive reconciliation upon signal restoration",
      "Dynamic priority aging algorithm that escalates unattended high-severity incidents automatically",
    ],
    metrics: [
      { label: "Dispatch Latency", value: "< 42ms" },
      { label: "Simulated Concurrent Nodes", value: "10,000+" },
      { label: "Zero-Conflict Guarantees", value: "100%" },
      { label: "Throughput", value: "2,400 req/s" },
    ],
    results: "Validated in simulated disaster scenarios with 10k mock entities, reducing idle volunteer dispatch lag by 84% compared to manual dispatch spreadsheets and achieving zero double-booking incidents across all concurrent tests.",
    learnings: "Building high-velocity allocation systems reinforced the power of decoupling ingestion from evaluation. Leaning on PostGIS spatial primitives rather than computing Euclidean geometry in application code yielded a 12x throughput multiplier.",
    nextSteps: "Integrating predictive temporal forecasting models to pre-stage supplies in high-probability risk clusters before logistical bottlenecks manifest.",
    visualTheme: {
      gradient: "from-emerald-950/40 via-zinc-900 to-black",
      accentGlow: "rgba(204, 255, 0, 0.15)",
      graphicType: "network",
    },
  },
  {
    slug: "buildbuddy",
    number: "02",
    title: "BuildBuddy",
    category: "Developer Ecosystem & Collaboration Platform",
    year: "2025",
    shortDescription: "An ecosystem for university builders and student engineers to discover technical partners, pitch projects, and track milestones transparently.",
    tags: ["React", "Firebase", "Real-Time", "Product Design", "TypeScript", "Tailwind CSS"],
    role: "Lead Product Engineer & Designer",
    timeline: "3 Months",
    status: "Live Campus Community",
    githubUrl: "https://github.com/adityabhardwaj/buildbuddy",
    liveUrl: "https://buildbuddy.space",
    featured: true,
    context: "Every semester, hundreds of ambitious students want to build hackathon projects, research experiments, or startups, but struggle with team discovery. Existing channels (Slack, Discord, WhatsApp) suffer from message dilution, lack of verified skill visibility, and zero structured milestone tracking.",
    challenge: "Designing a product that feels frictionless for spontaneous idea pitches while maintaining technical accountability and structured collaboration without feeling like enterprise JIRA.",
    approach: "Constructed a project canvas platform combining micro-pitch decks, verified GitHub repository linkage, role-based application workflows, and real-time sprint boards with reactive notifications.",
    architecture: {
      frontend: "React with Vite, Tailwind CSS, Framer Motion for responsive tactile interactions",
      api: "Serverless cloud functions with JWT authentication and webhook ingestion",
      services: "Real-time listeners on Firestore for live project collaboration and chat channels",
      database: "Firebase Firestore with fine-grained security rules and index optimizations",
      engine: "Skill-affinity recommendation algorithm connecting complimentary tech profiles",
    },
    keyFeatures: [
      "Skill-graph matching that pairs complementary skillsets (e.g. ML researchers with frontend architects)",
      "Interactive project canvas with live markdown briefs, architecture snippets, and open roles",
      "Direct GitHub organization integration showing real commit activity on public milestones",
      "Instant real-time team chat with code syntax highlighting and asset attachments",
    ],
    metrics: [
      { label: "Active Student Builders", value: "850+" },
      { label: "Collaborative Teams Formed", value: "120+" },
      { label: "Hackathon Submissions Shipped", value: "34" },
      { label: "Average Team Formation Time", value: "48 hrs" },
    ],
    results: "Adopted across multiple college hackathons and engineering cohorts, facilitating 120+ student project collaborations with an average team assembly time of under 48 hours.",
    learnings: "Balancing product simplicity with technical utility requires obsessive UX restraint. Student builders engage most when friction between discovering an idea and requesting to contribute is under two clicks.",
    nextSteps: "Implementing automated peer-code review invitations and verified micro-credentials linked to shipped GitHub repositories.",
    visualTheme: {
      gradient: "from-blue-950/40 via-zinc-900 to-black",
      accentGlow: "rgba(59, 130, 246, 0.15)",
      graphicType: "collaboration",
    },
  },
  {
    slug: "rootbridge",
    number: "03",
    title: "RootBridge",
    category: "Multilingual Local Artisan & Labor Marketplace",
    year: "2024",
    shortDescription: "A multilingual marketplace connecting customers with local workers, independent technicians, and traditional artisans via voice-first discovery.",
    tags: ["React", "UX Engineering", "Web Speech API", "Geolocation", "Node.js", "Express"],
    role: "Full-Stack Developer & Accessibility Lead",
    timeline: "3 Months",
    status: "Hackathon Award Winner",
    githubUrl: "https://github.com/adityabhardwaj/rootbridge",
    liveUrl: "https://rootbridge-demo.vercel.app",
    featured: true,
    context: "Millions of skilled grassroots artisans, carpenters, and technicians in developing regions are excluded from the modern gig economy due to text-heavy digital interfaces, complex sign-up funnels, and linguistic barriers.",
    challenge: "Creating an ultra-accessible, voice-driven interface that operates seamlessly for low-literacy users in regional languages while providing clients with precise geographic matching and transparent pricing.",
    approach: "Designed a voice-first UX leveraging Web Speech synthesis and multi-lingual prompt translation, backed by a lightweight mobile-optimized PWA that functions reliably on low-bandwidth 3G mobile devices.",
    architecture: {
      frontend: "Mobile-first React PWA with high-contrast tactile iconography and audio feedback",
      api: "Node.js & Express RESTful services with audio stream transcribing endpoints",
      services: "Geolocation distance matrix and regional dialect translation middleware",
      database: "MongoDB with spatial GeoJSON indexes for hyper-local radius queries",
      engine: "Voice intent parser translating spoken vernacular queries into structured category searches",
    },
    keyFeatures: [
      "Voice search enabling non-literate artisans to register skills and quote pricing verbally",
      "Dynamic regional dialect switching supporting Hindi, Marathi, and English phonetics",
      "Interactive proximity radar mapping verified local workshops within walking distances",
      "Offline-capable service cards with audio-narrated credentials and customer ratings",
    ],
    metrics: [
      { label: "Regional Dialects Supported", value: "3 Languages" },
      { label: "Voice Search Precision", value: "91.4%" },
      { label: "Bundle Size (Mobile PWA)", value: "< 140KB" },
      { label: "Hackathon Placement", value: "Top 3 Winner" },
    ],
    results: "Won Top 3 at a regional civic-tech hackathon. Demonstrated zero-text onboarding where test subjects registered new service listings in under 90 seconds purely via voice prompts.",
    learnings: "True accessibility is an engineering constraint, not an afterthought. Designing for low-end devices and non-Latin alphabets demanded strict bundle-size budgets and forgiving touch target sizing.",
    nextSteps: "Integrating offline WebAssembly speech models directly on-device to eliminate cloud transcription latency entirely.",
    visualTheme: {
      gradient: "from-amber-950/40 via-zinc-900 to-black",
      accentGlow: "rgba(245, 158, 11, 0.15)",
      graphicType: "marketplace",
    },
  },
  {
    slug: "fleet-vms",
    number: "04",
    title: "Fleet VMS",
    category: "Real-Time Telemetry & Geospatial Monitoring",
    year: "2024",
    shortDescription: "High-frequency telemetry ingestion engine and live geospatial dashboard for monitoring distributed vehicle fleets with sub-second latency.",
    tags: ["React", "WebSockets", "TimescaleDB", "MapLibre GL", "Data Visualization", "Node.js"],
    role: "Backend & Systems Developer",
    timeline: "2.5 Months",
    status: "Prototype Benchmark",
    githubUrl: "https://github.com/adityabhardwaj/fleet-vms",
    liveUrl: "https://fleet-vms.internal",
    featured: true,
    context: "Modern commercial logistics operations require continuous situational awareness: real-time speed variations, battery/fuel thermals, route adherence, and sudden geofence violations across hundreds of mobile assets.",
    challenge: "Handling unpredictable telemetry packet bursts without dropping frames on client-side map renderers, while calculating spatio-temporal route deviations in real time.",
    approach: "Engineered a reactive pipeline using WebSockets for bi-directional streaming, message batching with binary buffers, and WebGL-accelerated vector tile layers to render smooth 60fps fleet movements.",
    architecture: {
      frontend: "React with MapLibre GL and deck.gl for hardware-accelerated geospatial visualization",
      api: "High-concurrency WebSocket server handling continuous coordinate heartbeats",
      services: "Geofencing alert daemon evaluating polygon intersection buffers asynchronously",
      database: "TimescaleDB (time-series Postgres extension) for compressed hypertable telemetry",
      engine: "Spatial interpolation pipeline smoothing GPS jitter and dead-reckoning lost signal intervals",
    },
    keyFeatures: [
      "Sub-second telemetry sync over bi-directional WebSocket channels with heartbeat reconnects",
      "Dynamic polygon geofence alerts triggering instant push notifications on boundary breach",
      "Interactive timeline playback permitting retrospective replay of vehicle trips and velocity logs",
      "WebGL deck.gl particle layers visualizing historical traffic density and idle hotspots",
    ],
    metrics: [
      { label: "Telemetry Ingestion Rate", value: "5,000 pts/sec" },
      { label: "Client FPS with 1,000+ Vehicles", value: "60 FPS" },
      { label: "Stream Latency", value: "< 120ms" },
      { label: "Data Compression Ratio", value: "92% in Timescale" },
    ],
    results: "Stress-tested with 1,000 synthetic vehicles transmitting coordinates every 500ms; maintained consistent 60fps map rendering and zero packet loss over continuous 24-hour test cycles.",
    learnings: "Rendering thousands of moving markers in the DOM collapses browser layout engines. Moving coordinate updates to an instanced WebGL canvas buffer is non-negotiable for real-time telemetry.",
    nextSteps: "Integrating an anomaly detection model trained on historical acceleration traces to identify dangerous driving patterns proactively.",
    visualTheme: {
      gradient: "from-cyan-950/40 via-zinc-900 to-black",
      accentGlow: "rgba(6, 182, 212, 0.15)",
      graphicType: "telemetry",
    },
  },
  {
    slug: "ml-matching",
    number: "05",
    title: "ML Entity Matching",
    category: "Entity Resolution & De-duplication Pipeline",
    year: "2024",
    shortDescription: "High-throughput entity resolution pipeline for identifying and matching ambiguous business records across noisy, heterogeneous datasets.",
    tags: ["Python", "LightGBM", "Blocking Rules", "NLP", "Scikit-Learn", "FastAPI"],
    role: "Machine Learning Engineer",
    timeline: "2 Months",
    status: "Benchmarked Pipeline",
    githubUrl: "https://github.com/adityabhardwaj/ml-entity-matching",
    liveUrl: "https://github.com/adityabhardwaj/ml-entity-matching#benchmarks",
    featured: true,
    context: "Enterprise databases and public business registries frequently contain duplicate or slightly corrupted entity records (e.g. varying abbreviations, transposed zip codes, phonetic misspellings). Naive pairwise comparisons scale quadratically at O(N²), making deduplication impossible on large corpora.",
    challenge: "Drastically reducing candidate pairs without discarding true positives, followed by training a classifier capable of discerning subtle lexical, geographical, and acoustic similarities with high recall.",
    approach: "Designed a multi-phase resolution pipeline: intelligent blocking via MinHash LSH and phonetic indexing to eliminate 99.7% of false pairs, followed by a feature engineering suite feeding an optimized LightGBM gradient boosted model.",
    architecture: {
      frontend: "FastAPI interactive documentation and Streamlit benchmark inspection dashboard",
      api: "High-performance Python inference API packaged in lightweight Docker containers",
      services: "Batch processing pipeline with multi-core parallelism using Ray / Joblib",
      database: "Parquet columnar storage with DuckDB for blazingly fast feature extraction",
      engine: "LightGBM classifier trained on Jaro-Winkler, Levenshtein, and TF-IDF cosine distances",
    },
    keyFeatures: [
      "LSH & phonetic blocking pruning O(N²) search space down to O(N log N) candidate comparisons",
      "Feature engineering combining string distance metrics, token overlap, and geographical geodistance",
      "Threshold calibration maximizing F1-score with tunable precision/recall trade-off curves",
      "Batch evaluation tooling outputting confusion matrices, ROC-AUC, and feature importance graphs",
    ],
    metrics: [
      { label: "Pair Reduction Rate", value: "99.72%" },
      { label: "F1-Score on Test Benchmark", value: "0.948" },
      { label: "Throughput", value: "45,000 pairs/sec" },
      { label: "Inference Latency", value: "1.8ms / pair" },
    ],
    results: "Evaluated on standard industry benchmarks and messy real-world datasets, achieving 94.8% F1-score while processing 45,000 candidate entity pairs per second on commodity CPU hardware.",
    learnings: "Feature engineering and high-quality blocking contribute far more to entity resolution accuracy than marginal hyperparameter tuning on complex deep learning models. Domain-aware heuristics win.",
    nextSteps: "Experimenting with cross-encoder transformer architectures for ambiguous border cases where string distances fail to capture semantic corporate subsidiaries.",
    visualTheme: {
      gradient: "from-purple-950/40 via-zinc-900 to-black",
      accentGlow: "rgba(168, 85, 247, 0.15)",
      graphicType: "vector",
    },
  },
];
