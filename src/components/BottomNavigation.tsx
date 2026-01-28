import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Sparkles, Mail, Calendar, Sun, Grid3x3 } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const BottomNavigation = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [sunMode, setSunMode] = useState(false);

  const isWorkActive = location.pathname.startsWith("/project") || location.pathname === "/work";
  const isHomeActive = location.pathname === "/";
  const isAboutActive = location.pathname === "/about";

  const navItems = [
    {
      id: "sun",
      icon: Sun,
      label: t("common.sunMode"),
      action: () => setSunMode(!sunMode),
      isActive: sunMode,
      hasHighlight: true,
    },
    {
      id: "work",
      icon: Sparkles,
      label: t("common.work"),
      to: "/work",
      isActive: isWorkActive,
      isDark: true,
    },
    {
      id: "mail",
      icon: Mail,
      label: t("common.contact"),
      action: () => {
        window.location.href = "mailto:hello@sicongchen.com";
      },
    },
    {
      id: "home",
      icon: Home,
      label: t("common.home"),
      to: "/",
      isActive: isHomeActive,
      isDark: true,
    },
    {
      id: "about",
      icon: Calendar,
      label: t("common.about"),
      to: "/about",
    },
  ];

  return (
    <motion.nav
      className="fixed top-24 left-4 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
      style={{ position: "fixed" }}
    >
      <div className="flex flex-col items-center gap-1 bg-background/60 backdrop-blur-xl rounded-2xl py-3 px-2 border border-foreground/10 shadow-lg">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const showSeparator = index === 2; // After mail icon

          return (
            <div key={item.id} className="flex flex-col items-center w-full">
              {showSeparator && (
                <div className="h-px w-6 bg-foreground/20 my-1" />
              )}
              
              {item.to ? (
                <Link to={item.to}>
                  <motion.button
                    className={`flex items-center justify-center w-10 h-10 rounded-full transition-all relative ${
                      item.isActive
                        ? "bg-foreground/20 text-foreground"
                        : item.isDark
                        ? "text-foreground/70 hover:text-foreground hover:bg-foreground/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-foreground/10"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    aria-label={item.label}
                  >
                    {item.hasHighlight && item.isActive && (
                      <motion.div
                        className="absolute inset-0 bg-foreground/10 rounded-full"
                        layoutId="activeHighlight"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <Icon className="h-5 w-5 relative z-10" />
                  </motion.button>
                </Link>
              ) : (
                <motion.button
                  onClick={item.action}
                  className={`flex items-center justify-center w-10 h-10 rounded-full transition-all relative ${
                    item.isActive
                      ? "bg-foreground/20 text-foreground"
                      : item.hasHighlight
                      ? "bg-foreground/10 text-muted-foreground hover:text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-foreground/10"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  aria-label={item.label}
                >
                  {item.hasHighlight && item.isActive && (
                    <motion.div
                      className="absolute inset-0 bg-foreground/15 rounded-full"
                      layoutId="sunHighlight"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <Icon className="h-5 w-5 relative z-10" />
                </motion.button>
              )}
              </div>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default BottomNavigation;
