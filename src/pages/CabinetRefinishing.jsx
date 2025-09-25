import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import cabinetImage from "../assets/images/services-optimized/kitchen4.webp";
import useRevealOnScroll from "../components/useRevealOnScroll";
import clientInfo from "../config/clientInfo";
import ServiceAreas from "./ServiceAreas";

export default function CabinetRefinishing() {
  useRevealOnScroll();

  const pageUrl = "https://www.drpaintinginc.com/services/cabinet-refinishing";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "PaintingService",
    name: clientInfo.businessName,
    serviceType: "Cabinet Refinishing",
    areaServed: {
      "@type": "Place",
      name: "Raleigh-Durham and Triangle Area",
    },
    url: pageUrl,
    telephone: clientInfo.contact.phone,
    description:
      "Professional cabinet refinishing for kitchens and bathrooms in Raleigh, Durham, Cary and nearby. Modern finishes without the cost of full replacement.",
    provider: {
      "@type": "Organization",
      name: clientInfo.businessName,
    },
  };

  return (
    <>
      <Helmet>
        <title>
          Cabinet Refinishing | Kitchen Cabinet Painting | D&R Painting Inc.
        </title>
        <meta
          name="description"
          content="Transform your kitchen or bathroom with professional cabinet refinishing in Raleigh, Cary & Apex. Modern, durable finishes at affordable prices."
        />
        <meta
          name="keywords"
          content="Cabinet Refinishing Raleigh, Kitchen Cabinet Painting NC, Cabinet Painters Cary, Bathroom Cabinet Makeover, Triangle Area Cabinet Painting"
        />
        <link
          rel="canonical"
          href="https://drpaintinginc.com/services/cabinet-refinishing"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Cabinet Refinishing | Kitchen Cabinet Painting | D&R Painting Inc."
        />
        <meta
          property="og:description"
          content="Professional cabinet refinishing for kitchens & bathrooms in Raleigh, Cary & Apex. Update your cabinets with smooth, modern finishes."
        />
        <meta
          property="og:url"
          content="https://drpaintinginc.com/services/cabinet-refinishing"
        />
        <meta
          property="og:image"
          content="https://drpaintinginc.com/assets/images/services-optimized/kitchen4.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cabinet Refinishing Raleigh, Cary & Apex | Kitchen Cabinet Painting | D&R Painting Inc."
        />
        <meta
          name="twitter:description"
          content="Cabinet refinishing experts in the Triangle. Let D&R Painting Inc. give your kitchen or bathroom cabinets a fresh look at an affordable price."
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
          <h1 className="reveal">Cabinet Refinishing</h1>
          <p className="reveal">
            Give your kitchen or bathroom a stunning transformation without the
            cost of full replacements. Our cabinet refinishing service brings a
            fresh, modern look to your existing cabinetry with smooth, durable
            finishes.
          </p>

          <img
            src={cabinetImage}
            alt="Refinished kitchen cabinets"
            className="reveal"
            loading="lazy"
          />

          <p className="reveal">
            We carefully clean, sand, and repaint or re-stain your cabinets
            using high-quality materials that resist chipping, fading, and
            moisture damage. Whether you're going for a bright, modern aesthetic
            or a warm, classic finish — we’ll bring your vision to life.
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
