import { User, Target, Zap, Clock } from "lucide-react";

const About = () => {
  return (
    <section className="section-spacing bg-light" id="about">
      <div className="container px-4 px-lg-5">
        <div className="row gy-5">
          <div className="col-lg-6 fade-in">
            <div className="mb-5">
              <div className="d-flex align-items-center mb-4">
                <User className="me-3 text-primary" size={28} />
                <h2 className="display-5 fw-bold mb-0">About Me</h2>
              </div>

              <p className="fs-5 text-muted mb-4">
                I'm a passionate frontend developer with over 3 years of
                experience building web applications. I love turning complex
                problems into simple, beautiful designs.
              </p>

              <p className="fs-5 text-muted">
                When I'm not coding, I enjoy exploring new technologies,
                contributing to open source, and sharing knowledge with the
                developer community.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-6">
                <div className="card border-0 bg-white rounded-3 p-4">
                  <Target className="text-primary mb-3" size={24} />
                  <h3 className="h5 fw-bold mb-2">Mission</h3>
                  <p className="text-muted small mb-0">
                    Create accessible, performant web experiences
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="card border-0 bg-white rounded-3 p-4">
                  <Zap className="text-primary mb-3" size={24} />
                  <h3 className="h5 fw-bold mb-2">Focus</h3>
                  <p className="text-muted small mb-0">
                    React, UI/UX, and modern web standards
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 fade-in">
            <div className="position-relative">
              <div className="card border-0 bg-transparent rounded-4 mt-5 p-4 p-lg-5">
                <div className="d-flex align-items-center mb-4">
                  <Clock className="me-3 text-primary" size={24} />
                  <h3 className="h4 fw-bold mb-0">Experience & Journey</h3>
                </div>

                <div className="mb-5">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-bold">Frontend Development</span>
                    <span className="text-muted">Fresher</span>
                  </div>
                  <div className="progress" style={{ height: "6px" }}>
                    <div
                      className="progress-bar bg-dark"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-bold">React Ecosystem</span>
                    <span className="text-muted">Fresher</span>
                  </div>
                  <div className="progress" style={{ height: "6px" }}>
                    <div
                      className="progress-bar bg-dark"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-bold">Backend Development</span>
                    <span className="text-muted">Fresher</span>
                  </div>
                  <div className="progress" style={{ height: "6px" }}>
                    <div
                      className="progress-bar bg-dark"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-bold">Problem Solving</span>
                    <span className="text-muted">Always</span>
                  </div>
                  <div className="progress" style={{ height: "6px" }}>
                    <div
                      className="progress-bar bg-dark"
                      style={{ width: "85%" }}
                    ></div>
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
