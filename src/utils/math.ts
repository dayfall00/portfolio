import * as THREE from 'three';

export function lerp(start: number, end: number, t: number): number {
  return start * (1 - t) + end * t;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  if (inMax === inMin) return outMin;
  const normalized = clamp((value - inMin) / (inMax - inMin), 0, 1);
  return outMin + normalized * (outMax - outMin);
}

// Cubic Catmull-Rom or Bezier spline evaluator for camera paths
export interface CameraKeyframe {
  progress: number;
  position: [number, number, number];
  target: [number, number, number];
}

export const CAMERA_PATH: CameraKeyframe[] = [
  { progress: 0.00, position: [0, 0, 8], target: [0, 0, 0] },          // Hero: Monolith direct front
  { progress: 0.14, position: [0, 0, 7.5], target: [0, 0, 0] },        // Hero exit
  { progress: 0.22, position: [2.5, -4, 6], target: [0, -4, 0] },      // About: Topological grid
  { progress: 0.32, position: [-3.2, -8, 5.5], target: [-0.5, -8, 0] }, // Samanvay: Multi-nodal network
  { progress: 0.52, position: [3.5, -13, 5], target: [0.5, -13, 0] },   // SVMS: Telemetry vector track
  { progress: 0.72, position: [0, -18, 6.5], target: [0, -18, 0] },     // Skills: Constellation matrix
  { progress: 0.86, position: [0, -22, 5.5], target: [0, -22, 0] },     // Learning: Neural flow field
  { progress: 1.00, position: [0, -26, 4.5], target: [0, -26, 0] },     // Contact: Convergent signal beacon
];

export function getCameraTrajectory(progress: number): {
  position: THREE.Vector3;
  target: THREE.Vector3;
} {
  const p = clamp(progress, 0, 1);

  // Find surrounding keyframes
  let idx = 0;
  for (let i = 0; i < CAMERA_PATH.length - 1; i++) {
    if (p >= CAMERA_PATH[i].progress && p <= CAMERA_PATH[i + 1].progress) {
      idx = i;
      break;
    }
  }

  const k1 = CAMERA_PATH[idx];
  const k2 = CAMERA_PATH[idx + 1] || k1;

  const segmentProgress =
    k2.progress === k1.progress
      ? 0
      : (p - k1.progress) / (k2.progress - k1.progress);

  // Smooth step / cosine easing for smooth segment transitions
  const smoothT = segmentProgress * segmentProgress * (3 - 2 * segmentProgress);

  const pos = new THREE.Vector3(
    lerp(k1.position[0], k2.position[0], smoothT),
    lerp(k1.position[1], k2.position[1], smoothT),
    lerp(k1.position[2], k2.position[2], smoothT)
  );

  const target = new THREE.Vector3(
    lerp(k1.target[0], k2.target[0], smoothT),
    lerp(k1.target[1], k2.target[1], smoothT),
    lerp(k1.target[2], k2.target[2], smoothT)
  );

  return { position: pos, target };
}
