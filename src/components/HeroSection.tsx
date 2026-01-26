import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import flowerHero from "@/assets/flower-hero.gif";
import GifWithThreeDeform from "@/components/GifWithThreeDeform";

// COLLINS-style smooth animations
const fadeInUp = {
  hidden: { opacity: 0, y: 50, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section 
      ref={sectionRef}
      className="hero relative container-wide py-12 lg:py-20 overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(120, 119, 198, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating particles effect */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-foreground/10"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      <motion.article 
        className="hero-content flex flex-col lg:flex-row items-start lg:items-center gap-8 relative z-10"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        style={{ y: yTransform, opacity: opacityTransform, scale: scaleTransform }}
      >
        <motion.header 
          className="hero-text w-full lg:w-1/2"
          variants={fadeInUp}
        >
          <motion.div 
            className="font-sans text-base text-muted-foreground leading-relaxed space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <p>
              I specialize in B2B operational platforms and AI-powered experiences, turning complex processes into simple, scalable solutions. My work focuses on driving efficiency, user adoption, and business impact—from improving internal operations to supporting customer growth.
            </p>
            <p>
              Outside of work, I enjoy{" "}
              <motion.a 
                href="https://medium.com/@sicongchen-582" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4 transition-colors inline-block"
                whileHover={{ scale: 1.05, x: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                writing
              </motion.a>
              {" "}and{" "}
              <motion.a 
                href="https://adplist.org/mentors/sicong-chen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4 transition-colors inline-block"
                whileHover={{ scale: 1.05, x: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                mentoring
              </motion.a>
              —sharing what I've learned and learning from others along the way.
            </p>
          </motion.div>
        </motion.header>

        <motion.figure 
          className="hero-illustration w-full lg:w-1/2 flex justify-center lg:justify-end relative"
          variants={scaleIn}
        >
          {/* Glow effect behind image */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="w-full max-w-[420px] relative z-10"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <GifWithThreeDeform 
              gifSrc={flowerHero}
              className="w-full"
              width={4.2}
              height={4.62}
              aspectRatio="aspect-[1/1.1]"
            />
          </motion.div>
        </motion.figure>
      </motion.article>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-foreground/50 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
