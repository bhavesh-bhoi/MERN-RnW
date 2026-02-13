import {
  ArrowRight,
  Sparkles,
  Code,
  Palette,
  Zap,
  Users,
  Target,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="section-spacing pt-7" id="home">
      <div className="container px-4 px-lg-5">
        <div className="row align-items-start gy-5">
          <div className="col-lg-7 slide-left fade-in">
            <div className="mb-5">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="bg-dark text-white rounded-pill px-3 py-1 small d-flex align-items-center">
                  <Sparkles size={14} className="me-2" />
                  Frontend Developer
                </div>
                <span className="bg-success text-white rounded-pill px-3 py-1 small d-flex align-items-center">
                  <Target size={14} className="me-2" />
                  Available for work
                </span>
              </div>

              <h1 className="display-2 fw-bold mb-4">
                Crafting Digital
                <span className="d-block text-primary mt-2">
                  Experiences That Matter
                </span>
              </h1>

              <p className="lead text-muted mb-5" style={{ maxWidth: "600px" }}>
                I specialize in building responsive, accessible web applications
                with React. Focused on creating interfaces that are both
                beautiful and functional.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-6">
                <button
                  className="btn btn-dark px-4 py-3 d-flex align-items-center btn-hover-effect"
                  onClick={() =>
                    document
                      .getElementById("work")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Projects
                  <ArrowRight className="ms-2" size={20} />
                </button>
                <button
                  className="btn btn-outline-dark px-4 py-3 btn-hover-effect"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-5 slide-right fade-in">
            <div className="position-relative mb-5">
              <div className="bg-dark text-white rounded-4 p-5 text-center">
                <div
                  className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                  style={{ width: "100px", height: "100px" }}
                >
                  <span className="display-6 fw-bold">BB</span>
                </div>
                <h3 className="h4 fw-bold mb-3">Bhavesh Bhoi</h3>
                <p className="text-white-50 mb-4">
                  Frontend Developer & React Specialist
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <div className="text-center">
                    <div className="h3 fw-bold mb-1">5 M/s</div>
                    <div className="small text-white-50">Internship</div>
                  </div>
                  <div className="text-center">
                    <div className="h3 fw-bold mb-1">22+</div>
                    <div className="small text-white-50">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="h3 fw-bold mb-1">100%</div>
                    <div className="small text-white-50">Quality</div>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100 bg-primary rounded-4"
                style={{
                  transform: "translate(10px, 10px)",
                  zIndex: -1,
                  opacity: 0.1,
                }}
              ></div>
            </div>

            {/* Feature cards grid - fixed structure */}
            <div className="row g-3">
              <div className="col-6">
                <div className="d-flex align-items-center p-3 bg-light rounded-3 h-100">
                  <Code className="me-3 text-primary" size={24} />
                  <div>
                    <div className="fw-bold">Clean Code</div>
                    <div className="text-muted small">Scalable solutions</div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center p-3 bg-light rounded-3 h-100">
                  <Palette className="me-3 text-primary" size={24} />
                  <div>
                    <div className="fw-bold">UI/UX Design</div>
                    <div className="text-muted small">User-centered</div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center p-3 bg-light rounded-3 h-100">
                  <Zap className="me-3 text-primary" size={24} />
                  <div>
                    <div className="fw-bold">Fast & Reliable</div>
                    <div className="text-muted small">Performance focus</div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center p-3 bg-light rounded-3 h-100">
                  <Users className="me-3 text-primary" size={24} />
                  <div>
                    <div className="fw-bold">Collaborative</div>
                    <div className="text-muted small">Team player</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
