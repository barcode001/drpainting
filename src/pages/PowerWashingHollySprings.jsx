import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import washingImage from "../assets/images/services-optimized/power-washing-holly-springs.webp";
import useRevealOnScroll from "../components/useRevealOnScroll";
import ServiceAreas from "./ServiceAreas";

export default function PowerWashingHollySprings() {
  useRevealOnScroll();

  const pageUrl = "https://drpaintinginc.com/holly-springs/power-washing";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "PaintingService",
    name: "D&R Painting Inc.",
    url: pageUrl,
    serviceType: "Power Washing",
    areaServed: [{ "@type": "Place", name: "Holly Springs, NC" }],
    telephone: "(919) 519-1699",
    description:
      "Professional power washing in Holly Springs, NC. We clean siding, driveways, decks, and fences with safe, effective results.",
  };

  return (
    <>
      <Helmet>
        <title>Power Washing in Holly Springs, NC | D&R Painting Inc.</title>
        <meta
          name="description"
          content="Revive your Holly Springs home with professional power washing. Siding, driveways, decks & fences cleaned with commercial-grade equipment."
        />
        <meta
          name="keywords"
          content="power washing Holly Springs, pressure washing Holly Springs NC, house washing Holly Springs"
        />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Power Washing in Holly Springs, NC | D&R Painting Inc."
        />
        <meta
          property="og:description"
          content="Professional power washing services in Holly Springs. Safe, effective cleaning for siding, driveways, decks, and fences."
        />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:image"
          content="https://drpaintinginc.com/assets/images/services-optimized/power-washing.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Power Washing in Holly Springs, NC | D&R Painting Inc."
        />
        <meta
          name="twitter:description"
          content="Restore the look of your Holly Springs property with professional power washing. Free estimates available."
        />
        <meta
          name="twitter:image"
          content="https://drpaintinginc.com/assets/images/services-optimized/power-washing.webp"
        />

        {/* Schema */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <section className="service-detail">
        <div className="container">
          <h1 className="reveal">Power Washing in Holly Springs</h1>
          <p className="reveal">
            Keep your Holly Springs property looking its best with our
            professional power washing services. From siding and driveways to
            decks and fences, we remove dirt, grime, and mold safely and
            effectively.
          </p>

          <img
            src={washingImage}
            alt="Power washing home in Holly Springs"
            className="reveal"
            loading="lazy"
          />

          <p className="reveal">
            Our team uses commercial-grade equipment and adjusts pressure
            settings for each surface, ensuring long-lasting, damage-free
            results. Power washing is also the perfect prep before painting for
            maximum adhesion.
          </p>

          <h2 className="reveal">What We Power Wash</h2>
          <ul className="reveal">
            <li>Siding & brick exteriors</li>
            <li>Driveways & sidewalks</li>
            <li>Decks & patios</li>
            <li>Fences & outdoor structures</li>
            <li>Surface prep before painting</li>
          </ul>

          <Link to="/contact" className="hero-button primary reveal">
            Request a Power Wash
          </Link>
        </div>
      </section>
      <ServiceAreas />
    </>
  );
}
