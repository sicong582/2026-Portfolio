import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const projectsData: Record<string, {
  title: string;
  type: string;
  date: string;
  description: string;
  images: string[];
}> = {
  "project-1": {
    title: "Rewording Poster Design",
    type: "Graphic Design",
    date: "2025",
    description: "A brief description of the project, the problem it solved, and the approach taken to design the solution.",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=1200&q=80",
    ],
  },
  "project-2": {
    title: "Project Name",
    type: "Type",
    date: "Date",
    description: "A brief description of the project, the problem it solved, and the approach taken to design the solution.",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80",
    ],
  },
  "project-3": {
    title: "Project Name",
    type: "Type",
    date: "Date",
    description: "A brief description of the project, the problem it solved, and the approach taken to design the solution.",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80",
    ],
  },
  "project-4": {
    title: "Project Name",
    type: "Type",
    date: "Date",
    description: "A brief description of the project, the problem it solved, and the approach taken to design the solution.",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80",
    ],
  },
  "project-5": {
    title: "Project Name",
    type: "Type",
    date: "Date",
    description: "A brief description of the project, the problem it solved, and the approach taken to design the solution.",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80",
    ],
  },
  "project-6": {
    title: "Project Name",
    type: "Type",
    date: "Date",
    description: "A brief description of the project, the problem it solved, and the approach taken to design the solution.",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80",
    ],
  },
  "project-7": {
    title: "Project Name",
    type: "Type",
    date: "Date",
    description: "A brief description of the project, the problem it solved, and the approach taken to design the solution.",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80",
    ],
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
            {project.description}
          </p>

          {/* Project images */}
          <div className="space-y-8">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden"
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>

          {/* Next project link */}
          <div className="mt-20 text-center">
            <Link
              to="/"
              className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View All Work →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProjectDetail;