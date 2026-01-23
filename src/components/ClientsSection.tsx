import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fullTimeClients = [
  { name: "Morgan Stanley", type: "Full-time" },
  { name: "Amazon", type: "Full-time" },
];

const agencyClients = [
  { name: "IBM" },
  { name: "VSCO" },
  { name: "Airbnb" },
  { name: "PayPal" },
  { name: "Uber" },
];

const ClientsSection = () => {
  return (
    <section className="clients-section container-wide py-16 lg:py-24 border-t border-border">
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="font-serif text-3xl lg:text-4xl font-medium mb-12"
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Companies I've Worked With
        </motion.h2>

        <div className="space-y-12">
          {/* Full-time roles */}
          <motion.div variants={fadeInUp} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <h3 className="font-sans text-sm uppercase tracking-wider text-muted-foreground mb-6">
              Full-time Employee
            </h3>
            <div className="flex flex-wrap gap-8 lg:gap-16">
              {fullTimeClients.map((client) => (
                <span 
                  key={client.name} 
                  className="font-serif text-2xl lg:text-3xl text-foreground"
                >
                  {client.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Agency clients */}
          <motion.div variants={fadeInUp} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <h3 className="font-sans text-sm uppercase tracking-wider text-muted-foreground mb-6">
              Clients through AKQA
            </h3>
            <div className="flex flex-wrap gap-8 lg:gap-16">
              {agencyClients.map((client) => (
                <span 
                  key={client.name} 
                  className="font-serif text-2xl lg:text-3xl text-foreground"
                >
                  {client.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.article>
    </section>
  );
};

export default ClientsSection;
