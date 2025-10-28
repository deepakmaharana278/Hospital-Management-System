import React, { useEffect, useState } from "react";
import api from "../axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const Login = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    role: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(`/login/`, formData);
      toast.success(res.data.message);
      localStorage.setItem("user", JSON.stringify(res.data.user))
      
      setFormData({
        role: "",
        email: "",
        password: "",
      });
      setTimeout(() => {
        if (res.data.user.role === 'patient') {
          navigate("/patient-dashboard");
        } else if (res.data.user.role === 'doctor') {
          navigate('/doctor-dashboard')
        } else {
          navigate("/")
        }
      }, 2000);

    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else if (error.request) {
        toast.error("No response from server");
      } else {
        toast.error("Error: " + error.message);
      }
    }
  };
  return (
    <Layout>
      <ToastContainer autoClose={2000} />

      <form onSubmit={handleSubmit} className="container py-5">
        <div className="card shadow-sm p-4">
          <h1 className="text-center fw-bold mb-4">Login</h1>

          <div className="mb-3">
            <label className="form-label fw-medium">Account Type</label>
            <select name="role" value={formData.role} onChange={handleChange} className="form-control" required>
              <option value="">Select role</option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label fw-medium">Email *</label>
            <input name="email" value={formData.email} onChange={handleChange} type="email" className="form-control" placeholder="name@example.com" required />
          </div>

          <div className="mb-3">
            <label className="form-label fw-medium">Password *</label>
            <div className="input-group">
              <input value={formData.password} onChange={handleChange} name="password" type="password" className="form-control" id="password" placeholder="Enter your password" required />
            </div>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit" style={{ maxWidth: "100px" }}>
            login
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default Login;
