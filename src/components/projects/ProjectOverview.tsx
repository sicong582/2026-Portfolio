import { motion } from "framer-motion";

interface ProjectOverviewProps {
  description: string;
  details: {
    tools: string;
    role: string;
    year?: string;
    type?: string;
    team?: string;
  };
}

// Helper function to parse markdown bold text (**text**)
const parseMarkdown = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return <span key={index}>{part}</span>;
  });
};

const ProjectOverview = ({ description, details }: ProjectOverviewProps) => {
  return (
    <section className="pt-0 pb-20 md:pb-32">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
          {/* Left Column - Description (60%) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-3"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-foreground pl-0 ml-0">Overview</h2>
            <p className="font-sans text-muted-foreground leading-relaxed relaxed-spacing pl-0 ml-0">
              {parseMarkdown(description)}
            </p>
          </motion.div>

          {/* Right Column - Details (40%) with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2"
          >
            <div className="glass rounded-2xl p-8 space-y-6">
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2 font-light">
                  ROLE
                </p>
                <p className="font-sans text-base text-foreground font-medium">{details.role}</p>
              </motion.div>
              {details.type && (
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2 font-light">
                    TYPE
                  </p>
                  <p className="font-sans text-base text-foreground font-medium">{details.type}</p>
                </motion.div>
              )}
              {details.year && (
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2 font-light">
                    YEAR
                  </p>
                  <p className="font-sans text-base text-foreground font-medium">{details.year}</p>
                </motion.div>
              )}
              {details.team && (
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2 font-light">
                    TEAM
                  </p>
                  <p className="font-sans text-base text-foreground font-medium">{details.team}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
