import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import BotanicalIllustration from "@/components/BotanicalIllustration";
import PageTransition from "@/components/PageTransition";

const projects = [
  {
    id: "plant-care-app",
    title: "Plant Care App",
    category: "Mobile Design",
    year: "2024",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80",
  },
  {
    id: "eco-commerce",
    title: "Eco Commerce Platform",
    category: "Web Design",
    year: "2024",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    id: "mindful-meditation",
    title: "Mindful Meditation",
    category: "Product Design",
    year: "2023",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    id: "sustainable-fashion",
    title: "Sustainable Fashion",
    category: "Brand Identity",
    year: "2023",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
  },
];

const Index = () => {
  return (
    <PageTransition>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <BotanicalIllustration />
          
          <div className="container-wide relative z-10 pt-20">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6"
              >
                Product Designer
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.1] mb-8"
              >
                Crafting thoughtful
                <br />
                <span className="italic text-muted-foreground">digital experiences</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="font-sans text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
              >
                I'm Sicong Chen, a product designer focused on creating meaningful 
                digital products that blend beauty with functionality.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-12"
              >
                <Link
                  to="/work"
                  data-cursor="Explore"
                  className="inline-flex items-center gap-3 font-sans text-sm font-medium uppercase tracking-wide group"
                >
                  <span className="link-underline">View Selected Work</span>
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-px h-16 bg-gradient-to-b from-transparent via-foreground/30 to-transparent"
            />
          </motion.div>
        </section>

        {/* Selected Works Section */}
        <section className="py-24 lg:py-32">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-end justify-between mb-16"
            >
              <h2 className="font-serif text-3xl lg:text-4xl">Selected Work</h2>
              <Link
                to="/work"
                data-cursor="All"
                className="link-underline font-sans text-sm font-medium uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                View All Projects
              </Link>
            </motion.div>

            {/* Asymmetric Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-8 lg:space-y-12">
                <ProjectCard {...projects[0]} index={0} variant="large" />
                <ProjectCard {...projects[2]} index={2} variant="medium" />
              </div>
              <div className="space-y-8 lg:space-y-12 md:mt-24">
                <ProjectCard {...projects[1]} index={1} variant="medium" />
                <ProjectCard {...projects[3]} index={3} variant="large" />
              </div>
            </div>
          </div>
        </section>

        {/* About Teaser */}
        <section className="py-24 lg:py-32 bg-secondary/30">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="font-sans text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  About Me
                </p>
                <h2 className="font-serif text-3xl lg:text-5xl font-medium leading-tight mb-6">
                  Design is about solving problems with empathy and intention
                </h2>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-8">
                  With over 5 years of experience, I specialize in creating digital products 
                  that prioritize user needs while achieving business goals. My approach 
                  combines strategic thinking with meticulous attention to detail.
                </p>
                <Link
                  to="/about"
                  data-cursor="Read"
                  className="inline-flex items-center gap-3 font-sans text-sm font-medium uppercase tracking-wide group"
                >
                  <span className="link-underline">Learn More About Me</span>
                  <span>→</span>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-lg overflow-hidden bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                    alt="Sicong Chen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-3xl" />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default Index;