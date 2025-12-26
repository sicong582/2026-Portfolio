import { Link, useLocation } from "react-router-dom";
import logoImage from "@/assets/logo.avif";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { label: "Work", path: "/work" },
    { label: "About", path: "/about" },
  ];

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="site-nav container-wide flex items-center justify-between h-20">
        <Link to="/" className="logo">
          <img src={logoImage} alt="Sicong Chen" className="h-12 w-auto" />
        </Link>

        <ul className="nav-links flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link
                to={item.path}
                className={`nav-link font-sans text-sm transition-colors ${
                  location.pathname === item.path
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;