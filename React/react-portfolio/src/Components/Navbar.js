import { useState } from "react";
import { Code2, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-blur">
      <div className="container px-4 px-lg-5">
        <a
          className="navbar-brand d-flex align-items-center"
          href="https://bhaveshbhoi.netlify.app"
        >
          <Code2 className="me-2" size={28} />
          <span className="fw-bold fs-4">Bhavesh.Codes</span>
        </a>

        <button
          className="navbar-toggler border-0 p-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <div className="navbar-nav ms-auto d-flex align-items-center gap-3">
            {["Home", "About", "Work", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                className="nav-link text-dark fw-medium underline-animation"
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button
              className="btn btn-dark btn-sm px-3 py-2 btn-hover-effect"
              onClick={() => {
                setIsOpen(false);
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
