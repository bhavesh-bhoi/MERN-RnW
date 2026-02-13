import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  Linkedin,
  Github,
  MessageSquare,
  CheckCircle,
  Twitter,
  Phone,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 4000);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "bhavubhoi806@gmail.com",
      link: "mailto:bhavubhoi806@gmail.com",
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "India",
      link: null,
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+91 XXX XXX XXXX",
      link: "tel:+91XXXXXXXXXX",
    },
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, label: "LinkedIn", link: "https://linkedin.com/in/bhavesh-bhoi", color: "#0A66C2" },
    { icon: <Github size={20} />, label: "GitHub", link: "https://github.com/Bhavu7", color: "#181717" },
    { icon: <Twitter size={20} />, label: "Twitter", link: "#", color: "#1DA1F2" },
  ];

  return (
    <section className="section-spacing bg-gradient-light position-relative overflow-hidden" id="contact">
      {/* Background Decoration */}
      <div className="contact-bg-decoration"></div>

      <div className="container px-4 px-lg-5 position-relative">
        {/* Header */}
        <div className="row mb-5 fade-in text-center">
          <div className="col-12">
            <div className="d-inline-flex align-items-center gap-2 bg-white px-4 py-2 rounded-pill shadow-sm mb-3">
              <MessageSquare className="text-primary" size={20} />
              <span className="fw-medium">Get In Touch</span>
            </div>
            <h2 className="display-4 fw-bold mb-3">
              Let's Create
              <span className="gradient-text d-block">Something Amazing</span>
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Have a project in mind or want to discuss opportunities? I'd love to hear from you!
            </p>
          </div>
        </div>

        <div className="row gy-5 align-items-start">
          {/* Left Column - Contact Info */}
          <div className="col-lg-5 fade-in slide-left">
            <div className="glass-card rounded-4 p-4 p-lg-5 h-100">
              <h3 className="h4 fw-bold mb-4">Contact Information</h3>
              
              {/* Contact Details */}
              <div className="contact-info-list mb-5">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item d-flex align-items-center mb-4">
                    <div className="icon-box bg-primary bg-opacity-10 rounded-3 p-3 me-3">
                      <div className="text-primary">{info.icon}</div>
                    </div>
                    <div>
                      <p className="small text-muted mb-1 fw-medium">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-dark fw-bold text-decoration-none hover-underline"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="mb-0 fw-bold text-dark">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mb-4">
                <h4 className="h6 fw-bold mb-3">Connect With Me</h4>
                <div className="d-flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <button
                      key={index}
                      className="btn btn-social rounded-3 px-4 py-3 d-flex align-items-center gap-2 hover-lift"
                      onClick={() => window.open(social.link, "_blank")}
                      style={{ borderColor: social.color }}
                    >
                      <span style={{ color: social.color }}>{social.icon}</span>
                      <span className="fw-medium">{social.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Availability Badge */}
              <div className="availability-card glass-card-light rounded-4 p-4 mt-4">
                <div className="d-flex align-items-center gap-3">
                  <div className="status-indicator"></div>
                  <div>
                    <div className="fw-bold mb-1">Currently Available</div>
                    <div className="small text-muted">For freelance projects & opportunities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="col-lg-7 fade-in slide-right">
            <div className="glass-card rounded-4 p-4 p-lg-5">
              <form onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label fw-medium mb-2">
                      Your Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control form-control-modern py-3"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-medium mb-2">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control form-control-modern py-3"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-medium mb-2">
                      Subject <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-control form-control-modern py-3"
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-medium mb-2">
                      Your Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control form-control-modern py-3"
                      rows="6"
                      placeholder="Tell me about your project or idea..."
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-dark btn-lg w-100 py-3 d-flex align-items-center justify-content-center gap-2 fw-medium btn-hover-lift position-relative"
                      disabled={isLoading || isSubmitted}
                    >
                      {isLoading ? (
                        <>
                          <span className="spinner-border spinner-border-sm" role="status"></span>
                          <span>Sending...</span>
                        </>
                      ) : isSubmitted ? (
                        <>
                          <CheckCircle size={20} />
                          <span>Message Sent Successfully!</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={20} />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>

              {/* Success Message */}
              {isSubmitted && (
                <div className="alert alert-success-modern rounded-4 mt-4 d-flex align-items-center gap-3 fade-in">
                  <CheckCircle size={24} className="text-success" />
                  <div>
                    <div className="fw-bold">Thank you for reaching out!</div>
                    <div className="small">I'll get back to you as soon as possible.</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="row mt-5 pt-4 fade-in">
          <div className="col-12">
            <div className="cta-card glass-card rounded-4 p-5 text-center">
              <h3 className="h3 fw-bold mb-3">Prefer a quick chat?</h3>
              <p className="text-muted mb-4">
                Book a 30-minute consultation to discuss your project needs
              </p>
              <button className="btn btn-outline-dark btn-lg px-5 py-3 btn-hover-lift">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
