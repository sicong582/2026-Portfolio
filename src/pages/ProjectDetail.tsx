import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const projectsData: Record<string, {
  title: string;
  category: string;
  year: string;
  client: string;
  role: string;
  overview: string;
  images: string[];
}> = {
  "plant-care-app": {
    title: "Plant Care App",
    category: "Mobile Design",
    year: "2024",
    client: "Botanical Co.",
    role: "Lead Product Designer",
    overview: "A comprehensive mobile application designed to help plant enthusiasts track, care for, and grow their indoor plant collections. The app features plant identification, watering reminders, and community features.",
    images: [
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=1200&q=80",
      "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=1200&q=80",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
    ],
  },
  "eco-commerce": {
    title: "Eco Commerce Platform",
    category: "Web Design",
    year: "2024",
    client: "GreenMarket",
    role: "Product Designer",
    overview: "A sustainable e-commerce platform that connects eco-conscious consumers with environmentally responsible brands. The design emphasizes transparency, sustainability metrics, and mindful consumption.",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    ],
  },
  "mindful-meditation": {
    title: "Mindful Meditation",
    category: "Product Design",
    year: "2023",
    client: "Serenity Labs",
    role: "Lead Designer",
    overview: "A meditation and mindfulness app designed to help users build sustainable mental wellness habits. Features include guided meditations, breathing exercises, and progress tracking.",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=1200&q=80",
      "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=1200&q=80",
    ],
  },
  "sustainable-fashion": {
    title: "Sustainable Fashion",
    category: "Brand Identity",
    year: "2023",
    client: "Thread Collective",
    role: "Brand Designer",
    overview: "A complete brand identity for a sustainable fashion label that emphasizes ethical production and timeless design. The visual language reflects the brand's commitment to quality and environmental responsibility.",
    images: [
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1200&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&q=80",
    ],
  },
  "fintech-dashboard": {
    title: "Fintech Dashboard",
    category: "Dashboard Design",
    year: "2023",
    client: "CapitalFlow",
    role: "Product Designer",
    overview: "A comprehensive financial analytics dashboard designed for investment professionals. The interface balances complex data visualization with intuitive navigation and actionable insights.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80",
    ],
  },
  "travel-booking": {
    title: "Travel Booking Experience",
    category: "UX Design",
    year: "2022",
    client: "Wanderlust",
    role: "UX Designer",
    overview: "A reimagined travel booking experience that prioritizes discovery and inspiration. The design focuses on helping users find unique destinations and create memorable travel experiences.",
    images: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80",
    ],
  },
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <PageTransition>
        <Header />
        <main className="pt-32 pb-24 container-wide">
          <h1 className="font-serif text-4xl">Project not found</h1>
          <Link to="/work" className="link-underline mt-4 inline-block">
            Back to Work
          </Link>
        </main>
        <Footer />
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <Header />
      
      <main className="pt-32 pb-24">
        {/* Hero */}
        <div className="container-wide mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/work"
              className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              ← Back to Work
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-20">
              <div>
                <p className="font-sans text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  {project.category}
                </p>
                <h1 className="font-serif text-5xl lg:text-6xl font-medium mb-6">
                  {project.title}
                </h1>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  {project.overview}
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Client
                  </p>
                  <p className="font-sans">{project.client}</p>
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Role
                  </p>
                  <p className="font-sans">{project.role}</p>
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Year
                  </p>
                  <p className="font-sans">{project.year}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-width Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <div className="w-full h-[60vh] lg:h-[80vh]">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Additional Images */}
        <div className="container-wide">
          <div className="space-y-12">
            {project.images.slice(1).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-lg overflow-hidden"
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 2}`}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </div>

          {/* Next Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-32 text-center"
          >
            <p className="font-sans text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Next Project
            </p>
            <Link
              to="/work"
              data-cursor="Explore"
              className="font-serif text-3xl lg:text-4xl font-medium hover:text-muted-foreground transition-colors"
            >
              View All Work →
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default ProjectDetail;