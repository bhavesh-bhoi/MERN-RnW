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
    { name: "React", icon: <Layout />, color: "#61DAFB" },
    { name: "JavaScript", icon: <Code />, color: "#F7DF1E" },
    { name: "TypeScript", icon: <Terminal />, color: "#3178C6" },
    { name: "Next.js", icon: <Globe />, color: "#000000" },
    { name: "Tailwind", icon: <Layers />, color: "#06B6D4" },
    { name: "Node.js", icon: <Cpu />, color: "#339933" },
    { name: "MongoDB", icon: <Database />, color: "#47A248" },
    { name: "Firebase", icon: <Cloud />, color: "#FFCA28" },
    { name: "Git", icon: <GitBranch />, color: "#F05032" },
    { name: "Responsive", icon: <Smartphone />, color: "#000000" },
    { name: "UI/UX", icon: <Palette />, color: "#FF6B6B" },
    { name: "Performance", icon: <Zap />, color: "#FFD93D" },
    { name: "Security", icon: <Shield />, color: "#6BCF7F" },
    { name: "Deployment", icon: <Box />, color: "#8B5CF6" },
  ];

  // Duplicate for infinite loop
  const allSkills = [...skills, ...skills];

  return (
    <section className="section-spacing" id="skills">
      <div className="container px-4 px-lg-5">
        <div className="row mb-5 fade-in">
          <div className="col-12 text-center">
            <h2 className="display-5 fw-bold mb-3">Skills & Expertise</h2>
            <p className="text-muted lead">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div
        className="skills-container overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="d-flex align-items-center"
          style={{
            animation: isPaused ? "none" : "infiniteScroll 30s linear infinite",
            width: "fit-content",
          }}
        >
          {allSkills.map((skill, index) => (
            <div
              key={index}
              className="skill-item mx-3 p-4 rounded-4 bg-white shadow-sm d-flex flex-column align-items-center justify-content-center hover-lift pulse"
              style={{
                minWidth: "140px",
                height: "140px",
                flexShrink: 0,
                border: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              <div className="display-6 mb-3" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <span className="fw-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container px-4 px-lg-5 mt-5 fade-in">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="card border-0 bg-light rounded-4 p-4">
              <p className="text-muted mb-0">
                Hover over skills to pause • Always learning new technologies •
                Passionate about web performance and best practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
