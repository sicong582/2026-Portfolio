import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import logoImage from "@/assets/logo.avif";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { t } = useLanguage();
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
      <nav className="site-nav container-wide flex items-start justify-between py-4" aria-label="Main navigation">
        <div className="flex items-start gap-4 flex-1">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="logo" aria-label="Sicong Chen - Home">
              <img src={logoImage} alt="Sicong Chen" className="h-12 w-auto" loading="eager" />
            </Link>
          </motion.div>
          <div className="hidden md:block max-w-md pt-2">
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              I specialize in B2B operational platforms and AI-powered experiences, turning complex processes into simple, scalable solutions.
            </p>
          </div>
        </div>

      </nav>
    </motion.header>
  );
};

export default Header;
