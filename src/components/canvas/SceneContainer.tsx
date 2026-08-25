'use client';

import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraRig } from './CameraRig';
import { Lighting } from './Lighting';
import { BackgroundLattice } from './BackgroundLattice';
import { MonolithHero } from './MonolithHero';
import { SystemGridAbout } from './SystemGridAbout';
import { SamanvayNetwork } from './SamanvayNetwork';
import { SVMSTelemetry } from './SVMSTelemetry';
import { SkillsConstellation } from './SkillsConstellation';
import { NeuralFieldLearning } from './NeuralFieldLearning';
import { SignalBeaconContact } from './SignalBeaconContact';

export function SceneContainer() {
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!mounted || !hasWebGL) {
    // Graceful fallback for non-WebGL environments
    return (
      <div
        className="fixed inset-0 pointer-events-none z-0 bg-[#050505] opacity-50"
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45, near: 0.1, far: 100 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
      >
        <Suspense fallback={null}>
          <Lighting />
          <CameraRig />
          <BackgroundLattice />

          {/* Continuous Spatial Scene Anchors */}
          <MonolithHero />
          <SystemGridAbout />
          <SamanvayNetwork />
          <SVMSTelemetry />
          <SkillsConstellation />
          <NeuralFieldLearning />
          <SignalBeaconContact />
        </Suspense>
      </Canvas>
    </div>
  );
}
