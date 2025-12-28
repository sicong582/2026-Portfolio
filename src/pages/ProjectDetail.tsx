import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import project1Image1 from "@/assets/project1-image1.png";
import project1Image2 from "@/assets/project1-image2.png";
import project1Image3 from "@/assets/project1-image3.png";
import project1Image4 from "@/assets/project1-image4.png";

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
  images: string[];
}

const projectsData: Record<string, ProjectData> = {
  "project-1": {
    title: "Rewording Poster Design",
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
    images: [
      project1Image1,
      project1Image2,
      project1Image3,
      project1Image4,
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
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80",
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
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80",
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
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80"],
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
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80"],
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
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80"],
  },
  "project-7": {
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
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80"],
  },
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : null;

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
          <div className="mb-12">
            <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-4">
              {project.title}
            </h1>
            <p className="font-sans text-muted-foreground">
              {project.type} | {project.date}
            </p>
          </div>

          {/* Description */}
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mb-16 leading-relaxed">
            {project.overview}
          </p>

          {/* First image - full width */}
          {project.images[0] && (
            <div className="bg-card rounded-2xl overflow-hidden mb-16">
              <img
                src={project.images[0]}
                alt={`${project.title} - Image 1`}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Process section */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl lg:text-3xl font-medium mb-6">
              The Process
            </h2>
            <p className="font-sans text-muted-foreground max-w-2xl leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="font-sans text-muted-foreground max-w-2xl leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </section>

          {/* Side by side images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {project.images[1] && (
              <div className="bg-card rounded-2xl overflow-hidden">
                <img
                  src={project.images[1]}
                  alt={`${project.title} - Image 2`}
                  className="w-full h-auto"
                />
              </div>
            )}
            {project.images[2] && (
              <div className="bg-card rounded-2xl overflow-hidden">
                <img
                  src={project.images[2]}
                  alt={`${project.title} - Image 3`}
                  className="w-full h-auto"
                />
              </div>
            )}
          </div>

          {/* Approach section */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl lg:text-3xl font-medium mb-6">
              The Approach
            </h2>
            <p className="font-sans text-muted-foreground max-w-2xl leading-relaxed mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
            </p>
            <p className="font-sans text-muted-foreground max-w-2xl leading-relaxed">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </section>

          {/* Final image - full width */}
          {project.images[3] && (
            <div className="bg-card rounded-2xl overflow-hidden mb-16">
              <img
                src={project.images[3]}
                alt={`${project.title} - Image 4`}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Results section */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl lg:text-3xl font-medium mb-6">
              The Results
            </h2>
            <p className="font-sans text-muted-foreground max-w-2xl leading-relaxed">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.
            </p>
          </section>

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