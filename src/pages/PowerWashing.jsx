import React from "react";
import { Link } from "react-router-dom";
import washingImage from "../assets/images/services/residental.jpeg"; // Confirm the correct path
import useRevealOnScroll from "../components/useRevealOnScroll";

export default function PowerWashing() {
  useRevealOnScroll();
  return (
    <section className="service-detail">
      <div className="container">
        <h1 className="reveal">Power Washing</h1>
        <p className="reveal">
          Prep your surfaces the right way with our professional power washing
          service. Whether it's siding, driveways, decks, or fences, we remove
          built-up dirt, grime, mold, and old paint to leave everything clean
          and ready.
        </p>

        <img
          src={washingImage}
          alt="Power washing exterior surface"
          className="reveal"
          loading="lazy"
        />

        <p className="reveal">
          A proper wash extends the life of your surfaces and ensures that your
          paint or stain adheres properly and lasts longer. We use
          commercial-grade equipment and adjust pressure settings based on the
          material for safe, effective results.
        </p>

        <Link to="/contact" className="hero-button primary ">
          Request a Power Wash
        </Link>
      </div>
    </section>
  );
}
