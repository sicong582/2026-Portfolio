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
            
            <div className="space-y-6 font-sans text-lg text-muted-foreground leading-relaxed">
              <p>
                Hi, I'm Sicong Chen — a product designer focused on creating tools and 
                workflows that help businesses work smarter and grow faster.
              </p>
              <p>
                I design tools and workflows that help businesses work smarter and grow faster.
                I design tools and workflows that help businesses work smarter and grow faster.
              </p>
              <p>
                I design tools and workflows that help businesses work smarter and grow faster.
              </p>
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