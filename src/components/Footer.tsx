import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="footer py-8">
      <nav className="footer-container container-wide">
        <section className="footer-nav flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-border">
          <p className="footer-cta font-sans text-sm text-foreground">
            {t("footer.connect")}
          </p>
          <address className="footer-social flex gap-6 font-sans text-sm uppercase tracking-wider not-italic">
            <a
              href="mailto:hello@sicongchen.com"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              {t("common.email")}
            </a>
            <a
              href="https://linkedin.com/in/sicongchen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              {t("common.linkedin")}
            </a>
            <a
              href="https://calendly.com/sicongchen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              {t("common.scheduleCall")}
            </a>
          </address>
        </section>
      </nav>
    </footer>
  );
};

export default Footer;
