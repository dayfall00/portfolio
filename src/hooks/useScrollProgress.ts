import { useEffect, useRef } from 'react';

export interface ScrollState {
  progress: number; // 0 to 1
  scroll: number;   // pixels
  limit: number;    // total scrollable pixels
  velocity: number;
  direction: number; // 1 = down, -1 = up
  activeSection: string;
}

// Global mutable ref for 60fps WebGL useFrame access without React re-renders
export const globalScrollState: ScrollState = {
  progress: 0,
  scroll: 0,
  limit: 1,
  velocity: 0,
  direction: 1,
  activeSection: 'hero',
};

const SECTION_RANGES: { id: string; start: number; end: number }[] = [
  { id: 'hero', start: 0.0, end: 0.14 },
  { id: 'about', start: 0.14, end: 0.30 },
  { id: 'samanvay', start: 0.30, end: 0.50 },
  { id: 'svms', start: 0.50, end: 0.70 },
  { id: 'skills', start: 0.70, end: 0.85 },
  { id: 'learning', start: 0.85, end: 0.93 },
  { id: 'contact', start: 0.93, end: 1.0 },
];

export function updateGlobalScroll(scroll: number, limit: number, velocity: number, direction: number) {
  const safeLimit = limit > 0 ? limit : 1;
  const progress = Math.min(Math.max(scroll / safeLimit, 0), 1);

  globalScrollState.scroll = scroll;
  globalScrollState.limit = safeLimit;
  globalScrollState.progress = progress;
  globalScrollState.velocity = velocity;
  globalScrollState.direction = direction;

  for (const section of SECTION_RANGES) {
    if (progress >= section.start && progress <= section.end) {
      globalScrollState.activeSection = section.id;
      break;
    }
  }
}
