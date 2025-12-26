import footerIllustration from "@/assets/footer-illustration.gif";

const IllustrationSection = () => {
  return (
    <section className="illustration-section py-16">
      <article className="illustration-container container-wide">
        <figure className="illustration-branding flex items-start gap-6">
          <picture className="illustration-image w-24 h-32">
            <img 
              src={footerIllustration} 
              alt="Character illustration" 
              className="w-full h-full object-contain mix-blend-darken"
            />
          </picture>
          <figcaption className="illustration-description space-y-2 font-sans text-sm text-muted-foreground max-w-xs">
            <p>I design tools and workflows that help businesses work smarter and grow faster.</p>
            <p>I design tools and workflows that help businesses work smarter and grow faster.</p>
          </figcaption>
        </figure>
      </article>
    </section>
  );
};

export default IllustrationSection;
