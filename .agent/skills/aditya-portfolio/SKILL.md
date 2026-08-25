---
name: aditya-portfolio
description: >-
  Creative & Technical Master Blueprint for Aditya Bhardwaj's Personal 3D Portfolio.
  Enforces visual direction, 3D storytelling architecture, performance budgets,
  animation standards, accessibility rules, and strict content fidelity to the resume.
---

# Aditya Bhardwaj Portfolio — Creative & Technical Master Skill

## 1. Project Identity & Philosophy
- **Identity**: Aditya Bhardwaj — Computer Science & Engineering Undergraduate (PSIT Kanpur / AKTU, CGPA 7.38/10).
- **Core Concept**: *"Building Systems That Move"*
- **Core Aesthetic**: Premium, cinematic, technical, minimal, monochrome (near-black `#050505` to `#0a0a0a`), sophisticated lighting, brushed metallic & dark carbon materials, subtle film grain, restrained kinetic typography, deliberate whitespace.
- **Narrative**: One continuous 3D journey through an architectural/topological computational space where the camera acts as the narrator traversing systems, telemetry, coordination graphs, and technical constellations.

---

## 2. Source of Truth & Content Rules
- **Strict Data Fidelity**: All biographical and technical details MUST come directly from Aditya's verified resume. Never fabricate credentials, awards, metrics, or roles.
- **Primary Projects**:
  1. **Samanvay — Unified Humanitarian Coordination Platform**:
     - *Stack*: React, TypeScript, Node.js, Express.js, PostgreSQL, Prisma ORM, Zod.
     - *Key Highlights*: Volunteer Coordination Engine (skill registry, certifications, availability scheduling, assignment lifecycle, attendance tracking), normalized PostgreSQL schema (10+ models), repository-service-controller architecture, skill-based volunteer matching with scoring logic, Zod validation layers.
     - *Repo*: `github.com/motordeath/Samanvay`
  2. **SVMS — Smart Vehicle Monitoring System**:
     - *Stack*: React, TypeScript, Node.js, Express.js, MongoDB, Socket.io, Leaflet.js, Recharts.
     - *Key Highlights*: Real-time vehicle tracking, driver behavior analytics, trip management, WebSocket-based live telemetry updates (speed, fuel, coordinates), Leaflet.js map visualization, Recharts fleet performance dashboard, scalable MongoDB schema.
     - *Repo*: `github.com/motordeath/vms`
- **Technical Skills**:
  - *Languages*: C, C++, Java, Python, JavaScript, TypeScript, Solidity
  - *Frontend*: React.js, HTML5, CSS3, Tailwind CSS, Next.js
  - *Backend*: Node.js, Express.js, FastAPI, RESTful APIs, Repository-Service-Controller Architecture
  - *Databases & ORM*: PostgreSQL, MongoDB, Prisma ORM
  - *Web3 / Blockchain*: Solidity, Hardhat, Ethereum Smart Contracts
  - *Tools & DevOps*: Git, GitHub, GitHub Actions, Firebase, Postman, VS Code
  - *Core CS*: Data Structures & Algorithms, OOP, DBMS, OS, Computer Networks, Software Engineering, API Design, Data Validation (Zod)
  - *Currently Learning*: Machine Learning, Artificial Intelligence, Deep Learning Fundamentals, AWS / Cloud Computing, System Design.

---

## 3. Prohibited Design Anti-Patterns
DO NOT implement:
- ❌ Generic purple/cyan AI gradients, floating rainbow blobs, or cliché neon glows.
- ❌ Cluttered floating 3D spheres without semantic meaning.
- ❌ Over-glazed frosted glassmorphism cards blocking viewport content.
- ❌ Abrupt cut-scene jumps between sections; scroll transitions must be continuous.
- ❌ Gimmicky, distracting custom cursor trails that degrade performance.
- ❌ Fake statistics (e.g., "100+ projects completed", "99.9% client satisfaction").
- ❌ Cluttered templates or standard vertical bootstrap card stacks.
- ❌ Auto-playing jarring audio or intrusive unskippable cinematic intro locks.

---

