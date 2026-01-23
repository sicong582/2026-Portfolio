import { motion } from "framer-motion";
import footerIllustration from "@/assets/footer-illustration.gif";
import GifWithThreeDeform from "@/components/GifWithThreeDeform";

const IllustrationSection = () => {
  return (
    <section className="illustration-section py-16">
      <article className="illustration-container container-wide flex flex-col md:flex-row items-center gap-8">
        <motion.figure 
          className="illustration-image w-full md:w-1/2 flex justify-center"
        >
          <div className="max-w-[200px] w-full aspect-[4/5]">
            <GifWithThreeDeform 
              gifSrc={footerIllustration}
              className="w-full"
              width={2}
              height={2.5}
            />
          </div>
        </motion.figure>
        <figcaption className="illustration-description w-full md:w-1/2 space-y-4 font-sans text-sm text-muted-foreground">
          <p>I design tools and workflows that help businesses work smarter and grow faster.</p>
          <p>I design tools and workflows that help businesses work smarter and grow faster.</p>
        </figcaption>
      </article>
    </section>
  );
};

export default IllustrationSection;
