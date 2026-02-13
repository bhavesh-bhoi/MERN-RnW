import { useState } from "react";
import { ExternalLink, Github, Eye, Star, TrendingUp, Code2 } from "lucide-react";

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
      stats: { stars: 234, views: "12k" }
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
      stats: { stars: 189, views: "8k" }
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
      stats: { stars: 156, views: "6k" }
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
      stats: { stars: 312, views: "15k" }
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "frontend", label: "Frontend", count: projects.filter(p => p.category === "frontend").length },
    { id: "fullstack", label: "Full Stack", count: projects.filter(p => p.category === "fullstack").length },
    { id: "design", label: "Design", count: projects.filter(p => p.category === "design").length },
  ];

  return (
    <section className="section-spacing bg-light" id="work">
      <div className="container px-4 px-lg-5">
        {/* Header */}
        <div className="row mb-5 fade-in text-center">
          <div className="col-12">
            <div className="d-inline-flex align-items-center gap-2 bg-white px-4 py-2 rounded-pill shadow-sm mb-3">
              <Code2 className="text-primary" size={20} />
              <span className="fw-medium">Portfolio</span>
            </div>
            <h2 className="display-4 fw-bold mb-3">
              Featured
              <span className="gradient-text d-block">Projects & Work</span>
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
              A selection of recent work showcasing different challenges and solutions
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="row mb-5 fade-in">
          <div className="col-12">
            <div className="filter-tabs d-flex flex-wrap justify-content-center gap-3">
              {categories.map((filter) => (
                <button
                  key={filter.id}
                  className={`btn filter-btn ${activeFilter === filter.id ? "active" : ""}`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  <span>{filter.label}</span>
                  <span className="badge bg-opacity-20 ms-2">{filter.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="row gy-4">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`col-12 ${project.featured ? "col-lg-6" : "col-lg-6"} fade-in`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="project-card-modern glass-card rounded-4 overflow-hidden h-100 hover-lift-lg">
                {/* Image Container */}
                <div className="project-image-wrapper position-relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-100 project-image"
                    style={{
                      height: project.featured ? "320px" : "280px",
                      objectFit: "cover",
                    }}
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="project-overlay">
                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-light rounded-circle p-3 hover-scale"
                        onClick={() => window.open(project.live, "_blank")}
                        title="View Live"
                      >
                        <ExternalLink size={20} />
                      </button>
                      <button
                        className="btn btn-light rounded-circle p-3 hover-scale"
                        onClick={() => window.open(project.github, "_blank")}
                        title="View Code"
                      >
                        <Github size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge badge-category px-3 py-2 rounded-pill fw-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="position-absolute top-0 start-0 m-3">
                      <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-medium d-flex align-items-center gap-1">
                        <Star size={14} fill="currentColor" />
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="h4 fw-bold mb-2">{project.title}</h3>
                  <p className="text-muted mb-3">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="badge tech-badge px-3 py-2 rounded-pill"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="d-flex align-items-center gap-4 pt-3 border-top">
                    <div className="d-flex align-items-center gap-2 text-muted">
                      <Star size={16} />
                      <small className="fw-medium">{project.stats.stars}</small>
                    </div>
                    <div className="d-flex align-items-center gap-2 text-muted">
                      <Eye size={16} />
                      <small className="fw-medium">{project.stats.views}</small>
                    </div>
                    <div className="ms-auto">
                      <TrendingUp size={16} className="text-success" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="row mt-5 pt-4 fade-in">
          <div className="col-12 text-center">
            <div className="glass-card-light rounded-4 p-5">
              <h3 className="h4 fw-bold mb-3">Want to see more?</h3>
              <p className="text-muted mb-4">
                Check out my GitHub profile for more projects and contributions
              </p>
              <button
                className="btn btn-dark btn-lg px-5 py-3 btn-hover-lift d-inline-flex align-items-center gap-2"
                onClick={() => window.open("https://github.com/Bhavu7", "_blank")}
              >
                <Github size={20} />
                View GitHub Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
