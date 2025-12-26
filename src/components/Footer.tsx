import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Email", href: "mailto:hello@sicongchen.com" },
    { label: "Dribbble", href: "https://dribbble.com" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-border"
    >
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side */}
          <div className="space-y-6">
            <h3 className="font-serif text-3xl lg:text-4xl">
              Let's work together
            </h3>
            <p className="text-muted-foreground font-sans text-lg max-w-md">
              Always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          {/* Right side */}
          <div className="flex flex-col lg:items-end justify-between gap-8">
            <ul className="flex gap-8">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="Open"
                    className="link-underline font-sans text-sm font-medium uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <p className="font-sans text-sm text-muted-foreground">
              © {currentYear} Sicong Chen. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;