export interface SkillCategory {
  number: string;
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    description: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    number: "01",
    category: "LANGUAGES",
    description: "Core programming languages for low-level systems, algorithmic problem solving, and modern full-stack development.",
    skills: [
      { name: "C++", level: "Advanced", description: "STL, DSA, memory management, high-performance competitive programming" },
      { name: "Python", level: "Advanced", description: "NumPy, Pandas, PyTorch, asynchronous scripting, data science pipelines" },
      { name: "TypeScript", level: "Advanced", description: "Strict static typing, complex generics, modern async/await architectures" },
      { name: "JavaScript (ESNext)", level: "Advanced", description: "Event loop, closures, modern Web APIs, microtask queuing" },
      { name: "SQL", level: "Proficient", description: "Complex joins, indexing strategies, CTEs, spatial PostGIS queries" },
    ],
  },
  {
    number: "02",
    category: "AI / MACHINE LEARNING",
    description: "Deep learning frameworks, computer vision pipelines, and classical statistical models.",
    skills: [
      { name: "PyTorch", level: "Intermediate+", description: "Custom tensor ops, CNN architectures, training loops, autograd" },
      { name: "OpenCV", level: "Proficient", description: "Edge extraction, homography, morphological kernels, video streams" },
      { name: "YOLO (v8)", level: "Proficient", description: "Object detection, bounding box annotation, transfer learning fine-tuning" },
      { name: "LightGBM & XGBoost", level: "Advanced", description: "Gradient boosted trees, tabular classification, feature importance" },
      { name: "NLP & RAG Systems", level: "Proficient", description: "Dense vector embeddings, semantic retrieval, rerankers, ChromaDB" },
      { name: "Scikit-Learn", level: "Advanced", description: "Clustering, dimensionality reduction (PCA/t-SNE), evaluation metrics" },
    ],
  },
  {
    number: "03",
    category: "ENGINEERING & SYSTEMS",
    description: "Modern web architecture, distributed backends, real-time protocols, and databases.",
    skills: [
      { name: "React & Next.js", level: "Advanced", description: "App Router, Server Components, client state, performance profiling" },
      { name: "Node.js & Express", level: "Advanced", description: "RESTful architecture, streaming APIs, middleware design" },
      { name: "PostgreSQL & Prisma", level: "Advanced", description: "Relational schema design, migrations, indexing, ACID transactions" },
      { name: "Redis", level: "Proficient", description: "In-memory caching, pub/sub messaging, geospatial queries" },
      { name: "WebSockets", level: "Proficient", description: "Bi-directional real-time telemetry streaming, binary buffers" },
      { name: "Firebase", level: "Proficient", description: "Firestore, real-time rules, authentication, serverless triggers" },
    ],
  },
  {
    number: "04",
    category: "TOOLS & INFRASTRUCTURE",
    description: "DevOps, containerization, version control, and developer tooling.",
    skills: [
      { name: "Git & GitHub", level: "Advanced", description: "Trunk-based workflow, interactive rebase, GitHub Actions CI/CD" },
      { name: "Docker", level: "Proficient", description: "Multi-stage builds, container orchestration, microservice isolation" },
      { name: "Linux / POSIX", level: "Proficient", description: "Shell scripting, process management, networking, systemd" },
      { name: "Vercel & Cloudflare", level: "Advanced", description: "Edge functions, DNS routing, CDN caching, deployments" },
      { name: "Tailwind CSS", level: "Advanced", description: "Design systems, fluid responsive typography, micro-interactions" },
    ],
  },
];

export const currentlyExploring = [
  { topic: "RAG & Agentic Workflows", desc: "Multi-agent coordination & tool execution loops" },
  { topic: "LLM Systems Architecture", desc: "Model quantization, vLLM inference engines & speculative decoding" },
  { topic: "Computer Vision & NeRFs", desc: "3D scene reconstruction & spatial representations" },
  { topic: "Advanced DSA", desc: "Competitive programming on Codeforces & LeetCode (Graph theory, DP)" },
  { topic: "Distributed Systems", desc: "Consensus algorithms, Raft protocol, event-driven streaming" },
  { topic: "Creative WebGL / Shaders", desc: "GLSL fragment shaders, fluid simulations, procedural geometry" },
];
