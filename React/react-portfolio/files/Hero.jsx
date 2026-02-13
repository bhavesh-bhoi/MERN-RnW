import {
  ArrowRight,
  Sparkles,
  Code,
  Palette,
  Zap,
  Users,
  Target,
  Download,
  Play,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-section position-relative overflow-hidden" id="home">
      {/* Animated Background Elements */}
      <div className="hero-bg-gradient"></div>
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="container px-4 px-lg-5 position-relative" style={{ paddingTop: "140px", paddingBottom: "100px" }}>
        <div className="row align-items-center gy-5">
          {/* Left Content */}
          <div className="col-lg-6 slide-left fade-in">
            <div className="mb-4">
              <div className="d-inline-flex align-items-center gap-3 mb-4 flex-wrap">
                <div className="badge-pill bg-gradient-primary text-white px-3 py-2 rounded-pill d-flex align-items-center shadow-sm">
                  <Sparkles size={14} className="me-2" />
                  Frontend Developer
                </div>
                <div className="badge-pill badge-success px-3 py-2 rounded-pill d-flex align-items-center shadow-sm">
                  <div className="status-dot me-2"></div>
                  Available for work
                </div>
              </div>

              <h1 className="hero-title display-1 fw-bold mb-4 lh-1">
                Crafting Digital
                <span className="d-block gradient-text mt-2">
                  Experiences That Matter
                </span>
              </h1>

              <p className="hero-subtitle lead text-muted mb-5" style={{ maxWidth: "550px" }}>
                I specialize in building responsive, accessible web applications
                with React. Focused on creating interfaces that are both
                beautiful and functional.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-5">
                <button
                  className="btn btn-dark btn-lg px-4 py-3 d-flex align-items-center btn-hover-lift shadow"
                  onClick={() =>
                    document
                      .getElementById("work")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Play className="me-2" size={20} fill="currentColor" />
                  View Projects
                </button>
                <button
                  className="btn btn-outline-dark btn-lg px-4 py-3 btn-hover-lift"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Get in Touch
                  <ArrowRight className="ms-2" size={20} />
                </button>
              </div>

              {/* Stats Row */}
              <div className="d-flex flex-wrap gap-4 pt-4 border-top">
                <div>
                  <div className="h2 fw-bold mb-0 gradient-text">5+</div>
                  <div className="small text-muted">Months Experience</div>
                </div>
                <div>
                  <div className="h2 fw-bold mb-0 gradient-text">22+</div>
                  <div className="small text-muted">Projects Completed</div>
                </div>
                <div>
                  <div className="h2 fw-bold mb-0 gradient-text">100%</div>
                  <div className="small text-muted">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Card */}
          <div className="col-lg-6 slide-right fade-in">
            <div className="hero-card-wrapper position-relative">
              {/* Main Profile Card with Glassmorphism */}
              <div className="glass-card rounded-4 p-4 p-lg-5 shadow-lg">
                <div className="text-center mb-4">
                  <div
                    className="hero-avatar gradient-border d-inline-flex align-items-center justify-content-center mb-4"
                  >
                    <span className="display-4 fw-bold text-white">BB</span>
                  </div>
                  <h3 className="h3 fw-bold mb-2">Bhavesh Bhoi</h3>
                  <p className="text-muted mb-4">
                    Frontend Developer & React Specialist
                  </p>
                  
                  {/* Social Proof */}
                  <div className="d-flex justify-content-center gap-2 mb-4">
                    <div className="badge bg-light text-dark px-3 py-2 rounded-pill">
                      <Sparkles size={14} className="me-1" />
                      Top Rated
                    </div>
                    <div className="badge bg-light text-dark px-3 py-2 rounded-pill">
                      <Target size={14} className="me-1" />
                      Verified
                    </div>
                  </div>
                </div>

                {/* Feature Grid */}
                <div className="row g-3 mb-4">
                  <div className="col-6">
                    <div className="feature-card bg-white rounded-3 p-3 h-100 border hover-shadow transition-all">
                      <Code className="text-primary mb-2" size={24} />
                      <div className="fw-bold small mb-1">Clean Code</div>
                      <div className="text-muted" style={{ fontSize: "0.75rem" }}>Scalable</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="feature-card bg-white rounded-3 p-3 h-100 border hover-shadow transition-all">
                      <Palette className="text-primary mb-2" size={24} />
                      <div className="fw-bold small mb-1">UI/UX Design</div>
                      <div className="text-muted" style={{ fontSize: "0.75rem" }}>User-centered</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="feature-card bg-white rounded-3 p-3 h-100 border hover-shadow transition-all">
                      <Zap className="text-primary mb-2" size={24} />
                      <div className="fw-bold small mb-1">Performance</div>
                      <div className="text-muted" style={{ fontSize: "0.75rem" }}>Optimized</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="feature-card bg-white rounded-3 p-3 h-100 border hover-shadow transition-all">
                      <Users className="text-primary mb-2" size={24} />
                      <div className="fw-bold small mb-1">Collaborative</div>
                      <div className="text-muted" style={{ fontSize: "0.75rem" }}>Team player</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="btn btn-outline-dark w-100 py-3 btn-hover-lift d-flex align-items-center justify-content-center gap-2">
                  <Download size={18} />
                  Download Resume
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="hero-decoration hero-decoration-1"></div>
              <div className="hero-decoration hero-decoration-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
