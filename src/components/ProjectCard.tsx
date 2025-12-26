import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  type: string;
  date: string;
  image: string;
  variant?: "large" | "small";
}

const ProjectCard = ({
  id,
  title,
  type,
  date,
  image,
  variant = "large",
}: ProjectCardProps) => {
  const isLarge = variant === "large";

  return (
    <Link to={`/project/${id}`} className="group block">
      <div className={`bg-card rounded-2xl p-4 transition-shadow hover:shadow-lg ${isLarge ? "aspect-[4/3]" : "aspect-square"}`}>
        <div className="w-full h-full flex items-center justify-center">
          {/* Phone mockup */}
          <div className={`relative ${isLarge ? "w-32" : "w-24"}`}>
            <div className="bg-foreground/10 rounded-[20px] p-1 shadow-lg">
              <div className="bg-background rounded-[16px] overflow-hidden aspect-[9/19]">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 font-sans text-sm text-foreground">
        {title} <span className="text-muted-foreground">| {type} | {date}</span>
      </div>
    </Link>
  );
};

export default ProjectCard;