import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ShootingStars = ({ count = 20 }: { count?: number }) => {
  const group = useRef<THREE.Group>(null);

  // Generate shooting star trails
  const stars = useMemo(() => {
    return Array.from({ length: count }, () => ({
      start: new THREE.Vector3(
        (Math.random() - 0.5) * 400,
        (Math.random() - 0.5) * 400,
        (Math.random() - 0.5) * 400
      ),
      direction: new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      ).normalize(),
      speed: 0.5 + Math.random() * 1.5,
      length: 20 + Math.random() * 30,
      opacity: Math.random(),
    }));
  }, [count]);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.x = state.clock.elapsedTime * 0.002;
      group.current.rotation.y = state.clock.elapsedTime * 0.003;
    }
  });

  return (
    <group ref={group}>
      {stars.map((star, i) => (
        <ShootingStar key={i} star={star} />
      ))}
    </group>
  );
};

const ShootingStar = ({ star }: { star: any }) => {
  const lineRef = useRef<THREE.Line>(null);
  
  const geometry = useMemo(() => {
    const positions = new Float32Array(star.length * 3);
    for (let i = 0; i < star.length; i++) {
      const offset = star.direction.clone().multiplyScalar(i * star.speed);
      const point = star.start.clone().add(offset);
      positions[i * 3] = point.x;
      positions[i * 3 + 1] = point.y;
      positions[i * 3 + 2] = point.z;
    }
    return new THREE.BufferGeometry().setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
  }, [star]);

  return (
    <line ref={lineRef} geometry={geometry}>
      <lineBasicMaterial
        color={0xffffff}
        transparent
        opacity={star.opacity * 0.5}
        blending={THREE.AdditiveBlending}
      />
    </line>
  );
};

export default ShootingStars;
