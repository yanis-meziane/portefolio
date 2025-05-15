
import { useState, useEffect } from "react";
import "./CSS/header.css"; 

const navItems = [
  { name: "Accueil", href: "#accueil" },
  { name: "À propos", href: "#about" },
  { name: "Compétences", href: "#competence" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={isScrolled ? "scrolled" : ""}>
      <div className="logo">
          Yanis Meziane
      </div>

      {/* Desktop navigation */}
      <div className="nav-links desktop">
        {navItems.map((item, key) => (
          <a key={key} href={item.href} className="link">
            {item.name}
          </a>
        ))}
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
