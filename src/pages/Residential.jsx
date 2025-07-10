import React from "react";
import residentialImage from "../assets/images/services/kitchen1.jpeg";
import { Link } from "react-router-dom";
import useRevealOnScroll from "../components/useRevealOnScroll";

export default function Residential() {
  useRevealOnScroll();
  return (
    <section className="service-detail">
      <div className="container">
        <div className="text-section ">
          <h1 className="reveal">Residential Painting</h1>
          <p className="reveal">
            Transform your home with professional painting services tailored to
            your vision. At D&R Painting Inc., we treat every house like our own
            — focusing on clean lines, smooth finishes, and long-lasting
            results.
          </p>
          <div className="image-section reveal">
            <img
              src={residentialImage}
              alt="Residential Painting"
              width="100%"
              height="auto"
            />
          </div>
          <p className="reveal">
            Whether you need a fresh coat inside your living room or a complete
            exterior makeover, we work with you to select the right colors and
            products for your space. We protect your furniture, keep your space
            tidy, and always clean up after ourselves.
          </p>
          <p className="reveal">
            Our team brings years of experience and a commitment to detail that
            sets us apart. You'll not only love how your home looks — you'll
            love the experience of getting there.
          </p>
          <Link to="/contact" className="hero-button primary">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
