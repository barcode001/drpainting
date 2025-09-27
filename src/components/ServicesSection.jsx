import React from "react";
import { Link } from "react-router-dom";
import useRevealOnScroll from "./useRevealOnScroll";
import { servicesByLocation } from "../config/servicesData";

export default function ServicesSection({ locationKey }) {
  useRevealOnScroll();
  const services = servicesByLocation[locationKey] || [];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title reveal">
          Our Painting Services in {locationKey.replace(/([A-Z])/g, " $1")}
        </h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.image} alt={service.alt} loading="lazy" />
              <h3 className="reveal">{service.title}</h3>
              <p className="reveal">{service.description}</p>
              <div className="card-btn reveal">
                <Link to={service.path} className="hero-button secondary">
                  <span className="visually-hidden">
                    Learn more about {service.title} in {locationKey}
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
