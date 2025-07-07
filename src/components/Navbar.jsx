import { Link } from "react-router-dom";
import React, { useState } from "react";
import logoImage from "../assets/images/logo/drpaintinginc-logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={logoImage} alt="Painting crew in action" />
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className="dropdown">
            <Link to="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/services/residential">Residential</Link>
              </li>
              <li>
                <Link to="/services/commercial">Commercial</Link>
              </li>
              <li>
                <Link to="/services/cabinets">Cabinet Refinishing</Link>
              </li>
              <li>
                <Link to="/services/power-washing">Power Washing</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/get-quote"
              className="cta-button"
              onClick={() => setMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
