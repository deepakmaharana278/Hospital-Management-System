import React, { useEffect, useState } from "react";
import api from "../axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const PatientDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (!userData) {
      navigate("/user-login");
      return;
    }
    setUser(userData);
    fetchAppointments(userData.id);
  }, []);

  const fetchAppointments = async (patientId) => {
    try {
      const res = await api.get(`/appointments/patient/${patientId}/`);
      setAppointments(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load appointments");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/user-login");
  };

  return (
    <Layout>
      <ToastContainer />
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Welcome, {user?.full_name}</h2>
          <button className="btn btn-danger btn-sm" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="card shadow-sm p-4">
          <h4 className="mb-3">My Appointments</h4>

          {appointments.length === 0 ? (
            <p>No appointments yet.</p>
          ) : (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Doctor</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appt) => (
                  <tr key={appt.id}>
                    <td>{appt.doctor_name}</td>
                    <td>{new Date(appt.appointment_date).toLocaleString()}</td>
                    <td>
                      <span
                        className={`badge bg-${
                          appt.status === "approved"
                            ? "success"
                            : appt.status === "pending"
                            ? "warning"
                            : "secondary"
                        }`}
                      >
                        {appt.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <div className="text-center mt-3">
            <button
              onClick={() => navigate("/book-appointment")}
              className="btn btn-primary"
            >
              Book New Appointment
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PatientDashboard;
