// import React from "react";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import commercialImage from "../assets/images/services-optimized/commercialpaining-holly-springs.webp";
// import useRevealOnScroll from "../components/useRevealOnScroll";
// import ServiceAreas from "./ServiceAreas";

// export default function CommercialHollySprings() {
//   useRevealOnScroll();

//   const pageUrl = "https://drpaintinginc.com/holly-springs/commercial-painting";

//   const schemaData = {
//     "@context": "https://schema.org",
//     "@type": "PaintingService",
//     name: "D&R Painting Inc.",
//     serviceType: "Commercial Painting",
//     areaServed: {
//       "@type": "Place",
//       name: "Holly Springs, NC",
//     },
//     url: pageUrl,
//     telephone: "(919) 519-1699",
//     description:
//       "Commercial painting services in Holly Springs, NC. Offices, retail stores, and local businesses trust D&R Painting Inc. for clean, professional finishes.",
//     provider: {
//       "@type": "Organization",
//       name: "D&R Painting Inc.",
//     },
//   };

//   return (
//     <>
//       <Helmet>
//         <title>
//           Commercial Painting in Holly Springs, NC | D&R Painting Inc.
//         </title>
//         <meta
//           name="description"
//           content="Professional commercial painting services in Holly Springs, NC. Offices, restaurants, retail & more. Family-owned since 2005."
//         />
//         <meta
//           name="keywords"
//           content="Commercial Painting Holly Springs, Office Painting Holly Springs NC, Business Painters Holly Springs, Storefront Painting Holly Springs"
//         />
//         <link rel="canonical" href={pageUrl} />

//         {/* Open Graph */}
//         <meta property="og:type" content="website" />
//         <meta
//           property="og:title"
//           content="Commercial Painting in Holly Springs | D&R Painting Inc."
//         />
//         <meta
//           property="og:description"
//           content="Trusted Holly Springs commercial painters. We handle offices, restaurants, and retail with minimal disruption and professional results."
//         />
//         <meta property="og:url" content={pageUrl} />
//         <meta
//           property="og:image"
//           content="https://drpaintinginc.com/assets/images/services-optimized/comercial1.webp"
//         />

//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content="Commercial Painting in Holly Springs | D&R Painting Inc."
//         />
//         <meta
//           name="twitter:description"
//           content="D&R Painting Inc. provides top-rated commercial painting in Holly Springs. Enhance your business space with a professional finish."
//         />
//         <meta
//           name="twitter:image"
//           content="https://drpaintinginc.com/assets/images/services-optimized/comercial1.webp"
//         />

//         {/* Schema */}
//         <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
//       </Helmet>

//       <section className="service-detail">
//         <div className="container">
//           <h1 className="reveal">Commercial Painting in Holly Springs</h1>
//           <p className="reveal">
//             D&R Painting Inc. is trusted by Holly Springs businesses for
//             high-quality painting services. We help offices, restaurants, retail
//             stores, and local facilities look fresh and professional.
//           </p>

//           <img
//             src={commercialImage}
//             alt="Commercial building painted in Holly Springs"
//             className="reveal"
//             loading="lazy"
//           />

//           <p className="reveal">
//             Our commercial painting team works around your schedule to minimize
//             downtime, delivering durable finishes that reflect your brand and
//             stand up to daily wear. From small shops to larger facilities, we
//             provide reliable results every time.
//           </p>

//           <Link to="/contact" className="hero-button primary reveal">
//             Request a Free Quote
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
import commercialImage from "../assets/images/services-optimized/commercialpaining-holly-springs.webp";
import useRevealOnScroll from "../components/useRevealOnScroll";
import ServiceAreas from "./ServiceAreas";
import TestimonialsSwiper from "./TestimonialsSwiper";

