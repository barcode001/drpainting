import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import commercialImage from "../assets/images/services-optimized/comercial1.webp";
import useRevealOnScroll from "../components/useRevealOnScroll";
import clientInfo from "../config/clientInfo";
import ServiceAreas from "./ServiceAreas";

export default function Commercial() {
  useRevealOnScroll();

  const pageUrl = "https://www.drpaintinginc.com/services/commercial";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "PaintingService",
    name: clientInfo.businessName,
    serviceType: "Commercial Painting",
    areaServed: {
      "@type": "Place",
      name: "Raleigh-Durham and Triangle Area",
    },
    url: pageUrl,
    telephone: clientInfo.contact.phone,
    description:
      "Top-rated commercial painting services for offices, retail stores, and buildings in Raleigh-Durham and surrounding areas. Quality work with minimal disruption.",
    provider: {
      "@type": "Organization",
      name: clientInfo.businessName,
    },
  };

  return (
    <>
      <Helmet>
        <title>
          Commercial Painting | Offices, Stores & Buildings | D&R Painting Inc.
        </title>
        <meta
          name="description"
          content="Top-rated commercial painting in Raleigh-Durham & surrounding areas. We paint offices, retail spaces, apartments & more with professional results."
        />
        <meta
          name="keywords"
          content="Commercial Painting Raleigh, Office Painting Durham, Business Painter NC, Storefront Painting, D&R Painting Inc, Triangle Area Painters"
        />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Commercial Painting | Offices, Stores & Buildings | D&R Painting Inc."
        />
        <meta
          property="og:description"
          content="We provide professional commercial painting services in Raleigh-Durham, Cary & Triangle area. Offices, retail spaces, restaurants and more."
        />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:image"
          content="https://www.drpaintinginc.com/logo.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Commercial Painting | Offices, Stores & Buildings | D&R Painting Inc."
        />
        <meta
          name="twitter:description"
          content="Top-tier commercial painting for NC businesses. Boost your space's look with D&R Painting Inc."
        />
        <meta
          name="twitter:image"
          content="https://www.drpaintinginc.com/logo.jpg"
        />

        {/* Schema */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <section className="service-detail">
        <div className="container">
          <h1 className="reveal">Commercial Painting</h1>
          <p className="reveal">
            Make a lasting impression on clients and employees with a fresh,
            professional look for your business. At D&R Painting Inc., we
            provide top-tier commercial painting services that enhance curb
            appeal, reflect your brand, and withstand high-traffic environments.
          </p>

          <img
            src={commercialImage}
            alt="Office building being painted"
            className="reveal"
            loading="lazy"
          />

          <p className="reveal">
            We serve offices, retail spaces, restaurants, medical buildings, and
            other commercial properties throughout Raleigh-Durham and the
            Triangle area. We work around your schedule to minimize downtime and
            ensure clean, efficient results.
          </p>

          <Link to="/contact" className="hero-button primary reveal">
            Request a Free Quote
          </Link>
        </div>
      </section>
      <ServiceAreas />
    </>
  );
}
