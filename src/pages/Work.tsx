import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    id: "project-1",
    title: "project name",
    type: "Type",
    date: "Date",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80",
  },
  {
    id: "project-2",
    title: "project name",
    type: "Type",
    date: "Date",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80",
  },
  {
    id: "project-3",
    title: "project name",
    type: "Type",
    date: "Date",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80",
  },
  {
    id: "project-4",
    title: "project name",
    type: "Type",
    date: "Date",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80",
  },
  {
    id: "project-5",
    title: "project name",
    type: "Type",
    date: "Date",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80",
  },
  {
    id: "project-6",
    title: "project name",
    type: "Type",
    date: "Date",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80",
  },
];

const Work = () => {
  return (
    <>
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container-wide">
          <h1 className="font-serif text-5xl font-medium mb-12">Work</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} variant="small" />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Work;