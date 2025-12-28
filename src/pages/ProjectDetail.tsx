import { useParams, Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import project1Image1 from "@/assets/project1-image1.png";
import project1Image2 from "@/assets/project1-image2.png";
import project1Image3 from "@/assets/project1-image3.png";
import project1Image4 from "@/assets/project1-image4.png";
import rewording2025Cover from "@/assets/rewording-2025-cover.png";
import aiExplorationVideo from "@/assets/ai-exploration-video.mp4";
import aiExplorationVideo2 from "@/assets/ai-exploration-video-2.mp4";
import aiExplorationVideo3 from "@/assets/ai-exploration-video-3.mp4";

// Parallax Media Component
const ParallaxMedia = ({ 
  item, 
  alt, 
  className = "" 
}: { 
  item: MediaItem; 
  alt: string; 
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div 
      ref={ref}
      className={`bg-card rounded-2xl overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
    >
      <motion.div style={{ y, scale }} className="w-full h-full">
        {item.type === "video" ? (
          <video src={item.src} controls className="w-full h-auto" playsInline />
        ) : (
          <img src={item.src} alt={alt} className="w-full h-auto" />
        )}
      </motion.div>
    </motion.div>
  );
};

interface MediaItem {
  type: "image" | "video";
  src: string;
}

interface ProjectData {
  title: string;
  type: string;
  date: string;
  role: string;
  duration: string;
  team: string;
  overview: string;
  problem: {
    title: string;
    description: string;
  };
  process: {
    title: string;
    steps: string[];
  };
  approach: {
    title: string;
    description: string;
  };
  results: {
    title: string;
    metrics: { label: string; value: string }[];
    description: string;
  };
  media: MediaItem[];
}

const projectsData: Record<string, ProjectData> = {
  "project-1": {
    title: "Rewording 2025",
    type: "Graphic Design",
    date: "2025",
    role: "Lead Designer",
    duration: "4 weeks",
    team: "2 Designers, 1 Developer",
    overview: "A comprehensive poster design project focused on visual communication and typographic exploration to convey complex messages through minimal design elements.",
    problem: {
      title: "The Problem",
      description: "The client needed a series of posters that could effectively communicate abstract concepts while maintaining visual appeal and brand consistency. The challenge was to balance artistic expression with clear messaging.",
    },
    process: {
      title: "Design Process",
      steps: [
        "Research & Discovery: Conducted competitive analysis and gathered visual inspiration",
        "Concept Development: Created multiple design directions and mood boards",
        "Iteration: Refined designs based on feedback and testing",
        "Final Production: Prepared assets for print and digital distribution",
      ],
    },
    approach: {
      title: "The Approach",
      description: "We adopted a human-centered design approach, focusing on the emotional impact of visual elements. Through iterative prototyping and user testing, we refined the designs to achieve maximum impact while maintaining clarity of message.",
    },
    results: {
      title: "The Results",
      metrics: [
        { label: "Engagement Increase", value: "45%" },
        { label: "Brand Recognition", value: "60%" },
        { label: "Client Satisfaction", value: "100%" },
      ],
      description: "The final designs exceeded expectations, resulting in increased brand visibility and positive feedback from the target audience.",
    },
    media: [
      { type: "image", src: rewording2025Cover },
      { type: "image", src: project1Image1 },
      { type: "image", src: project1Image2 },
      { type: "image", src: project1Image3 },
    ],
  },
  "project-2": {
    title: "Project Name",
    type: "UX Design",
    date: "2024",
    role: "UX Designer",
    duration: "8 weeks",
    team: "3 Designers",
    overview: "A brief description of the project, the problem it solved, and the approach taken to design the solution.",
    problem: {
      title: "The Problem",
      description: "Description of the design problem and user pain points that needed to be addressed.",
    },
    process: {
      title: "Design Process",
      steps: [
        "User Research: Conducted interviews and surveys",
        "Analysis: Synthesized findings into actionable insights",
        "Design: Created wireframes and prototypes",
        "Testing: Validated designs with real users",
      ],
    },
    approach: {
      title: "The Approach",
      description: "Description of the methodology and design thinking applied to solve the problem.",
    },
    results: {
      title: "The Results",
      metrics: [
        { label: "Metric 1", value: "XX%" },
        { label: "Metric 2", value: "XX%" },
      ],
      description: "Summary of the outcomes and impact of the design solution.",
    },
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80" },
      { type: "image", src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80" },
    ],
  },
  "project-3": {
    title: "Project Name",
    type: "Product Design",
    date: "2024",
    role: "Product Designer",
    duration: "12 weeks",
    team: "Cross-functional team",
    overview: "A brief description of the project, the problem it solved, and the approach taken to design the solution.",
    problem: {
      title: "The Problem",
      description: "Description of the design problem and user pain points that needed to be addressed.",
    },
    process: {
      title: "Design Process",
      steps: [
        "Discovery: Understanding the problem space",
        "Definition: Framing the design challenge",
        "Development: Creating and testing solutions",
        "Delivery: Implementing the final design",
      ],
    },
    approach: {
      title: "The Approach",
      description: "Description of the methodology and design thinking applied to solve the problem.",
    },
    results: {
      title: "The Results",
      metrics: [
        { label: "Metric 1", value: "XX%" },
        { label: "Metric 2", value: "XX%" },
      ],
      description: "Summary of the outcomes and impact of the design solution.",
    },
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80" },
      { type: "image", src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80" },
    ],
  },
  "project-4": {
    title: "Project Name",
    type: "Type",
    date: "Date",
    role: "Role",
    duration: "Duration",
    team: "Team",
    overview: "A brief description of the project.",
    problem: { title: "The Problem", description: "Problem description." },
    process: { title: "Design Process", steps: ["Step 1", "Step 2", "Step 3"] },
    approach: { title: "The Approach", description: "Approach description." },
    results: { title: "The Results", metrics: [], description: "Results description." },
    media: [{ type: "image", src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80" }],
  },
  "project-5": {
    title: "Project Name",
    type: "Type",
    date: "Date",
    role: "Role",
    duration: "Duration",
    team: "Team",
    overview: "A brief description of the project.",
    problem: { title: "The Problem", description: "Problem description." },
    process: { title: "Design Process", steps: ["Step 1", "Step 2", "Step 3"] },
    approach: { title: "The Approach", description: "Approach description." },
    results: { title: "The Results", metrics: [], description: "Results description." },
    media: [{ type: "image", src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80" }],
  },
  "project-6": {
    title: "Project Name",
    type: "Type",
    date: "Date",
    role: "Role",
    duration: "Duration",
    team: "Team",
    overview: "A brief description of the project.",
    problem: { title: "The Problem", description: "Problem description." },
    process: { title: "Design Process", steps: ["Step 1", "Step 2", "Step 3"] },
    approach: { title: "The Approach", description: "Approach description." },
    results: { title: "The Results", metrics: [], description: "Results description." },
    media: [{ type: "image", src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80" }],
  },
  "project-7": {
    title: "AI Exploration",
    type: "AI Design",
    date: "2024",
    role: "AI Designer",
    duration: "Ongoing",
    team: "Solo Project",
    overview: "An experimental exploration of AI-generated visuals and creative workflows, pushing the boundaries of human-AI collaboration in design.",
    problem: { title: "The Problem", description: "Traditional design workflows can be time-consuming and limited by human imagination alone." },
    process: { title: "Design Process", steps: ["Prompt Engineering: Crafting effective prompts for AI image generation", "Iteration: Refining outputs through multiple generations", "Curation: Selecting and combining the best results", "Enhancement: Post-processing and final touches"] },
    approach: { title: "The Approach", description: "Leveraging cutting-edge AI tools to augment creative capabilities, exploring new visual territories that blend human creativity with machine learning." },
    results: { title: "The Results", metrics: [], description: "A collection of unique AI-generated artworks that showcase the potential of human-AI creative collaboration." },
    media: [
      { type: "video", src: aiExplorationVideo },
      { type: "video", src: aiExplorationVideo2 },
    ],
  },
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : null;
  
  // Use new side-by-side layout only for project-7 (AI Exploration)
  const useAlternatingLayout = id === "project-7";

  if (!project) {
    return (
      <>
        <Header />
        <main className="pt-32 pb-24 container-wide">
          <h1 className="font-serif text-4xl mb-4">Project not found</h1>
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Home
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container-wide">
          {/* Back link */}
          <Link
            to="/"
            className="inline-block mb-8 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back
          </Link>

          {/* Project header */}
          <div className="mb-16">
            <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-4">
              {project.title}
            </h1>
            <p className="font-sans text-muted-foreground mb-6">
              {project.type} | {project.date}
            </p>
            <div className="flex gap-8">
              <div>
                <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider mb-1">Role</p>
                <p className="font-sans text-sm">{project.role}</p>
              </div>
              <div>
                <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider mb-1">Duration</p>
                <p className="font-sans text-sm">{project.duration}</p>
              </div>
              <div>
                <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider mb-1">Team</p>
                <p className="font-sans text-sm">{project.team}</p>
              </div>
            </div>
          </div>

          {useAlternatingLayout ? (
            /* Side-by-side layout for AI Exploration: text left, media right */
            <div className="space-y-24">
              {/* High-level introduction */}
              <motion.div 
                className="max-w-3xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <p className="font-serif text-2xl lg:text-3xl leading-relaxed text-foreground">
                  This project is an ongoing creative journey exploring the intersection of artificial intelligence and visual design. Through experimentation with Midjourney and Nano Banana, I push the boundaries of what's possible when human creativity meets machine learning.
                </p>
              </motion.div>

              {/* Overview with first media */}
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div>
                  <h2 className="font-serif text-2xl font-medium mb-4">Overview</h2>
                  <p className="font-sans text-muted-foreground leading-relaxed">
                    {project.overview}
                  </p>
                </div>
                {project.media[0] && (
                  <ParallaxMedia item={project.media[0]} alt={`${project.title} - 1`} />
                )}
              </motion.div>

              {/* Problem with second media */}
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div>
                  <h2 className="font-serif text-2xl font-medium mb-4">{project.problem.title}</h2>
                  <p className="font-sans text-muted-foreground leading-relaxed">
                    {project.problem.description}
                  </p>
                </div>
                {project.media[1] && (
                  <ParallaxMedia item={project.media[1]} alt={`${project.title} - 2`} />
                )}
              </motion.div>

              {/* Approach with third media */}
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div>
                  <h2 className="font-serif text-2xl font-medium mb-4">{project.approach.title}</h2>
                  <p className="font-sans text-muted-foreground leading-relaxed">
                    {project.approach.description}
                  </p>
                </div>
                {project.media[2] && (
                  <ParallaxMedia item={project.media[2]} alt={`${project.title} - 3`} />
                )}
              </motion.div>

              {/* Results with fourth media */}
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div>
                  <h2 className="font-serif text-2xl font-medium mb-4">{project.results.title}</h2>
                  {project.results.metrics.length > 0 && (
                    <div className="flex gap-6 mb-4">
                      {project.results.metrics.map((metric, index) => (
                        <div key={index}>
                          <p className="font-serif text-2xl font-medium">{metric.value}</p>
                          <p className="font-sans text-xs text-muted-foreground">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <p className="font-sans text-muted-foreground leading-relaxed">
                    {project.results.description}
                  </p>
                </div>
                {project.media[3] && (
                  <ParallaxMedia item={project.media[3]} alt={`${project.title} - 4`} />
                )}
              </motion.div>

              {/* Additional media items */}
              {project.media.length > 4 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.media.slice(4).map((item, index) => (
                    <ParallaxMedia 
                      key={index} 
                      item={item} 
                      alt={`${project.title} - ${index + 5}`} 
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Original stacked layout for other projects */
            <div className="space-y-16">
              {/* Overview */}
              <section>
                <h2 className="font-serif text-2xl font-medium mb-4">Overview</h2>
                <p className="font-sans text-muted-foreground leading-relaxed max-w-3xl">
                  {project.overview}
                </p>
              </section>

              {/* Problem */}
              <section>
                <h2 className="font-serif text-2xl font-medium mb-4">{project.problem.title}</h2>
                <p className="font-sans text-muted-foreground leading-relaxed max-w-3xl">
                  {project.problem.description}
                </p>
              </section>

              {/* Process */}
              <section>
                <h2 className="font-serif text-2xl font-medium mb-4">{project.process.title}</h2>
                <ul className="space-y-3 max-w-3xl">
                  {project.process.steps.map((step, index) => (
                    <li key={index} className="font-sans text-muted-foreground leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Approach */}
              <section>
                <h2 className="font-serif text-2xl font-medium mb-4">{project.approach.title}</h2>
                <p className="font-sans text-muted-foreground leading-relaxed max-w-3xl">
                  {project.approach.description}
                </p>
              </section>

              {/* Results */}
              <section>
                <h2 className="font-serif text-2xl font-medium mb-4">{project.results.title}</h2>
                {project.results.metrics.length > 0 && (
                  <div className="flex gap-8 mb-6">
                    {project.results.metrics.map((metric, index) => (
                      <div key={index}>
                        <p className="font-serif text-3xl font-medium">{metric.value}</p>
                        <p className="font-sans text-sm text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                )}
                <p className="font-sans text-muted-foreground leading-relaxed max-w-3xl">
                  {project.results.description}
                </p>
              </section>

              {/* Media Gallery */}
              <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.media.map((item, index) => (
                    <div key={index} className="bg-card rounded-2xl overflow-hidden">
                      {item.type === "video" ? (
                        <video src={item.src} controls className="w-full h-auto" playsInline />
                      ) : (
                        <img src={item.src} alt={`${project.title} - ${index + 1}`} className="w-full h-auto" />
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* Project navigation */}
          <nav className="mt-20 border-t border-border pt-12">
            <h3 className="font-sans text-sm text-muted-foreground mb-6 text-center">
              More Projects
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries(projectsData).map(([projectId, projectData]) => (
                <Link
                  key={projectId}
                  to={`/project/${projectId}`}
                  className={`font-sans text-sm px-4 py-2 rounded-full border transition-colors ${
                    id === projectId
                      ? "bg-foreground text-background border-foreground"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                  }`}
                >
                  {projectData.title}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProjectDetail;