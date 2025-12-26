import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const skills = [
  "User Research",
  "Interaction Design",
  "Visual Design",
  "Prototyping",
  "Design Systems",
  "Figma",
  "Framer",
  "Webflow",
];

const About = () => {
  return (
    <PageTransition>
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container-wide">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-sans text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                About
              </p>
              <h1 className="font-serif text-5xl lg:text-6xl font-medium leading-tight mb-8">
                Designing with purpose and precision
              </h1>
              <div className="space-y-6 font-sans text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm Sicong Chen, a product designer based in San Francisco with 
                  a passion for creating digital experiences that are both beautiful 
                  and functional.
                </p>
                <p>
                  My journey in design started with a fascination for the intersection 
                  of technology and human behavior. Over the years, I've had the privilege 
                  of working with startups and established companies to bring their 
                  visions to life.
                </p>
                <p>
                  When I'm not designing, you'll find me tending to my plant collection, 
                  exploring nature trails, or experimenting with new recipes in the kitchen.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="Sicong Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-gold/20 rounded-full blur-3xl" />
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <h2 className="font-serif text-3xl lg:text-4xl font-medium mb-12">
              What I Do
            </h2>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-6 py-3 rounded-full border border-border font-sans text-sm font-medium bg-card hover:bg-secondary transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <h2 className="font-serif text-3xl lg:text-4xl font-medium mb-12">
              Experience
            </h2>
            <div className="space-y-12">
              {[
                {
                  role: "Senior Product Designer",
                  company: "Design Studio Co.",
                  period: "2022 — Present",
                  description: "Leading design for B2B SaaS products, focusing on complex workflows and data visualization.",
                },
                {
                  role: "Product Designer",
                  company: "Tech Startup Inc.",
                  period: "2020 — 2022",
                  description: "Designed mobile-first consumer products with a focus on accessibility and inclusive design.",
                },
                {
                  role: "UI/UX Designer",
                  company: "Creative Agency",
                  period: "2018 — 2020",
                  description: "Created digital experiences for a diverse range of clients across various industries.",
                },
              ].map((job, index) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 pb-12 border-b border-border last:border-0"
                >
                  <span className="font-sans text-sm text-muted-foreground">
                    {job.period}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-medium mb-1">{job.role}</h3>
                    <p className="font-sans text-muted-foreground mb-3">{job.company}</p>
                    <p className="font-sans text-muted-foreground">{job.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-20 lg:py-32 bg-secondary/30 -mx-6 lg:-mx-12 px-6 lg:px-12 rounded-lg"
          >
            <h2 className="font-serif text-4xl lg:text-5xl font-medium mb-6">
              Let's create something beautiful
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              I'm currently open to new opportunities and collaborations. 
              Feel free to reach out if you'd like to work together.
            </p>
            <a
              href="mailto:hello@sicongchen.com"
              data-cursor="Email"
              className="inline-flex items-center gap-3 font-sans text-sm font-medium uppercase tracking-wide group"
            >
              <span className="link-underline">Get In Touch</span>
              <span>→</span>
            </a>
          </motion.section>
        </div>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default About;