"use client";

import { useState } from "react";
import { ArrowDown, Layers, Server, Database, Cpu, Monitor, CheckCircle2 } from "lucide-react";

interface ArchitectureDiagramProps {
  projectTitle: string;
  architecture: {
    frontend: string;
    api: string;
    services: string;
    database: string;
    engine: string;
  };
}

export default function ArchitectureDiagram({
  projectTitle,
  architecture,
}: ArchitectureDiagramProps) {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const layers = [
    {
      id: "frontend",
      title: "01 // CLIENT & PRESENTATION LAYER",
      short: "Client UI / Frontend",
      icon: Monitor,
      detail: architecture.frontend,
      protocol: "HTTPS / WSS / React Server Components",
      badge: "Edge Cached",
    },
    {
      id: "api",
      title: "02 // API GATEWAY & INGESTION",
      short: "API Gateway / Routing",
      icon: Server,
      detail: architecture.api,
      protocol: "RESTful JSON / tRPC / WebSockets",
      badge: "Rate-Limited & Validated",
    },
    {
      id: "services",
      title: "03 // ASYNCHRONOUS SERVICES & QUEUE",
      short: "Service Layer & Workers",
      icon: Layers,
      detail: architecture.services,
      protocol: "BullMQ / Redis PubSub / Event Loop",
      badge: "Decoupled Processing",
    },
    {
      id: "database",
      title: "04 // PERSISTENCE & DATA STORAGE",
      short: "Database & Spatial Indexing",
      icon: Database,
      detail: architecture.database,
      protocol: "PostgreSQL / PostGIS / TimescaleDB / Prisma",
      badge: "ACID Compliant",
    },
    {
      id: "engine",
      title: "05 // INFERENCE & COMPUTATION CORE",
      short: "ML / Optimization Engine",
      icon: Cpu,
      detail: architecture.engine,
      protocol: "NumPy / PyTorch / LightGBM / Vector Search",
      badge: "Sub-50ms Execution",
    },
  ];

  return (
    <div className="w-full bg-[#0d0f14] border border-white/[0.08] rounded-2xl p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] gap-3">
        <div>
          <span className="text-[11px] font-mono tracking-widest uppercase text-lime-400">
            SYSTEM ARCHITECTURE SPECIFICATION
          </span>
          <h4 className="text-xl font-bold uppercase tracking-tight text-stone-100 mt-1">
            {projectTitle} Execution Flow
          </h4>
        </div>

        <div className="text-xs font-mono text-stone-400 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.06] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
          <span>Click any layer to inspect protocol</span>
        </div>
      </div>

      {/* Interactive Layer Flow */}
      <div className="mt-8 space-y-3">
        {layers.map((layer, index) => {
          const Icon = layer.icon;
          const isSelected = activeLayer === index;

          return (
            <div key={layer.id} className="relative">
              <button
                onClick={() => setActiveLayer(index)}
                className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  isSelected
                    ? "bg-white/[0.06] border-lime-400/60 shadow-lg shadow-lime-400/5 ring-1 ring-lime-400/30"
                    : "bg-white/[0.02] border-white/[0.06] hover:border-white/[0.15] hover:bg-white/[0.03]"
                }`}
              >
                <div className="flex items-start sm:items-center gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      isSelected
                        ? "bg-lime-400 text-stone-950 font-bold"
                        : "bg-white/[0.05] text-stone-400"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-stone-400 tracking-wider">
                        {layer.title}
                      </span>
                      {isSelected && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
                      )}
                    </div>
                    <div className="text-base sm:text-lg font-bold text-stone-100 tracking-tight mt-0.5">
                      {layer.short}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:text-right">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-black/40 border border-white/[0.08] text-stone-300">
                    {layer.badge}
                  </span>
                </div>
              </button>

              {/* Arrow Connector between layers */}
              {index < layers.length - 1 && (
                <div className="flex justify-center my-1">
                  <ArrowDown className="w-4 h-4 text-stone-600 animate-pulse" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Selected Layer Technical Inspector Box */}
      <div className="mt-8 p-6 rounded-xl bg-black/60 border border-lime-400/30">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 text-xs font-mono">
          <span className="text-lime-400 font-bold uppercase tracking-wider">
            INSPECTOR // {layers[activeLayer].title}
          </span>
          <span className="text-stone-400 font-mono">
            PROTOCOL: {layers[activeLayer].protocol}
          </span>
        </div>
        <p className="mt-4 text-sm sm:text-base text-stone-200 font-mono leading-relaxed">
          {layers[activeLayer].detail}
        </p>
      </div>
    </div>
  );
}
