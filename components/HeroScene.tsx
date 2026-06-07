"use client";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron, Stars } from "@react-three/drei";

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }} dpr={[1, 2]}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#e879f9" />
      <directionalLight position={[-5, -2, 3]} intensity={1} color="#67e8f9" />
      <Stars radius={50} depth={50} count={1500} factor={4} fade speed={1} />
      <Float speed={1.4} rotationIntensity={1.2} floatIntensity={1.2}>
        <Icosahedron args={[1.4, 4]}>
          <MeshDistortMaterial color="#a78bfa" distort={0.45} speed={1.6} roughness={0.1} metalness={0.9} />
        </Icosahedron>
      </Float>
    </Canvas>
  );
}