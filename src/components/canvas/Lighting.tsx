'use client';

import { useRef } from 'react';
import * as THREE from 'three';

export function Lighting() {
  const dirLightRef = useRef<THREE.DirectionalLight>(null);

  return (
    <>
      {/* Ambient fill for near-black shadows */}
      <ambientLight intensity={0.35} color="#0c0d12" />

      {/* Key Rim Light for brushed metallic highlights */}
      <directionalLight
        ref={dirLightRef}
        position={[6, 12, 8]}
        intensity={1.8}
        color="#f4f5f8"
      />

      {/* Cool fill light for subtle tech-blue contrast */}
      <directionalLight
        position={[-6, -4, -4]}
        intensity={0.6}
        color="#8fa3bf"
      />

      {/* Soft floor bounce */}
      <pointLight
        position={[0, -10, 4]}
        intensity={0.8}
        distance={20}
        color="#384252"
      />
    </>
  );
}
