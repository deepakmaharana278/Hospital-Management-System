import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container py-4">
          <h1 className="fw-bold display-5">About Deepak MediConnect</h1>
          <p className="lead mt-3 w-75 mx-auto">
            Bridging the gap between patients and doctors through smart, seamless healthcare technology.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://img.freepik.com/free-vector/medical-app-concept-illustration_114360-7351.jpg"
              alt="Mission"
              className="img-fluid rounded-4 shadow"
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold text-primary mb-3">Our Mission</h2>
            <p className="text-muted">
              At Deepak MediConnect, our mission is to make healthcare accessible and efficient.
              We empower patients with digital booking, doctors with smart dashboards, and clinics
              with data-driven management — all within a unified platform.
            </p>
            <ul className="list-unstyled mt-3">
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Simple & secure booking system</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Doctor-friendly management tools</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Reliable digital healthcare support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold text-primary mb-4">Our Core Values</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow p-4 h-100 rounded-4">
                <div className="card-body">
                  <i className="bi bi-heart-fill text-danger fs-1 mb-3"></i>
                  <h5 className="fw-bold mb-2">Compassion</h5>
                  <p className="text-muted">We care deeply about our users and strive to enhance every healthcare experience.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow p-4 h-100 rounded-4">
                <div className="card-body">
                  <i className="bi bi-lightbulb-fill text-warning fs-1 mb-3"></i>
                  <h5 className="fw-bold mb-2">Innovation</h5>
                  <p className="text-muted">We integrate smart technology to improve connectivity and reliability in medical care.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow p-4 h-100 rounded-4">
                <div className="card-body">
                  <i className="bi bi-shield-lock-fill text-primary fs-1 mb-3"></i>
                  <h5 className="fw-bold mb-2">Trust</h5>
                  <p className="text-muted">Your privacy, security, and confidence are the foundation of everything we build.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
