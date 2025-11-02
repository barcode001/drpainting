// import React from "react";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import cabinetImage from "../assets/images/services-optimized/cabinet-refinishing-holly-springs.webp";
// import useRevealOnScroll from "../components/useRevealOnScroll";
// import ServiceAreas from "./ServiceAreas";

// export default function CabinetRefinishingHollySprings() {
//   useRevealOnScroll();

//   const pageUrl = "https://drpaintinginc.com/holly-springs/cabinet-refinishing";

//   const schemaData = {
//     "@context": "https://schema.org",
//     "@type": "PaintingService",
//     name: "D&R Painting Inc.",
//     serviceType: "Cabinet Refinishing",
//     areaServed: {
//       "@type": "Place",
//       name: "Holly Springs, NC",
//     },
//     url: pageUrl,
//     telephone: "(919) 519-1699",
//     description:
//       "Professional cabinet refinishing in Holly Springs, NC. Update your kitchen and bathroom cabinets with durable, modern finishes at affordable prices.",
//     provider: {
//       "@type": "Organization",
//       name: "D&R Painting Inc.",
//     },
//   };

//   return (
//     <>
//       <Helmet>
//         <title>
//           Cabinet Refinishing in Holly Springs, NC | D&R Painting Inc.
//         </title>
//         <meta
//           name="description"
//           content="Transform your Holly Springs kitchen or bathroom with professional cabinet refinishing. Smooth, modern finishes without the cost of replacement."
//         />
//         <meta
//           name="keywords"
//           content="Cabinet Refinishing Holly Springs, Kitchen Cabinet Painting Holly Springs NC, Cabinet Painters Holly Springs, Bathroom Cabinet Makeover Holly Springs"
//         />
//         <link rel="canonical" href={pageUrl} />

//         {/* Open Graph */}
//         <meta property="og:type" content="website" />
//         <meta
//           property="og:title"
//           content="Cabinet Refinishing in Holly Springs | Kitchen Cabinet Painting | D&R Painting Inc."
//         />
//         <meta
//           property="og:description"
//           content="Give your Holly Springs kitchen or bathroom cabinets a fresh, modern look with D&R Painting Inc.'s expert refinishing services."
//         />
//         <meta property="og:url" content={pageUrl} />
//         <meta
//           property="og:image"
//           content="https://drpaintinginc.com/assets/images/services-optimized/kitchen4.webp"
//         />

//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content="Cabinet Refinishing in Holly Springs | Kitchen Cabinet Painting | D&R Painting Inc."
//         />
//         <meta
//           name="twitter:description"
//           content="Update your Holly Springs cabinets with durable, stylish refinishing. Trusted since 2005."
//         />
//         <meta
//           name="twitter:image"
//           content="https://drpaintinginc.com/assets/images/services-optimized/kitchen4.webp"
//         />

//         {/* Schema */}
//         <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
//       </Helmet>

//       <section className="service-detail">
//         <div className="container">
//           <h1 className="reveal">Cabinet Refinishing in Holly Springs</h1>
//           <p className="reveal">
//             Bring new life to your Holly Springs home with our cabinet
//             refinishing services. We help homeowners modernize kitchens and
//             bathrooms with clean, durable finishes that last.
//           </p>

//           <img
//             src={cabinetImage}
//             alt="Cabinet refinishing in Holly Springs"
//             className="reveal"
//             loading="lazy"
//           />

//           <p className="reveal">
//             Our process includes cleaning, sanding, and refinishing using
//             high-quality products that resist chips, fading, and moisture. From
//             modern colors to classic stains, we’ll create the perfect look for
//             your home.
//           </p>

//           <Link to="/contact" className="hero-button primary reveal">
//             Get a Free Cabinet Quote
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
import cabinetImage from "../assets/images/services-optimized/cabinet-refinishing-holly-springs.webp";
import useRevealOnScroll from "../components/useRevealOnScroll";
import ServiceAreas from "./ServiceAreas";
import TestimonialsSwiper from "./TestimonialsSwiper";

