'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function NeuralFieldLearning() {
  const meshRef = useRef<THREE.Points>(null);
  const gridWidth = 24;
  const gridHeight = 24;
  const count = gridWidth * gridHeight;

  const { originalPositions, positions } = useMemo(() => {
    const orig = new Float32Array(count * 3);
    const pos = new Float32Array(count * 3);

    let idx = 0;
    for (let i = 0; i < gridWidth; i++) {
      for (let j = 0; j < gridHeight; j++) {
        const x = (i - gridWidth / 2) * 0.28;
        const z = (j - gridHeight / 2) * 0.28;
        const y = 0;

        orig[idx * 3] = x;
        orig[idx * 3 + 1] = y;
        orig[idx * 3 + 2] = z;

        pos[idx * 3] = x;
        pos[idx * 3 + 1] = y;
        pos[idx * 3 + 2] = z;

        idx++;
      }
    }

    return { originalPositions: orig, positions: pos };
  }, [count, gridWidth, gridHeight]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!meshRef.current) return;

    const posAttr = meshRef.current.geometry.attributes.position;
    const array = posAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const x = originalPositions[i * 3];
      const z = originalPositions[i * 3 + 2];

      // Procedural Neural Latent Wave Equation
      const dist = Math.sqrt(x * x + z * z);
      const wave1 = Math.sin(dist * 2.0 - t * 2.0) * 0.35;
      const wave2 = Math.cos(x * 1.5 + t) * 0.2;
      const wave3 = Math.sin(z * 1.5 - t * 0.8) * 0.2;

      array[i * 3 + 1] = wave1 + wave2 + wave3;
    }

    posAttr.needsUpdate = true;
    meshRef.current.rotation.y = t * 0.05;
  });

  return (
    <group position={[0, -22, 0]}>
      {/* 3D Undulating Neural Vector Field */}
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#d4d4d8"
          transparent
          opacity={0.7}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Outer Bounding Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.8, 3.84, 64]} />
        <meshBasicMaterial color="#3f3f46" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}
