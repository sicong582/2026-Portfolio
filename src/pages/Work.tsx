import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BottomNavigation from "@/components/BottomNavigation";
import ProjectCard from "@/components/ProjectCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslatedProjectSummaries } from "@/utils/projectTranslations";

const Work = () => {
  const { language } = useLanguage();
  const projects = getTranslatedProjectSummaries(language);

  return (
    <>
      <SEO 
        title="Work | Sicong Chen"
        description="Explore my portfolio of design projects including B2B products, marketing design, and conceptual work."
      />
      <Header />
      <BottomNavigation />
      
      <main id="main-content" className="pt-32 pb-24">
        <div className="container-wide">
          <h1 className="font-serif text-5xl lg:text-6xl font-medium mb-12">Work</h1>

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