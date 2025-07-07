import React from "react";
import { FaPaintRoller, FaHome, FaBuilding, FaWater } from "react-icons/fa";

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">Our Painting Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <FaHome className="service-icon" />
            <h3>Residential Painting</h3>
            <p>
              Brighten up your home with expert interior & exterior painting
              services.
            </p>
          </div>
          <div className="service-card">
            <FaBuilding className="service-icon" />
            <h3>Commercial Painting</h3>
            <p>
              Professional painting for offices, retail spaces, and industrial
              buildings.
            </p>
          </div>
          <div className="service-card">
            <FaPaintRoller className="service-icon" />
            <h3>Cabinet Refinishing</h3>
            <p>
              Modernize your kitchen or bathroom with smooth, durable cabinet
              finishes.
            </p>
          </div>
          <div className="service-card">
            <FaWater className="service-icon" />
            <h3>Power Washing</h3>
            <p>
              Remove dirt, mold, and grime from exterior surfaces before
              painting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