## 4. Technical Stack & Architecture
- **Framework**: Next.js (App Router) + React 19 + TypeScript (Strict Mode).
- **3D Graphics**: Three.js + React Three Fiber (`@react-three/fiber`) + `@react-three/drei`.
- **Animation & Scroll Control**: GSAP + ScrollTrigger + Lenis smooth scroll.
- **Styling**: Tailwind CSS + Custom CSS Variables for design tokens.
- **Icons**: Lucide React.
- **Canvas Architecture**: Single persistent `<Canvas>` mounted globally in the background layout with fixed position (`fixed inset-0 pointer-events-none`). Interactive 3D targets receive pointer events via selective Raycaster or HTML overlay dispatch.

---

## 5. 3D & Animation Principles
1. **Camera as Narrator**: The camera moves along a defined 3D spline/curve synced to scroll progress via GSAP ScrollTrigger and Lenis.
2. **Persistent Scene with Morphing Anchors**:
   - *Hero*: Monolithic geometric core / obsidian prism floating in an atmospheric void with subtle ambient light reflections.
   - *About / Philosophy*: Deconstructs into topological system grid representing interconnected architecture.
   - *Samanvay Section*: Network graph topology: coordination nodes, volunteer/org clusters, pulse pulses along bezier connections.
   - *SVMS Section*: Real-time telemetry grid: dynamic vector path, live coordinate telemetry beacon, speed/trajectory vector lines.
   - *Skills Section*: Constellation matrix of interconnected capability nodes.
   - *Currently Learning Section*: Fluid quantum/neural latent field that shifts dynamically.
   - *Contact Section*: Scene converges into a singular focused hyper-monolith signal beacon.
3. **Decoupled Scroll State**: Never pass scroll progress into React component state (`useState`). Feed scroll progress directly into a mutable ref or Zustand store without causing React component re-renders, and sample it in Three.js `useFrame()`.
4. **Shaders**: Use lightweight, custom GLSL shaders for custom grid distortion, particle field drift, subtle monochrome film grain, and edge highlights.

---

## 6. Performance Budget & Optimizations
- **Target FPS**: Solid 60 FPS on modern desktop, 60 FPS on mobile.
- **Draw Call Budget**: Keep Three.js draw calls ≤ 20 across all scenes using `InstancedMesh` and merged geometries.
- **DPR Clamping**: Restrict WebGL `dpr` to `Math.min(window.devicePixelRatio, 1.5)` (or `2` max on desktop, `1` on low-tier mobile).
- **Asset Overhead**: Zero heavy uncompressed GLTF models. Prefer procedural parametric geometries, instanced primitives, and lightweight optimized binary Draco GLBs if models are used (< 500KB total).
- **Lifecycle & Resource Disposal**: Explicitly dispose geometries, materials, and textures on component unmount to prevent WebGL memory leaks.
- **Mobile Tiering**: On touch/mobile devices, disable expensive post-processing passes (e.g., Bloom, DepthOfField), reduce particle counts by 75%, and lock DPR to 1.0.

---

## 7. Responsive & Accessibility Guidelines
- **Responsive Philosophy**: Mobile is a distinct, carefully tailored experience with simplified camera sweeps and vertical layout adaptations—never a cramped desktop viewport.
- **`prefers-reduced-motion`**: When enabled, immediately disable 3D camera travel and GSAP scroll parallax; replace with instant smooth fades and standard static semantic layout.
- **Semantic HTML & Screen Readers**: All content (About, Projects, Skills, Contact) exists as semantic, accessible HTML (`<header>`, `<main>`, `<section>`, `<article>`, `<h2>`, `<p>`) fully readable by screen readers and indexable by search engine bots.
- **Keyboard Navigation**: All interactive elements (links, forms, project drawers) have visible `:focus-visible` focus rings and can be tabbed through sequentially.
- **Color Contrast**: Ensure all text satisfies WCAG AA (minimum 4.5:1 for body, 3:1 for large display headers).

---

## 8. Coding Conventions
- Strictly typed TypeScript interfaces for all data structures (no `any`).
- Modular component structure: separate Scene (3D), Sections (UI/DOM), Data (static models), Shaders (GLSL), and Hooks.
- Clean code with descriptive naming and zero unnecessary external libraries.
