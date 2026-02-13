import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BottomNavigation from "@/components/BottomNavigation";
import headshot from "@/assets/headshot.webp";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <SEO 
        title="About | Sicong Chen"
        description="Learn about Sicong Chen's journey as a product designer, from AKQA to Amazon, specializing in B2B platforms and AI-powered experiences."
      />
      <Header />
      <BottomNavigation />
      
      <main id="main-content" className="pt-32 pb-24">
        <div className="container-wide">
          <div className="max-w-2xl">
            <img
              src={headshot}
              alt="Sicong Chen"
              className="w-64 h-64 object-cover rounded-lg mb-12"
              loading="eager"
            />
            
            <h1 className="font-serif text-5xl lg:text-6xl font-medium mb-8">{t("about.title")}</h1>
            
            <div className="space-y-12 font-sans text-lg text-muted-foreground leading-relaxed">
              
              {/* Now Section */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">{t("about.now.title")}</h2>
                <p>
                  {t("about.now.p1")}
                </p>
                <p>
                  {t("about.now.p2")}
                </p>
              </div>

              {/* Amazon Section */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">{t("about.amazon.title")}</h2>
                <p>
                  {t("about.amazon.p1")}
                </p>
                <p>
                  {t("about.amazon.p2")}
                </p>
              </div>

              {/* Morgan Stanley Section */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">{t("about.morgan.title")}</h2>
                <p>
                  {t("about.morgan.p1")}
                </p>
                <p>
                  {t("about.morgan.p2")}
                </p>
              </div>

              {/* AKQA Section */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">
                  {t("about.akqa.title")}{" "}
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
                  {t("about.akqa.p1")}
                </p>
                <p>
                  {(() => {
                    const text = t("about.akqa.p2").toString();
                    const parts = text.split(/{audiWebsite}|{paypalWebsite}/);
                    const matches = text.match(/{audiWebsite}|{paypalWebsite}/g) || [];
                    const result = [];
                    let partIndex = 0;
                    
                    for (let i = 0; i < parts.length; i++) {
                      if (parts[i]) {
                        result.push(parts[i]);
                      }
                      if (matches[partIndex] === "{audiWebsite}") {
                        result.push(
                          <a 
                            key="audi"
                            href="https://www.audi.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="underline underline-offset-4 hover:text-foreground transition-colors"
                          >
                            {t("about.akqa.audiWebsite")}
                          </a>
                        );
                        partIndex++;
                      } else if (matches[partIndex] === "{paypalWebsite}") {
                        result.push(
                          <a 
                            key="paypal"
                            href="https://www.paypal.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="underline underline-offset-4 hover:text-foreground transition-colors"
                          >
                            {t("about.akqa.paypalWebsite")}
                          </a>
                        );
                        partIndex++;
                      }
                    }
                    return result;
                  })()}
                </p>
              </div>

              {/* Outside of work Section */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">{t("about.outside.title")}</h2>
                <p>
                  {t("about.outside.p1")}
                </p>
                <p>
                  {(() => {
                    const text = t("about.outside.p2").toString();
                    const parts = text.split(/{adplist}/);
                    if (parts.length === 1) return text;
                    return (
                      <>
                        {parts[0]}
                        <a 
                          href="https://adplist.org/mentors/sicong-chen" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="underline underline-offset-4 hover:text-foreground transition-colors"
                        >
                          {t("about.outside.adplist")}
                        </a>
                        {parts[1]}
                      </>
                    );
                  })()}
                </p>
              </div>
            </div>

            <div className="mt-12 flex gap-6 font-sans text-sm uppercase tracking-wider">
              <a
                href="mailto:sicong582@gmail.com"
                className="text-foreground hover:text-muted-foreground transition-colors"
              >
                {t("common.email")}
              </a>
              <a
                href="https://www.linkedin.com/in/sicongchen1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-muted-foreground transition-colors"
              >
                {t("common.linkedin")}
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
