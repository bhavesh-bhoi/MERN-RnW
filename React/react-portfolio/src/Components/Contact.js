import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  Linkedin,
  Github,
  MessageSquare,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="section-spacing" id="contact">
      <div className="container px-4 px-lg-5">
        <div className="row mb-5 fade-in">
          <div className="col-12 text-center">
            <div className="d-flex align-items-center justify-content-center mb-4">
              <MessageSquare className="me-3 text-primary" size={32} />
              <h2 className="display-5 fw-bold mb-0">Let's Connect</h2>
            </div>
            <p className="text-muted lead">
              Have a project in mind or want to discuss opportunities?
            </p>
          </div>
        </div>

        <div className="row gy-5">
          <div className="col-lg-5 fade-in slide-left">
            <div className="card border-0 bg-light rounded-4 p-4 p-lg-5 h-100">
              <h3 className="h4 fw-bold mb-4">Get in Touch</h3>

              <div className="mb-5">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-white rounded-circle p-3 me-3">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="small text-muted mb-1">Email</p>
                    <a
                      href="mailto:hello@bhavesh.codes"
                      className="text-dark fw-medium"
                    >
                      bhavubhoi806@gmail.com
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="bg-white rounded-circle p-3 me-3">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="small text-muted mb-1">Location</p>
                    <p className="mb-0 fw-medium">India</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="h6 fw-bold mb-3">Connect with me</h4>
                <div className="d-flex gap-3">
                  <button
                    className="btn btn-outline-dark px-4 py-2 d-flex align-items-center btn-hover-effect"
                    onClick={() =>
                      window.open(
                        "https://linkedin.com/in/bhavesh-bhoi",
                        "_blank",
                      )
                    }
                  >
                    <Linkedin size={18} className="me-2" />
                    LinkedIn
                  </button>
                  <button
                    className="btn btn-outline-dark px-4 py-2 d-flex align-items-center btn-hover-effect"
                    onClick={() =>
                      window.open("https://github.com/Bhavu7", "_blank")
                    }
                  >
                    <Github size={18} className="me-2" />
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7 fade-in slide-right">
            <div className="card border-0 bg-light rounded-4 p-4 p-lg-5">
              <form onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-12">
                    <label className="form-label fw-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control py-3"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control py-3"
                      placeholder="yourname@gmail.com"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control py-3"
                      rows="5"
                      placeholder="Your Message Here..."
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-dark w-100 py-3 d-flex align-items-center justify-content-center gap-2 fw-medium btn-hover-effect"
                    >
                      {isSubmitted ? "Message Sent!" : "Send Message"}
                      {!isSubmitted && <Send size={18} />}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
