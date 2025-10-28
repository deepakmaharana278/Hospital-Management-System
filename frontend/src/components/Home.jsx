import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout>

      {/* Hero Section */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h1 className="fw-bold mb-3">Welcome to Deepak MediConnect</h1>
          <p className="lead mb-4">
            A smart online doctor-patient appointment system — book, manage, and consult with ease.
          </p>
          <button
            onClick={() => navigate("/book-appointment")}
            className="btn btn-primary btn-lg"
          >
            Book Appointment
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">About Our System</h2>
          <p className="text-muted">
            Our platform connects patients and doctors seamlessly. Doctors can manage appointments,
            and patients can book consultations instantly — all in one place.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-primary">Our Services</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow border-0 h-100 text-center p-4">
                <div className="card-body">
                  <h5 className="card-title fw-bold">👩‍⚕️ Patient Portal</h5>
                  <p className="card-text text-muted">
                    Patients can register, log in, and book doctor appointments online.
                  </p>
                  <button
                    onClick={() => navigate("/user-login")}
                    className="btn btn-outline-primary"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow border-0 h-100 text-center p-4">
                <div className="card-body">
                  <h5 className="card-title fw-bold">🩺 Doctor Dashboard</h5>
                  <p className="card-text text-muted">
                    Doctors can view, approve, and complete patient appointments.
                  </p>
                  <button
                    onClick={() => navigate("/user-login")}
                    className="btn btn-outline-primary"
                  >
                    Doctor Login
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow border-0 h-100 text-center p-4">
                <div className="card-body">
                  <h5 className="card-title fw-bold">📅 Appointment Management</h5>
                  <p className="card-text text-muted">
                    Efficiently manage appointments, track status, and notifications.
                  </p>
                  <button
                    onClick={() => navigate("/book-appointment")}
                    className="btn btn-outline-primary"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </Layout>
  );
};

export default Home;
