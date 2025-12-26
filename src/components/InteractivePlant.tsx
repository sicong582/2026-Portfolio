import { useRef, useState, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

const InteractivePlant = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseDistance, setMouseDistance] = useState(1);
  
  // Springs for smooth animation
  const springConfig = { stiffness: 100, damping: 15 };
  const intensity = useSpring(0, springConfig);
  
  // Transform intensity to animation values
  const leafSway1 = useTransform(intensity, [0, 1], [3, 15]);
  const leafSway2 = useTransform(intensity, [0, 1], [-2, -12]);
  const leafSway3 = useTransform(intensity, [0, 1], [4, 18]);
  const stemSway = useTransform(intensity, [0, 1], [1, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
      );
      
      // Normalize distance (0 = on top, 1 = far away)
      const maxDistance = 400;
      const normalizedDistance = Math.min(distance / maxDistance, 1);
      
      // Invert so closer = higher intensity
      const newIntensity = 1 - normalizedDistance;
      intensity.set(newIntensity);
      setMouseDistance(normalizedDistance);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [intensity]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full relative"
      style={{ minHeight: "300px" }}
    >
      <svg
        viewBox="0 0 200 280"
        className="w-full h-full"
        style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }}
      >
        {/* Main stem */}
        <motion.path
          d="M100 280 Q100 200 100 140 Q100 100 100 60"
          stroke="hsl(var(--foreground) / 0.6)"
          strokeWidth="2"
          fill="none"
          style={{ 
            rotate: stemSway,
            transformOrigin: "100px 280px"
          }}
        />

        {/* Leaf 1 - Large left */}
        <motion.g
          style={{ 
            rotate: leafSway1,
            transformOrigin: "100px 120px"
          }}
        >
          <motion.path
            d="M100 120 Q60 100 30 60 Q50 90 70 110 Q45 70 25 30 Q55 75 85 105 Q100 90 100 120"
            fill="none"
            stroke="hsl(var(--foreground) / 0.7)"
            strokeWidth="1.5"
            animate={{ 
              d: [
                "M100 120 Q60 100 30 60 Q50 90 70 110 Q45 70 25 30 Q55 75 85 105 Q100 90 100 120",
                "M100 120 Q55 95 25 55 Q48 88 68 108 Q40 65 20 25 Q52 72 82 102 Q100 88 100 120",
                "M100 120 Q60 100 30 60 Q50 90 70 110 Q45 70 25 30 Q55 75 85 105 Q100 90 100 120"
              ]
            }}
            transition={{
              duration: 3 + mouseDistance * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* Leaf veins */}
          <motion.path
            d="M100 120 Q70 95 40 55"
            fill="none"
            stroke="hsl(var(--foreground) / 0.4)"
            strokeWidth="0.8"
          />
        </motion.g>

        {/* Leaf 2 - Large right */}
        <motion.g
          style={{ 
            rotate: leafSway2,
            transformOrigin: "100px 100px"
          }}
        >
          <motion.path
            d="M100 100 Q140 80 170 40 Q150 70 130 90 Q155 50 175 10 Q145 55 115 85 Q100 70 100 100"
            fill="none"
            stroke="hsl(var(--foreground) / 0.7)"
            strokeWidth="1.5"
            animate={{ 
              d: [
                "M100 100 Q140 80 170 40 Q150 70 130 90 Q155 50 175 10 Q145 55 115 85 Q100 70 100 100",
                "M100 100 Q145 85 175 45 Q152 72 132 92 Q160 55 180 15 Q148 58 118 88 Q100 72 100 100",
                "M100 100 Q140 80 170 40 Q150 70 130 90 Q155 50 175 10 Q145 55 115 85 Q100 70 100 100"
              ]
            }}
            transition={{
              duration: 2.5 + mouseDistance * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
          />
          <motion.path
            d="M100 100 Q130 75 160 35"
            fill="none"
            stroke="hsl(var(--foreground) / 0.4)"
            strokeWidth="0.8"
          />
        </motion.g>

        {/* Leaf 3 - Top */}
        <motion.g
          style={{ 
            rotate: leafSway3,
            transformOrigin: "100px 60px"
          }}
        >
          <motion.path
            d="M100 60 Q80 30 60 5 Q85 25 100 45 Q115 25 140 5 Q120 30 100 60"
            fill="none"
            stroke="hsl(var(--foreground) / 0.8)"
            strokeWidth="1.5"
            animate={{ 
              d: [
                "M100 60 Q80 30 60 5 Q85 25 100 45 Q115 25 140 5 Q120 30 100 60",
                "M100 60 Q75 25 55 0 Q82 22 100 42 Q118 22 145 0 Q125 25 100 60",
                "M100 60 Q80 30 60 5 Q85 25 100 45 Q115 25 140 5 Q120 30 100 60"
              ]
            }}
            transition={{
              duration: 2 + mouseDistance * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6
            }}
          />
          <motion.path
            d="M100 60 Q100 35 100 15"
            fill="none"
            stroke="hsl(var(--foreground) / 0.4)"
            strokeWidth="0.8"
          />
        </motion.g>

        {/* Leaf 4 - Small left */}
        <motion.g
          style={{ 
            rotate: leafSway1,
            transformOrigin: "100px 160px"
          }}
        >
          <motion.path
            d="M100 160 Q75 150 55 135 Q80 145 95 155"
            fill="none"
            stroke="hsl(var(--foreground) / 0.5)"
            strokeWidth="1.2"
            animate={{ 
              d: [
                "M100 160 Q75 150 55 135 Q80 145 95 155",
                "M100 160 Q72 147 50 130 Q78 143 93 153",
                "M100 160 Q75 150 55 135 Q80 145 95 155"
              ]
            }}
            transition={{
              duration: 2.8 + mouseDistance * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2
            }}
          />
        </motion.g>

        {/* Leaf 5 - Small right */}
        <motion.g
          style={{ 
            rotate: leafSway2,
            transformOrigin: "100px 180px"
          }}
        >
          <motion.path
            d="M100 180 Q125 170 145 155 Q120 165 105 175"
            fill="none"
            stroke="hsl(var(--foreground) / 0.5)"
            strokeWidth="1.2"
            animate={{ 
              d: [
                "M100 180 Q125 170 145 155 Q120 165 105 175",
                "M100 180 Q128 173 150 160 Q122 167 107 177",
                "M100 180 Q125 170 145 155 Q120 165 105 175"
              ]
            }}
            transition={{
              duration: 3.2 + mouseDistance * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </motion.g>

        {/* Decorative dots/particles */}
        <motion.circle
          cx="45"
          cy="80"
          r="2"
          fill="hsl(var(--foreground) / 0.3)"
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.circle
          cx="155"
          cy="60"
          r="1.5"
          fill="hsl(var(--foreground) / 0.25)"
          animate={{ 
            opacity: [0.25, 0.5, 0.25],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.circle
          cx="70"
          cy="35"
          r="1"
          fill="hsl(var(--foreground) / 0.2)"
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.4, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.circle
          cx="130"
          cy="25"
          r="1.5"
          fill="hsl(var(--foreground) / 0.2)"
          animate={{ 
            opacity: [0.2, 0.45, 0.2],
            scale: [1, 1.25, 1]
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8
          }}
        />
      </svg>
    </div>
  );
};

export default InteractivePlant;