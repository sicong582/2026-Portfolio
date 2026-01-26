import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "en" as const, label: "English", flag: "🇺🇸" },
    { code: "zh" as const, label: "中文", flag: "🇨🇳" },
  ];

  return (
    <motion.div
      className="fixed top-8 right-8 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <motion.button
            className="flex items-center gap-2 bg-background/60 backdrop-blur-xl rounded-full px-4 py-2 border border-foreground/10 shadow-lg hover:bg-background/80 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Change language"
          >
            <Languages className="h-4 w-4" />
            <span className="font-sans text-sm font-medium">
              {languages.find((lang) => lang.code === language)?.flag}{" "}
              {languages.find((lang) => lang.code === language)?.label}
            </span>
          </motion.button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-xl border border-foreground/10 rounded-2xl mt-2 min-w-[150px]">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`cursor-pointer px-4 py-2 rounded-lg transition-colors ${
                language === lang.code
                  ? "bg-foreground/10 text-foreground font-medium"
                  : "hover:bg-foreground/5"
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
                {language === lang.code && (
                  <motion.span
                    className="ml-auto text-xs"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    ✓
                  </motion.span>
                )}
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
};

export default LanguageToggle;
