import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";
import * as THREE from "three";

interface PointProps {
  position: [number, number, number];
  color: string;
}

const ParticleRing3D: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: "100vh" }}
        className="bg-slate-900"
      >
        <OrbitControls 
          maxDistance={20} 
          minDistance={10} 
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
        />
        <directionalLight intensity={0.5} />
        <pointLight position={[-30, 0, -30]} intensity={10.0} />
        <PointCircle />
      </Canvas>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-slate-200 font-medium text-2xl md:text-5xl text-center">
          Drag & Zoom
        </h1>
      </div>
    </div>
  );
};

const PointCircle: React.FC = () => {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point 
          key={point.idx} 
          position={point.position} 
          color={point.color} 
        />
      ))}
      {pointsOuter.map((point) => (
        <Point 
          key={point.idx} 
          position={point.position} 
          color={point.color} 
        />
      ))}
    </group>
  );
};

const Point: React.FC<PointProps> = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default ParticleRing3D;