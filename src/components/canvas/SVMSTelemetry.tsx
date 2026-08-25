'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function SVMSTelemetry() {
  const groupRef = useRef<THREE.Group>(null);
  const vehicleRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const packetRefs = useRef<THREE.Mesh[]>([]);

  // Telemetry 3D trajectory spline (represents GPS route)
  const trajectory = useMemo(() => {
    const points = [
      new THREE.Vector3(-3.0, 0.8, -1.0),
      new THREE.Vector3(-1.5, -0.4, 0.8),
      new THREE.Vector3(0.0, 0.5, -0.5),
      new THREE.Vector3(1.6, -0.6, 0.6),
      new THREE.Vector3(3.2, 0.7, -0.8),
    ];
    return new THREE.CatmullRomCurve3(points, true);
  }, []);

  const routePoints = useMemo(() => trajectory.getPoints(80), [trajectory]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.15 + 0.1;
    }

    // Move primary vehicle telemetry beacon along trajectory
    if (vehicleRef.current) {
      const u = (t * 0.12) % 1.0;
      const pt = trajectory.getPoint(u);
      const tangent = trajectory.getTangent(u);

      vehicleRef.current.position.copy(pt);
      vehicleRef.current.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 0, 1),
        tangent.clone().normalize()
      );
    }

    // Rotate radar ring
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 2.5;
    }

    // Animate streaming telemetry data packets
    packetRefs.current.forEach((mesh, idx) => {
      if (mesh) {
        const u = (t * 0.25 + idx * 0.2) % 1.0;
        mesh.position.copy(trajectory.getPoint(u));
      }
    });
  });

  const linePositions = useMemo(() => {
    const arr = new Float32Array(routePoints.length * 3);
    routePoints.forEach((p, i) => {
      arr[i * 3] = p.x;
      arr[i * 3 + 1] = p.y;
      arr[i * 3 + 2] = p.z;
    });
    return arr;
  }, [routePoints]);

  return (
    <group position={[0, -13, 0]} ref={groupRef}>
      {/* 3D Geospatial Coordinate Grid Floor */}
      <gridHelper
        args={[7, 14, '#3f3f46', '#18181b']}
        position={[0, -1.2, 0]}
      />

      {/* Telemetry Route Spline Line */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={routePoints.length}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#71717a" transparent opacity={0.6} />
      </line>

      {/* Real-Time Vehicle Beacon */}
      <group ref={vehicleRef}>
        {/* Core Vehicle Diamond Asset */}
        <mesh>
          <octahedronGeometry args={[0.24, 0]} />
          <meshStandardMaterial
            color="#09090b"
            emissive="#ffffff"
            emissiveIntensity={0.8}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Telemetry Sensor Radar Pulse */}
        <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.38, 0.44, 32]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.5} side={THREE.DoubleSide} />
        </mesh>
      </group>

      {/* Streaming Real-Time Telemetry Data Packets */}
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh
          key={`pkt-${i}`}
          ref={(el) => {
            if (el) packetRefs.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshBasicMaterial color="#e4e4e7" />
        </mesh>
      ))}

      {/* Waypoint Altitude Coordinate Pillars */}
      {[-2, 0, 2].map((x, idx) => (
        <group key={`waypoint-${idx}`} position={[x, -1.2, idx === 1 ? 0 : idx === 0 ? 1 : -1]}>
          <line>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([0, 0, 0, 0, 1.8, 0])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#27272a" />
          </line>
          <mesh position={[0, 1.8, 0]}>
            <boxGeometry args={[0.08, 0.08, 0.08]} />
            <meshBasicMaterial color="#a1a1aa" />
          </mesh>
        </group>
      ))}
    </group>
  );
}
