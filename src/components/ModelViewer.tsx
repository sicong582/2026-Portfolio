import { Canvas } from "@react-three/fiber";
import InteractiveModel from "./InteractiveModel";

interface ModelViewerProps {
  modelPath: string;
  modelType?: "gltf" | "glb" | "obj" | "fbx";
  className?: string;
  autoRotate?: boolean;
  scale?: number;
}

const ModelViewer = ({
  modelPath,
  modelType = "gltf",
  className = "",
  autoRotate = true,
  scale = 1,
}: ModelViewerProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <InteractiveModel
          modelPath={modelPath}
          modelType={modelType}
          autoRotate={autoRotate}
          enableZoom={true}
          enablePan={true}
          scale={scale}
        />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
