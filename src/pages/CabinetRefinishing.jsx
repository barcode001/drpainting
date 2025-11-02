import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import cabinetImage from "../assets/images/services-optimized/kitchen4.webp";
import useRevealOnScroll from "../components/useRevealOnScroll";
import ServiceAreas from "./ServiceAreas";
import TestimonialsSwiper from "./TestimonialsSwiper";

export default function CabinetRefinishing() {
  useRevealOnScroll();
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const faqs = [
    {
      question: "What is cabinet refinishing?",
      answer: (
        <>
          Cabinet refinishing is the process of restoring your existing cabinets
          by cleaning, sanding, and applying a new finish such as paint, stain,
          or sealant to refresh their look and extend their lifespan. It’s
          perfect for homeowners who want a modern kitchen or bathroom makeover
          without the high cost of new cabinetry.
        </>
      ),
    },
    {
      question: "What’s the difference between refinishing and refacing?",
      answer: (
        <>
          Refinishing keeps your current cabinet structure but updates the
          surface, while refacing replaces the doors and drawer fronts entirely.
          Refinishing is more affordable and faster, yet still delivers a
          dramatic transformation when done professionally.
        </>
      ),
    },
    {
      question: "How much does cabinet refinishing cost?",
      answer: (
        <>
          Costs vary depending on size, condition, and finish type. Our team
          provides a detailed, written estimate after inspection so you know
          exactly what’s included surface preparation, primer, coating, and
          cleanup. Refinishing usually costs a fraction of what full replacement
          would, saving homeowners thousands.
        </>
      ),
    },
    {
      question: "How long does cabinet refinishing take?",
      answer: (
        <>
          Most kitchens are completed within 3–5 days. We start by removing
          hardware, cleaning and sanding every surface, and then applying
          professional grade coatings in a controlled environment. Our team
          works efficiently while keeping your home clean and functional
          throughout the process.
        </>
      ),
    },
    {
      question: "Do you offer cabinet refinishing near me?",
      answer: (
        <>
          Yes, D&amp;R Painting Inc. proudly serves Raleigh, Cary, Apex, Holly
          Springs, Fuquay-Varina, and surrounding areas. We’ve helped hundreds
          of homeowners refresh their cabinets with modern, durable finishes
          that stand up to daily use.
        </>
      ),
    },
  ];

  const pageUrl = "https://drpaintinginc.com/services/cabinet-refinishing";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "PaintingService",
    serviceType: "Cabinet Refinishing",
    name: "Cabinet Refinishing Services | D&R Painting Inc.",
    description:
      "Professional cabinet refinishing in Raleigh, Cary & Apex. Restore your kitchen or bathroom cabinets with durable, modern finishes.",
    areaServed: {
      "@type": "Place",
      name: "Raleigh, Cary, Apex, Holly Springs, and the Triangle Area",
    },
    provider: {
      "@type": "LocalBusiness",
      name: "D&R Painting Inc.",
      url: "https://drpaintinginc.com",
      telephone: "(919) 285-0959",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Raleigh",
        addressRegion: "NC",
        addressCountry: "US",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.props.children,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>
          Cabinet Refinishing Raleigh, Cary & Apex | D&R Painting Inc.
        </title>
        <meta
          name="description"
          content="Professional cabinet refinishing in Raleigh, Cary & Apex. Refresh your kitchen or bathroom cabinets with smooth, durable, modern finishes."
        />
        <meta
          name="keywords"
          content="cabinet refinishing Raleigh, kitchen cabinet painting Cary, bathroom cabinet refinishing Apex, cabinet painters Triangle area, cabinet restoration NC"
        />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Cabinet Refinishing Raleigh, Cary & Apex | D&R Painting Inc."
        />
        <meta
          property="og:description"
          content="Update your kitchen or bathroom with professional cabinet refinishing. Smooth finishes, durable coatings, and affordable pricing from D&R Painting Inc."
        />
        <meta
          property="og:image"
          content="https://drpaintinginc.com/assets/images/services-optimized/kitchen4.webp"
        />
        <script type="application/ld+json">
          {JSON.stringify([schemaData, faqSchema])}
        </script>
      </Helmet>

      <section className="service-detail">
        <div className="container">
          <h1 className="reveal">Cabinet Refinishing</h1>

          <p className="reveal">
            Transform your kitchen or bathroom with{" "}
            <strong>D&amp;R Painting Inc.</strong> the trusted choice for{" "}
            <strong>cabinet refinishing in Raleigh, Cary, and Apex.</strong> Our
            process revitalizes your cabinets with a like new finish that’s both
            beautiful and built to last. Whether you want a clean, modern look
            or a rich, classic tone, we bring your vision to life with precision
            and care.
          </p>

          <div className="image-section reveal">
            <img
              src={cabinetImage}
              alt="Cabinet refinishing project in Raleigh NC"
              loading="lazy"
            />
          </div>

          <h2 className="reveal">
            Why Choose Cabinet Refinishing Instead of Replacing
          </h2>
          <p className="reveal">
            Many homeowners are surprised at how dramatic the difference can be
            with refinishing alone. Cabinet replacement can cost tens of
            thousands of dollars and cause weeks of disruption. Refinishing
            achieves a showroom quality result in just a few days, for a
            fraction of the cost without tearing out existing cabinetry.
          </p>
          <p className="reveal">
            If your cabinets are structurally sound, refinishing is the smarter,
            greener, and faster way to refresh your space. You’ll save money,
            reduce waste, and still enjoy a finish that looks brand new.
          </p>

          <h2 className="reveal">Our Proven Step by Step Process</h2>

          <p className="reveal">
            The process is also far more eco friendly than traditional
            renovations. By avoiding demolition and keeping your existing
            cabinet structures, you reduce landfill waste and the need for new
            materials. This makes refinishing a more sustainable choice that
            aligns with environmentally conscious living.
          </p>

          <ol className="list-style-none reveal">
            <li>
              <strong>1. On-Site Inspection & Quote:</strong> We assess your
              cabinets, discuss color and finish options, and provide a detailed
              estimate with no hidden fees.
            </li>
            <li>
              <strong>2. Surface Preparation:</strong> Cabinets are cleaned,
              sanded, and prepped to remove grease, dirt, and imperfections —
              ensuring paint or stain adheres properly.
            </li>
            <li>
              <strong>3. Priming & Coating:</strong> We apply professional-grade
              primer and high quality paint or stain for smooth, even coverage.
            </li>
            <li>
              <strong>4. Sealing & Curing:</strong> Protective topcoats lock in
              color and provide long-term durability against wear and humidity.
            </li>
            <li>
              <strong>5. Final Inspection:</strong> Every cabinet is inspected
              for perfection before reassembly. We leave your kitchen spotless
              and ready to enjoy.
            </li>
          </ol>

          <h2 className="reveal">Durable Finishes That Last</h2>
          <p className="reveal">
            At D&amp;R Painting Inc., we only use premium products from Sherwin
            Williams and Benjamin Moore. Our finishes resist peeling,
            scratching, and yellowing perfect for high traffic areas like
            kitchens and bathrooms. You can choose from matte, satin, semi
            gloss, or high-gloss finishes depending on your preferred look and
            durability needs.
          </p>

          <h2 className="reveal">Popular Cabinet Colors and Styles</h2>
          <p className="reveal">
            Homeowners across the Triangle are updating their kitchens with
            modern color palettes. White, cream, and soft gray remain timeless,
            while navy blue, charcoal, and two tone finishes add depth and
            sophistication. We can match any brand color or custom blend a
            unique shade that complements your space perfectly.
          </p>

          <h2 className="reveal">Benefits of Professional Refinishing</h2>
          <p className="reveal">
            Professional cabinet refinishing isn’t just about a new look it’s
            about long-term value. Homeowners can save up to 60% compared to the
            cost of full cabinet replacement, making it a smart, cost effective
            alternative. In addition to savings, refinishing also helps boost
            the value and aesthetic appeal of your home. Whether you're planning
            to stay for years or preparing to sell, freshly refinished cabinets
            instantly modernize your space.
          </p>
          <ul className="reveal">
            <li>Save up to 60% compared to full cabinet replacement</li>
            <li>Improve home value and aesthetic appeal</li>
            <li>Eco friendly less demolition and landfill waste</li>
            <li>Custom finishes and durable coatings</li>
            <li>Faster turnaround with minimal disruption</li>
          </ul>

          <h2 className="reveal">Frequently Asked Questions</h2>
          <div className="faq-section reveal">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className="faq-answer"
                  style={{
                    maxHeight: activeIndex === index ? "400px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.4s ease",
                  }}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <TestimonialsSwiper />

          <h2 className="reveal">Your Trusted Cabinet Refinishing Experts</h2>
          <p className="reveal">
            Since 2005, D&amp;R Painting Inc. has helped homeowners across
            Raleigh, Cary, Apex, and Holly Springs restore and modernize their
            cabinets. As a family owned business, we believe in quality
            craftsmanship, clear communication, and results that exceed
            expectations.
          </p>

          <p className="reveal">
            <strong>
              Serving Raleigh, Cary, Apex, Holly Springs, Fuquay Varina, and
              nearby communities.
            </strong>
          </p>

          <Link to="/contact" className="hero-button primary reveal">
            Request a Free Cabinet Quote
          </Link>
        </div>
      </section>
      <ServiceAreas />
    </>
  );
}
