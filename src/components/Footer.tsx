import footerIllustration from "@/assets/footer-illustration.gif";

const Footer = () => {
  return (
    <footer className="py-16">
      <div className="container-wide">
        {/* Top section - illustration and text */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div className="flex items-start gap-6">
            <div className="w-24 h-32">
              <img 
                src={footerIllustration} 
                alt="Footer illustration" 
                className="w-full h-full object-contain mix-blend-darken"
              />
            </div>
            <div className="space-y-2 font-sans text-sm text-muted-foreground max-w-xs">
              <p>I design tools and workflows that help businesses work smarter and grow faster.</p>
              <p>I design tools and workflows that help businesses work smarter and grow faster.</p>
            </div>
          </div>
        </div>

        {/* Bottom section - CTA and social links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-border">
          <p className="font-sans text-sm text-foreground">
            Let's connect and work together
          </p>
          <div className="flex gap-6 font-sans text-sm uppercase tracking-wider">
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
    </footer>
  );
};

export default Footer;