import footerIllustration from "@/assets/footer-illustration.gif";

const IllustrationSection = () => {
  return (
    <section className="illustration-section py-16">
      <article className="illustration-container container-wide flex flex-col md:flex-row items-center gap-8">
        <figure className="illustration-image w-full md:w-1/2 flex justify-center">
          <img 
            src={footerIllustration} 
            alt="Character illustration" 
            className="max-w-[200px] h-auto object-contain mix-blend-darken bg-background"
          />
        </figure>
        <figcaption className="illustration-description w-full md:w-1/2 space-y-4 font-sans text-sm text-muted-foreground">
          <p>I design tools and workflows that help businesses work smarter and grow faster.</p>
          <p>I design tools and workflows that help businesses work smarter and grow faster.</p>
        </figcaption>
      </article>
    </section>
  );
};

export default IllustrationSection;
