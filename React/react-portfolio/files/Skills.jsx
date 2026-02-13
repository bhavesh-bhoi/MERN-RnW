import { useState } from "react";
import {
  Code,
  Layout,
  Database,
  Cloud,
  GitBranch,
  Smartphone,
  Palette,
  Zap,
  Shield,
  Globe,
  Cpu,
  Terminal,
  Layers,
  Box,
} from "lucide-react";

const Skills = () => {
  const [isPaused, setIsPaused] = useState(false);

  const skills = [
    { name: "React", icon: <Layout />, color: "#61DAFB", level: "Expert" },
    { name: "JavaScript", icon: <Code />, color: "#F7DF1E", level: "Expert" },
    { name: "TypeScript", icon: <Terminal />, color: "#3178C6", level: "Advanced" },
    { name: "Next.js", icon: <Globe />, color: "#000000", level: "Advanced" },
    { name: "Tailwind", icon: <Layers />, color: "#06B6D4", level: "Expert" },
    { name: "Node.js", icon: <Cpu />, color: "#339933", level: "Intermediate" },
    { name: "MongoDB", icon: <Database />, color: "#47A248", level: "Intermediate" },
    { name: "Firebase", icon: <Cloud />, color: "#FFCA28", level: "Advanced" },
    { name: "Git", icon: <GitBranch />, color: "#F05032", level: "Expert" },
    { name: "Responsive", icon: <Smartphone />, color: "#000000", level: "Expert" },
    { name: "UI/UX", icon: <Palette />, color: "#FF6B6B", level: "Advanced" },
    { name: "Performance", icon: <Zap />, color: "#FFD93D", level: "Advanced" },
    { name: "Security", icon: <Shield />, color: "#6BCF7F", level: "Intermediate" },
    { name: "Deployment", icon: <Box />, color: "#8B5CF6", level: "Advanced" },
  ];

  // Duplicate for infinite loop
  const allSkills = [...skills, ...skills];

  return (
    <section className="section-spacing position-relative overflow-hidden" id="skills">
      {/* Background Decoration */}
      <div className="skills-bg-decoration"></div>

      <div className="container px-4 px-lg-5 position-relative">
        {/* Header */}
        <div className="row mb-5 fade-in text-center">
          <div className="col-12">
            <div className="d-inline-flex align-items-center gap-2 bg-white px-4 py-2 rounded-pill shadow-sm mb-3">
              <Zap className="text-primary" size={20} />
              <span className="fw-medium">Skills & Tools</span>
            </div>
            <h2 className="display-4 fw-bold mb-3">
              Technologies &
              <span className="gradient-text d-block">Expertise</span>
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Modern tech stack and tools I use to build exceptional digital experiences
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div
        className="skills-scroll-container py-5 mb-5"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="skills-scroll-track d-flex align-items-center gap-4"
          style={{
            animation: isPaused ? "none" : "infiniteScroll 40s linear infinite",
          }}
        >
          {allSkills.map((skill, index) => (
            <div
              key={index}
              className="skill-card-modern glass-card p-4 rounded-4 hover-lift-sm"
              style={{
                minWidth: "180px",
                flexShrink: 0,
              }}
            >
              <div
                className="skill-icon-wrapper rounded-3 d-inline-flex p-3 mb-3"
                style={{
                  background: `${skill.color}15`,
                  color: skill.color,
                }}
              >
                <div style={{ fontSize: "32px" }}>
                  {skill.icon}
                </div>
              </div>
              <div className="fw-bold mb-1">{skill.name}</div>
              <div className="d-flex align-items-center gap-2">
                <div className="skill-level-bar flex-grow-1">
                  <div
                    className="skill-level-fill"
                    style={{
                      width: skill.level === "Expert" ? "95%" : skill.level === "Advanced" ? "85%" : "75%",
                      background: skill.color,
                    }}
                  ></div>
                </div>
                <span className="badge bg-light text-dark small">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Info Card */}
      <div className="container px-4 px-lg-5">
        <div className="row justify-content-center fade-in">
          <div className="col-lg-10">
            <div className="glass-card rounded-4 p-4 p-lg-5 text-center">
              <div className="row g-4 align-items-center">
                <div className="col-lg-8">
                  <h3 className="h4 fw-bold mb-2">Always Learning & Growing</h3>
                  <p className="text-muted mb-0">
                    <span className="fw-medium">Hover to pause</span> • Passionate about web performance and best practices • 
                    Continuously exploring new technologies and methodologies
                  </p>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-end">
                    <span className="badge badge-skill-tag px-3 py-2">Frontend</span>
                    <span className="badge badge-skill-tag px-3 py-2">Backend</span>
                    <span className="badge badge-skill-tag px-3 py-2">DevOps</span>
                    <span className="badge badge-skill-tag px-3 py-2">Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="row mt-5 pt-4 gy-4 fade-in">
          <div className="col-12 text-center mb-4">
            <h3 className="h4 fw-bold">Certifications & Achievements</h3>
          </div>
          <div className="col-md-4">
            <div className="certification-card glass-card-light rounded-4 p-4 h-100 text-center hover-lift">
              <div className="cert-icon bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                <Code size={28} className="text-primary" />
              </div>
              <h4 className="h6 fw-bold mb-2">React Developer</h4>
              <p className="text-muted small mb-0">Advanced Certification</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="certification-card glass-card-light rounded-4 p-4 h-100 text-center hover-lift">
              <div className="cert-icon bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                <Globe size={28} className="text-primary" />
              </div>
              <h4 className="h6 fw-bold mb-2">Web Performance</h4>
              <p className="text-muted small mb-0">Optimization Expert</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="certification-card glass-card-light rounded-4 p-4 h-100 text-center hover-lift">
              <div className="cert-icon bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                <Palette size={28} className="text-primary" />
              </div>
              <h4 className="h6 fw-bold mb-2">UI/UX Design</h4>
              <p className="text-muted small mb-0">Professional Certificate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
