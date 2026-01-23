import { motion } from "framer-motion";
import morganStanleyLogo from "@/assets/logos/morgan-stanley.svg";
import amazonLogo from "@/assets/logos/amazon.png";
import ibmLogo from "@/assets/logos/ibm.png";
import vscoLogo from "@/assets/logos/vsco.svg";
import airbnbLogo from "@/assets/logos/airbnb.svg";
import paypalLogo from "@/assets/logos/paypal.png";
import uberLogo from "@/assets/logos/uber.svg";

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
  { name: "Morgan Stanley", logo: morganStanleyLogo },
  { name: "Amazon", logo: amazonLogo },
];

const agencyClients = [
  { name: "IBM", logo: ibmLogo },
  { name: "VSCO", logo: vscoLogo },
  { name: "Airbnb", logo: airbnbLogo },
  { name: "PayPal", logo: paypalLogo },
  { name: "Uber", logo: uberLogo },
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
            <h3 className="font-sans text-sm uppercase tracking-wider text-muted-foreground mb-8">
              Full-time Employee
            </h3>
            <div className="flex flex-wrap items-center gap-12 lg:gap-20">
              {fullTimeClients.map((client) => (
                <img 
                  key={client.name}
                  src={client.logo} 
                  alt={client.name}
                  className="h-8 lg:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              ))}
            </div>
          </motion.div>

          {/* Agency clients */}
          <motion.div variants={fadeInUp} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <h3 className="font-sans text-sm uppercase tracking-wider text-muted-foreground mb-8">
              Clients through AKQA
            </h3>
            <div className="flex flex-wrap items-center gap-12 lg:gap-20">
              {agencyClients.map((client) => (
                <img 
                  key={client.name}
                  src={client.logo} 
                  alt={client.name}
                  className="h-8 lg:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.article>
    </section>
  );
};

export default ClientsSection;
