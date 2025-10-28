import React, { useState } from "react";
import api from "../axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const Registration = () => {
  const [formData, setFormData] = useState({
    role: "",
    full_name: "",
    email: "",
    mobile: "",
    password: "",
    confirm_password: "",
    specialization: "",
    experience: "",
    available_time: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await api.post(`/register/`, formData);
      toast.success(res.data.message);
      setFormData({
        role: "",
        full_name: "",
        email: "",
        mobile: "",
        password: "",
        confirm_password: "",
        specialization: "",
        experience: "",
        available_time: "",
      });
      setTimeout(() => {
        navigate("/user-login");
      }, 2000);
    } catch (error) {
      toast.error(error.response?.data?.message || "Error connecting to the server");
    }
  };

  return (
    <Layout>
      <ToastContainer autoClose={2000} />
      <form onSubmit={handleSubmit} className="container py-5">
        <div className="card shadow-sm p-4">
          <h1 className="text-center fw-bold mb-4">Create an Account</h1>

          {/* Role */}
          <div className="mb-3">
            <label className="form-label fw-medium">Account Type</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="form-control"
              required
            >
              <option value="">Select role</option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          {/* Common Fields */}
          <div className="mb-3">
            <label className="form-label fw-medium">Full Name *</label>
            <input
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-medium">Email *</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="form-control"
              placeholder="name@example.com"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-medium">Mobile Number *</label>
            <input
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Doctor-specific fields */}
          {formData.role === "doctor" && (
            <>
              <div className="mb-3">
                <label className="form-label fw-medium">Specialization *</label>
                <input
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="e.g., Cardiologist, Dentist, etc."
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-medium">Experience (in years) *</label>
                <input
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="Enter years of experience"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-medium">Available Time *</label>
                <input
                  name="available_time"
                  value={formData.available_time}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="e.g., 10:00 AM - 5:00 PM"
                  required
                />
              </div>
            </>
          )}

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-medium">Password *</label>
            <input
              value={formData.password}
              onChange={handleChange}
              name="password"
              type="password"
              className="form-control"
              placeholder="Create a password"
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-medium">Confirm Password *</label>
            <input
              onChange={handleChange}
              value={formData.confirm_password}
              name="confirm_password"
              type="password"
              className="form-control"
              placeholder="Re-enter your password"
              required
            />
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">
            Submit
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default Registration;
