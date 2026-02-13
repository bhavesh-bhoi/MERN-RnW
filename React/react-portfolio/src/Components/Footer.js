import { Heart, ArrowUp, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-5 border-top bg-dark text-white">
      <div className="container px-4 px-lg-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="d-flex align-items-center">
              <Code2 className="me-3 text-white" size={32} />
              <div>
                <h3 className="h4 fw-bold mb-1 text-white">Bhavesh.Codes</h3>
                <p className="text-white-50 mb-0">
                  Building the web, one component at a time
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-end gap-3">
              <button
                className="btn btn-outline-light btn-sm px-3 py-2 d-flex align-items-center btn-hover-effect"
                onClick={scrollToTop}
              >
                <ArrowUp size={16} className="me-2" />
                Back to Top
              </button>

              <div className="d-flex gap-3">
                <a href="#work" className="text-white text-decoration-none">
                  Work
                </a>
                <a href="#skills" className="text-white text-decoration-none">
                  Skills
                </a>
                <a href="#contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4 pt-4 border-top border-white-10">
          <div className="col-12">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <p className="small text-white-50 mb-2 mb-md-0">
                © {currentYear} Bhavesh Bhoi. All rights reserved.
              </p>
              <p className="small text-white-50 d-flex align-items-center">
                Made with <Heart size={12} className="text-danger mx-1" />
                using React & Bootstrap
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
