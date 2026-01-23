import { motion } from "framer-motion";
import { Search, Sparkles, PenTool, CheckCircle } from "lucide-react";

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

const ProcessTimeline = ({ steps }: ProcessTimelineProps) => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container-wide max-w-[1000px]">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-serif text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Process
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center group"
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full glass flex items-center justify-center mb-4"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="text-foreground"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                    ease: "easeInOut",
                  }}
                >
                  {step.icon}
                </motion.div>
              </motion.div>
              <h3 className="font-serif text-xl font-medium mb-2">{step.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed relaxed-spacing">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
