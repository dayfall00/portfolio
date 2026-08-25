'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function SignalBeaconContact() {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1;
    }

    if (ring1Ref.current) {
      const scale = 1 + Math.sin(t * 2.0) * 0.08;
      ring1Ref.current.scale.set(scale, scale, scale);
      ring1Ref.current.rotation.z = t * 0.5;
    }

    if (ring2Ref.current) {
      const scale = 1 + Math.cos(t * 2.0) * 0.08;
      ring2Ref.current.scale.set(scale, scale, scale);
      ring2Ref.current.rotation.z = -t * 0.4;
    }

    if (coreRef.current) {
      coreRef.current.rotation.y = -t * 0.3;
    }
  });

  return (
    <group position={[0, -26, 0]} ref={groupRef}>
      {/* Central Focused Beacon Prism */}
      <mesh ref={coreRef}>
        <octahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial
          color="#050505"
          emissive="#ffffff"
          emissiveIntensity={1.2}
          roughness={0.05}
          metalness={0.95}
        />
      </mesh>

      {/* Vertical Signal Light Conduit */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 8, 16]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
      </mesh>

      {/* Target Crosshair Rings */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.5, 1.54, 64]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.6} side={THREE.DoubleSide} />
      </mesh>

      <mesh ref={ring2Ref} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.4, 2.43, 64]} />
        <meshBasicMaterial color="#71717a" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>

      {/* Convergent Vector Ray Spokes */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x = Math.cos(rad) * 2.8;
        const z = Math.sin(rad) * 2.8;
        return (
          <line key={`ray-${deg}`}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([0, 0, 0, x, 0, z])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#3f3f46" transparent opacity={0.3} />
          </line>
        );
      })}
    </group>
  );
}
