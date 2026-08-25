'use client';

import { useState, useEffect } from 'react';
import { globalScrollState } from '@/hooks/useScrollProgress';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [section, setSection] = useState('HERO');

  useEffect(() => {
    let animFrame: number;

    const update = () => {
      setProgress(Math.round(globalScrollState.progress * 100));
      setSection(globalScrollState.activeSection.toUpperCase());
      animFrame = requestAnimationFrame(update);
    };

    animFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <aside
      className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-end space-y-3 pointer-events-none"
      aria-hidden="true"
    >
      <div className="flex flex-col items-end text-[11px] font-mono text-foreground-subtle space-y-0.5">
        <span className="tracking-wider text-foreground-muted font-medium">{section}</span>
        <span>{progress}%</span>
      </div>

      {/* Vertical Progress Line */}
      <div className="w-[1px] h-28 bg-border/80 relative overflow-hidden">
        <div
          className="w-full bg-white transition-all duration-75"
          style={{ height: `${progress}%` }}
        />
      </div>
    </aside>
  );
}
