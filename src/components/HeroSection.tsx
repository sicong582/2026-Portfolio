import { motion } from "framer-motion";
import flowerHero from "@/assets/flower-hero.gif";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const HeroSection = () => {
  return (
    <section className="hero container-wide py-12 lg:py-20">
      <motion.article 
        className="hero-content flex flex-col lg:flex-row items-start lg:items-center gap-8"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.header 
          className="hero-text w-full lg:w-1/2"
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-4">
            INFJ Designer
          </h1>
          <p className="font-sans text-lg lg:text-xl text-foreground leading-relaxed mb-6">
            I design tools and workflows that help businesses work smarter and grow faster.
          </p>
          <div className="font-sans text-base text-muted-foreground leading-relaxed space-y-4">
            <p>
              I specialize in B2B operational platforms and AI-powered experiences, turning complex processes into simple, scalable solutions. My work focuses on driving efficiency, user adoption, and business impact—from improving internal operations to supporting customer growth.
            </p>
            <p>
              Outside of work, I enjoy{" "}
              <a 
                href="https://medium.com/@sicongchen-582" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
              >
                writing
              </a>{" "}
              and{" "}
              <a 
                href="https://adplist.org/mentors/sicong-chen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
              >
                mentoring
              </a>
              —sharing what I've learned and learning from others along the way.
            </p>
          </div>
        </motion.header>

        <motion.figure 
          className="hero-illustration w-full lg:w-1/2 flex justify-center lg:justify-end"
          variants={scaleIn}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <picture className="w-full max-w-[420px] aspect-[1/1.1] bg-background rounded-lg">
            <img 
              src={flowerHero} 
              alt="Flower illustration" 
              className="w-full h-full object-contain mix-blend-darken"
            />
          </picture>
        </motion.figure>
      </motion.article>
    </section>
  );
};

export default HeroSection;
