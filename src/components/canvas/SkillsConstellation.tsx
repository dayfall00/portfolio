'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const DOMAINS = [
  { name: 'Languages', radius: 1.4, count: 7, color: '#ffffff' },
  { name: 'Frontend', radius: 2.1, count: 6, color: '#e4e4e7' },
  { name: 'Backend', radius: 2.7, count: 6, color: '#a1a1aa' },
  { name: 'Databases', radius: 3.2, count: 4, color: '#71717a' },
  { name: 'Core CS', radius: 3.7, count: 6, color: '#d4d4d8' },
];

export function SkillsConstellation() {
  const groupRef = useRef<THREE.Group>(null);
  const ringRefs = useRef<THREE.Group[]>([]);

  // Generate nodes arranged on concentric orbital rings
  const ringNodes = useMemo(() => {
    return DOMAINS.map((domain, ringIdx) => {
      const nodes = [];
      for (let i = 0; i < domain.count; i++) {
        const angle = (i / domain.count) * Math.PI * 2 + ringIdx * 0.4;
        const x = Math.cos(angle) * domain.radius;
        const z = Math.sin(angle) * domain.radius;
        const y = Math.sin(angle * 3) * 0.2;
        nodes.push({ x, y, z, color: domain.color });
      }
      return { domain, nodes };
    });
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.05;
      groupRef.current.rotation.x = 0.35 + Math.sin(t * 0.1) * 0.05;
    }

    ringRefs.current.forEach((ring, idx) => {
      if (ring) {
        ring.rotation.y = t * (idx % 2 === 0 ? 0.08 : -0.06);
      }
    });
  });

  return (
    <group position={[0, -18, 0]} ref={groupRef}>
      {/* Central Knowledge Core */}
      <mesh>
        <sphereGeometry args={[0.3, 24, 24]} />
        <meshStandardMaterial
          color="#09090b"
          emissive="#ffffff"
          emissiveIntensity={0.9}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Orbital Rings & Constellation Nodes */}
      {ringNodes.map(({ domain, nodes }, ringIdx) => (
        <group
          key={domain.name}
          ref={(el) => {
            if (el) ringRefs.current[ringIdx] = el;
          }}
        >
          {/* Orbital Trace Line */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[domain.radius - 0.01, domain.radius + 0.01, 64]} />
            <meshBasicMaterial color="#27272a" transparent opacity={0.4} side={THREE.DoubleSide} />
          </mesh>

          {/* Nodes on Ring */}
          {nodes.map((node, i) => (
            <group key={`node-${ringIdx}-${i}`} position={[node.x, node.y, node.z]}>
              <mesh>
                <octahedronGeometry args={[0.07, 0]} />
                <meshBasicMaterial color={node.color} />
              </mesh>
            </group>
          ))}
        </group>
      ))}
    </group>
  );
}
