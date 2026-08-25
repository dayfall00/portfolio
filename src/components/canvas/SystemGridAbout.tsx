'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const LAYERS = [
  { yOffset: 1.2, label: 'CONTROLLER LAYER', color: '#71717a' },
  { yOffset: 0.4, label: 'SERVICE LAYER', color: '#a1a1aa' },
  { yOffset: -0.4, label: 'REPOSITORY LAYER', color: '#d4d4d8' },
  { yOffset: -1.2, label: 'DATABASE & DATA STORE', color: '#ffffff' },
];

export function SystemGridAbout() {
  const groupRef = useRef<THREE.Group>(null);
  const pulseRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.15 + 0.35;
      groupRef.current.rotation.x = 0.2 + Math.cos(t * 0.1) * 0.05;
    }

    // Animate data flow pulses between architectural planes
    pulseRefs.current.forEach((mesh, i) => {
      if (mesh) {
        const offset = (t * 1.5 + i * 0.8) % 3.0 - 1.5;
        mesh.position.y = offset;
      }
    });
  });

  return (
    <group position={[0, -4, 0]} ref={groupRef}>
      {/* 4 Architectural Planes */}
      {LAYERS.map((layer, idx) => (
        <group key={layer.label} position={[0, layer.yOffset, 0]}>
          {/* Subtle Grid Plane */}
          <gridHelper
            args={[3.4, 8, layer.color, '#1c1c22']}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
          />
          {/* Corner Bounding Indicators */}
          {[-1.7, 1.7].map((x) =>
            [-1.7, 1.7].map((z) => (
              <mesh key={`corner-${x}-${z}`} position={[x, 0, z]}>
                <boxGeometry args={[0.08, 0.08, 0.08]} />
                <meshBasicMaterial color="#ffffff" />
              </mesh>
            ))
          )}
        </group>
      ))}

      {/* Vertical Data Bus Conduits */}
      {[-1.2, 0, 1.2].map((x, colIdx) => (
        <group key={`conduit-${x}`} position={[x, 0, 0]}>
          <line>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([0, 1.5, 0, 0, -1.5, 0])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#3f3f46" transparent opacity={0.6} />
          </line>

          {/* Traveling Data Pulse */}
          <mesh
            ref={(el) => {
              if (el) pulseRefs.current[colIdx] = el;
            }}
            position={[0, 0, 0]}
          >
            <sphereGeometry args={[0.06, 12, 12]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        </group>
      ))}
    </group>
  );
}
