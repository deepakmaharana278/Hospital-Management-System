import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container py-5">
          <h1 className="fw-bold display-5 mb-3 animate__animated animate__fadeInDown">
            Welcome to <span className="text-warning">Deepak MediConnect</span>
          </h1>
          <p className="lead mb-4 w-75 mx-auto animate__animated animate__fadeInUp">
            Your smart doctor-patient appointment system — book, manage, and consult easily from anywhere.
          </p>
          <button
            onClick={() => navigate("/book-appointment")}
            className="btn btn-warning btn-lg fw-semibold shadow-sm"
          >
            <i className="bi bi-calendar-check me-2"></i>Book Appointment
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src="https://img.freepik.com/free-vector/telemedicine-concept_23-2148524656.jpg"
              alt="About MediConnect"
              className="img-fluid rounded-4 shadow"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="fw-bold text-primary mb-3">About Our System</h2>
            <p className="text-muted mb-4">
              Deepak MediConnect is designed to bridge the gap between doctors and patients. 
              With just a few clicks, patients can book consultations while doctors can manage 
              appointments and patient records effortlessly.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Seamless patient-doctor connectivity
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Real-time appointment tracking
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Secure and efficient data management
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-primary">
            Our Services
          </h2>
          <div className="row g-4">
            {/* Patient Portal */}
            <div className="col-md-4">
              <div className="card border-0 shadow-lg h-100 text-center p-4 rounded-4 service-card">
                <div className="card-body">
                  <div className="display-5 mb-3 text-primary">
                    <i className="bi bi-person-vcard"></i>
                  </div>
                  <h5 className="fw-bold">Patient Portal</h5>
                  <p className="text-muted">
                    Patients can register, log in, and easily book doctor appointments online.
                  </p>
                  <button
                    onClick={() => navigate("/user-login")}
                    className="btn btn-outline-primary fw-semibold"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* Doctor Dashboard */}
            <div className="col-md-4">
              <div className="card border-0 shadow-lg h-100 text-center p-4 rounded-4 service-card">
                <div className="card-body">
                  <div className="display-5 mb-3 text-primary">
                    <i className="bi bi-stethoscope"></i>
                  </div>
                  <h5 className="fw-bold">Doctor Dashboard</h5>
                  <p className="text-muted">
                    Doctors can view, approve, and manage patient appointments seamlessly.
                  </p>
                  <button
                    onClick={() => navigate("/user-login")}
                    className="btn btn-outline-primary fw-semibold"
                  >
                    Doctor Login
                  </button>
                </div>
              </div>
            </div>

            {/* Appointment Management */}
            <div className="col-md-4">
              <div className="card border-0 shadow-lg h-100 text-center p-4 rounded-4 service-card">
                <div className="card-body">
                  <div className="display-5 mb-3 text-primary">
                    <i className="bi bi-calendar3"></i>
                  </div>
                  <h5 className="fw-bold">Appointment Management</h5>
                  <p className="text-muted">
                    Efficiently manage appointments, track status, and send reminders.
                  </p>
                  <button
                    onClick={() => navigate("/book-appointment")}
                    className="btn btn-outline-primary fw-semibold"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="bg-primary text-white py-5 text-center">
        <div className="container">
          <h3 className="fw-bold mb-3">Ready to simplify your healthcare journey?</h3>
          <button
            onClick={() => navigate("/book-appointment")}
            className="btn btn-light btn-lg fw-semibold px-4"
          >
            <i className="bi bi-arrow-right-circle me-2"></i> Get Started
          </button>
        </div>
      </section>

      {/* Custom CSS (optional inline style or external file) */}
      <style>{`
        .service-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </Layout>
  );
};

export default Home;
