import footerIllustration from "@/assets/footer-illustration.gif";

const Footer = () => {
  return (
    <footer className="footer py-16">
      <section className="footer-container container-wide">
        {/* Top section */}
        <article className="footer-content flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <figure className="footer-branding flex items-start gap-6">
            <picture className="footer-illustration w-24 h-32">
              <img 
                src={footerIllustration} 
                alt="Footer illustration" 
                className="w-full h-full object-contain mix-blend-darken"
              />
            </picture>
            <figcaption className="footer-description space-y-2 font-sans text-sm text-muted-foreground max-w-xs">
              <p>I design tools and workflows that help businesses work smarter and grow faster.</p>
              <p>I design tools and workflows that help businesses work smarter and grow faster.</p>
            </figcaption>
          </figure>
        </article>

        {/* Bottom section */}
        <nav className="footer-nav flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-border">
          <p className="footer-cta font-sans text-sm text-foreground">
            Let's connect and work together
          </p>
          <address className="footer-social flex gap-6 font-sans text-sm uppercase tracking-wider not-italic">
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
          </address>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;