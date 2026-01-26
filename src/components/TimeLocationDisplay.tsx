import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const TimeLocationDisplay = () => {
  const { t } = useLanguage();
  const [time, setTime] = useState(new Date());
  const location = t("location.shanghai");

  useEffect(() => {
    const timer = setInterval(() => {
      // Get Shanghai time (Asia/Shanghai, UTC+8)
      const shanghaiTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Shanghai" }));
      setTime(shanghaiTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;
    return `${displayHours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;
  };

  return (
    <motion.div
      className="fixed top-8 right-32 z-50 pointer-events-none"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="font-sans text-sm text-foreground/80 space-y-1">
        <motion.div
          key={time.getTime()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {formatTime(time)}
        </motion.div>
        {location && (
          <div className="text-foreground/60">{location}</div>
        )}
      </div>
    </motion.div>
  );
};

export default TimeLocationDisplay;
