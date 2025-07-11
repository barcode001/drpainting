import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logoImage from "../assets/images/logo/drpaintinginc-logo.webp";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };
  // useEffect(() => {
  //   if (menuOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //   }
  // }, [menuOpen]);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={handleLinkClick}>
          <img src={logoImage} alt="D&R Painting logo" width="63" height="50" />
        </Link>

        {/* Left-side CTA button for mobile */}
        <Link
          to="/contact"
          className="mobile-quote-btn"
          onClick={handleLinkClick}
        >
          Get a Quote
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li className="dropdown">
            <HashLink smooth to="/#services" onClick={handleLinkClick}>
              Services
            </HashLink>
            <ul className="dropdown-menu">
              <li>
                <Link to="/services/residential" onClick={handleLinkClick}>
                  Residential
                </Link>
              </li>
              <li>
                <Link to="/services/commercial" onClick={handleLinkClick}>
                  Commercial
                </Link>
              </li>
              <li>
                <Link
                  to="services/cabinet-refinishing"
                  onClick={handleLinkClick}
                >
                  Cabinet Refinishing
                </Link>
              </li>
              <li>
                <Link to="/services/power-washing" onClick={handleLinkClick}>
                  Power Washing
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