export default function CommercialHollySprings() {
  useRevealOnScroll();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you offer commercial painting near Holly Springs?",
      answer:
        "Yes. We proudly serve businesses in Holly Springs and the surrounding areas, including Apex, Fuquay-Varina, and Cary. Whether you're a local office, retail space, or facility manager, our team brings top-quality results directly to your location.",
    },
    {
      question: "How much does commercial painting cost in Holly Springs?",
      answer:
        "Pricing depends on the building size, surface condition, color changes, and scheduling requirements. After a site visit, we provide a detailed estimate covering prep work, coatings, and labor — all with no hidden fees.",
    },
    {
      question: "What types of businesses do you paint?",
      answer:
        "We paint a wide range of commercial properties in Holly Springs — including office spaces, storefronts, restaurants, medical and dental clinics, warehouses, and multi-unit buildings. Every surface receives the right preparation and professional-grade coatings.",
    },
    {
      question: "Can you work outside normal business hours?",
      answer:
        "Absolutely. We often schedule commercial painting projects for evenings and weekends to minimize disruption. Our painters work cleanly and quietly to ensure your operations continue smoothly.",
    },
    {
      question: "Are you licensed and insured in North Carolina?",
      answer:
        "Yes. D&R Painting Inc. is fully licensed and insured. Our painters are OSHA-trained and EPA Lead-Safe Certified. We take every measure to maintain safety, compliance, and professionalism throughout your project.",
    },
    {
      question: "Can you paint around our business hours?",
      answer:
        "Yes, we regularly work evenings and weekends to avoid disrupting your operations. We’ll coordinate with your team to schedule painting during slow hours, closed days, or after business hours — whatever fits best with your workflow.",
    },
    {
      question: "What kind of prep work do you include before painting?",
      answer:
        "We handle all the essentials — from pressure washing, patching, and sanding to caulking and priming. Surface preparation is one of the most important parts of any commercial paint job, and we make sure it's done right for long-lasting results.",
    },
    {
      question: "How soon can you start our commercial project?",
      answer:
        "Start times vary depending on our schedule and the size of your project. In most cases, we can begin within 1–2 weeks after the estimate. For urgent needs or fast turnarounds, just let us know — we’ll do our best to accommodate.",
    },
  ];

  const pageUrl = "https://drpaintinginc.com/holly-springs/commercial-painting";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "PaintingService",
    serviceType: "Commercial Painting",
    name: "Commercial Painting Holly Springs | D&R Painting Inc.",
    description:
      "Trusted commercial painting services in Holly Springs, NC. Offices, restaurants, retail stores & more. Professional results with minimal downtime.",
    areaServed: {
      "@type": "Place",
      name: "Holly Springs, NC",
    },
    provider: {
      "@type": "LocalBusiness",
      name: "D&R Painting Inc.",
      url: "https://drpaintinginc.com",
      telephone: "(919) 285-0959",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Holly Springs",
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
          Commercial Painting in Holly Springs, NC | D&R Painting Inc.
        </title>
        <meta
          name="description"
          content="Commercial painting for Holly Springs offices, restaurants & local businesses. Licensed & insured. Minimal disruption, flawless results."
        />
        <meta
          name="keywords"
          content="commercial painting Holly Springs, office painters Holly Springs NC, retail painting Holly Springs, business painters Holly Springs"
        />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Commercial Painting in Holly Springs, NC | D&R Painting Inc."
        />
        <meta
          property="og:description"
          content="Trusted Holly Springs commercial painters. Offices, restaurants, and local businesses painted with care and precision."
        />
        <meta
          property="og:image"
          content="https://drpaintinginc.com/assets/images/services-optimized/comercial1.webp"
        />
        <meta property="og:url" content={pageUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Commercial Painting in Holly Springs, NC | D&R Painting Inc."
        />
        <meta
          name="twitter:description"
          content="D&R Painting provides expert commercial painting services to Holly Springs businesses. Get a free quote today."
        />
        <meta
          name="twitter:image"
          content="https://drpaintinginc.com/assets/images/services-optimized/comercial1.webp"
        />

        <script type="application/ld+json">
          {JSON.stringify([schemaData, faqSchema])}
        </script>
      </Helmet>

      <section className="service-detail">
        <div className="container">
          <div className="text-section">
            <h1 className="reveal">Commercial Painting in Holly Springs</h1>

            <p className="reveal">
              At <strong>D&amp;R Painting Inc.</strong>, we provide{" "}
              <strong>professional commercial painting services</strong> for
              businesses in and around Holly Springs. Whether you own a retail
              shop, office, or restaurant, we deliver long-lasting finishes with
              minimal downtime — all while working around your schedule.
            </p>

            <div className="image-section reveal">
              <img
                src={commercialImage}
                alt="Commercial painting project in Holly Springs, NC"
                width="100%"
                height="auto"
                loading="lazy"
              />
            </div>

            <h2 className="reveal">Why Businesses Choose Us</h2>
            <p className="reveal">
              Commercial jobs require planning, professionalism, and precise
              execution. We’ve served businesses in Holly Springs since 2005,
              bringing top-quality finishes to busy spaces with tight schedules.
              Our team is experienced in minimizing disruption while meeting
              strict brand, safety, and facility standards.
            </p>

            <h2 className="reveal">Prep & Materials Matter</h2>
            <p className="reveal">
              We clean, patch, sand, and prime every surface before painting.
              Using trusted commercial-grade products from{" "}
              <strong>Sherwin Williams</strong> and{" "}
              <strong>Benjamin Moore</strong>, we choose low-VOC, fast-drying,
              and long-lasting finishes that hold up to daily business traffic.
            </p>

            <h2 className="reveal">Our Step-by-Step Process</h2>
            <p className="reveal">
              From your first estimate to the final walkthrough, our process is
              built for reliability and smooth execution. We start with a clear
              on-site assessment, complete thorough prep work, and use
              high-quality coatings tailored to your space. After painting, we
              walk the property with you, handle any touch-ups, and leave
              everything clean and ready to use. It’s a streamlined,
              professional experience from start to finish.
            </p>
            <ol className="reveal">
              <li>On-site estimate with clear scope and pricing</li>
              <li>Complete prep work & material recommendations</li>
              <li>Clean, efficient painting with quality coatings</li>
              <li>Final walkthrough and guaranteed touch-ups</li>
            </ol>

            <h2 className="reveal">Industries We Serve</h2>
            <p>
              We proudly serve a wide range of commercial industries in Holly
              Springs, including offices and corporate spaces, retail shops and
              boutiques, restaurants and cafés, medical and dental offices,
              gyms, salons, wellness centers, as well as warehouses and
              industrial units. Our team is equipped to handle the unique
              painting needs of each space — from high-traffic retail
              environments to professional medical settings — always delivering
              clean finishes and minimal disruption.
            </p>
            <ul className="reveal">
              <li>Offices and corporate spaces</li>
              <li>Retail shops and boutiques</li>
              <li>Restaurants and cafés</li>
              <li>Medical and dental offices</li>
              <li>Gyms, salons, and wellness centers</li>
              <li>Warehouses and industrial units</li>
            </ul>

            <h2 className="reveal">Why Commercial Painting Matters</h2>
            <p className="reveal">
              A well-painted business space boosts curb appeal, protects your
              property, and helps make a great first impression. Our expert
              commercial painting in Holly Springs helps your brand stand out
              while maintaining a clean, welcoming space for customers and staff
              alike.
            </p>

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

            <h2 className="reveal">Get Your Free Commercial Quote</h2>
            <p className="reveal">
              If your Holly Springs business needs a fresh coat of paint,
              contact D&amp;R Painting Inc. today. We’ll deliver a seamless,
              professional finish that matches your brand and works with your
              schedule.
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
