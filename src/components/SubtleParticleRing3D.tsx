import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "../lib/particleUtils";

const SubtleParticleRing3D = ({ className = "" }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        className="bg-transparent"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <PointCircle />
      </Canvas>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef<any>(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.02; // Rotation plus lente
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.slice(0, 50).map((point) => ( // Réduire le nombre de points
        <Point key={`inner-${point.idx}`} position={point.position} color={point.color} />
      ))}
      {pointsOuter.slice(0, 20).map((point) => ( // Réduire le nombre de points
        <Point key={`outer-${point.idx}`} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }: { position: [number, number, number]; color: string }) => {
  return (
    <Sphere position={position} args={[0.05, 8, 8]}> {/* Points plus petits */}
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.2}
        roughness={0.7}
        metalness={0.3}
        transparent
        opacity={0.7}
        color={color}
      />
    </Sphere>
  );
};

export default SubtleParticleRing3D;