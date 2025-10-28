import React, { useState, useEffect } from "react";
import api from "../axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const BookAppointment = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    doctor_id: "",
    appointment_date: "",
    description: "",
  });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData);
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const res = await api.get("/doctors/");
      setDoctors(res.data);
    } catch (error) {
      toast.error("Failed to load doctors");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/book-appointment/", {
        patient_id: user.id,
        ...formData,
      });
      toast.success("Appointment booked!");
      setTimeout(() => navigate("/patient-dashboard"), 1500);
    } catch (error) {
      toast.error("Error booking appointment");
    }
  };

  return (
    <Layout>
      <ToastContainer />
      <div className="container py-5" style={{ maxWidth: "600px" }}>
        <div className="card shadow p-4">
          <h3 className="mb-4 text-center">Book Appointment</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-medium">Select Doctor</label>
              <select
                name="doctor_id"
                value={formData.doctor_id}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="">Select Doctor</option>
                {doctors.map((doc) => (
                  <option key={doc.id} value={doc.id}>
                    {doc.full_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label fw-medium">Date & Time</label>
              <input
                type="datetime-local"
                name="appointment_date"
                value={formData.appointment_date}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-medium">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="form-control"
              ></textarea>
            </div>

            <button className="btn btn-primary w-100 py-2" type="submit">
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default BookAppointment;
