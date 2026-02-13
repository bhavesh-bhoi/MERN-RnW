import { useState, useEffect } from "react";
import { Code2, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "work", "skills", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar-modern ${scrolled ? "scrolled" : ""}`}>
      <div className="container px-4 px-lg-5">
        <div className="navbar-content d-flex align-items-center justify-content-between">
          {/* Brand */}
          <a
            className="navbar-brand d-flex align-items-center gap-2"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
          >
            <div className="brand-icon gradient-primary rounded-3 d-flex align-items-center justify-content-center">
              <Code2 size={24} className="text-white" />
            </div>
            <span className="brand-text fw-bold">Bhavesh.Codes</span>
          </a>

          {/* Desktop Navigation */}
          <div className="navbar-menu d-none d-lg-flex align-items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                className={`nav-link-modern ${
                  activeSection === link.href.substring(1) ? "active" : ""
                }`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.name}
              </a>
            ))}
            <button
              className="btn btn-dark btn-sm px-4 py-2 ms-3 btn-hover-lift"
              onClick={() => handleNavClick("#contact")}
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggle d-lg-none border-0 bg-transparent p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`navbar-mobile ${isOpen ? "open" : ""}`}>
          <div className="navbar-mobile-content">
            {navLinks.map((link, index) => (
              <a
                key={index}
                className={`nav-link-mobile ${
                  activeSection === link.href.substring(1) ? "active" : ""
                }`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.name}
              </a>
            ))}
            <button
              className="btn btn-dark w-100 py-3 mt-4 btn-hover-lift"
              onClick={() => {
                setIsOpen(false);
                handleNavClick("#contact");
              }}
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="navbar-overlay"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
