'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface NetworkNode {
  id: string;
  name: string;
  pos: [number, number, number];
  radius: number;
  color: string;
}

const NODES: NetworkNode[] = [
  { id: 'hub', name: 'Coordination Engine', pos: [0, 0, 0], radius: 0.35, color: '#ffffff' },
  { id: 'vol', name: 'Volunteer Registry', pos: [-1.8, 1.2, 0.5], radius: 0.22, color: '#e4e4e7' },
  { id: 'cert', name: 'Skill Verification', pos: [-2.2, -0.9, -0.4], radius: 0.18, color: '#a1a1aa' },
  { id: 'event', name: 'Disaster Operations', pos: [1.9, 1.1, -0.5], radius: 0.22, color: '#d4d4d8' },
  { id: 'res', name: 'Resource Allocation', pos: [1.7, -1.2, 0.6], radius: 0.2, color: '#71717a' },
  { id: 'schema', name: 'PostgreSQL Models', pos: [0, -1.8, -0.2], radius: 0.2, color: '#e4e4e7' },
];

const CONNECTIONS: [number, number][] = [
  [0, 1], // Hub -> Volunteers
  [0, 2], // Hub -> Certifications
  [0, 3], // Hub -> Disaster Operations
  [0, 4], // Hub -> Resource Allocation
  [0, 5], // Hub -> DB Models
  [1, 2], // Volunteers -> Certifications
  [3, 4], // Operations -> Resources
];

export function SamanvayNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const pulseRefs = useRef<THREE.Mesh[]>([]);

  // Create Bezier curves for connections
  const curves = useMemo(() => {
    return CONNECTIONS.map(([i, j]) => {
      const p1 = new THREE.Vector3(...NODES[i].pos);
      const p2 = new THREE.Vector3(...NODES[j].pos);
      const mid = new THREE.Vector3()
        .addVectors(p1, p2)
        .multiplyScalar(0.5)
        .add(new THREE.Vector3(0, 0.2, 0.3));
      return new THREE.QuadraticBezierCurve3(p1, mid, p2);
    });
  }, []);

  // Curve points for rendering lines
  const linePoints = useMemo(() => {
    return curves.map((curve) => curve.getPoints(30));
  }, [curves]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.2 - 0.2;
      groupRef.current.rotation.x = Math.cos(t * 0.12) * 0.08;
    }

    // Move dispatch pulse packets along the curves
    pulseRefs.current.forEach((mesh, idx) => {
      if (mesh && curves[idx]) {
        const u = (t * 0.4 + idx * 0.18) % 1.0;
        const pt = curves[idx].getPoint(u);
        mesh.position.copy(pt);
      }
    });
  });

  return (
    <group position={[0, -8, 0]} ref={groupRef}>
      {/* Nodes */}
      {NODES.map((node) => (
        <group key={node.id} position={node.pos}>
          {/* Node Core */}
          <mesh>
            <sphereGeometry args={[node.radius, 24, 24]} />
            <meshStandardMaterial
              color="#09090b"
              emissive={node.color}
              emissiveIntensity={0.6}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>

          {/* Halo Ring */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[node.radius * 1.3, node.radius * 1.38, 32]} />
            <meshBasicMaterial color={node.color} transparent opacity={0.4} side={THREE.DoubleSide} />
          </mesh>
        </group>
      ))}

      {/* Network Lines */}
      {linePoints.map((pts, idx) => {
        const positions = new Float32Array(pts.length * 3);
        pts.forEach((p, i) => {
          positions[i * 3] = p.x;
          positions[i * 3 + 1] = p.y;
          positions[i * 3 + 2] = p.z;
        });

        return (
          <group key={`line-${idx}`}>
            <line>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  count={pts.length}
                  array={positions}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial color="#3f3f46" transparent opacity={0.5} />
            </line>

            {/* Traveling Dispatch Data Packet */}
            <mesh
              ref={(el) => {
                if (el) pulseRefs.current[idx] = el;
              }}
            >
              <sphereGeometry args={[0.045, 12, 12]} />
              <meshBasicMaterial color="#ffffff" />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}
