import { Suspense, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF, Environment, Html } from "@react-three/drei";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

interface InteractiveModelProps {
  modelPath: string;
  modelType?: "gltf" | "glb" | "obj" | "fbx";
  autoRotate?: boolean;
  enableZoom?: boolean;
  enablePan?: boolean;
  scale?: number;
  position?: [number, number, number];
}

// GLTF/GLB Loader Component
const GLTFModel = ({ url, scale = 1, position = [0, 0, 0] }: { url: string; scale?: number; position?: [number, number, number] }) => {
  const { scene } = useGLTF(url);
  const meshRef = useRef<THREE.Group>(null);

  // Auto-rotate animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <primitive
      ref={meshRef}
      object={scene}
      scale={scale}
      position={position}
    />
  );
};

// OBJ Loader Component
const OBJModel = ({ url, scale = 1, position = [0, 0, 0], autoRotate = true }: { url: string; scale?: number; position?: [number, number, number]; autoRotate?: boolean }) => {
  const obj = useLoader(OBJLoader, url);
  const meshRef = useRef<THREE.Group>(null);

  // Create material if object doesn't have one
  obj.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      if (!child.material) {
        child.material = new THREE.MeshStandardMaterial({
          color: "#ffffff",
          roughness: 0.7,
          metalness: 0.3,
        });
      }
    }
  });

  useFrame(() => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <primitive
      ref={meshRef}
      object={obj}
      scale={scale}
      position={position}
    />
  );
};

// FBX Loader Component
const FBXModel = ({ url, scale = 1, position = [0, 0, 0] }: { url: string; scale?: number; position?: [number, number, number] }) => {
  const fbx = useLoader(FBXLoader, url);
  const meshRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <primitive
      ref={meshRef}
      object={fbx}
      scale={scale}
      position={position}
    />
  );
};

const InteractiveModel = ({
  modelPath,
  modelType = "gltf",
  autoRotate = true,
  enableZoom = true,
  enablePan = true,
  scale = 1,
  position = [0, 0, 0],
}: InteractiveModelProps) => {
  const renderModel = () => {
    switch (modelType) {
      case "gltf":
      case "glb":
        return <GLTFModel url={modelPath} scale={scale} position={position} autoRotate={autoRotate} />;
      case "obj":
        return <OBJModel url={modelPath} scale={scale} position={position} autoRotate={autoRotate} />;
      case "fbx":
        return <FBXModel url={modelPath} scale={scale} position={position} autoRotate={autoRotate} />;
      default:
        return <GLTFModel url={modelPath} scale={scale} position={position} autoRotate={autoRotate} />;
    }
  };

  return (
    <Suspense
      fallback={
        <Html center>
          <div className="text-white text-sm">Loading 3D model...</div>
        </Html>
      }
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />

      {/* Environment for better lighting */}
      <Environment preset="sunset" />

      {/* Model */}
      {renderModel()}

      {/* Camera Controls */}
      <OrbitControls
        enableZoom={enableZoom}
        enablePan={enablePan}
        autoRotate={autoRotate}
        autoRotateSpeed={0.5}
        minDistance={2}
        maxDistance={10}
        enableDamping
        dampingFactor={0.05}
      />

      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
    </Suspense>
  );
};

export default InteractiveModel;
