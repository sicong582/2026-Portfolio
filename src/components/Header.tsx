import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import logoImage from "@/assets/logo.avif";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getAllProjectSummaries } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = getAllProjectSummaries();

const Header = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const isWorkActive = location.pathname.startsWith("/project") || location.pathname === "/work";
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 12]);

  return (
    <motion.header 
      className="site-header fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm"
      style={{ 
        opacity: headerOpacity,
        backdropFilter: `blur(${headerBlur}px)`,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-foreground focus:text-background focus:rounded-md">
        {t("nav.skipToContent")}
      </a>
      <nav className="site-nav container-wide flex items-center justify-between h-20" aria-label="Main navigation">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Link to="/" className="logo" aria-label="Sicong Chen - Home">
            <img src={logoImage} alt="Sicong Chen" className="h-12 w-auto" loading="eager" />
          </Link>
        </motion.div>

        <ul className="nav-links flex items-center gap-8" role="list">
          <li className="nav-item">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  className={`nav-link font-sans text-sm transition-colors flex items-center gap-1 ${
                    isWorkActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-label="Work projects"
                  aria-expanded="false"
                  aria-haspopup="true"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {t("nav.work")}
                  <motion.div
                    animate={{ rotate: isWorkActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-3 w-3" aria-hidden="true" />
                  </motion.div>
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background border border-border">
                {projects.map((project, index) => (
                  <DropdownMenuItem key={project.id} asChild>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={`/project/${project.id}`}
                        className="cursor-pointer block"
                      >
                        {project.title}
                      </Link>
                    </motion.div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className="nav-item">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/about"
                className={`nav-link font-sans text-sm transition-colors ${
                  location.pathname === "/about"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t("nav.about")}
              </Link>
            </motion.div>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
