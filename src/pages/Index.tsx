import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IllustrationSection from "@/components/IllustrationSection";
import ProjectCard from "@/components/ProjectCard";
import botanicalIllustration from "@/assets/botanical-illustration.gif";
const projects = [{
  id: "project-1",
  title: "project name",
  type: "Type",
  date: "Date",
  image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80"
}, {
  id: "project-2",
  title: "project name",
  type: "Type",
  date: "Date",
  image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80"
}, {
  id: "project-3",
  title: "project name",
  type: "Type",
  date: "Date",
  image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80"
}, {
  id: "project-4",
  title: "project name",
  type: "Type",
  date: "Date",
  image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80"
}, {
  id: "project-5",
  title: "project name",
  type: "Type",
  date: "Date",
  image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80"
}, {
  id: "project-6",
  title: "project name",
  type: "Type",
  date: "Date",
  image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80"
}, {
  id: "project-7",
  title: "project name",
  type: "Type",
  date: "Date",
  image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80"
}];
const Index = () => {
  return <>
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
                <img src={botanicalIllustration} alt="Botanical illustration" className="w-full h-full object-contain mix-blend-darken" />
              </picture>
            </figure>
          </article>
        </section>

        {/* Work Section */}
        <section className="work-section container-wide pb-16 lg:pb-24">
          {/* Row 1 */}
          <article className="projects-row-primary grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <ProjectCard {...projects[0]} variant="large" />
            <aside className="projects-row-label flex flex-col">
              <span className="section-title font-sans text-sm mb-8 text-foreground">
            </span>
              <figure className="mt-auto">
                <ProjectCard {...projects[1]} variant="large" />
              </figure>
            </aside>
          </article>

          {/* Row 2 */}
          <article className="projects-row-offset grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <ProjectCard {...projects[2]} variant="large" />
            <figure className="md:mt-24">
              <ProjectCard {...projects[3]} variant="large" />
            </figure>
          </article>

          {/* Row 3 */}
          <article className="projects-row-small grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <ProjectCard {...projects[4]} variant="small" />
            <ProjectCard {...projects[5]} variant="small" />
            <ProjectCard {...projects[6]} variant="small" />
          </article>
        </section>
      </main>

      <IllustrationSection />
      <Footer />
    </>;
};
export default Index;