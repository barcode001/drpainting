import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import commercialImage from "../assets/images/services-optimized/comercial1.webp";
import useRevealOnScroll from "../components/useRevealOnScroll";
import ServiceAreas from "./ServiceAreas";
import TestimonialsSwiper from "./TestimonialsSwiper";

export default function Commercial() {
  useRevealOnScroll();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How much does commercial painting cost?",
      answer:
        "Pricing depends on building size, surface condition, number of colors, access (lifts or scaffolding), and scheduling needs. After a site visit, D&R Painting Inc. provides a written, itemized estimate detailing surface prep, primer, coatings, and labor. No hidden fees just clear communication and fair pricing.",
    },
    {
      question: "How do you charge for commercial painting projects?",
      answer:
        "We prepare customized, itemized quotes based on measured square footage and the required paint system. Each quote includes preparation, primer, coatings, and labor so you know exactly what’s included. We can also recommend cost saving options or higher end finishes based on your goals and budget.",
    },
    {
      question:
        "What’s the difference between commercial and residential painting?",
      answer:
        "Commercial painting focuses on durability, safety compliance, and working efficiently around your hours of operation. Residential painting is more about comfort and personal style. D&R Painting Inc. specializes in both, combining professional grade coatings and clean craftsmanship that keeps your business running smoothly.",
    },
    {
      question: "Do you offer commercial painting near me?",
      answer:
        "Yes. We serve Raleigh, Cary, Apex, Holly Springs, Fuquay Varina, and the entire Triangle area. Our painters travel directly to your location, conduct on-site evaluations, and complete projects with precision and care all while minimizing disruption to your operations.",
    },
    {
      question: "How long does a commercial painting project take?",
      answer:
        "Timelines vary depending on square footage, surface condition, and access. Small offices or retail spaces can often be completed in a few days, while larger multi unit buildings may take longer. We schedule efficiently to minimize downtime and coordinate around your business hours whenever possible.",
    },
    {
      question: "What types of commercial buildings do you paint?",
      answer:
        "We handle painting for offices, retail stores, restaurants, medical and dental offices, warehouses, apartment complexes, and more. Every surface drywall, metal, masonry, or wood gets the proper prep and coating system for long lasting results.",
    },
    {
      question: "Are you licensed, insured, and safety compliant?",
      answer:
        "Yes. D&R Painting Inc. is fully licensed and insured in North Carolina. Our team follows OSHA safety standards and holds EPA Lead Safe Certification for older buildings. We can provide proof of insurance and compliance documentation upon request.",
    },
    {
      question: "Can you work nights or weekends to avoid downtime?",
      answer:
        "Absolutely. We frequently schedule evening and weekend projects to minimize business interruption. Our painters work quietly and efficiently, keeping the site organized and clean so your staff and customers aren’t inconvenienced.",
    },
    {
      question: "Which paint brands and finishes do you recommend?",
      answer:
        "We use premium commercial coatings from Sherwin Williams and Benjamin Moore. Depending on the space, we recommend high-durability finishes like scrubbable acrylics, low-VOC enamels, or elastomeric coatings for exteriors. Every product is chosen for performance, color retention, and safety.",
    },
    {
      question: "Do you handle repairs and surface preparation?",
      answer:
        "Yes. Before any paint is applied, our crew handles cleaning, patching, caulking, sanding, priming, and light carpentry if needed. Proper prep ensures a smooth finish and long lasting adhesion—one of the most important steps in any professional paint job.",
    },
    {
      question: "Can you match existing colors or brand standards?",
      answer:
        "Yes. We can match your company’s brand colors precisely or refresh outdated schemes with modern, cohesive tones. Our team can create custom samples so you can preview how each color looks under your actual lighting conditions before painting begins.",
    },
    {
      question: "What happens after the project is finished?",
      answer:
        "We perform a detailed final walkthrough, take care of any touch ups, and leave your property spotless. You’ll receive care instructions for your new paint and recommendations for maintenance to extend its life. If you ever need additional work, our team is just a call away.",
    },
  ];

  const pageUrl = "https://drpaintinginc.com/services/commercial";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "PaintingService",
    serviceType: "Commercial Painting",
    name: "Commercial Painting Services | D&R Painting Inc.",
    description:
      "Professional commercial painting for offices, retail stores, and buildings across Raleigh, Cary, Apex, and Holly Springs. Quality results with minimal downtime.",
    areaServed: {
      "@type": "Place",
      name: "Raleigh-Durham, Cary, Apex, Holly Springs, and the Triangle Area",
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
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>
          Commercial Painting in Raleigh, Cary & Apex | D&R Painting Inc.
        </title>
        <meta
          name="description"
          content="Trusted commercial painters in Raleigh, Cary & Apex. Offices, retail & industrial spaces painted with precision and care. Licensed & insured."
        />
        <meta
          name="keywords"
          content="commercial painting Raleigh NC, office painters Cary NC, retail painting Apex, industrial painters Holly Springs, Triangle area painting company"
        />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Commercial Painting in Raleigh, Cary & Apex | D&R Painting Inc."
        />
        <meta
          property="og:description"
          content="High-quality commercial painting for offices, buildings, and retail spaces across the Triangle area. Family-owned and trusted since 2005."
        />
        <meta
          property="og:image"
          content="https://drpaintinginc.com/assets/images/services-optimized/comercial1.webp"
        />

        <script type="application/ld+json">
          {JSON.stringify([schemaData, faqSchema])}
        </script>
      </Helmet>

      <section className="service-detail">
        <div className="container">
          <div className="text-section">
            <h1 className="reveal">Commercial Painting</h1>

            <p className="reveal">
              At <strong>D&amp;R Painting Inc.</strong>, we specialize in{" "}
              <strong>
                commercial painting services across Raleigh, Cary, Apex, and
                Holly Springs
              </strong>
              . Since 2005, we’ve helped local businesses maintain clean,
              professional, and welcoming environments. Whether you’re managing
              an office building, retail store, or industrial space, we deliver
              high quality results that enhance your company’s image and protect
              your investment for years to come.
            </p>

            <div className="image-section reveal">
              <img
                src={commercialImage}
                alt="Commercial painting project in Raleigh, NC"
                width="100%"
                height="auto"
                loading="lazy"
              />
            </div>

            <h2 className="reveal">Why Choose D&R Painting Inc.</h2>
            <p className="reveal">
              Commercial projects require skill, coordination, and an
              understanding of how to work around active business operations.
              Our team brings nearly two decades of experience serving local
              offices, property managers, and contractors. From flexible
              scheduling to precise execution, we take every detail seriously
              because we know your reputation depends on how your space looks
              and feels.
            </p>

            <h2 className="reveal">Preparation & Materials</h2>
            <p className="reveal">
              Every successful paint job begins with thorough preparation. We
              clean, repair, and prime all surfaces to ensure proper adhesion
              and a smooth, uniform finish. Our painters use commercial grade
              equipment and professional coatings designed for durability and
              long term performance. We work with trusted brands like{" "}
              <strong>Sherwin Williams</strong> and{" "}
              <strong>Benjamin Moore</strong> to provide low VOC, quick drying
              paints that are safe for employees and customers. Whether it’s
              drywall, metal, concrete, or wood, our prep process ensures that
              the finished result looks great and stands up to daily wear.
            </p>

            <h2 className="reveal">Our Step by Step Process</h2>
            <p className="reveal">
              Our painters follow a proven system that keeps every project on
              schedule and within budget. We communicate clearly from start to
              finish, maintain a safe workspace, and deliver consistent results
              whether the job is a single retail suite or a full building
              repaint. Here’s how our process works:
            </p>
            <ol className="reveal">
              <li>
                <strong>Site Inspection & Quote:</strong> We assess your
                property, discuss your goals, and prepare a detailed written
                estimate.
              </li>
              <li>
                <strong>Surface Preparation:</strong> Includes cleaning,
                patching, sanding, caulking, and priming.
              </li>
              <li>
                <strong>Painting:</strong> Premium coatings are applied with
                precision and care for an even, lasting finish.
              </li>
              <li>
                <strong>Final Walkthrough:</strong> We inspect every area with
                you to ensure your full satisfaction.
              </li>
            </ol>

            <h2 className="reveal">Our Commitment to Quality & Safety</h2>
            <p className="reveal">
              Safety and professionalism are core to everything we do. D&amp;R
              Painting Inc. is fully licensed and insured in North Carolina. Our
              crew is OSHA trained and EPA Lead-Safe Certified, following strict
              safety standards on every site. We also maintain ongoing training
              so that every painter upholds the same level of craftsmanship and
              attention to detail that our reputation was built on.
            </p>

            <h2 className="reveal">Industries We Serve</h2>
            <ul className="reveal">
              <li>Office buildings and corporate suites</li>
              <li>Retail stores and shopping centers</li>
              <li>Restaurants, cafés, and hospitality spaces</li>
              <li>Medical and dental offices</li>
              <li>Warehouses and industrial facilities</li>
              <li>Apartment complexes and property management companies</li>
            </ul>

            <h2 className="reveal">
              Benefits of Professional Commercial Painting
            </h2>

            <p className="reveal">
              A professional commercial paint job does more than improve
              appearance it adds value, protection, and confidence to your
              property. Proper preparation and durable coatings protect walls
              from moisture, sunlight, and everyday wear. Whether refreshing
              your storefront or maintaining a multitenant facility, quality
              painting helps your business look professional and stay protected
              for years.
            </p>
            <ul className="reveal">
              <li>Enhances your business’s brand and professionalism</li>
              <li>Protects interior and exterior surfaces from damage</li>
              <li>Improves lighting, atmosphere, and employee morale</li>
              <li>Reduces long-term maintenance and repair costs</li>
              <li>Extends the lifespan of building materials</li>
            </ul>

            <h2 className="reveal">Frequently Asked Questions</h2>
            <div className="faq-section reveal">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${
                    activeIndex === index ? "active" : ""
                  }`}
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
                      maxHeight: activeIndex === index ? "500px" : "0",
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

            <h2 className="reveal">Ready to Transform Your Business?</h2>
            <p className="reveal">
              Let D&amp;R Painting Inc. give your commercial property a
              professional, lasting finish that reflects your company’s quality.
              From small offices to large facilities, we handle every project
              with precision, integrity, and care.
            </p>
            <p className="reveal">
              <strong>
                Serving Raleigh, Cary, Apex, Holly Springs, and the greater
                Triangle area.
              </strong>
            </p>

            <Link to="/contact" className="hero-button primary reveal">
              Request a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <ServiceAreas />
    </>
  );
}
