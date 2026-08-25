'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function BackgroundLattice() {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate continuous atmospheric particle field across Y: 10 to -35
  const { positions, opacities } = useMemo(() => {
    const count = 1200;
    const pos = new Float32Array(count * 3);
    const op = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 28;     // X: -14 to +14
      pos[i * 3 + 1] = (Math.random() - 0.5) * 45 - 12; // Y: 10 to -35
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16 - 2;  // Z: -10 to +6
      op[i] = Math.random() * 0.4 + 0.1;
    }

    return { positions: pos, opacities: op };
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.015;
    }
  });

  return (
    <group>
      {/* Deep atmospheric particle dust */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          color="#8892b0"
          transparent
          opacity={0.35}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Subtle background vertical grid guides */}
      {[-8, -4, 0, 4, 8].map((x) => (
        <line key={`guide-${x}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([x, 10, -8, x, -35, -8])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#1f242d" transparent opacity={0.25} />
        </line>
      ))}
    </group>
  );
}
