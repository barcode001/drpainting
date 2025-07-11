import React from "react";
import { Link } from "react-router-dom";
import residental from "../assets/images/services-optimized/residental1.webp";
import commercial from "../assets/images/services-optimized/comercial.webp";
import cabinets from "../assets/images/services-optimized/cabinets.webp";
import powerWashing from "../assets/images/services-optimized/residental.webp";
import useRevealOnScroll from "../components/useRevealOnScroll";

export default function Services() {
  useRevealOnScroll();

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title reveal">Our Painting Services</h2>
        <div className="services-grid">
          {[
            {
              title: "Residential Painting",
              description:
                "Brighten up your home with expert interior & exterior painting services.",
              image: residental,
              alt: "Residential Painting",
              path: "/services/residential",
            },
            {
              title: "Commercial Painting",
              description:
                "Professional painting for offices, retail spaces, and industrial buildings.",
              image: commercial,
              alt: "Commercial Painting",
              path: "/services/commercial",
            },
            {
              title: "Cabinet Refinishing",
              description:
                "Modernize your kitchen or bathroom with smooth, durable cabinet finishes.",
              image: cabinets,
              alt: "Cabinet Refinishing",
              path: "/services/cabinet-refinishing",
            },
            {
              title: "Power Washing",
              description:
                "Remove dirt, mold, and grime from exterior surfaces before painting.",
              image: powerWashing,
              alt: "Power Washing",
              path: "/services/power-washing",
            },
          ].map((service, index) => (
            <div className="service-card" key={index}>
              <img
                src={service.image}
                alt={service.alt}
                width="400"
                height="250"
                loading="lazy"
              />
              <h3 className="reveal">{service.title}</h3>
              <p className="reveal">{service.description}</p>
              <div className="card-btn reveal">
                <Link to={service.path} className="hero-button secondary">
                  <span className="visually-hidden">
                    Learn more about {service.title}
                  </span>
                  <span aria-hidden="true">Learn More</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
