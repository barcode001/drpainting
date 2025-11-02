// import React from "react";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import washingImage from "../assets/images/services-optimized/residental.webp"; // Confirm the correct path
// import useRevealOnScroll from "../components/useRevealOnScroll";
// import ServiceAreas from "./ServiceAreas";

// export default function PowerWashing() {
//   useRevealOnScroll();

//   const pageUrl = "https://drpaintinginc.com/services/power-washing";

//   const schemaData = {
//     "@context": "https://schema.org",
//     "@type": "PaintingService",
//     name: "D&R Painting Inc.",
//     url: pageUrl,
//     serviceType: "Power Washing",
//     areaServed: [
//       { "@type": "Place", name: "Raleigh NC" },
//       { "@type": "Place", name: "Cary NC" },
//       { "@type": "Place", name: "Apex NC" },
//     ],
//     telephone: "(919) 519-1699",
//     description:
//       "Professional power washing for siding, driveways, decks and fences in the Triangle area.",
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Power Washing Raleigh, Cary & Apex | D&R Painting Inc.</title>
//         <meta
//           name="description"
//           content="Revive siding, driveways, decks & fences with professional power washing. Serving Raleigh, Cary & Apex. Safe, effective, commercial-grade results."
//         />
//         <meta
//           name="keywords"
//           content="power washing Raleigh, pressure washing Cary, house washing Apex"
//         />
//         <link rel="canonical" href={pageUrl} />

//         {/* Open Graph */}
//         <meta property="og:type" content="website" />
//         <meta
//           property="og:title"
//           content="Power Washing Raleigh, Cary & Apex | D&R Painting Inc."
//         />
//         <meta
//           property="og:description"
//           content="Professional power washing for homes & businesses in the Triangle. Siding, driveways, decks & fences."
//         />
//         <meta property="og:url" content={pageUrl} />
//         <meta
//           property="og:image"
//           content="https://drpaintinginc.com/assets/images/services-optimized/power-washing.webp"
//         />

//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content="Power Washing Raleigh, Cary & Apex | D&R Painting Inc."
//         />
//         <meta
//           name="twitter:description"
//           content="Revive exterior surfaces with safe, effective power washing. Free estimates."
//         />
//         <meta
//           name="twitter:image"
//           content="https://drpaintinginc.com/assets/images/services-optimized/power-washing.webp"
//         />

//         {/* Schema */}
//         <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
//       </Helmet>

//       <section className="service-detail">
//         <div className="container">
//           <h1 className="reveal">Power Washing</h1>
//           <p className="reveal">
//             Prep your surfaces the right way with our professional power washing
//             service. Whether it's siding, driveways, decks, or fences, we remove
//             built-up dirt, grime, mold, and old paint to leave everything clean
//             and ready.
//           </p>

//           <img
//             src={washingImage}
//             alt="Power washing siding to remove dirt and mildew"
//             className="reveal"
//             loading="lazy"
//           />

//           <p className="reveal">
//             A proper wash extends the life of your surfaces and ensures that
//             your paint or stain adheres properly and lasts longer. We use
//             commercial-grade equipment and adjust pressure settings based on the
//             material for safe, effective results.
//           </p>

//           <h2 className="reveal">What We Power Wash</h2>
//           <ul className="reveal">
//             <li>Siding & brick exteriors</li>
//             <li>Driveways & sidewalks</li>
//             <li>Decks & patios</li>
//             <li>Fences & outdoor structures</li>
//             <li>Surface prep before painting</li>
//           </ul>

//           <Link to="/contact" className="hero-button primary reveal">
//             Request a Power Wash
//           </Link>
//         </div>
//       </section>
//       <ServiceAreas />
//     </>
//   );
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import washingImage from "../assets/images/services-optimized/residental.webp";
import useRevealOnScroll from "../components/useRevealOnScroll";
import ServiceAreas from "./ServiceAreas";
import TestimonialsSwiper from "./TestimonialsSwiper";

