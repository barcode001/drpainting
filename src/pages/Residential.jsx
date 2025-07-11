import React from "react";
import residentialImage from "../assets/images/services-optimized/kitchen1.webp";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useRevealOnScroll from "../components/useRevealOnScroll";

export default function Residential() {
  useRevealOnScroll();
  return (
    <>
      <Helmet>
        <title>
          Residential Painting in Raleigh-Durham | D&R Painting Inc.
        </title>
        <meta
          name="description"
          content="Transform your home with expert residential painting services in Raleigh, Cary, and the Triangle area. We offer interior and exterior house painting with care, precision, and long-lasting results."
        />
        <meta
          name="keywords"
          content="residential painting Raleigh, house painters Cary, interior painting Triangle, exterior home painting NC, painting company Raleigh, trusted painters near me"
        />
        <link
          rel="canonical"
          href="https://www.drpaintinginc.com/services/residential"
        />
      </Helmet>
      <section className="service-detail">
        <div className="container">
          <div className="text-section ">
            <h1 className="reveal">Residential Painting</h1>
            <p className="reveal">
              Transform your home with professional painting services tailored
              to your vision. At D&R Painting Inc., we treat every house like
              our own — focusing on clean lines, smooth finishes, and
              long-lasting results.
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
              Whether you need a fresh coat inside your living room or a
              complete exterior makeover, we work with you to select the right
              colors and products for your space. We protect your furniture,
              keep your space tidy, and always clean up after ourselves.
            </p>
            <p className="reveal">
              Our team brings years of experience and a commitment to detail
              that sets us apart. You'll not only love how your home looks —
              you'll love the experience of getting there.
            </p>
            <Link to="/contact" className="hero-button primary">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
