import { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  action?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  description,
  action,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-4xl"
      } ${className}`}
    >
      {badge && (
        <Reveal direction="down" duration={0.4}>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase bg-white/[0.04] border border-white/[0.08] text-lime-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
            {badge}
          </div>
        </Reveal>
      )}

      <Reveal direction="up" delay={0.05} duration={0.6}>
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase text-stone-100 font-sans leading-[0.95]">
          {title}
        </h2>
      </Reveal>

      {subtitle && (
        <Reveal direction="up" delay={0.1} duration={0.6}>
          <p className="mt-2 text-lg sm:text-xl font-medium text-stone-300 tracking-tight">
            {subtitle}
          </p>
        </Reveal>
      )}

      {description && (
        <Reveal direction="up" delay={0.15} duration={0.6}>
          <p className="mt-4 text-base sm:text-lg text-stone-400 font-normal leading-relaxed max-w-2xl">
            {description}
          </p>
        </Reveal>
      )}

      {action && (
        <Reveal direction="up" delay={0.2} duration={0.6}>
          <div className="mt-6">{action}</div>
        </Reveal>
      )}
    </div>
  );
}
