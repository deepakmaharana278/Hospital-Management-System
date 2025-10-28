import React, { useEffect, useState } from "react";
import api from "../axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout";

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const email = storedUser?.email;
  const doctorId = storedUser?.id;

  // Fetch doctor profile
  useEffect(() => {
    const fetchDoctorProfile = async () => {
      if (!email) {
        toast.error("No email found. Please login again.");
        setLoading(false);
        return;
      }

      try {
        const res = await api.get(`/doctor-profile/?email=${email}`);
        setDoctor(res.data);
      } catch (error) {
        toast.error("Error fetching profile");
      } finally {
        setLoading(false);
      }
    };
    fetchDoctorProfile();
  }, [email]);

  // Fetch appointments
  const fetchAppointments = async () => {
    try {
      const res = await api.get(`/appointments/doctor/${doctorId}/`);
      setAppointments(res.data);
    } catch (error) {
      toast.error("Failed to load appointments");
    }
  };

  useEffect(() => {
    if (doctorId) fetchAppointments();
  }, [doctorId]);

  //  Update appointment status (approve/reject/complete)
  const handleStatusChange = async (appointmentId, status) => {
    try {
      await api.put(`/appointments/update-status/${appointmentId}/`, { status });
      toast.success(`Appointment marked as ${status}`);
      fetchAppointments(); // refresh list
    } catch (error) {
      toast.error("Error updating appointment status");
    }
  };

  

  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (!doctor) return <p className="text-center mt-5">Doctor not found</p>;

  return (
    <Layout>
    <div className="container py-5">
      <ToastContainer autoClose={2000} />

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-primary">Welcome, Dr. {doctor.full_name}</h2>
      </div>

      {/* Profile Card */}
      <div className="card shadow p-4 mb-4">
        <h4 className="mb-3 text-primary">Profile Information</h4>
        <div><strong>Email:</strong> {doctor.email}</div>
        <div><strong>Mobile:</strong> {doctor.mobile}</div>
        <div><strong>Specialization:</strong> {doctor.specialization}</div>
        <div><strong>Experience:</strong> {doctor.experience} years</div>
        <div><strong>Available Time:</strong> {doctor.available_time}</div>
        <div>
          <strong>Status:</strong>{" "}
          {doctor.available ? (
            <span className="text-success">Available</span>
          ) : (
            <span className="text-danger">Not Available</span>
          )}
        </div>
      </div>

      {/* Appointments Table */}
      <div className="card shadow p-4">
        <h4 className="mb-3 text-primary">Booked Appointments</h4>
        {appointments.length === 0 ? (
          <p>No appointments yet.</p>
        ) : (
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Date & Time</th>
                <th>Description</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <tr key={appt.id}>
                  <td>{appt.patient_name}</td>
                  <td>{new Date(appt.appointment_date).toLocaleString()}</td>
                  <td>{appt.description || "—"}</td>
                  <td>
                    <span
                      className={`badge bg-${
                        appt.status === "approved"
                          ? "success"
                          : appt.status === "pending"
                          ? "warning"
                          : appt.status === "completed"
                          ? "secondary"
                          : "danger"
                      }`}
                    >
                      {appt.status}
                    </span>
                  </td>
                  <td>
                    {appt.status === "pending" && (
                      <>
                        <button
                          className="btn btn-success btn-sm me-2"
                          onClick={() => handleStatusChange(appt.id, "approved")}
                        >
                          Approve
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleStatusChange(appt.id, "rejected")}
                        >
                          Reject
                        </button>
                      </>
                    )}

                    {appt.status === "approved" && (
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => handleStatusChange(appt.id, "completed")}
                      >
                        Mark Completed
                      </button>
                    )}

                    {appt.status === "completed" && (
                      <em className="text-muted">Completed ✅</em>
                    )}

                    {appt.status === "rejected" && (
                      <em className="text-muted">Rejected ❌</em>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
    </Layout>
  );
};

export default DoctorDashboard;
