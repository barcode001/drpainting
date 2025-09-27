import React from "react";
import residentialImage from "../assets/images/services-optimized/residentialpaining-holly-springs.webp";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useRevealOnScroll from "../components/useRevealOnScroll";
import ServiceAreas from "./ServiceAreas";

export default function ResidentialHollySprings() {
  useRevealOnScroll();
  return (
    <>
      <Helmet>
        <title>
          Residential Painting in Holly Springs, NC | D&R Painting Inc.
        </title>
        <meta
          name="description"
          content="Residential painting services in Holly Springs, NC. Interior & exterior painting with lasting results. Request your free estimate today!"
        />
        <meta
          name="keywords"
          content="Holly Springs residential painting, house painters Holly Springs, interior painting Holly Springs, exterior painting Holly Springs"
        />
        <link
          rel="canonical"
          href="https://drpaintinginc.com/holly-springs/residential-painting"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Residential Painting in Holly Springs, NC | D&R Painting Inc."
        />
        <meta
          property="og:description"
          content="Transform your Holly Springs home with expert interior & exterior painting. Family-owned since 2005."
        />
        <meta
          property="og:url"
          content="https://drpaintinginc.com/holly-springs/residential-painting"
        />
        <meta
          property="og:image"
          content="https://drpaintinginc.com/og-image.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Residential Painting in Holly Springs | D&R Painting Inc."
        />
        <meta
          name="twitter:description"
          content="Interior & exterior painting services for Holly Springs homes. Free estimates available."
        />
        <meta
          name="twitter:image"
          content="https://drpaintinginc.com/og-image.jpg"
        />
      </Helmet>

      <section className="service-detail">
        <div className="container">
          <div className="text-section">
            <h1 className="reveal">Residential Painting in Holly Springs</h1>
            <p className="reveal">
              Refresh your Holly Springs home with expert interior & exterior
              painting. Our team at D&R Painting Inc. delivers smooth finishes,
              clean lines, and long-lasting results for local homeowners.
            </p>
            <div className="image-section reveal">
              <img
                src={residentialImage}
                alt="Residential Painting Holly Springs"
                width="100%"
                height="auto"
              />
            </div>
            <p className="reveal">
              From single rooms to full exterior makeovers, we help Holly
              Springs families choose the perfect colors and finishes. We
              protect your space, work efficiently, and always clean up before
              we leave.
            </p>
            <p className="reveal">
              With over 20 years of experience, our family-owned business is
              trusted across the Triangle for quality, care, and
              professionalism.
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
