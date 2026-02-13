import { useState } from "react";
import { ExternalLink, Github, Eye, Star, Users } from "lucide-react";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with dashboard and admin panel",
      category: "fullstack",
      image:
        "https://images.pexels.com/photos/29502370/pexels-photo-29502370.jpeg",
      tech: ["React", "Node.js", "MongoDB"],
      live: "#",
      github: "#",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "Collaborative tool with real-time updates and team features",
      category: "frontend",
      image:
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Next.js", "Firebase", "Tailwind"],
      live: "#",
      github: "#",
      featured: false,
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with forecasts and analytics",
      category: "frontend",
      image:
        "https://uizard.io/static/89cb1d30cdee9c19b0ce72efe004ff49/0cfa7/f5e31989f816c5b15c47cd54b0eb0b30b210b6f0-1440x835.webp",
      tech: ["React", "API", "Chart.js"],
      live: "#",
      github: "#",
      featured: false,
    },
    {
      title: "Portfolio Template",
      description: "Open-source portfolio template for developers",
      category: "design",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React", "Bootstrap", "Framer"],
      live: "#",
      github: "#",
      featured: true,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const categories = ["all", "frontend", "fullstack", "design"];

  return (
    <section className="section-spacing bg-light" id="work">
      <div className="container px-4 px-lg-5">
        <div className="mb-5 fade-in text-center">
          <div className="col-12">
            <h2 className="display-5 fw-bold mb-3">Featured Projects</h2>
            <p className="text-muted lead">
              A selection of recent work showcasing different challenges and
              solutions
            </p>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="row mb-5 fade-in">
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {categories.map((filter) => (
                <button
                  key={filter}
                  className={`btn ${activeFilter === filter ? "btn-dark" : "btn-outline-dark"} px-4 py-2 btn-hover-effect`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects grid */}
        <div className="row gy-5">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`col-12 ${project.featured ? "col-lg-8" : "col-lg-4"} fade-in`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="project-card h-100 rounded-4 p-4 p-lg-5 hover-lift">
                <div className="position-relative overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid rounded-4 w-100"
                    style={{
                      height: project.featured ? "400px" : "250px",
                      objectFit: "cover",
                    }}
                  />

                  {/* Hover overlay */}
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 bg-opacity-0 hover-bg-opacity-75 d-flex align-items-center justify-content-center transition-all"
                    style={{ transition: "all 0.3s ease" }}
                  >
                    <div className="text-center p-4">
                      <Eye
                        size={48}
                        className="text-white opacity-0 hover-opacity-100 mb-3"
                        style={{ transition: "opacity 0.3s ease" }}
                      />
                      <span className="text-white opacity-0 hover-opacity-100">
                        View Project
                      </span>
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="position-absolute top-0 end-0 m-4">
                    <span className="badge bg-white text-dark px-3 py-2 rounded-pill">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h3 className="h4 fw-bold mb-2">{project.title}</h3>
                    <p className="text-muted mb-3">{project.description}</p>

                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="badge bg-light text-dark border px-3 py-1 rounded-pill small"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-sm btn-outline-dark px-3 py-2 d-flex align-items-center btn-hover-effect"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github size={16} />
                    </button>
                    <button
                      className="btn btn-sm btn-dark px-3 py-2 d-flex align-items-center btn-hover-effect"
                      onClick={() => window.open(project.live, "_blank")}
                    >
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="d-flex gap-4 mt-3 pt-3 border-top">
                  <div className="d-flex align-items-center">
                    <Star size={16} className="me-2 text-warning" />
                    <small className="text-muted">Featured</small>
                  </div>
                  <div className="d-flex align-items-center">
                    <Users size={16} className="me-2 text-primary" />
                    <small className="text-muted">Open Source</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5 pt-5 fade-in">
          <div className="col-12 text-center">
            <button
              className="btn btn-outline-dark px-4 py-3 btn-hover-effect"
              onClick={() => window.open("https://github.com/Bhavu7", "_blank")}
            >
              View More Projects on GitHub
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
