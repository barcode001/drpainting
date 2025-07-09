import React from "react";
import { Link } from "react-router-dom";
import residental from "../assets/images/services/residental1.jpeg";
import commercial from "../assets/images/services/comercial.jpeg";
import cabinets from "../assets/images/services/cabinets.jpeg";
import powerWashing from "../assets/images/services/residental.jpeg";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">Our Painting Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img
              src={residental}
              alt="Residential Painting"
              width="400"
              height="250"
              loading="lazy"
            />
            <h3>Residential Painting</h3>
            <p>
              Brighten up your home with expert interior & exterior painting
              services.
            </p>
            <div className="card-btn">
              <Link
                to="/services/residential"
                className="hero-button secondary"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="service-card">
            <img
              src={commercial}
              alt="Commercial Painting"
              width="400"
              height="250"
              loading="lazy"
            />
            <h3>Commercial Painting</h3>
            <p>
              Professional painting for offices, retail spaces, and industrial
              buildings.
            </p>
            <div className="card-btn">
              <Link to="/services/commercial" className="hero-button secondary">
                Learn More
              </Link>
            </div>
          </div>

          <div className="service-card">
            <img
              src={cabinets}
              alt="Cabinet Refinishing"
              width="400"
              height="250"
              loading="lazy"
            />
            <h3>Cabinet Refinishing</h3>
            <p>
              Modernize your kitchen or bathroom with smooth, durable cabinet
              finishes.
            </p>
            <div className="card-btn">
              <Link
                to="services/cabinet-refinishing"
                className="hero-button secondary"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="service-card">
            <img
              src={powerWashing}
              alt="Power Washing"
              width="400"
              height="250"
              loading="lazy"
            />
            <h3>Power Washing</h3>
            <p>
              Remove dirt, mold, and grime from exterior surfaces before
              painting.
            </p>
            <div className="card-btn">
              <Link
                to="/services/power-washing"
                className="hero-button secondary"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
