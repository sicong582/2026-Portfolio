import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import botanicalIllustration from "@/assets/botanical-illustration.gif";

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
  {
    id: "project-7",
    title: "project name",
    type: "Type",
    date: "Date",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80",
  },
];

const Index = () => {
  return (
    <>
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container-wide py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left - Text */}
            <div className="pt-8">
              <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-4">
                Hi, I'm Sicong
              </h1>
              <p className="font-sans text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-md">
                I design tools and workflows that help businesses work smarter and grow faster.
              </p>
            </div>

            {/* Right - Botanical Illustration */}
            <div className="flex justify-end">
              <div className="w-72 h-80 lg:w-96 lg:h-[420px]">
                <img 
                  src={botanicalIllustration} 
                  alt="Botanical illustration" 
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section className="container-wide pb-16 lg:pb-24">
          {/* Row 1 - Large left with "Work" label on right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <ProjectCard {...projects[0]} variant="large" />
            <div className="flex flex-col">
              <span className="font-sans text-sm mb-8 text-foreground">Work</span>
              <div className="mt-auto">
                <ProjectCard {...projects[1]} variant="large" />
              </div>
            </div>
          </div>

          {/* Row 2 - Offset layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <ProjectCard {...projects[2]} variant="large" />
            <div className="md:mt-24">
              <ProjectCard {...projects[3]} variant="large" />
            </div>
          </div>

          {/* Row 3 - Three small cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <ProjectCard {...projects[4]} variant="small" />
            <ProjectCard {...projects[5]} variant="small" />
            <ProjectCard {...projects[6]} variant="small" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;