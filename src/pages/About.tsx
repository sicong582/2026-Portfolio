import Header from "@/components/Header";
import Footer from "@/components/Footer";
import headshot from "@/assets/headshot.webp";

const About = () => {
  return (
    <>
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container-wide">
          <div className="max-w-2xl">
            <img
              src={headshot}
              alt="Sicong Chen"
              className="w-64 h-64 object-cover rounded-lg mb-12"
            />
            
            <h1 className="font-serif text-5xl font-medium mb-8">Hello, I am Sicong</h1>
            
            <div className="space-y-12 font-sans text-lg text-muted-foreground leading-relaxed">
              
              {/* Now Section */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">Now</h2>
                <p>
                  I'm currently learning vibe coding and recently finished the Meta Front-End Developer Specialization (9 courses). I've been listening to a lot of Lenny's Podcast, thinking like a PM about how to acquire users and build great products. I'm more interested in growing as a builder.
                </p>
                <p>
                  Most recently, I've been using AI tools for generated content in branding and advertising. I believe in the AI age, the future designer skillset shifts to product strategy, creative direction, distribution, and AI prototyping.
                </p>
              </div>

              {/* Amazon Section */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">Most recently — Amazon</h2>
                <p>
                  I've been working with the Amazon Fresh B2B team, leading innovative design initiatives for warehouse inventory management and vendor product ordering.
                </p>
                <p>
                  I'm driven by the opportunity to tackle new challenges daily, diving deep into complex contexts and addressing user pain points to create impactful solutions.
                </p>
              </div>

              {/* Morgan Stanley Section */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">Before that — Morgan Stanley</h2>
                <p>
                  I spent three years as a Senior Product Designer at Morgan Stanley, specializing in the Lending and Retirement teams. I led initiatives to streamline mortgage applications with autofill features and developed tools to help users schedule calls with financial advisors.
                </p>
                <p>
                  In addition, I dedicated about 30% of my time to enhancing the design system and advocating for a structured research process. This involved close collaboration with leadership, stakeholders, and engineers to deliver impactful and effective solutions.
                </p>
              </div>

              {/* AKQA Section */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">
                  Where career began —{" "}
                  <a 
                    href="https://www.akqa.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-foreground transition-colors"
                  >
                    AKQA
                  </a>
                </h2>
                <p>
                  I've always been eager to learn and explore as much as possible. Right after graduating college, I joined the renowned design agency AKQA, believing that working with diverse clients early in my career would help me develop a wide range of skills and gain insights into various industries.
                </p>
                <p>
                  During my two years at AKQA, I dedicated a year to supporting the redesign of Audi's iOS app and{" "}
                  <a 
                    href="https://www.audi.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-foreground transition-colors"
                  >
                    Audi.com
                  </a>{" "}
                  website. In 2019, I also collaborated with the team to completely rebrand and redesign{" "}
                  <a 
                    href="https://www.paypal.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-foreground transition-colors"
                  >
                    PayPal.com
                  </a>
                  , delivering a fresh and cohesive digital experience.
                </p>
              </div>

              {/* Outside of work Section */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">Outside of my work</h2>
                <p>
                  In my spare time, I like reading around 40 books per year. I am also a big fan of watercolor and digital drawing through Procreate.
                </p>
                <p>
                  Currently, I serve as a design mentor through{" "}
                  <a 
                    href="https://adplist.org/mentors/sicong-chen" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-foreground transition-colors"
                  >
                    ADPList
                  </a>
                  , driven by my passion for human connection and meaningful relationships. I enjoy engaging with people, learning from their unique experiences and stories. Having benefited greatly from the support I received as a junior designer, I'm committed to giving back to the community and helping the next generation of designers thrive.
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
                href="https://linkedin.com/in/sicongchen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-muted-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://calendly.com/sicongchen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-muted-foreground transition-colors"
              >
                Schedule a Call
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