export default function PowerWashing() {
  useRevealOnScroll();
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const faqs = [
    {
      question: "Will power washing remove paint?",
      answer: (
        <>
          Yes, high-pressure washing can strip away paint, especially if it's
          already peeling or weakened. We adjust pressure settings and use the
          correct techniques based on your surface and goals — whether that’s
          prepping for a fresh coat or avoiding damage.
        </>
      ),
    },
    {
      question: "How much does power washing cost in Raleigh?",
      answer: (
        <>
          Pricing depends on square footage, surface condition, and
          accessibility. Typical residential power washing services in Raleigh
          start at $150 and go up based on the project scope. We offer free
          quotes with no obligation.
        </>
      ),
    },
    {
      question: "Can power washing damage siding or windows?",
      answer: (
        <>
          Improper use of high pressure can cause damage. That’s why we often
          use soft washing for delicate materials like vinyl siding, wood, or
          windows. Our team is trained to choose the safest method for every
          surface.
        </>
      ),
    },
    {
      question: "Do I need to be home during the service?",
      answer: (
        <>
          Not necessarily. As long as we have exterior access and you’ve
          reviewed the project details with us, we can complete the work and
          send photos after. Most of our clients enjoy the flexibility this
          offers.
        </>
      ),
    },
    {
      question: "Is power washing safe for all surfaces?",
      answer: (
        <>
          Power washing is safe when done by professionals. We assess each
          material — brick, wood, concrete, vinyl — and adjust pressure and
          detergents accordingly. Soft washing is often better for painted
          surfaces or aged siding.
        </>
      ),
    },
    {
      question: "What surfaces can you power wash?",
      answer: (
        <>
          We power wash siding, brick, concrete, driveways, patios, decks,
          fences, and more. We adjust our pressure levels and techniques to
          safely clean each material without damage.
        </>
      ),
    },
    {
      question: "Is power washing safe for vinyl siding?",
      answer: (
        <>
          Yes, we use a soft wash technique for vinyl siding that removes dirt,
          mildew, and algae without causing damage or forcing water behind the
          siding.
        </>
      ),
    },
    {
      question: "How often should I get my house power washed?",
      answer: (
        <>
          Most homes benefit from power washing once a year, especially in humid
          climates like North Carolina. Regular cleaning protects your exterior
          surfaces and keeps your property looking fresh.
        </>
      ),
    },
    {
      question: "Can power washing damage my paint or windows?",
      answer: (
        <>
          Improper pressure washing can cause damage, but our trained
          technicians use the right nozzles and PSI for each surface. We avoid
          painted areas that don't require cleaning and take care around windows
          and trim.
        </>
      ),
    },
    {
      question: "Do you offer power washing near me?",
      answer: (
        <>
          Yes! D&amp;R Painting Inc. proudly serves Raleigh, Cary, Apex, and
          nearby areas with professional power washing services for both homes
          and businesses.
        </>
      ),
    },
  ];

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

        <script type="application/ld+json">
          {JSON.stringify([schemaData, faqSchema])}
        </script>
      </Helmet>

      <section className="service-detail">
        <div className="container">
          <h1 className="reveal">Power Washing</h1>

          <p className="reveal">
            At <strong>D&amp;R Painting Inc.</strong>, we provide expert power
            washing for homeowners across Raleigh, Cary, and Apex. Our team
            removes years of dirt, grime, mold, and buildup from siding,
            driveways, decks, fences, and more using commercial-grade equipment
            and safe, tested techniques.
          </p>

          <div className="image-section reveal">
            <img
              src={washingImage}
              alt="Power washing vinyl siding in Raleigh"
              loading="lazy"
            />
          </div>

          <h2 className="reveal">What We Power Wash</h2>

          <p className="reveal">
            Power washing is more than just a surface clean — it’s the first
            step toward protecting and preserving your property. At D&amp;R
            Painting Inc., we use commercial-grade equipment and custom pressure
            settings to safely remove dirt, mold, algae, and buildup from a wide
            variety of exterior surfaces.
          </p>

          <ul className="reveal">
            <li>Siding and brick exteriors</li>
            <li>Concrete driveways and sidewalks</li>
            <li>Wood decks and fences</li>
            <li>Patios and outdoor structures</li>
            <li>Paint prep for exterior surfaces</li>
          </ul>

          <h2 className="reveal">Why Choose Professional Power Washing?</h2>
          <p className="reveal">
            DIY pressure washing often leads to accidental damage or poor
            results. Our experienced crew knows exactly how much pressure to use
            for each material—protecting your home while delivering spotless,
            even cleaning. Whether you’re preparing to paint, selling your home,
            or just want to enhance curb appeal, power washing is the first
            step.
          </p>

          <h2 className="reveal">How It Works</h2>

          <p className="reveal">
            Our power washing process is designed to deliver safe, effective
            results with minimal disruption. Whether it's siding, concrete, or
            wood, we follow a precise method to ensure every surface is cleaned
            without damage.
          </p>

          <ol className="reveal list-style-none">
            <li>
              <strong>1. Assessment:</strong> We inspect your surfaces and
              determine the best method — whether high pressure or soft washing.
            </li>
            <li>
              <strong>2. Eco-Friendly Pre-Treatment:</strong> We apply
              biodegradable solutions that loosen dirt, algae, mildew, and
              stains.
            </li>
            <li>
              <strong>3. Thorough Cleaning:</strong> Our team uses pro-grade
              equipment to carefully wash every area, restoring a like-new
              appearance.
            </li>
            <li>
              <strong>4. Final Inspection:</strong> We double-check all cleaned
              surfaces to ensure they’re spotless, safe, and damage-free.
            </li>
          </ol>

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

          <p className="reveal">
            Serving Raleigh, Cary, Apex, and surrounding North Carolina
            communities since 2005. Get your free quote today.
          </p>

          <Link to="/contact" className="hero-button primary reveal">
            Request a Power Washing Quote
          </Link>
        </div>
      </section>

      <ServiceAreas />
    </>
  );
}
