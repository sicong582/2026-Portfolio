import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import StarField from "./StarField";
import ShootingStars from "./ShootingStars";

const StarFieldBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none opacity-70">
      <Canvas
        camera={{ position: [0, 0, 0], fov: 75 }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
        onCreated={(state) => {
          // Handle WebGL context loss
          const gl = state.gl;
          const canvas = state.gl.domElement;
          canvas.addEventListener('webglcontextlost', (event) => {
            event.preventDefault();
            console.warn('WebGL context lost');
          });
          canvas.addEventListener('webglcontextrestored', () => {
            console.info('WebGL context restored');
          });
        }}
      >
        <Suspense fallback={null}>
          <StarField count={8000} />
          <ShootingStars count={15} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarFieldBackground;
