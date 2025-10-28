import React from 'react'
import { useNavigate } from "react-router-dom";

const Layout = ({children}) => {

    const navigate = useNavigate();
      const user = JSON.parse(localStorage.getItem("user")); // check if user is logged in
    
      const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/"); // go to home after logout
      };
    return (
  <>
    {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="/">
            🏥 Deepak MediConnect
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>

              {!user && (
                <>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      onClick={() => navigate("/user-login")}
                      style={{ cursor: "pointer" }}
                    >
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      onClick={() => navigate("/user-register")}
                      style={{ cursor: "pointer" }}
                    >
                      Register
                    </a>
                  </li>
                </>
              )}

              {user && (
                <>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        if (user.role === "doctor") {
                          navigate("/doctor-dashboard");
                        } else if (user.role === "patient") {
                          navigate("/patient-dashboard");
                        }
                      }}
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn text-white ms-3"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
            </nav>
            <main>{children}</main>

            {/* Footer */}
      <footer className="bg-primary text-white text-center py-3 mt-5">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} MediConnect | Designed by Deepak Maharana ❤️
        </p>
      </footer>
            </>
  )
}

export default Layout