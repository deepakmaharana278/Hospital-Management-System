import React from "react";
import Layout from "../components/Layout";

const Policy = () => {
  return (
    <Layout>
      <section className="bg-primary text-white text-center py-5">
        <div className="container py-4">
          <h1 className="fw-bold display-5">Privacy Policy</h1>
          <p className="lead mt-3">
            Your data privacy and security are our top priorities.
          </p>
        </div>
      </section>

      <section className="container py-5">
        <div className="card border-0 shadow-lg rounded-4 p-4">
          <div className="card-body">
            <h3 className="fw-bold text-primary mb-3">1. Information We Collect</h3>
            <p className="text-muted">
              We collect information such as your name, contact details, and appointment history to provide seamless healthcare services.
            </p>

            <h3 className="fw-bold text-primary mt-4 mb-3">2. How We Use Your Data</h3>
            <p className="text-muted">
              Your data helps us manage appointments, improve our services, and enhance your healthcare experience. We do not sell or misuse your information.
            </p>

            <h3 className="fw-bold text-primary mt-4 mb-3">3. Data Protection</h3>
            <p className="text-muted">
              All sensitive data is encrypted and stored securely. Access is restricted to authorized medical professionals and staff.
            </p>

            <h3 className="fw-bold text-primary mt-4 mb-3">4. Your Rights</h3>
            <p className="text-muted">
              You can request correction or deletion of your data anytime by contacting our support team.
            </p>

            <h3 className="fw-bold text-primary mt-4 mb-3">5. Contact Us</h3>
            <p className="text-muted">
              If you have privacy concerns, contact us at{" "}
              <strong>privacy@mediconnect.com</strong>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Policy;
