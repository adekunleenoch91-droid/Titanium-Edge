"use client";

import * as React from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/* ------------------------------------------------------------------ *
 * Titanium Edge — Hero 3D
 * Floating steel structure, a slowly rotating blueprint wireframe, and
 * ambient particles under gold depth lighting. Slow, elegant, optimised.
 * ------------------------------------------------------------------ */

const GOLD = "#D4AF37";
const STEEL = "#8A909B";

/** A single I-beam-ish steel member. */
function SteelBeam({
  position,
  rotation,
  length = 4,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  length?: number;
}) {
  return (
    <mesh position={position} rotation={rotation} castShadow receiveShadow>
      <boxGeometry args={[0.16, length, 0.16]} />
      <meshStandardMaterial
        color={STEEL}
        metalness={0.9}
        roughness={0.35}
        emissive={GOLD}
        emissiveIntensity={0.04}
      />
    </mesh>
  );
}

function SteelStructure() {
  const beams = React.useMemo(
    () =>
      [
        { position: [-3.4, 0, -2], rotation: [0, 0, 0.12], length: 6 },
        { position: [3.2, 0.4, -3], rotation: [0, 0, -0.1], length: 6.5 },
        { position: [-1.2, 1.6, -4], rotation: [0, 0, Math.PI / 2], length: 4.5 },
        { position: [1.4, -1.8, -2.5], rotation: [0, 0, Math.PI / 2], length: 4 },
        { position: [0.2, 2.4, -5], rotation: [0.2, 0, 0.4], length: 3 },
      ] as const,
    []
  );

  return (
    <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.6}>
      <group>
        {beams.map((b, i) => (
          <SteelBeam key={i} position={[...b.position]} rotation={[...b.rotation]} length={b.length} />
        ))}
      </group>
    </Float>
  );
}

/** Rotating blueprint wireframe — the "engineering drawing in space". */
function BlueprintWireframe() {
  const ref = React.useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.12;
    ref.current.rotation.x += delta * 0.04;
  });
  return (
    <group ref={ref} position={[2.6, -0.6, -1]}>
      <mesh>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial color={GOLD} wireframe transparent opacity={0.28} />
      </mesh>
      <mesh>
        <boxGeometry args={[2.4, 2.4, 2.4]} />
        <meshBasicMaterial color={"#ffffff"} wireframe transparent opacity={0.06} />
      </mesh>
    </group>
  );
}

/** Ambient drifting particles. */
function Particles({ count = 220 }: { count?: number }) {
  const ref = React.useRef<THREE.Points>(null);
  const positions = React.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 3;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.3;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color={GOLD}
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/** Subtle perspective camera drift toward the pointer. */
function CameraRig() {
  const { camera, pointer } = useThree();
  useFrame(() => {
    camera.position.x += (pointer.x * 0.8 - camera.position.x) * 0.03;
    camera.position.y += (pointer.y * 0.5 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, -2);
  });
  return null;
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#050505"]} />
      <fog attach="fog" args={["#050505", 6, 20]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 6, 4]} intensity={1.1} color={"#fff4d6"} />
      <pointLight position={[-4, -2, 2]} intensity={22} color={GOLD} distance={18} />
      <pointLight position={[3, 3, 3]} intensity={10} color={"#4a5a7a"} distance={16} />

      <SteelStructure />
      <BlueprintWireframe />
      <Particles />
      <CameraRig />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 7], fov: 42 }}
      style={{ width: "100%", height: "100%" }}
    >
      <Scene />
    </Canvas>
  );
}
