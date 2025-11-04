import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiHandTapLight } from "react-icons/pi";
import residental from "../assets/images/services-optimized/residental1.webp";
import commercial from "../assets/images/services-optimized/comercial.webp";
import cabinets from "../assets/images/services-optimized/cabinets.webp";
import powerWashing from "../assets/images/services-optimized/residental.webp";
import useRevealOnScroll from "../components/useRevealOnScroll";

export default function Services() {
  useRevealOnScroll();

  // ✅ Track multiple flipped cards using object
  const [flippedStates, setFlippedStates] = useState({});

  const handleFlip = (index) => {
    setFlippedStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const services = [
    {
      title: "Residential Painting",
      description:
        "Brighten up your home with expert interior & exterior painting services.",
      image: residental,
      alt: "Residential Painting in Raleigh",
      path: "/services/residential",
      backText: `Our residential painting services in Raleigh, Cary, and Apex are designed to protect and refresh your home inside and out. From detailed prep work to premium Sherwin-Williams and Benjamin Moore paints, we ensure clean lines, smooth finishes, and lasting color. Whether it's interior or exterior painting, we take care of every detail from start to final walkthrough.`,
    },
    {
      title: "Commercial Painting",
      description:
        "Professional painting for offices, retail spaces, and industrial buildings.",
      image: commercial,
      alt: "Commercial Painting in Cary",
      path: "/services/commercial",
      backText: `We provide high-quality commercial painting across Raleigh, Cary, and Holly Springs. Our experienced team works efficiently to minimize downtime and deliver durable, long-lasting finishes for offices, retail spaces, and multi-unit properties.`,
    },
    {
      title: "Cabinet Refinishing",
      description:
        "Modernize your kitchen or bathroom with smooth, durable cabinet finishes.",
      image: cabinets,
      alt: "Cabinet Refinishing in Apex",
      path: "/services/cabinet-refinishing",
      backText: `Transform your kitchen or bathroom with professional cabinet refinishing. Our Raleigh cabinet painters remove grease, sand surfaces, and apply industrial-grade coatings for a smooth, modern finish that lasts.`,
    },
    {
      title: "Power Washing",
      description:
        "Remove dirt, mold, and grime from exterior surfaces before painting.",
      image: powerWashing,
      alt: "Power Washing in Holly Springs",
      path: "/services/power-washing",
      backText: `Our power washing services safely clean siding, driveways, and decks. A clean surface ensures your new paint bonds better and lasts longer in North Carolina’s climate.`,
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title reveal">Our Painting Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className={`service-card ${
                flippedStates[index] ? "flipped" : ""
              }`}
              key={index}
              onClick={() => handleFlip(index)}
            >
              <div className="card-inner">
                {/* FRONT */}
                <div className="card-front">
                  <img src={service.image} alt={service.alt} loading="lazy" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <div className="card-btn">
                    <Link to={service.path} className="hero-button secondary">
                      Learn More
                    </Link>
                  </div>

                  <div className="tap-icon-wrapper">
                    <PiHandTapLight className="tap-icon" />
                  </div>
                </div>

                {/* BACK */}
                <div className="card-back">
                  <h3>{service.title}</h3>
                  <p>{service.backText}</p>
                  <Link to={service.path} className="hero-button primary">
                    View Service
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
