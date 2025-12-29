import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import logoImage from "@/assets/logo.avif";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const projects = [
  { id: "project-1", title: "Purchase Order Dashboard" },
  { id: "project-2", title: "Fulfillment Operation Tooling" },
  { id: "project-3", title: "Audi.com" },
  { id: "project-4", title: "PayPal.com" },
  { id: "project-5", title: "Airbnb Connect" },
  { id: "project-6", title: "IBM Weather Channel" },
  { id: "project-7", title: "AI Exploration" },
];

const Header = () => {
  const location = useLocation();
  const isWorkActive = location.pathname.startsWith("/project") || location.pathname === "/work";

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="site-nav container-wide flex items-center justify-between h-20">
        <Link to="/" className="logo">
          <img src={logoImage} alt="Sicong Chen" className="h-12 w-auto" />
        </Link>

        <ul className="nav-links flex items-center gap-8">
          <li className="nav-item">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`nav-link font-sans text-sm transition-colors flex items-center gap-1 ${
                    isWorkActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Work
                  <ChevronDown className="h-3 w-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background border border-border">
                {projects.map((project) => (
                  <DropdownMenuItem key={project.id} asChild>
                    <Link
                      to={`/project/${project.id}`}
                      className="cursor-pointer"
                    >
                      {project.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-link font-sans text-sm transition-colors ${
                location.pathname === "/about"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
