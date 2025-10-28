import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="d-flex flex-column min-vh-100">

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">

          {/* Logo */}
          <Link className="navbar-brand fw-bold fs-3 d-flex align-items-center" to="/">
            <span className="me-2" role="img" aria-label="hospital">🏥</span>
            Deepak MediConnect
          </Link>

          {/* Hamburger toggle */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation links */}
          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav mx-auto align-items-lg-center">

              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to='/about' onClick={() => setMenuOpen(false)}>
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to='/contact' onClick={() => setMenuOpen(false)}>
                  Contact Us
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to='/policy' onClick={() => setMenuOpen(false)}>
                  Privacy policy 
                </Link>
              </li>
            </ul>

            {/* User action buttons on the right */}
            <div className="d-flex align-items-center gap-2">

              {!user && (
                <>
                  <button
                    className="btn btn-outline-light"
                    onClick={() => {
                      navigate("/user-login");
                      setMenuOpen(false);
                    }}
                  >
                    Login
                  </button>
                  <button
                    className="btn btn-light"
                    onClick={() => {
                      navigate("/user-register");
                      setMenuOpen(false);
                    }}
                  >
                    Register
                  </button>
                </>
              )}

              {user && (
                <>
                  <button
                    className="btn btn-outline-light"
                    onClick={() => {
                      if (user.role === "doctor") navigate("/doctor-dashboard");
                      else if (user.role === "patient") navigate("/patient-dashboard");
                      setMenuOpen(false);
                    }}
                  >
                    Dashboard
                  </button>
                  <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="container flex-grow-1 py-5">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-3 mt-auto">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} MediConnect | Designed by Deepak Maharana ❤️
        </p>
      </footer>
    </div>
  );
};

export default Layout;
