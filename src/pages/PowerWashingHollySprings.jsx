// import React from "react";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import washingImage from "../assets/images/services-optimized/power-washing-holly-springs.webp";
// import useRevealOnScroll from "../components/useRevealOnScroll";
// import ServiceAreas from "./ServiceAreas";

// export default function PowerWashingHollySprings() {
//   useRevealOnScroll();

//   const pageUrl = "https://drpaintinginc.com/holly-springs/power-washing";

//   const schemaData = {
//     "@context": "https://schema.org",
//     "@type": "PaintingService",
//     name: "D&R Painting Inc.",
//     url: pageUrl,
//     serviceType: "Power Washing",
//     areaServed: [{ "@type": "Place", name: "Holly Springs, NC" }],
//     telephone: "(919) 519-1699",
//     description:
//       "Professional power washing in Holly Springs, NC. We clean siding, driveways, decks, and fences with safe, effective results.",
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Power Washing in Holly Springs, NC | D&R Painting Inc.</title>
//         <meta
//           name="description"
//           content="Revive your Holly Springs home with professional power washing. Siding, driveways, decks & fences cleaned with commercial-grade equipment."
//         />
//         <meta
//           name="keywords"
//           content="power washing Holly Springs, pressure washing Holly Springs NC, house washing Holly Springs"
//         />
//         <link rel="canonical" href={pageUrl} />

//         {/* Open Graph */}
//         <meta property="og:type" content="website" />
//         <meta
//           property="og:title"
//           content="Power Washing in Holly Springs, NC | D&R Painting Inc."
//         />
//         <meta
//           property="og:description"
//           content="Professional power washing services in Holly Springs. Safe, effective cleaning for siding, driveways, decks, and fences."
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
//           content="Power Washing in Holly Springs, NC | D&R Painting Inc."
//         />
//         <meta
//           name="twitter:description"
//           content="Restore the look of your Holly Springs property with professional power washing. Free estimates available."
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
//           <h1 className="reveal">Power Washing in Holly Springs</h1>
//           <p className="reveal">
//             Keep your Holly Springs property looking its best with our
//             professional power washing services. From siding and driveways to
//             decks and fences, we remove dirt, grime, and mold safely and
//             effectively.
//           </p>

//           <img
//             src={washingImage}
//             alt="Power washing home in Holly Springs"
//             className="reveal"
//             loading="lazy"
//           />

//           <p className="reveal">
//             Our team uses commercial-grade equipment and adjusts pressure
//             settings for each surface, ensuring long-lasting, damage-free
//             results. Power washing is also the perfect prep before painting for
//             maximum adhesion.
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
import washingImage from "../assets/images/services-optimized/power-washing-holly-springs.webp";
import useRevealOnScroll from "../components/useRevealOnScroll";
import ServiceAreas from "./ServiceAreas";
import TestimonialsSwiper from "./TestimonialsSwiper";

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

  useRevealOnScroll();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What surfaces can you power wash?",
      answer: (
        <>
          We clean siding, brick, driveways, patios, decks, fences, and more.
          Our commercial-grade equipment allows us to adjust pressure settings
          based on the material to avoid damage and ensure the best results.
        </>
      ),
    },
    {
      question: "Is power washing safe for my home?",
      answer: (
        <>
          Yes — we adjust pressure based on the surface and use environmentally
          safe detergents when needed. We take extra care around windows, doors,
          and delicate areas to avoid any damage.
        </>
      ),
    },
    {
      question: "How often should I power wash my home?",
      answer: (
        <>
          For most homes in Holly Springs, we recommend power washing once a
          year to remove pollen, algae, mold, and surface dirt. Heavily shaded
          or high-traffic areas may need more frequent service.
        </>
      ),
    },
    {
      question: "Do you offer power washing as a standalone service?",
      answer: (
        <>
          Absolutely. While we often use power washing to prepare surfaces
          before painting, we also offer it on its own for general exterior
          cleaning.
        </>
      ),
    },
    {
      question: "Can power washing improve my home’s appearance?",
      answer: (
        <>
          Yes! It’s one of the easiest and most affordable ways to boost curb
          appeal. A single session can make your siding, walkways, and outdoor
          spaces look like new again.
        </>
      ),
    },
    {
      question: "Will you clean up afterward?",
      answer: (
        <>
          Of course. We leave your property clean and tidy, with no mess or
          debris left behind. All hoses and materials are cleaned up at the end
          of the service.
        </>
      ),
    },
    {
      question: "Do I need to be home during the service?",
      answer: (
        <>
          It’s not required. As long as we have access to the areas being
          cleaned and access to water, we can complete the job and follow up
          with photos or walkthroughs if you prefer.
        </>
      ),
    },
    {
      question: "Do you service HOAs or commercial properties?",
      answer: (
        <>
          Yes — we offer power washing for residential homes, HOAs, and small
          businesses across Holly Springs and nearby areas like 12 Oaks and
          Braxton Village.
        </>
      ),
    },
  ];

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

        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
      </Helmet>

      <section className="service-detail">
        <div className="container">
          <h1 className="reveal">Power Washing in Holly Springs</h1>
          <p className="reveal">
            Give your Holly Springs property a fresh, clean look with our
            professional power washing services. We safely remove grime, mold,
            algae, and years of buildup from your siding, walkways, and outdoor
            surfaces — restoring the beauty of your home without harsh
            chemicals.
          </p>

          <img
            src={washingImage}
            alt="Power washing home in Holly Springs"
            className="reveal"
            loading="lazy"
          />

          <p className="reveal">
            Our commercial-grade pressure washers are customized for every
            surface. Whether it’s vinyl siding, brick, concrete, or wood, we
            adjust our settings to deliver powerful results without damage.
            Power washing is also the essential first step before any exterior
            paint job — improving adhesion and longevity.
          </p>

          <h2 className="reveal">What We Power Wash</h2>
          <p className="reveal">
            Our power washing services in Holly Springs cover a wide range of
            outdoor surfaces. Whether you're looking to clean up years of grime
            on your siding or prepare a deck for refinishing, we’ve got the
            right equipment and experience to do the job right. Every surface is
            assessed before we begin to ensure safe, effective results that
            enhance your home’s curb appeal.
          </p>
          <ul className="reveal">
            <li>Siding & brick exteriors</li>
            <li>Driveways & sidewalks</li>
            <li>Decks & patios</li>
            <li>Fences & outdoor structures</li>
            <li>Surface prep before painting</li>
          </ul>

          <h2 className="reveal">Why Holly Springs Homeowners Trust Us</h2>
          <p className="reveal">
            We’re a local, family-owned team with over 15 years of experience.
            We show up on time, use safe methods, and treat your property like
            it’s our own. From homes in Holly Glen to neighborhoods like 12 Oaks
            and Sunset Ridge, we’re proud to be one of Holly Springs’ most
            trusted names in home care.
          </p>

          <h2 className="reveal">When’s the Best Time to Power Wash?</h2>
          <p className="reveal">
            Most homes benefit from annual power washing — especially in the
            spring or fall. If your property is shaded, near trees, or prone to
            mold, cleaning more often may be necessary. We’re happy to recommend
            the best schedule based on your needs.
          </p>

          <Link to="/contact" className="hero-button primary reveal">
            Request a Power Wash
          </Link>
        </div>
      </section>
      <TestimonialsSwiper />

      <h2 className="faq-title reveal">
        FAQs – Holly Springs Residential Painting
      </h2>
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
      <ServiceAreas />
    </>
  );
}
