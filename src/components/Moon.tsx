import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Moon = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Rotate moon slowly
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group position={[3, 2, -5]}>
      {/* Main moon sphere */}
      <mesh ref={meshRef} castShadow receiveShadow>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial
          color="#e8e8e8"
          emissive="#f0f0f0"
          emissiveIntensity={0.3}
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      {/* Moon craters for texture */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 0.3 + Math.random() * 0.4;
        const distance = 0.6 + Math.random() * 0.4;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        const z = Math.random() * 0.3 - 0.15;

        return (
          <mesh
            key={i}
            position={[x, y, z]}
            scale={[radius, radius, radius * 0.3]}
          >
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial
              color="#d0d0d0"
              roughness={0.9}
              metalness={0}
            />
          </mesh>
        );
      })}

      {/* Glow effect around moon */}
      <mesh>
        <sphereGeometry args={[1.7, 32, 32]} />
        <meshBasicMaterial
          color="#f0f0f0"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

export default Moon;
