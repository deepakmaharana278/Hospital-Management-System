import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container py-4">
          <h1 className="fw-bold display-5">Contact Us</h1>
          <p className="lead mt-3">
            Have a question or need support? We're here to help you 24/7.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="container py-5">
        <div className="row g-4">
          {/* Info */}
          <div className="col-lg-5">
            <div className="card shadow border-0 rounded-4 h-100 p-4">
              <div className="card-body">
                <h4 className="fw-bold text-primary mb-4">Get in Touch</h4>
                <p className="text-muted mb-3">
                  Reach us via email, call, or visit our office for assistance.
                </p>
                <p><i className="bi bi-envelope-fill text-primary me-2"></i> support@mediconnect.com</p>
                <p><i className="bi bi-telephone-fill text-primary me-2"></i>+91 1800 8567 6876</p>
                <p><i className="bi bi-geo-alt-fill text-primary me-2"></i> MediCorner, Cuttack</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="col-lg-7">
            <div className="card shadow border-0 rounded-4 p-4">
              <div className="card-body">
                <h4 className="fw-bold text-primary mb-4">Send Us a Message</h4>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" className="form-control form-control-lg" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6">
                      <input type="email" className="form-control form-control-lg" placeholder="Your Email" required />
                    </div>
                    <div className="col-12">
                      <textarea className="form-control form-control-lg" rows="4" placeholder="Your Message" required></textarea>
                    </div>
                    <div className="col-12 text-end">
                      <button type="submit" className="btn btn-primary btn-lg px-4">
                        <i className="bi bi-send-fill me-2"></i>Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="container pb-5">
        <div className="rounded-4 overflow-hidden shadow">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.764083312597!2d85.85427431534704!3d20.45725398630685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19136fb58b5e45%3A0x1b5a4da6a66b2bc6!2sAjay%20Binay%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1676610000000!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
