import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Registraion from "./components/Registraion";
import Login from "./components/Login";
import Home from "./components/Home";
import ProtectedRoute from "./routes/ProtectedRoute";
import PatientDashboard from "./components/PatientDashboard";
import DoctorDashboard from "./components/DoctorDashboard";
import BookAppointment from "./components/BookAppointment";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user-register" element={<Registraion />} />
        <Route path="/user-login" element={<Login />} />
        <Route path="/" element={<Home />} />

        <Route
          path="/patient-dashboard"
          element={
            <ProtectedRoute allowedRoles={["patient"]}>
              <PatientDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/book-appointment"
          element={
            <ProtectedRoute allowedRoles={["patient"]}>
              <BookAppointment />
            </ProtectedRoute>
          }
        />


        <Route
          path="/doctor-dashboard"
          element={
            <ProtectedRoute allowedRoles={["doctor"]}>
              <DoctorDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