export default function CabinetRefinishingHollySprings() {
  useRevealOnScroll();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How much does cabinet refinishing cost in Holly Springs?",
      answer:
        "It depends on the size of your kitchen or bathroom, the condition of your cabinets, and the finish you choose. Most Holly Springs homeowners can expect to pay significantly less than cabinet replacement. We’ll give you a clear, free estimate after evaluating your project in person.",
    },
    {
      question:
        "What’s the difference between refinishing and painting cabinets?",
      answer:
        "Refinishing typically involves cleaning, sanding, priming, and applying a fresh coat of paint or stain. It restores the look of your existing cabinets without replacing them. Cabinet painting is one part of refinishing, but we also handle repairs and prep to ensure long-lasting, high-quality results.",
    },
    {
      question: "How long does cabinet refinishing take?",
      answer:
        "Most kitchen cabinet refinishing projects in Holly Springs take 3–5 days from start to finish. We work efficiently while allowing proper drying and curing times to ensure a flawless finish that lasts for years.",
    },
    {
      question: "Can you match my existing cabinet color?",
      answer:
        "Yes! Whether you want to keep your current color or try something new, we can color match exactly or offer samples of updated modern tones. Our team works with Sherwin Williams and Benjamin Moore paints for premium, consistent results.",
    },
    {
      question: "Do you offer cabinet refinishing for bathrooms too?",
      answer:
        "Absolutely. We refinish bathroom vanities and built-in cabinetry with the same level of quality as kitchens. Moisture-resistant coatings help protect bathroom surfaces while giving your space a fresh look.",
    },
    {
      question: "Will refinishing work on damaged or older cabinets?",
      answer:
        "In most cases, yes. We repair minor dents, scratches, peeling paint, or water damage before refinishing. If your cabinets are structurally sound, refinishing is a cost-effective way to refresh them without a full replacement.",
    },
    {
      question: "Do you remove the doors and drawers during refinishing?",
      answer:
        "Yes. To ensure an even, professional finish, we remove all cabinet doors and drawer fronts, work on them separately, and then reinstall them carefully once cured.",
    },
    {
      question: "Is cabinet refinishing messy or disruptive?",
      answer:
        "Not at all. We use dust containment, ventilation, and protective coverings to keep your home clean and livable throughout the process. Most Holly Springs clients are surprised at how smooth and stress-free the experience is.",
    },
  ];

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
        <script type="application/ld+json">
          {JSON.stringify([schemaData, faqSchema])}
        </script>
      </Helmet>

      <section className="service-detail">
        <div className="container">
          <h1 className="reveal">Cabinet Refinishing in Holly Springs</h1>
          <p className="reveal">
            Replacing cabinets is expensive, messy, and time-consuming. Our
            cabinet refinishing service gives your kitchen or bathroom a fresh,
            updated look without the cost or hassle of a full remodel. We help
            Holly Springs homeowners transform their homes with smooth,
            factory-quality finishes that stand the test of time.
          </p>

          <img
            src={cabinetImage}
            alt="Cabinet refinishing in Holly Springs"
            className="reveal"
            loading="lazy"
          />

          <p className="reveal">
            Whether you're going for a classic white or something bold and
            modern, we’ll help you find the perfect finish. We handle every
            step—cleaning, sanding, priming, and painting—with careful attention
            to detail so your cabinets look brand new.
          </p>

          <h2 className="reveal">
            Proudly Serving Holly Springs Neighborhoods
          </h2>
          <p className="reveal">
            We proudly provide cabinet refinishing and painting services in top
            Holly Springs communities including <strong>12 Oaks</strong>,{" "}
            <strong>Braxton Village</strong>, and <strong>Holly Glen</strong>.
            Whether you’re updating a new build or refreshing an older home,
            D&amp;R Painting Inc. is trusted by homeowners across the area for
            quality craftsmanship and reliable results.
          </p>

          <h2 className="reveal">Our Cabinet Refinishing Process</h2>
          <p className="reveal">
            We follow a tested process to ensure your cabinet makeover looks
            professional and lasts for years. Here’s what you can expect:
          </p>
          <ol className="reveal">
            <li>
              We inspect your cabinets and provide a detailed, written quote.
            </li>
            <li>
              Doors and drawers are removed and labeled for even, precise
              painting.
            </li>
            <li>
              All surfaces are cleaned, sanded, and primed with high-adhesion
              products.
            </li>
            <li>
              Multiple coats of cabinet-grade paint or stain are applied and
              cured.
            </li>
            <li>
              Everything is reassembled and inspected for a flawless finish.
            </li>
          </ol>

          <h2 className="reveal">
            Our Step-by-Step Cabinet Refinishing Process
          </h2>
          <p className="reveal">
            At D&R Painting Inc., we follow a proven process to ensure every
            cabinet project is clean, smooth, and durable. Our goal is to
            deliver showroom-quality results that hold up to everyday use in
            busy kitchens and bathrooms.
          </p>
          <ol className="reveal">
            <li>
              <strong>Preparation:</strong> We remove hardware, mask surrounding
              surfaces, and clean every cabinet thoroughly to remove grease and
              residue.
            </li>
            <li>
              <strong>Sanding:</strong> Surfaces are sanded to ensure proper
              adhesion and a smooth, even finish.
            </li>
            <li>
              <strong>Priming:</strong> We apply a high-quality primer to block
              stains and create a solid foundation for topcoats.
            </li>
            <li>
              <strong>Finishing:</strong> Cabinets are sprayed or brushed with
              your selected color or stain in multiple coats for lasting
              protection and beauty.
            </li>
            <li>
              <strong>Final Touches:</strong> Hardware is reinstalled and final
              touch-ups are completed so your cabinets look like new.
            </li>
          </ol>

          <h2 className="reveal">Why Holly Springs Homeowners Choose Us</h2>
          <p className="reveal">
            At D&R Painting Inc., we’ve been trusted by Triangle-area homeowners
            since 2005. Our team is detail-oriented, respectful of your home,
            and committed to delivering results that exceed expectations. We use
            only premium materials and guarantee your satisfaction from start to
            finish.
          </p>

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

          <h2 className="reveal">Let’s Refresh Your Cabinets</h2>
          <p className="reveal">
            If you're ready to give your cabinets a new look without the expense
            of a full remodel, we’re here to help. Our Holly Springs cabinet
            refinishing service is affordable, reliable, and guaranteed to
            impress.
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
