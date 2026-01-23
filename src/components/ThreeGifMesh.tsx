import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, PlaneGeometry, CanvasTexture, NearestFilter } from "three";

interface ThreeGifMeshProps {
  gifSrc: string;
  width?: number;
  height?: number;
  hovered?: boolean;
}

const ThreeGifMesh = ({ gifSrc, width = 4, height = 4.4, hovered = false }: ThreeGifMeshProps) => {
  const meshRef = useRef<Mesh>(null);
  const [texture, setTexture] = useState<CanvasTexture | null>(null);
  const [time, setTime] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Load GIF and create canvas texture
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = gifSrc;
    
    img.onload = () => {
      imgRef.current = img;
      
      // Create canvas to render GIF frames
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        const texture = new CanvasTexture(canvas);
        texture.minFilter = NearestFilter;
        texture.magFilter = NearestFilter;
        texture.needsUpdate = true;
        setTexture(texture);
        canvasRef.current = canvas;
        
        // Update texture periodically to show GIF animation
        const updateTexture = () => {
          if (ctx && img) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
            texture.needsUpdate = true;
          }
          requestAnimationFrame(updateTexture);
        };
        updateTexture();
      }
    };
  }, [gifSrc]);

  // Animate deformation on hover
  useFrame((state) => {
    if (!meshRef.current) return;
    
    setTime(state.clock.elapsedTime);
    
    const mesh = meshRef.current;
    const geometry = mesh.geometry as PlaneGeometry;
    
    if (geometry && hovered) {
      const positions = geometry.attributes.position.array as Float32Array;
      
      // Store original positions if not already stored
      if (!(geometry as any).originalPositions) {
        (geometry as any).originalPositions = [...positions];
      }
      
      const originalPositions = (geometry as any).originalPositions;

      // Apply wave deformation
      for (let i = 0; i < positions.length; i += 3) {
        const x = originalPositions[i];
        const y = originalPositions[i + 1];
        const z = originalPositions[i + 2];

        // Create wave effect with smooth transition
        const waveX = Math.sin(y * 2 + time * 2) * 0.15;
        const waveY = Math.cos(x * 2 + time * 2) * 0.15;
        const waveZ = Math.sin((x + y) * 1.5 + time * 3) * 0.08;

        positions[i] = x + waveX;
        positions[i + 1] = y + waveY;
        positions[i + 2] = z + waveZ;
      }

      geometry.attributes.position.needsUpdate = true;
      geometry.computeVertexNormals();
    } else if (geometry && (geometry as any).originalPositions) {
      // Smoothly restore original positions when not hovered
      const positions = geometry.attributes.position.array as Float32Array;
      const originalPositions = (geometry as any).originalPositions;
      
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += (originalPositions[i] - positions[i]) * 0.1;
        positions[i + 1] += (originalPositions[i + 1] - positions[i + 1]) * 0.1;
        positions[i + 2] += (originalPositions[i + 2] - positions[i + 2]) * 0.1;
      }
      
      geometry.attributes.position.needsUpdate = true;
      geometry.computeVertexNormals();
    }

    // Rotate and scale slightly on hover
    if (hovered) {
      mesh.rotation.y = Math.sin(time) * 0.15;
      mesh.rotation.x = Math.cos(time * 0.8) * 0.08;
      mesh.scale.set(1.05, 1.05, 1.05);
    } else {
      mesh.rotation.y *= 0.9;
      mesh.rotation.x *= 0.9;
      const targetScale = { x: 1, y: 1, z: 1 };
      mesh.scale.lerp(targetScale as any, 0.1);
    }
  });

  if (!texture) return null;

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[width, height, 32, 32]} />
      <meshStandardMaterial
        map={texture}
        transparent
        opacity={1}
      />
    </mesh>
  );
};

export default ThreeGifMesh;
