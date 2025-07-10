import React from "react";
import { Link } from "react-router-dom";
import residental from "../assets/images/services/residental1.jpeg";
import commercial from "../assets/images/services/comercial.jpeg";
import cabinets from "../assets/images/services/cabinets.jpeg";
import powerWashing from "../assets/images/services/residental.jpeg";
import useRevealOnScroll from "../components/useRevealOnScroll";

export default function Services() {
  useRevealOnScroll();
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title reveal">Our Painting Services</h2>
        <div className="services-grid">
          <div className="service-card ">
            <img
              src={residental}
              alt="Residential Painting"
              width="400"
              height="250"
              loading="lazy"
            />
            <h3 className="reveal">Residential Painting</h3>
            <p className="reveal">
              Brighten up your home with expert interior & exterior painting
              services.
            </p>
            <div className="card-btn reveal">
              <Link
                to="/services/residential"
                className="hero-button secondary"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="service-card ">
            <img
              src={commercial}
              alt="Commercial Painting"
              width="400"
              height="250"
              loading="lazy"
            />
            <h3 className="reveal">Commercial Painting</h3>
            <p className="reveal">
              Professional painting for offices, retail spaces, and industrial
              buildings.
            </p>
            <div className="card-btn reveal">
              <Link to="/services/commercial" className="hero-button secondary">
                Learn More
              </Link>
            </div>
          </div>

          <div className="service-card ">
            <img
              src={cabinets}
              alt="Cabinet Refinishing"
              width="400"
              height="250"
              loading="lazy"
            />
            <h3 className="reveal">Cabinet Refinishing</h3>
            <p className="reveal">
              Modernize your kitchen or bathroom with smooth, durable cabinet
              finishes.
            </p>
            <div className="card-btn reveal">
              <Link
                to="services/cabinet-refinishing"
                className="hero-button secondary"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="service-card ">
            <img
              src={powerWashing}
              alt="Power Washing"
              width="400"
              height="250"
              loading="lazy"
            />
            <h3 className="reveal">Power Washing</h3>
            <p className="reveal">
              Remove dirt, mold, and grime from exterior surfaces before
              painting.
            </p>
            <div className="card-btn reveal">
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
