export interface Experiment {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: "Computer Vision" | "NLP / LLMs" | "Algorithms" | "Creative Tech" | "Systems";
  date: string;
  description: string;
  tech: string[];
  status: "Completed" | "Iterating" | "Experiment";
  insights: string;
  demoType: "yolo" | "rag" | "vision" | "graph" | "embeddings" | "audio";
}

export const experiments: Experiment[] = [
  {
    id: "yolo-tracking",
    number: "01",
    title: "YOLO Tracking & Flow",
    tagline: "Real-time edge object detection with ByteTrack multi-target association.",
    category: "Computer Vision",
    date: "2025",
    description: "Trained and benchmarked lightweight YOLOv8 models on custom dataset streams, linking bounding box detections across consecutive video frames using Kalman filtering and Hungarian matching.",
    tech: ["PyTorch", "YOLOv8", "OpenCV", "ByteTrack", "CUDA"],
    status: "Completed",
    insights: "Occlusion handling improves significantly when combining spatial IoU overlap with shallow appearance feature vectors.",
    demoType: "yolo",
  },
  {
    id: "rag-lab",
    number: "02",
    title: "Hybrid RAG Pipeline",
    tagline: "Exploring semantic search vs sparse lexical retrieval with cross-encoder reranking.",
    category: "NLP / LLMs",
    date: "2025",
    description: "Evaluated trade-offs between dense vector embeddings (BGE-large) and BM25 sparse keyword indices. Designed a reciprocal rank fusion (RRF) pipeline that feeds candidate chunks to a cross-encoder reranker before generation.",
    tech: ["Python", "LangChain", "ChromaDB", "Cross-Encoder", "Ollama"],
    status: "Iterating",
    insights: "Pure vector search frequently fails on exact acronyms and part numbers. Hybrid RRF improves factual hit rates by 34% over single-modality retrievers.",
    demoType: "rag",
  },
  {
    id: "vision-lab",
    number: "03",
    title: "OpenCV Spatial Matrix",
    tagline: "Interactive computer vision filter matrix: Canny edges, Sobel gradients, and Harris corners.",
    category: "Computer Vision",
    date: "2024",
    description: "A sandbox inspecting classical computer vision transformations. Experimenting with adaptive thresholding, morphological kernels, and Hough line transforms for structural blueprint extraction.",
    tech: ["C++", "Python", "OpenCV", "NumPy", "WebAssembly"],
    status: "Completed",
    insights: "Classical image processing operations remain indispensable for pre-filtering noisy imagery before feeding inference tensors into heavy neural networks.",
    demoType: "vision",
  },
  {
    id: "graph-algorithms",
    number: "04",
    title: "Heuristic Pathfinding",
    tagline: "Benchmarking A*, Dijkstra, and Bidirectional BFS on dynamic weighted cost fields.",
    category: "Algorithms",
    date: "2024",
    description: "Visual exploration of shortest-path algorithms across grid topologies with elevation penalties, obstacle walls, and diagonal movement costs.",
    tech: ["TypeScript", "Canvas API", "Data Structures", "Heuristics"],
    status: "Completed",
    insights: "Euclidean distance heuristics in A* dramatically prune node expansions compared to Dijkstra, but require tie-breaking adjustments when exploring open fields.",
    demoType: "graph",
  },
  {
    id: "latent-embeddings",
    number: "05",
    title: "Latent Manifold Projections",
    tagline: "Interactive dimensionality reduction & clustering in 2D latent space.",
    category: "NLP / LLMs",
    date: "2024",
    description: "Projecting 768-dimensional sentence transformer embeddings into 2D plane via t-SNE and UMAP, analyzing semantic neighborhood clustering across disparate technical disciplines.",
    tech: ["Python", "Scikit-Learn", "UMAP", "Sentence-Transformers", "Three.js"],
    status: "Experiment",
    insights: "Local cluster preservation is far superior in UMAP while retaining global topological structure, unlike standard t-SNE which tends to fracture continuous manifolds.",
    demoType: "embeddings",
  },
  {
    id: "audio-spectrogram",
    number: "06",
    title: "Acoustic Resonance Lab",
    tagline: "Real-time FFT audio visualizer & frequency spectrum decomposition.",
    category: "Creative Tech",
    date: "2024",
    description: "Fast Fourier Transform (FFT) analysis on microphone and synthesized harmonic signals, isolating fundamental frequencies and overtone structures.",
    tech: ["Web Audio API", "Canvas 2D", "Digital Signal Processing", "DSP"],
    status: "Completed",
    insights: "Real-time DSP in the browser using AnalyserNode provides immediate intuitive feedback for acoustic feature engineering.",
    demoType: "audio",
  },
];
