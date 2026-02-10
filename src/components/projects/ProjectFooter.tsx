import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectFooterProps {
  nextProjectId?: string;
  nextProjectTitle?: string;
}

const ProjectFooter = ({ nextProjectId, nextProjectTitle }: ProjectFooterProps) => {
  return (
    <footer className="py-20 md:py-32 bg-muted/30">
      <div className="container-wide max-w-[1000px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {nextProjectId && nextProjectTitle ? (
            <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
              <Link
                to={`/project/${nextProjectId}`}
                className="group flex items-center gap-3 font-sans text-lg text-foreground hover:text-muted-foreground transition-colors"
              >
                <span>Next Project</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
                <span className="font-medium">{nextProjectTitle}</span>
              </Link>
            </motion.div>
          ) : (
            <div />
          )}

          <motion.a
            href="mailto:sicong582@gmail.com"
            className="flex items-center gap-3 font-sans text-lg text-foreground hover:text-muted-foreground transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            <span>Get in Touch</span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default ProjectFooter;
