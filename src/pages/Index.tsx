import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import BotanicalIllustration from "@/components/BotanicalIllustration";

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
        <section className="container-wide py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div>
              <h1 className="font-serif text-5xl lg:text-6xl font-medium mb-6">
                Hi, I'm Sicong
              </h1>
              <p className="font-sans text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                I design tools and workflows that help businesses work smarter and grow faster.
              </p>
            </div>

            {/* Right - Botanical Illustration */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-80 lg:w-80 lg:h-96">
                <BotanicalIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section className="container-wide pb-16 lg:pb-24">
          <h2 className="font-sans text-base mb-8 text-center lg:text-left">Work</h2>

          {/* Asymmetric Grid matching mockup layout */}
          <div className="space-y-8">
            {/* Row 1 - Large left, Medium right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard {...projects[0]} variant="large" />
              <div className="md:mt-16">
                <ProjectCard {...projects[1]} variant="large" />
              </div>
            </div>

            {/* Row 2 - Medium left, Large right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard {...projects[2]} variant="large" />
              <div className="md:mt-16">
                <ProjectCard {...projects[3]} variant="large" />
              </div>
            </div>

            {/* Row 3 - Three small cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <ProjectCard {...projects[4]} variant="small" />
              <ProjectCard {...projects[5]} variant="small" />
              <ProjectCard {...projects[6]} variant="small" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;