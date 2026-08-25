'use client';

import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { globalScrollState } from '@/hooks/useScrollProgress';
import { getCameraTrajectory, lerp } from '@/utils/math';

export function CameraRig() {
  const { camera } = useThree();
  const currentPos = useRef(new THREE.Vector3(0, 0, 8));
  const currentTarget = useRef(new THREE.Vector3(0, 0, 0));
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      mouse.current.targetX = nx * 0.4;
      mouse.current.targetY = ny * 0.3;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((_, delta) => {
    // Dampen mouse parallax
    mouse.current.x = lerp(mouse.current.x, mouse.current.targetX, 0.05);
    mouse.current.y = lerp(mouse.current.y, mouse.current.targetY, 0.05);

    // Sample camera path based on current scroll progress
    const { position, target } = getCameraTrajectory(globalScrollState.progress);

    // Apply smooth damping to camera travel
    const damping = Math.min(delta * 4.0, 0.1);

    currentPos.current.x = lerp(currentPos.current.x, position.x + mouse.current.x, damping);
    currentPos.current.y = lerp(currentPos.current.y, position.y + mouse.current.y, damping);
    currentPos.current.z = lerp(currentPos.current.z, position.z, damping);

    currentTarget.current.x = lerp(currentTarget.current.x, target.x, damping);
    currentTarget.current.y = lerp(currentTarget.current.y, target.y, damping);
    currentTarget.current.z = lerp(currentTarget.current.z, target.z, damping);

    camera.position.copy(currentPos.current);
    camera.lookAt(currentTarget.current);
  });

  return null;
}
