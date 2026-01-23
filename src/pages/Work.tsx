import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjectSummaries } from "@/data/projects";

const projects = getAllProjectSummaries();

const Work = () => {
  return (
    <>
      <SEO 
        title="Work | Sicong Chen"
        description="Explore my portfolio of design projects including B2B products, marketing design, and conceptual work."
      />
      <Header />
      
      <main id="main-content" className="pt-32 pb-24">
        <div className="container-wide">
          <h1 className="font-serif text-5xl font-medium mb-12">Work</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard 
                key={project.id} 
                id={project.id}
                title={project.title}
                type={project.type}
                date={project.date}
                image={project.image}
                description={project.description}
                variant="small" 
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Work;