import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const PhilosophySection = () => {
  return (
    <section className="philosophy-section container-wide py-16 lg:py-24">
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl"
      >
        <h2 className="font-serif text-3xl lg:text-4xl font-medium mb-6">
          My Approach
        </h2>
        <p className="font-sans text-xl lg:text-2xl text-muted-foreground leading-relaxed">
          Using innovation and emotion, I translate complex problems and processes into experiences that are accessible and inclusive to everyone.
        </p>
      </motion.article>
    </section>
  );
};

export default PhilosophySection;
