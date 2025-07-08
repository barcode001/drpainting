import React from "react";
// import { FaPaintRoller, FaHome, FaBuilding, FaWater } from "react-icons/fa";
import residental from "../assets/images/services/residental1.jpeg";
import comerical from "../assets/images/services/comercial.jpeg";
import cabinet from "../assets/images/services/cabinets.jpeg";
import powerWashing from "../assets/images/services/residental.jpeg";

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">Our Painting Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src={residental} alt="Residential Painting" loading="lazy" />
            <h3>Residential Painting</h3>
            <p>
              Brighten up your home with expert interior & exterior painting
              services.
            </p>
          </div>
          <div className="service-card">
            <img src={comerical} alt="Commercial Painting" loading="lazy" />
            <h3>Commercial Painting</h3>
            <p>
              Professional painting for offices, retail spaces, and industrial
              buildings.
            </p>
          </div>
          <div className="service-card">
            <img src={cabinet} alt="Cabinet Refinishing" loading="lazy" />
            <h3>Cabinet Refinishing</h3>
            <p>
              Modernize your kitchen or bathroom with smooth, durable cabinet
              finishes.
            </p>
          </div>
          <div className="service-card">
            <img src={powerWashing} alt="Power Washing" loading="lazy" />
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
