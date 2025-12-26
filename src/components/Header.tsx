import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { label: "Work", path: "/work" },
    { label: "About", path: "/about" },
  ];

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="site-nav container-wide flex items-center justify-between h-20">
        <Link to="/" className="logo flex flex-col items-center">
          <figure className="logo-icon w-8 h-8 border border-foreground rounded-full flex items-center justify-center text-sm font-serif">
            S
          </figure>
          <figcaption className="logo-text text-[10px] tracking-[0.15em] uppercase mt-1">
            Sicong Chen
          </figcaption>
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