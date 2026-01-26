import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

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

// Placeholder testimonials - replace with actual screenshots/quotes
const testimonials = [
  {
    id: 1,
    quote: "Placeholder for testimonial quote. Add your actual testimonial content here.",
    author: "Name",
    role: "Role, Company",
    image: null, // Add screenshot path when available
  },
  {
    id: 2,
    quote: "Placeholder for testimonial quote. Add your actual testimonial content here.",
    author: "Name",
    role: "Role, Company",
    image: null,
  },
  {
    id: 3,
    quote: "Placeholder for testimonial quote. Add your actual testimonial content here.",
    author: "Name",
    role: "Role, Company",
    image: null,
  },
];

const TestimonialsSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="testimonials-section container-wide py-16 lg:py-24 border-t border-border">
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="font-serif text-3xl lg:text-4xl font-medium mb-12"
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {t("testimonials.title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-muted/30 rounded-lg p-8"
            >
              {testimonial.image ? (
                <img 
                  src={testimonial.image} 
                  alt={`Testimonial from ${testimonial.author}`}
                  className="w-full rounded-md mb-4"
                />
              ) : (
                <blockquote className="font-sans text-base text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
              )}
              <footer className="flex flex-col">
                <span className="font-sans text-sm font-medium text-foreground">
                  {testimonial.author}
                </span>
                <span className="font-sans text-sm text-muted-foreground">
                  {testimonial.role}
                </span>
              </footer>
            </motion.div>
          ))}
        </div>
      </motion.article>
    </section>
  );
};

export default TestimonialsSection;
