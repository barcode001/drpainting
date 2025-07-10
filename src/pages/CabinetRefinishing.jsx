import React from "react";
import { Link } from "react-router-dom";
import cabinetImage from "../assets/images/services/kitchen4.jpeg"; // Make sure this path is correct
import useRevealOnScroll from "../components/useRevealOnScroll";

export default function CabinetRefinishing() {
  useRevealOnScroll();
  return (
    <section className="service-detail">
      <div className="container">
        <h1 className="reveal">Cabinet Refinishing</h1>
        <p className="reveal">
          Give your kitchen or bathroom a stunning transformation without the
          cost of full replacements. Our cabinet refinishing service brings a
          fresh, modern look to your existing cabinetry with smooth, durable
          finishes.
        </p>

        <img
          src={cabinetImage}
          alt="Refinished kitchen cabinets"
          className="reveal"
          loading="lazy"
        />

        <p className="reveal">
          We carefully clean, sand, and repaint or re-stain your cabinets using
          high-quality materials that resist chipping, fading, and moisture
          damage. Whether you're going for a bright, modern aesthetic or a warm,
          classic finish — we’ll bring your vision to life.
        </p>

        <Link to="/contact" className="hero-button primary">
          Get a Free Cabinet Quote
        </Link>
      </div>
    </section>
  );
}
