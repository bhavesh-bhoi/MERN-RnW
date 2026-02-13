import { User, Target, Zap, Clock, Award, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section className="section-spacing bg-gradient-light" id="about">
      <div className="container px-4 px-lg-5">
        <div className="row mb-5 fade-in text-center">
          <div className="col-12">
            <div className="d-inline-flex align-items-center gap-2 bg-white px-4 py-2 rounded-pill shadow-sm mb-3">
              <User className="text-primary" size={20} />
              <span className="fw-medium">About Me</span>
            </div>
            <h2 className="display-4 fw-bold mb-3">
              Passionate About
              <span className="gradient-text d-block">Building Great Products</span>
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
              A frontend developer who loves turning complex problems into elegant solutions
            </p>
          </div>
        </div>

        <div className="row gy-5 align-items-center">
          {/* Left Column - Content */}
          <div className="col-lg-6 fade-in slide-left">
            <div className="about-content">
              <p className="fs-5 text-muted mb-4 lh-lg">
                I'm a passionate frontend developer with over 3 years of
                experience building web applications. I love turning complex
                problems into simple, beautiful designs that users enjoy interacting with.
              </p>

              <p className="fs-5 text-muted mb-5 lh-lg">
                When I'm not coding, I enjoy exploring new technologies,
                contributing to open source, and sharing knowledge with the
                developer community through blog posts and tutorials.
              </p>

              {/* Mission & Focus Cards */}
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="glass-card-light rounded-4 p-4 h-100 hover-lift">
                    <div className="icon-box bg-primary bg-opacity-10 rounded-3 d-inline-flex p-3 mb-3">
                      <Target className="text-primary" size={24} />
                    </div>
                    <h3 className="h5 fw-bold mb-2">Mission</h3>
                    <p className="text-muted mb-0">
                      Create accessible, performant web experiences that make a difference
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="glass-card-light rounded-4 p-4 h-100 hover-lift">
                    <div className="icon-box bg-primary bg-opacity-10 rounded-3 d-inline-flex p-3 mb-3">
                      <Zap className="text-primary" size={24} />
                    </div>
                    <h3 className="h5 fw-bold mb-2">Focus</h3>
                    <p className="text-muted mb-0">
                      React, UI/UX, modern web standards and best practices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills Progress */}
          <div className="col-lg-6 fade-in slide-right">
            <div className="glass-card rounded-4 p-4 p-lg-5 shadow-lg">
              <div className="d-flex align-items-center mb-4">
                <div className="icon-box bg-primary bg-opacity-10 rounded-3 d-inline-flex p-2 me-3">
                  <Clock className="text-primary" size={20} />
                </div>
                <h3 className="h4 fw-bold mb-0">Expertise & Growth</h3>
              </div>

              {/* Skill Bars */}
              <div className="skills-list">
                <div className="skill-item mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center gap-2">
                      <span className="fw-bold">Frontend Development</span>
                      <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-2 py-1 small">Expert</span>
                    </div>
                    <span className="text-muted fw-medium">90%</span>
                  </div>
                  <div className="progress-bar-modern">
                    <div
                      className="progress-fill gradient-primary"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div className="skill-item mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center gap-2">
                      <span className="fw-bold">React Ecosystem</span>
                      <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-2 py-1 small">Advanced</span>
                    </div>
                    <span className="text-muted fw-medium">95%</span>
                  </div>
                  <div className="progress-bar-modern">
                    <div
                      className="progress-fill gradient-primary"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>

                <div className="skill-item mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center gap-2">
                      <span className="fw-bold">Backend Development</span>
                      <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-2 py-1 small">Intermediate</span>
                    </div>
                    <span className="text-muted fw-medium">80%</span>
                  </div>
                  <div className="progress-bar-modern">
                    <div
                      className="progress-fill gradient-primary"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center gap-2">
                      <span className="fw-bold">Problem Solving</span>
                      <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-2 py-1 small">Expert</span>
                    </div>
                    <span className="text-muted fw-medium">85%</span>
                  </div>
                  <div className="progress-bar-modern">
                    <div
                      className="progress-fill gradient-primary"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Achievement Stats */}
              <div className="row g-3 mt-4 pt-4 border-top">
                <div className="col-6">
                  <div className="text-center">
                    <Award className="text-primary mb-2" size={24} />
                    <div className="h5 fw-bold mb-0">5+ Months</div>
                    <div className="small text-muted">Experience</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center">
                    <Briefcase className="text-primary mb-2" size={24} />
                    <div className="h5 fw-bold mb-0">22+</div>
                    <div className="small text-muted">Projects</div>
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

export default About;
