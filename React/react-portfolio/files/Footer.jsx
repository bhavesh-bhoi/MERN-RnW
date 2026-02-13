import { Heart, ArrowUp, Code2, Mail, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    navigation: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Work", href: "#work" },
      { name: "Skills", href: "#skills" },
      { name: "Contact", href: "#contact" },
    ],
    social: [
      { icon: <Github size={20} />, href: "https://github.com/Bhavu7", label: "GitHub" },
      { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/bhavesh-bhoi", label: "LinkedIn" },
      { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
      { icon: <Mail size={20} />, href: "mailto:bhavubhoi806@gmail.com", label: "Email" },
    ],
  };

  return (
    <footer className="footer-modern position-relative overflow-hidden">
      {/* Background Gradient */}
      <div className="footer-gradient"></div>

      <div className="container px-4 px-lg-5 position-relative">
        {/* Main Footer Content */}
        <div className="row py-5 gy-5">
          {/* Brand Column */}
          <div className="col-lg-4">
            <div className="footer-brand mb-4">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-box bg-white rounded-3 p-2 me-3">
                  <Code2 className="text-dark" size={32} />
                </div>
                <div>
                  <h3 className="h4 fw-bold mb-0 text-white">Bhavesh.Codes</h3>
                  <p className="small text-white-50 mb-0">Frontend Developer</p>
                </div>
              </div>
              <p className="text-white-50 mb-4">
                Building the web, one component at a time. Passionate about creating 
                exceptional digital experiences with modern technologies.
              </p>
              <button
                className="btn btn-outline-light btn-sm px-4 py-2 d-inline-flex align-items-center gap-2 btn-hover-lift"
                onClick={scrollToTop}
              >
                <ArrowUp size={16} />
                Back to Top
              </button>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="col-lg-3 col-md-6">
            <h4 className="h6 fw-bold text-white mb-3">Quick Links</h4>
            <ul className="list-unstyled footer-links">
              {footerLinks.navigation.map((link, index) => (
                <li key={index} className="mb-2">
                  <a 
                    href={link.href} 
                    className="text-white-50 text-decoration-none hover-text-white transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="col-lg-3 col-md-6">
            <h4 className="h6 fw-bold text-white mb-3">Services</h4>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <span className="text-white-50">Web Development</span>
              </li>
              <li className="mb-2">
                <span className="text-white-50">UI/UX Design</span>
              </li>
              <li className="mb-2">
                <span className="text-white-50">React Development</span>
              </li>
              <li className="mb-2">
                <span className="text-white-50">Performance Optimization</span>
              </li>
              <li className="mb-2">
                <span className="text-white-50">Consulting</span>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="col-lg-2 col-md-6">
            <h4 className="h6 fw-bold text-white mb-3">Connect</h4>
            <div className="d-flex flex-column gap-3">
              {footerLinks.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-50 text-decoration-none d-flex align-items-center gap-2 hover-text-white transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="row py-4 border-top border-white border-opacity-10">
          <div className="col-md-6 mb-3 mb-md-0">
            <p className="small text-white-50 mb-0">
              © {currentYear} Bhavesh Bhoi. All rights reserved.
            </p>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-md-end gap-3">
              <p className="small text-white-50 mb-0 d-flex align-items-center">
                Made with <Heart size={14} className="text-danger mx-1" fill="currentColor" /> 
                using React & Bootstrap
              </p>
              <div className="d-flex gap-3 small">
                <a href="#" className="text-white-50 text-decoration-none hover-text-white">
                  Privacy
                </a>
                <a href="#" className="text-white-50 text-decoration-none hover-text-white">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
