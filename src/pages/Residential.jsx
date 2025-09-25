import React from "react";
import residentialImage from "../assets/images/services-optimized/kitchen1.webp";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useRevealOnScroll from "../components/useRevealOnScroll";
import ServiceAreas from "./ServiceAreas";

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
          content="Transform your home with expert residential painting services in Raleigh, Cary, Apex & the Triangle area. Interior & exterior painting with care, precision & lasting results."
        />
        <meta
          name="keywords"
          content="residential painting Raleigh, house painters Cary, interior painting Triangle, exterior home painting NC, painting company Raleigh"
        />
        <link
          rel="canonical"
          href="https://drpaintinginc.com/services/residential"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Residential Painting Raleigh, Cary & Apex | D&R Painting Inc."
        />
        <meta
          property="og:description"
          content="Interior & exterior residential painting services across Raleigh, Cary & Apex. Family-owned since 2005. Free quotes available."
        />
        <meta
          property="og:url"
          content="https://drpaintinginc.com/services/residential"
        />
        <meta
          property="og:image"
          content="https://drpaintinginc.com/og-image.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Residential Painting Raleigh, Cary & Apex | D&R Painting Inc."
        />
        <meta
          name="twitter:description"
          content="Expert residential house painting in Raleigh, Cary & Apex. Interior, exterior & cabinet refinishing with care and precision."
        />
        <meta
          name="twitter:image"
          content="https://drpaintinginc.com/og-image.jpg"
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
      <ServiceAreas />
    </>
  );
}
