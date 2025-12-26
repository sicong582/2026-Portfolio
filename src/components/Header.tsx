import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { label: "Work", path: "/work" },
    { label: "About", path: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container-wide flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-center">
          <div className="w-8 h-8 border border-foreground rounded-full flex items-center justify-center text-sm font-serif">
            S
          </div>
          <span className="text-[10px] tracking-[0.15em] uppercase mt-1">Sicong Chen</span>
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`font-sans text-sm transition-colors ${
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