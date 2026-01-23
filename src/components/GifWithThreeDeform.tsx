import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import ThreeGifMesh from "./ThreeGifMesh";

interface GifWithThreeDeformProps {
  gifSrc: string;
  className?: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
}

const GifWithThreeDeform = ({ 
  gifSrc, 
  className = "", 
  width = 4,
  height = 4.4,
  aspectRatio = "aspect-[1/1.1]"
}: GifWithThreeDeformProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className={`relative ${className} ${aspectRatio} bg-background rounded-lg overflow-hidden`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Canvas
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <directionalLight position={[-5, -5, -5]} intensity={0.3} />
          <ThreeGifMesh gifSrc={gifSrc} width={width} height={height} hovered={hovered} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GifWithThreeDeform;
