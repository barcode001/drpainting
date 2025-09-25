import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import washingImage from "../assets/images/services-optimized/residental.webp"; // Confirm the correct path
import useRevealOnScroll from "../components/useRevealOnScroll";
import ServiceAreas from "./ServiceAreas";

export default function PowerWashing() {
  useRevealOnScroll();

  const pageUrl = "https://drpaintinginc.com/services/power-washing";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "PaintingService",
    name: "D&R Painting Inc.",
    url: pageUrl,
    serviceType: "Power Washing",
    areaServed: [
      { "@type": "Place", name: "Raleigh NC" },
      { "@type": "Place", name: "Cary NC" },
      { "@type": "Place", name: "Apex NC" },
    ],
    telephone: "(919) 519-1699",
    description:
      "Professional power washing for siding, driveways, decks and fences in the Triangle area.",
  };

  return (
    <>
      <Helmet>
        <title>Power Washing Raleigh, Cary & Apex | D&R Painting Inc.</title>
        <meta
          name="description"
          content="Revive siding, driveways, decks & fences with professional power washing. Serving Raleigh, Cary & Apex. Safe, effective, commercial-grade results."
        />
        <meta
          name="keywords"
          content="power washing Raleigh, pressure washing Cary, house washing Apex"
        />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Power Washing Raleigh, Cary & Apex | D&R Painting Inc."
        />
        <meta
          property="og:description"
          content="Professional power washing for homes & businesses in the Triangle. Siding, driveways, decks & fences."
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
          content="Power Washing Raleigh, Cary & Apex | D&R Painting Inc."
        />
        <meta
          name="twitter:description"
          content="Revive exterior surfaces with safe, effective power washing. Free estimates."
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
          <h1 className="reveal">Power Washing</h1>
          <p className="reveal">
            Prep your surfaces the right way with our professional power washing
            service. Whether it's siding, driveways, decks, or fences, we remove
            built-up dirt, grime, mold, and old paint to leave everything clean
            and ready.
          </p>

          <img
            src={washingImage}
            alt="Power washing siding to remove dirt and mildew"
            className="reveal"
            loading="lazy"
          />

          <p className="reveal">
            A proper wash extends the life of your surfaces and ensures that
            your paint or stain adheres properly and lasts longer. We use
            commercial-grade equipment and adjust pressure settings based on the
            material for safe, effective results.
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
