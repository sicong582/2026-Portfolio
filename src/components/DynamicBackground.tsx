import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const DynamicBackground = () => {
  const [time, setTime] = useState(new Date());
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animations for mouse tracking
  const springConfig = { damping: 50, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Time-based color shifts (subtle changes throughout the day)
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const timeProgress = (hours * 60 + minutes) / (24 * 60); // 0 to 1 throughout the day

  // Calculate color shifts based on time
  const hueShift = timeProgress * 360; // Full color cycle throughout the day
  const saturation = 15 + Math.sin(timeProgress * Math.PI * 2) * 5; // Subtle variation
  const lightness = 88 + Math.sin(timeProgress * Math.PI * 2) * 2; // Subtle brightness variation

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Base gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(circle at 20% 30%, hsl(${hueShift % 360}, ${saturation}%, ${lightness}%) 0%, transparent 50%)`,
            `radial-gradient(circle at 80% 70%, hsl(${(hueShift + 60) % 360}, ${saturation}%, ${lightness}%) 0%, transparent 50%)`,
            `radial-gradient(circle at 50% 50%, hsl(${(hueShift + 120) % 360}, ${saturation}%, ${lightness}%) 0%, transparent 50%)`,
            `radial-gradient(circle at 20% 30%, hsl(${hueShift % 360}, ${saturation}%, ${lightness}%) 0%, transparent 50%)`,
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Mouse-reactive gradient blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{
          left: smoothX,
          top: smoothY,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, hsl(${(hueShift + 180) % 360}, 20%, 50%) 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary animated blob */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-15"
        style={{
          left: "70%",
          top: "20%",
          background: `radial-gradient(circle, hsl(${(hueShift + 240) % 360}, 15%, 60%) 0%, transparent 70%)`,
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Tertiary animated blob */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
        style={{
          left: "10%",
          top: "60%",
          background: `radial-gradient(circle, hsl(${(hueShift + 300) % 360}, 12%, 55%) 0%, transparent 70%)`,
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-foreground/10"
          style={{
            left: `${15 + (i * 12)}%`,
            top: `${20 + (i % 4) * 25}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.sin(i) * 20, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Subtle noise texture overlay */}
      <motion.div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        animate={{
          opacity: [0.01, 0.02, 0.01],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default DynamicBackground;
