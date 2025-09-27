import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import commercialImage from "../assets/images/services-optimized/commercialpaining-holly-springs.JPG";
import useRevealOnScroll from "../components/useRevealOnScroll";
import ServiceAreas from "./ServiceAreas";

export default function CommercialHollySprings() {
  useRevealOnScroll();

  const pageUrl = "https://drpaintinginc.com/holly-springs/commercial-painting";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "PaintingService",
    name: "D&R Painting Inc.",
    serviceType: "Commercial Painting",
    areaServed: {
      "@type": "Place",
      name: "Holly Springs, NC",
    },
    url: pageUrl,
    telephone: "(919) 519-1699",
    description:
      "Commercial painting services in Holly Springs, NC. Offices, retail stores, and local businesses trust D&R Painting Inc. for clean, professional finishes.",
    provider: {
      "@type": "Organization",
      name: "D&R Painting Inc.",
    },
  };

  return (
    <>
      <Helmet>
        <title>
          Commercial Painting in Holly Springs, NC | D&R Painting Inc.
        </title>
        <meta
          name="description"
          content="Professional commercial painting services in Holly Springs, NC. Offices, restaurants, retail & more. Family-owned since 2005."
        />
        <meta
          name="keywords"
          content="Commercial Painting Holly Springs, Office Painting Holly Springs NC, Business Painters Holly Springs, Storefront Painting Holly Springs"
        />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Commercial Painting in Holly Springs | D&R Painting Inc."
        />
        <meta
          property="og:description"
          content="Trusted Holly Springs commercial painters. We handle offices, restaurants, and retail with minimal disruption and professional results."
        />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:image"
          content="https://drpaintinginc.com/assets/images/services-optimized/comercial1.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Commercial Painting in Holly Springs | D&R Painting Inc."
        />
        <meta
          name="twitter:description"
          content="D&R Painting Inc. provides top-rated commercial painting in Holly Springs. Enhance your business space with a professional finish."
        />
        <meta
          name="twitter:image"
          content="https://drpaintinginc.com/assets/images/services-optimized/comercial1.webp"
        />

        {/* Schema */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <section className="service-detail">
        <div className="container">
          <h1 className="reveal">Commercial Painting in Holly Springs</h1>
          <p className="reveal">
            D&R Painting Inc. is trusted by Holly Springs businesses for
            high-quality painting services. We help offices, restaurants, retail
            stores, and local facilities look fresh and professional.
          </p>

          <img
            src={commercialImage}
            alt="Commercial building painted in Holly Springs"
            className="reveal"
            loading="lazy"
          />

          <p className="reveal">
            Our commercial painting team works around your schedule to minimize
            downtime, delivering durable finishes that reflect your brand and
            stand up to daily wear. From small shops to larger facilities, we
            provide reliable results every time.
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
