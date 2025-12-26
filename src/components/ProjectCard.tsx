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
      <div className={`bg-card rounded-2xl p-6 transition-shadow hover:shadow-lg ${isLarge ? "aspect-[4/3]" : "aspect-[4/3]"}`}>
        <div className="w-full h-full flex items-center justify-center relative">
          {/* Main phone mockup */}
          <div className={`relative ${isLarge ? "w-28" : "w-20"} z-10`}>
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
          
          {/* Floating elements - smaller screens/cards behind */}
          <div className={`absolute ${isLarge ? "left-4 top-4" : "left-2 top-2"} ${isLarge ? "w-24 h-28" : "w-16 h-20"} bg-background/80 rounded-lg shadow-md overflow-hidden`}>
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover opacity-60"
            />
          </div>
          <div className={`absolute ${isLarge ? "right-4 top-6" : "right-2 top-4"} ${isLarge ? "w-20 h-24" : "w-14 h-16"} bg-background/80 rounded-lg shadow-md overflow-hidden`}>
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover opacity-60"
            />
          </div>
          <div className={`absolute ${isLarge ? "right-8 bottom-6" : "right-4 bottom-4"} ${isLarge ? "w-16 h-20" : "w-12 h-14"} bg-background/80 rounded-lg shadow-md overflow-hidden`}>
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover opacity-60"
            />
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