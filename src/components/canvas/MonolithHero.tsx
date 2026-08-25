'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float } from '@react-three/drei';

export function MonolithHero() {
  const monolithRef = useRef<THREE.Mesh>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);
  const wireframeRef = useRef<THREE.LineSegments>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (monolithRef.current) {
      monolithRef.current.rotation.y = t * 0.15;
      monolithRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
    }

    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y = -t * 0.3;
      const scale = 1 + Math.sin(t * 1.5) * 0.05;
      innerCoreRef.current.scale.set(scale, scale, scale);
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.2;
      ringRef.current.rotation.x = 1.1 + Math.sin(t * 0.3) * 0.05;
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = t * 0.15;
      wireframeRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Main Obsidian Monolith Mesh */}
        <mesh ref={monolithRef} castShadow receiveShadow>
          <octahedronGeometry args={[1.6, 0]} />
          <meshStandardMaterial
            color="#08080a"
            metalness={0.92}
            roughness={0.12}
            envMapIntensity={1.5}
          />
        </mesh>

        {/* Outer Precision Wireframe */}
        <lineSegments ref={wireframeRef}>
          <edgesGeometry args={[new THREE.OctahedronGeometry(1.61, 0)]} />
          <lineBasicMaterial color="#d4d4d8" transparent opacity={0.4} />
        </lineSegments>

        {/* Inner Glowing Core */}
        <mesh ref={innerCoreRef}>
          <octahedronGeometry args={[0.7, 0]} />
          <meshBasicMaterial
            color="#ffffff"
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>

        {/* Orbital Coordinate Ring */}
        <group ref={ringRef}>
          <mesh>
            <ringGeometry args={[2.3, 2.34, 64]} />
            <meshBasicMaterial
              color="#52525b"
              side={THREE.DoubleSide}
              transparent
              opacity={0.4}
            />
          </mesh>
          {/* Orbital Satellite Node */}
          <mesh position={[2.32, 0, 0]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        </group>
      </Float>
    </group>
  );
}
