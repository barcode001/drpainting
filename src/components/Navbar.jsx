import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logoImage from "../assets/images/logo/drpaintinginc-logo.webp";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Close menu and scroll to top
  const handleLinkClick = () => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={handleLinkClick}>
          <img src={logoImage} alt="D&R Painting logo" width="63" height="50" />
        </Link>

        {/* CTA button for mobile */}
        <Link
          to="/contact"
          className="mobile-quote-btn"
          onClick={() => {
            handleLinkClick();
            window.gtag?.("event", "click_get_quote", {
              event_category: "engagement",
              event_label: "Navbar Mobile Quote",
            });
          }}
        >
          Get a Quote
        </Link>

        {/* Hamburger menu toggle */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation links */}
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

          {/* Services dropdown */}
          <li className="dropdown">
            <HashLink smooth to="/#services" onClick={handleLinkClick}>
              Services ▾
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
                  to="/services/cabinet-refinishing"
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

          {/* Contact link with analytics tracking */}
          <li>
            <Link
              to="/contact"
              onClick={() => {
                handleLinkClick();
                window.gtag?.("event", "click_contact_nav", {
                  event_category: "navigation",
                  event_label: "Navbar Contact Link",
                });
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
