"use client";

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const GOLD = "#D4AF37";

/** Slowly rotating wireframe knot — the "digital engineering" motif. */
function Knot() {
  const ref = React.useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.2;
    ref.current.rotation.x += delta * 0.08;
  });
  return (
    <group ref={ref}>
      <mesh>
        <torusKnotGeometry args={[1.1, 0.34, 128, 24]} />
        <meshBasicMaterial color={GOLD} wireframe transparent opacity={0.35} />
      </mesh>
      <mesh scale={1.7}>
        <icosahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color={"#ffffff"} wireframe transparent opacity={0.06} />
      </mesh>
    </group>
  );
}

function Particles({ count = 90 }: { count?: number }) {
  const positions = React.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, [count]);

  const ref = React.useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.04;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color={GOLD} transparent opacity={0.5} sizeAttenuation depthWrite={false} />
    </points>
  );
}

export default function TechScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.5} />
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
        <Knot />
      </Float>
      <Particles />
    </Canvas>
  );
}
