import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ProjectOverview from "@/components/projects/ProjectOverview";
import ImageGrid from "@/components/projects/ImageGrid";
import ProjectFooter from "@/components/projects/ProjectFooter";
import rewordingCover from "@/assets/rewording-2025-cover.png";

// Import project assets
// Primary poster (hero image) - Add primary-poster.png to src/assets/projects/rewording-poster-design/
// For now using cover as fallback - replace with actual import when image is added:
// import primaryPoster from "@/assets/projects/rewording-poster-design/primary-poster.png";
const primaryPoster = rewordingCover; // TODO: Replace with actual primary poster import

// Poster variations (6 images) - Uncomment when images are added
// import poster1 from "@/assets/projects/rewording-poster-design/poster-1.jpg";
// import poster2 from "@/assets/projects/rewording-poster-design/poster-2.jpg";
// import poster3 from "@/assets/projects/rewording-poster-design/poster-3.jpg";
// import poster4 from "@/assets/projects/rewording-poster-design/poster-4.jpg";
// import poster5 from "@/assets/projects/rewording-poster-design/poster-5.jpg";
// import poster6 from "@/assets/projects/rewording-poster-design/poster-6.jpg";

// Detail shots (4 images) - Uncomment when images are added
// import detail1 from "@/assets/projects/rewording-poster-design/detail-1.jpg";
// import detail2 from "@/assets/projects/rewording-poster-design/detail-2.jpg";
// import detail3 from "@/assets/projects/rewording-poster-design/detail-3.jpg";
// import detail4 from "@/assets/projects/rewording-poster-design/detail-4.jpg";

// Applications (6 images) - Uncomment when images are added
// import application1 from "@/assets/projects/rewording-poster-design/application-1.jpg";
// import application2 from "@/assets/projects/rewording-poster-design/application-2.jpg";
// import application3 from "@/assets/projects/rewording-poster-design/application-3.jpg";
// import application4 from "@/assets/projects/rewording-poster-design/application-4.jpg";
// import application5 from "@/assets/projects/rewording-poster-design/application-5.jpg";
// import application6 from "@/assets/projects/rewording-poster-design/application-6.jpg";

// Primary poster image - currently using cover as placeholder
// Replace with: const mainPoster = primaryPoster; when image is added
const mainPoster = primaryPoster;

// Poster variations - uncomment and use when images are added
const posterVariations = [
  rewordingCover, // Replace with: poster1,
  rewordingCover, // Replace with: poster2,
  rewordingCover, // Replace with: poster3,
  rewordingCover, // Replace with: poster4,
  rewordingCover, // Replace with: poster5,
  rewordingCover, // Replace with: poster6,
];

// Detail shots - uncomment and use when images are added
const detailShots = [
  rewordingCover, // Replace with: detail1,
  rewordingCover, // Replace with: detail2,
  rewordingCover, // Replace with: detail3,
  rewordingCover, // Replace with: detail4,
];

// Applications - uncomment and use when images are added
const applications = [
  rewordingCover, // Replace with: application1,
  rewordingCover, // Replace with: application2,
  rewordingCover, // Replace with: application3,
  rewordingCover, // Replace with: application4,
  rewordingCover, // Replace with: application5,
  rewordingCover, // Replace with: application6,
];

const RewordingProject = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax transforms for different sections
  const mainPosterY = useTransform(scrollYProgress, [0.2, 0.5], [0, -50]);
  const posterGridY = useTransform(scrollYProgress, [0.4, 0.7], [0, -30]);
  const detailGridY = useTransform(scrollYProgress, [0.6, 0.9], [0, -40]);

  return (
    <div ref={containerRef} className="relative">
      <SEO
        title="REWORLDING | Sicong Chen"
        description="A Visual Identity for Global Futures Design - A poster series exploring themes of technology, humanity, and the future through bold typography and AI-generated imagery."
        type="article"
      />
      <Header />

      {/* Overview Section */}
      <ProjectOverview
        description="A poster series exploring themes of technology, humanity, and the future through bold typography and AI-generated imagery. Created for FUSE Lab at Tohoku University's inaugural conference on democratizing futures thinking.\n\nThe visual system bridges Eastern and Western design sensibilities, representing the global dialogue while highlighting Asia-focused perspectives. Using AI tools, I created abstract visual metaphors for complex concepts like 'productive misalignments,' 'futures literacy,' and 'world modulation.'"
        details={{
          client: "Tohoku University",
          tools: "Midjourney, Figma, Banana Nano",
          role: "Visual Designer",
        }}
      />

      {/* Main Poster - Full Width with Parallax */}
      <section className="py-20 md:py-32 overflow-hidden">
        <div className="container-wide max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: mainPosterY }}
            className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-card shadow-2xl parallax-container"
          >
            <motion.img
              src={mainPoster}
              alt="Primary conference poster"
              className="w-full h-full object-cover"
              loading="lazy"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-sans text-sm text-muted-foreground mt-6 text-center"
          >
            Primary conference poster
          </motion.p>
        </div>
      </section>

      {/* Poster Variations Grid */}
      <ImageGrid
        images={posterVariations}
        columns={3}
        title="Poster Series"
        aspectRatio="aspect-[4/3]"
      />

      {/* Detail Shots Grid */}
      <ImageGrid
        images={detailShots}
        columns={2}
        title="Design Details"
        aspectRatio="aspect-[4/3]"
      />

      {/* Applications Grid */}
      <ImageGrid
        images={applications}
        columns={3}
        title="Applications"
        aspectRatio="aspect-[4/3]"
      />

      {/* Footer */}
      <ProjectFooter />

      <Footer />
    </div>
  );
};

export default RewordingProject;
