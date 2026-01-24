import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";

interface ImageGridProps {
  images: string[];
  columns?: 1 | 2 | 3;
  title?: string;
  captions?: string[];
  aspectRatio?: string;
}

const ImageGrid = ({ 
  images, 
  columns = 3, 
  title, 
  captions = [],
  aspectRatio = "aspect-[4/3]"
}: ImageGridProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-32 overflow-hidden">
      <div className="container-wide max-w-[1400px]">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            {title}
          </motion.h2>
        )}

        <motion.div 
          style={{ y }}
          className={`grid ${gridCols[columns]} gap-6 md:gap-8`}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -4 }}
            >
              <motion.div
                className={`${aspectRatio || ""} rounded-2xl overflow-hidden bg-card shadow-lg parallax-container ${!aspectRatio ? "flex items-center justify-center" : ""}`}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.img
                  src={image}
                  alt={captions[index] || `Image ${index + 1}`}
                  className={`w-full ${aspectRatio ? "h-full object-cover" : "h-auto object-contain"}`}
                  loading="lazy"
                  animate={{
                    scale: hoveredIndex === index ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
                {/* Glass overlay on hover */}
                <motion.div
                  className="absolute inset-0 glass opacity-0 pointer-events-none"
                  animate={{
                    opacity: hoveredIndex === index ? 0.1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              {captions[index] && (
                <p className="font-sans text-sm text-muted-foreground mt-3 text-center">
                  {captions[index]}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImageGrid;
