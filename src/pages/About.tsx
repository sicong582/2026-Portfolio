import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl font-medium mb-8">About</h1>
            
            <div className="space-y-8 font-sans text-lg text-muted-foreground leading-relaxed">
              <p className="text-xl text-foreground">
                Hello, I am Sicong
              </p>

              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">Most recently — Amazon</h2>
                <p>
                  I've been working with the Amazon Fresh B2B team, leading innovative design initiatives for warehouse inventory management and vendor product ordering.
                </p>
                <p>
                  I'm driven by the opportunity to tackle new challenges daily, diving deep into complex contexts and addressing user pain points to create impactful solutions.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">Before that — Morgan Stanley</h2>
                <p>
                  I spent three years as a Senior Product Designer at Morgan Stanley, specializing in the Lending and Retirement teams. I led initiatives to streamline mortgage applications with autofill features and developed tools to help users schedule calls with financial advisors.
                </p>
                <p>
                  In addition, I dedicated about 30% of my time to enhancing the design system and advocating for a structured research process. This involved close collaboration with leadership, stakeholders, and engineers to deliver impactful and effective solutions.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">Where career began — AKQA</h2>
                <p>
                  I've always been eager to learn and explore as much as possible. Right after graduating college, I joined the renowned design agency AKQA, believing that working with diverse clients early in my career would help me develop a wide range of skills and gain insights into various industries.
                </p>
                <p>
                  During my two years at AKQA, I dedicated a year to supporting the redesign of Audi's iOS app and Audi.com website. In 2019, I also collaborated with the team to completely rebrand and redesign PayPal.com, delivering a fresh and cohesive digital experience.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">Outside of my work</h2>
                <p>
                  In my spare time, I like to reading around 40 books per year. I am also a big fan of watercolor and digital drawing through Procreate.
                </p>
                <p>
                  Currently, I serve as a design mentor through ADPList, driven by my passion for human connection and meaningful relationships. I enjoy engaging with people, learning from their unique experiences and stories. Having benefited greatly from the support I received as a junior designer, I'm committed to giving back to the community and helping the next generation of designers thrive.
                </p>
              </div>
            </div>

            <div className="mt-12 flex gap-6 font-sans text-sm uppercase tracking-wider">
              <a
                href="mailto:hello@sicongchen.com"
                className="text-foreground hover:text-muted-foreground transition-colors"
              >
                Email
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-muted-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;