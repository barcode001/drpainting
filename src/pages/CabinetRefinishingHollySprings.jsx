import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import cabinetImage from "../assets/images/services-optimized/cabinet-refinishing-holly-springs.webp";
import useRevealOnScroll from "../components/useRevealOnScroll";
import ServiceAreas from "./ServiceAreas";

export default function CabinetRefinishingHollySprings() {
  useRevealOnScroll();

  const pageUrl = "https://drpaintinginc.com/holly-springs/cabinet-refinishing";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "PaintingService",
    name: "D&R Painting Inc.",
    serviceType: "Cabinet Refinishing",
    areaServed: {
      "@type": "Place",
      name: "Holly Springs, NC",
    },
    url: pageUrl,
    telephone: "(919) 519-1699",
    description:
      "Professional cabinet refinishing in Holly Springs, NC. Update your kitchen and bathroom cabinets with durable, modern finishes at affordable prices.",
    provider: {
      "@type": "Organization",
      name: "D&R Painting Inc.",
    },
  };

  return (
    <>
      <Helmet>
        <title>
          Cabinet Refinishing in Holly Springs, NC | D&R Painting Inc.
        </title>
        <meta
          name="description"
          content="Transform your Holly Springs kitchen or bathroom with professional cabinet refinishing. Smooth, modern finishes without the cost of replacement."
        />
        <meta
          name="keywords"
          content="Cabinet Refinishing Holly Springs, Kitchen Cabinet Painting Holly Springs NC, Cabinet Painters Holly Springs, Bathroom Cabinet Makeover Holly Springs"
        />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Cabinet Refinishing in Holly Springs | Kitchen Cabinet Painting | D&R Painting Inc."
        />
        <meta
          property="og:description"
          content="Give your Holly Springs kitchen or bathroom cabinets a fresh, modern look with D&R Painting Inc.'s expert refinishing services."
        />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:image"
          content="https://drpaintinginc.com/assets/images/services-optimized/kitchen4.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cabinet Refinishing in Holly Springs | Kitchen Cabinet Painting | D&R Painting Inc."
        />
        <meta
          name="twitter:description"
          content="Update your Holly Springs cabinets with durable, stylish refinishing. Trusted since 2005."
        />
        <meta
          name="twitter:image"
          content="https://drpaintinginc.com/assets/images/services-optimized/kitchen4.webp"
        />

        {/* Schema */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <section className="service-detail">
        <div className="container">
          <h1 className="reveal">Cabinet Refinishing in Holly Springs</h1>
          <p className="reveal">
            Bring new life to your Holly Springs home with our cabinet
            refinishing services. We help homeowners modernize kitchens and
            bathrooms with clean, durable finishes that last.
          </p>

          <img
            src={cabinetImage}
            alt="Cabinet refinishing in Holly Springs"
            className="reveal"
            loading="lazy"
          />

          <p className="reveal">
            Our process includes cleaning, sanding, and refinishing using
            high-quality products that resist chips, fading, and moisture. From
            modern colors to classic stains, we’ll create the perfect look for
            your home.
          </p>

          <Link to="/contact" className="hero-button primary reveal">
            Get a Free Cabinet Quote
          </Link>
        </div>
      </section>
      <ServiceAreas />
    </>
  );
}
