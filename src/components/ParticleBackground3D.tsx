import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ParticleBackground3D: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ height: "100vh", width: "100vw" }}
        className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        gl={{ antialias: false, alpha: false }}
        dpr={[1, 2]}
      >
        <ParticleField />
      </Canvas>
    </div>
  );
};

const ParticleField: React.FC = () => {
  const meshRef = useRef<THREE.Points>(null);
  
  // Generate particle positions and colors
  const particlesData = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Random positions in a sphere
      const radius = Math.random() * 20 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Gradient colors from blue to purple
      const colorIntensity = Math.random();
      colors[i * 3] = 0.3 + colorIntensity * 0.5; // Red
      colors[i * 3 + 1] = 0.2 + colorIntensity * 0.4; // Green  
      colors[i * 3 + 2] = 0.8 + colorIntensity * 0.2; // Blue
    }
    
    return { positions, colors, count };
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.01;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesData.count}
          array={particlesData.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesData.count}
          array={particlesData.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        sizeAttenuation={true}
        transparent={true}
        vertexColors={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export default ParticleBackground3D;