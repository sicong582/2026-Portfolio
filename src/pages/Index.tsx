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
          <div className="flex flex-row items-center gap-8">
            {/* Left - Text (50%) */}
            <div className="w-1/2">
              <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-4">
                Hi, I'm Sicong
              </h1>
              <p className="font-sans text-lg lg:text-xl text-muted-foreground leading-relaxed">
                I design tools and workflows that help businesses work smarter and grow faster.
              </p>
            </div>

            {/* Right - Botanical Illustration (50%) */}
            <div className="w-1/2 flex justify-end">
              <div className="w-full max-w-[420px] aspect-[1/1.1] bg-background rounded-lg">
                <img 
                  src={botanicalIllustration} 
                  alt="Botanical illustration" 
                  className="w-full h-full object-contain mix-blend-darken"
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