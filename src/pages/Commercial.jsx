import React from "react";
import { Link } from "react-router-dom";
import commercialImage from "../assets/images/services/comercial1.jpeg"; // Update the path if needed
import useRevealOnScroll from "../components/useRevealOnScroll";

export default function Commercial() {
  useRevealOnScroll();
  return (
    <section className="service-detail">
      <div className="container">
        <h1 className="reveal">Commercial Painting</h1>
        <p className="reveal">
          Make a lasting impression on clients and employees with a fresh,
          professional look for your business. At D&R Painting Inc., we provide
          top-tier commercial painting services that enhance curb appeal,
          reflect your brand, and withstand high-traffic environments.
        </p>

        <img
          src={commercialImage}
          alt="Office building being painted"
          className="reveal"
          loading="lazy"
        />

        <p className="reveal">
          We serve offices, retail spaces, restaurants, medical buildings, and
          other commercial properties throughout Raleigh-Durham and the Triangle
          area. We work around your schedule to minimize downtime and ensure
          clean, efficient results.
        </p>

        <Link to="/contact" className="hero-button primary">
          Request a Free Quote
        </Link>
      </div>
    </section>
  );
}
