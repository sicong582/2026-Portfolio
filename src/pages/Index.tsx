import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IllustrationSection from "@/components/IllustrationSection";
import ProjectCard from "@/components/ProjectCard";
import flowerHero from "@/assets/flower-hero.gif";

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
        <section className="hero container-wide py-12 lg:py-20">
          <article className="hero-content flex flex-row items-center gap-8">
            <header className="hero-text w-1/2">
              <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-4">
                Hi, I'm Sicong
              </h1>
              <p className="font-sans text-lg lg:text-xl text-muted-foreground leading-relaxed">
                I design tools and workflows that help businesses work smarter and grow faster.
              </p>
            </header>

            <figure className="hero-illustration w-1/2 flex justify-end">
              <picture className="w-full max-w-[420px] aspect-[1/1.1] bg-background rounded-lg">
                <img 
                  src={flowerHero} 
                  alt="Flower illustration" 
                  className="w-full h-full object-contain mix-blend-darken"
                />
              </picture>
            </figure>
          </article>
        </section>

        {/* Work Section */}
        <section className="work-section container-wide pb-16 lg:pb-24">
          <ProjectCard {...projects[0]} variant="large" />
        </section>
      </main>

      <IllustrationSection />
      <Footer />
    </>
  );
};

export default Index;