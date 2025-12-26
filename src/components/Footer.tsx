import BotanicalIllustration from "@/components/BotanicalIllustration";

const Footer = () => {
  return (
    <footer className="py-16">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left - illustration and text */}
          <div className="flex items-start gap-6">
            <div className="w-24 h-32 opacity-60">
              <BotanicalIllustration />
            </div>
            <div className="space-y-2 font-sans text-sm text-muted-foreground max-w-xs">
              <p>I design tools and workflows that help businesses work smarter and grow faster.</p>
              <p>I design tools and workflows that help businesses work smarter and grow faster.</p>
            </div>
          </div>

          {/* Right - links */}
          <div className="flex flex-col gap-2 font-sans text-sm uppercase tracking-wider">
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