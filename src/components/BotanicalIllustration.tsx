import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const BotanicalIllustration = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.div
      ref={ref}
      className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] lg:w-[500px] xl:w-[600px] pointer-events-none select-none"
      style={{ y, rotate, opacity }}
    >
      <svg
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto opacity-30"
      >
        {/* Elegant botanical line art */}
        <motion.path
          d="M200 450 C200 350 180 280 200 200 C220 120 250 80 200 50"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-foreground"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Left leaves */}
        <motion.path
          d="M200 300 C150 280 100 290 80 260 C100 250 150 240 200 260"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-foreground"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M200 240 C160 220 120 230 100 200 C120 190 160 180 200 200"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-foreground"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.7, ease: "easeInOut" }}
        />
        <motion.path
          d="M200 180 C170 160 140 170 120 140 C140 130 170 120 200 140"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-foreground"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.9, ease: "easeInOut" }}
        />
        
        {/* Right leaves */}
        <motion.path
          d="M200 320 C250 300 300 310 320 280 C300 270 250 260 200 280"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-foreground"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
        />
        <motion.path
          d="M200 260 C240 240 280 250 300 220 C280 210 240 200 200 220"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-foreground"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
        />
        <motion.path
          d="M200 200 C230 180 260 190 280 160 C260 150 230 140 200 160"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-foreground"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
        />
        
        {/* Flower at top */}
        <motion.circle
          cx="200"
          cy="50"
          r="25"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-foreground"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        />
        <motion.circle
          cx="200"
          cy="50"
          r="15"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-foreground"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.7, ease: "easeOut" }}
        />
        <motion.circle
          cx="200"
          cy="50"
          r="5"
          fill="currentColor"
          className="text-foreground"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.9, ease: "easeOut" }}
        />
      </svg>
    </motion.div>
  );
};

export default BotanicalIllustration;