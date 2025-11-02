// import React from "react";
// import residentialImage from "../assets/images/services-optimized/residentialpaining-holly-springs.webp";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import useRevealOnScroll from "../components/useRevealOnScroll";
// import ServiceAreas from "./ServiceAreas";

// export default function ResidentialHollySprings() {
//   useRevealOnScroll();
//   return (
//     <>
//       <Helmet>
//         <title>
//           Residential Painting in Holly Springs, NC | D&R Painting Inc.
//         </title>
//         <meta
//           name="description"
//           content="Residential painting services in Holly Springs, NC. Interior & exterior painting with lasting results. Request your free estimate today!"
//         />
//         <meta
//           name="keywords"
//           content="Holly Springs residential painting, house painters Holly Springs, interior painting Holly Springs, exterior painting Holly Springs"
//         />
//         <link
//           rel="canonical"
//           href="https://drpaintinginc.com/holly-springs/residential-painting"
//         />

//         {/* Open Graph */}
//         <meta property="og:type" content="website" />
//         <meta
//           property="og:title"
//           content="Residential Painting in Holly Springs, NC | D&R Painting Inc."
//         />
//         <meta
//           property="og:description"
//           content="Transform your Holly Springs home with expert interior & exterior painting. Family-owned since 2005."
//         />
//         <meta
//           property="og:url"
//           content="https://drpaintinginc.com/holly-springs/residential-painting"
//         />
//         <meta
//           property="og:image"
//           content="https://drpaintinginc.com/og-image.jpg"
//         />

//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content="Residential Painting in Holly Springs | D&R Painting Inc."
//         />
//         <meta
//           name="twitter:description"
//           content="Interior & exterior painting services for Holly Springs homes. Free estimates available."
//         />
//         <meta
//           name="twitter:image"
//           content="https://drpaintinginc.com/og-image.jpg"
//         />
//       </Helmet>

//       <section className="service-detail">
//         <div className="container">
//           <div className="text-section">
//             <h1 className="reveal">Residential Painting in Holly Springs</h1>
//             <p className="reveal">
//               Refresh your Holly Springs home with expert interior & exterior
//               painting. Our team at D&R Painting Inc. delivers smooth finishes,
//               clean lines, and long-lasting results for local homeowners.
//             </p>
//             <div className="image-section reveal">
//               <img
//                 src={residentialImage}
//                 alt="Residential Painting Holly Springs"
//                 width="100%"
//                 height="auto"
//               />
//             </div>
//             <p className="reveal">
//               From single rooms to full exterior makeovers, we help Holly
//               Springs families choose the perfect colors and finishes. We
//               protect your space, work efficiently, and always clean up before
//               we leave.
//             </p>
//             <p className="reveal">
//               With over 20 years of experience, our family-owned business is
//               trusted across the Triangle for quality, care, and
//               professionalism.
//             </p>
//             <Link to="/contact" className="hero-button primary">
//               Get a Free Quote
//             </Link>
//           </div>
//         </div>
//       </section>
//       <ServiceAreas />
//     </>
//   );
// }

// import React, { useState } from "react";
// import residentialImage from "../assets/images/services-optimized/residentialpaining-holly-springs.webp";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import useRevealOnScroll from "../components/useRevealOnScroll";
// import ServiceAreas from "./ServiceAreas";
// import TestimonialsSwiper from "./TestimonialsSwiper";

// export default function ResidentialHollySprings() {
//   useRevealOnScroll();
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };
//   const faqs = [
//     {
//       question: "Do you offer free estimates?",
//       answer: (
//         <>
//           Yes! We provide free estimates for all Holly Springs residential
//           painting projects. One of our team members will visit your home,
//           assess the surfaces to be painted, discuss your goals, and walk you
//           through your options. You’ll receive a transparent, no-obligation
//           quote before any work begins.
//         </>
//       ),
//     },
//     {
//       question: "What areas around Holly Springs do you serve?",
//       answer: (
//         <>
//           We proudly serve Holly Springs and the surrounding areas, including
//           Apex, Fuquay-Varina, Cary, and parts of Raleigh. If you’re located
//           within the Triangle region, chances are we can help — just give us a
//           call and we’ll confirm.
//         </>
//       ),
//     },
//     {
//       question: "What types of homes do you paint?",
//       answer: (
//         <>
//           We work on a wide variety of home types, from cozy townhomes to large
//           custom-built houses. Whether it’s a single room or the entire interior
//           and exterior of your property, we have the tools and experience to
//           handle it. Our team is trained to work efficiently and cleanly in
//           occupied homes, with minimal disruption to your routine.
//         </>
//       ),
//     },
//     {
//       question: "Do you help with HOA color guidelines?",
//       answer: (
//         <>
//           Yes, absolutely. If your neighborhood has HOA guidelines, we’ll assist
//           in choosing approved colors and ensure everything is submitted
//           correctly for review. We’re familiar with the process and can help
//           avoid delays or rejections so your project stays on track.
//         </>
//       ),
//     },
//     {
//       question: "Do you apply primer before painting?",
//       answer: (
//         <>
//           Yes. Primer is an important step in most painting jobs. We apply it
//           where needed — including new drywall, patched areas, water stains,
//           drastic color changes, and more. Using primer ensures better paint
//           adhesion and a smoother, longer-lasting finish for your walls and
//           trim.
//         </>
//       ),
//     },
//     {
//       question: "How do you protect floors and furniture while painting?",
//       answer: (
//         <>
//           We take protection seriously. Our painters use high-quality drop
//           cloths, plastic sheeting, painter’s tape, and corner guards to shield
//           your flooring, furniture, fixtures, and décor. We carefully cover and
//           move items as needed, always respecting your home and cleaning up
//           thoroughly after the job is done.
//         </>
//       ),
//     },
//     {
//       question:
//         "What happens if touch-ups are needed after the project is finished?",
//       answer: (
//         <>
//           Your satisfaction is important to us. If you notice anything after we
//           leave — whether it’s a missed spot, uneven coverage, or a new scuff —
//           we’ll come back and take care of it at no extra cost. Our goal is to
//           leave you 100% happy with the result, and we back that up with our
//           satisfaction guarantee.
//         </>
//       ),
//     },
//   ];
//   return (
//     <>
//       <Helmet>
//         <title>
//           Residential Painting in Holly Springs, NC | D&R Painting Inc.
//         </title>
//         <meta
//           name="description"
//           content="Interior & exterior residential painting in Holly Springs. Trusted since 2005. Get a free quote today from licensed, insured professionals."
//         />
//         <meta
//           name="keywords"
//           content="Holly Springs house painters, interior painting Holly Springs, exterior painting Holly Springs, residential painting Holly Springs NC"
//         />
//         <link
//           rel="canonical"
//           href="https://drpaintinginc.com/holly-springs/residential-painting"
//         />
//       </Helmet>

//       <section className="service-detail">
//         <div className="container">
//           <div className="text-section">
//             <h1 className="reveal">Residential Painting in Holly Springs</h1>
//             <p className="reveal">
//               Your home deserves expert care and professional results. At{" "}
//               <strong>D&amp;R Painting Inc.</strong>, we bring over 20 years of
//               experience to every project. From interior walls to full exterior
//               repaints, our licensed and insured team makes sure your Holly
//               Springs home looks beautiful and stays protected.
//             </p>

//             <div className="image-section reveal">
//               <img
//                 src={residentialImage}
//                 alt="House painting in Holly Springs"
//                 width="100%"
//                 height="auto"
//               />
//             </div>

//             <h2 className="reveal">Rooted in the Holly Springs Community</h2>
//             <p className="reveal">
//               We’ve built our reputation one project at a time — not just with
//               quality work, but by earning the trust of local homeowners across
//               Holly Springs. Many of our clients come back to us for future
//               projects or refer us to friends and neighbors. That kind of
//               word-of-mouth means everything to a family business like ours.
//               We’re proud to be part of this growing community and treat every
//               home we paint with care and respect.
//             </p>

//             <h2 className="reveal">Interior & Exterior Painting Services</h2>
//             <p className="reveal">
//               We offer a full range of interior and exterior painting services
//               designed to enhance and protect every part of your home. Whether
//               you’re refreshing walls, updating cabinetry, or restoring curb
//               appeal, our skilled painters deliver flawless results with minimal
//               disruption. Every service is tailored to meet the unique needs of
//               Holly Springs homeowners.
//             </p>
//             <ul className="reveal">
//               <li>Walls, ceilings & trim</li>
//               <li>Brick, siding & garage doors</li>
//               <li>Decks, fences & porches</li>
//               <li>Cabinet painting & refinishing</li>
//               <li>Drywall repair & prep work</li>
//             </ul>

//             <h2 className="reveal">Our Proven Painting Process</h2>
//             <p className="reveal">
//               At D&R Painting Inc., we follow a time-tested painting process
//               that ensures quality results every time. From the first estimate
//               to the final walkthrough, our team focuses on precision,
//               cleanliness, and customer satisfaction. We know how important your
//               home is, and our step-by-step approach helps us deliver stunning
//               results that last — with minimal disruption to your daily routine.
//             </p>
//             <ol className="reveal">
//               <li>Free onsite estimate with color consultation</li>
//               <li>Full prep work (sanding, patching, cleaning)</li>
//               <li>Protecting your floors and furniture</li>
//               <li>Clean, precise painting with durable finishes</li>
//               <li>Final walkthrough with touch-ups included</li>
//             </ol>

//             <h2 className="reveal">Our Guarantee</h2>
//             <p className="reveal">
//               Nothing matters more to us than your satisfaction. That’s why
//               every painting project we take on is backed by our 100%
//               satisfaction guarantee. If something’s not right, we’ll fix it —
//               no runaround, no stress. From the first brushstroke to the final
//               walkthrough, we’re committed to delivering results you’ll feel
//               proud of and service you can trust.
//             </p>

//             <TestimonialsSwiper />

//             <h2 className="reveal">
//               FAQs – Holly Springs Residential Painting
//             </h2>
//             <div className="faq-section reveal">
//               {faqs.map((faq, index) => (
//                 <div
//                   key={index}
//                   className={`faq-item ${
//                     activeIndex === index ? "active" : ""
//                   }`}
//                 >
//                   <button
//                     className="faq-question"
//                     onClick={() => toggleFAQ(index)}
//                     aria-expanded={activeIndex === index}
//                   >
//                     <span>{faq.question}</span>
//                     <span className="faq-icon">
//                       {activeIndex === index ? "−" : "+"}
//                     </span>
//                   </button>
//                   <div
//                     className="faq-answer"
//                     style={{
//                       maxHeight: activeIndex === index ? "500px" : "0",
//                       overflow: "hidden",
//                       transition: "max-height 0.4s ease",
//                     }}
//                   >
//                     <p>{faq.answer}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <h2 className="reveal">Let’s Paint Something Beautiful</h2>
//             <p className="reveal">
//               Whether you’re prepping to sell or just refreshing your space,
//               D&amp;R Painting Inc. is your trusted partner in Holly Springs.
//               Request your free estimate today and see why so many local
//               homeowners recommend us.
//             </p>

//             <Link to="/contact" className="hero-button primary reveal">
//               Get Your Free Quote
//             </Link>
//           </div>
//         </div>
//       </section>
//       <ServiceAreas />
//     </>
//   );
// }

import React, { useState } from "react";
import residentialImage from "../assets/images/services-optimized/residentialpaining-holly-springs.webp";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useRevealOnScroll from "../components/useRevealOnScroll";
import ServiceAreas from "./ServiceAreas";
import TestimonialsSwiper from "./TestimonialsSwiper";

export default function ResidentialHollySprings() {
  useRevealOnScroll();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you offer free estimates?",
      answer: (
        <>
          Yes! We provide free estimates for all Holly Springs residential
          painting projects. One of our team members will visit your home,
          assess the surfaces to be painted, discuss your goals, and walk you
          through your options. You’ll receive a transparent, no-obligation
          quote before any work begins.
        </>
      ),
    },
    {
      question: "What areas around Holly Springs do you serve?",
      answer: (
        <>
          We proudly serve Holly Springs and the surrounding areas, including
          Apex, Fuquay-Varina, Cary, and parts of Raleigh. If you’re located
          within the Triangle region, chances are we can help — just give us a
          call and we’ll confirm.
        </>
      ),
    },
    {
      question: "What types of homes do you paint?",
      answer: (
        <>
          We work on a wide variety of home types, from cozy townhomes to large
          custom-built houses. Whether it’s a single room or the entire interior
          and exterior of your property, we have the tools and experience to
          handle it. Our team is trained to work efficiently and cleanly in
          occupied homes, with minimal disruption to your routine.
        </>
      ),
    },
    {
      question: "Do you help with HOA color guidelines?",
      answer: (
        <>
          Yes, absolutely. If your neighborhood has HOA guidelines, we’ll assist
          in choosing approved colors and ensure everything is submitted
          correctly for review. We’re familiar with the process and can help
          avoid delays or rejections so your project stays on track.
        </>
      ),
    },
    {
      question: "Do you apply primer before painting?",
      answer: (
        <>
          Yes. Primer is an important step in most painting jobs. We apply it
          where needed — including new drywall, patched areas, water stains,
          drastic color changes, and more. Using primer ensures better paint
          adhesion and a smoother, longer-lasting finish for your walls and
          trim.
        </>
      ),
    },
    {
      question: "How do you protect floors and furniture while painting?",
      answer: (
        <>
          We take protection seriously. Our painters use high-quality drop
          cloths, plastic sheeting, painter’s tape, and corner guards to shield
          your flooring, furniture, fixtures, and décor. We carefully cover and
          move items as needed, always respecting your home and cleaning up
          thoroughly after the job is done.
        </>
      ),
    },
    {
      question:
        "What happens if touch-ups are needed after the project is finished?",
      answer: (
        <>
          Your satisfaction is important to us. If you notice anything after we
          leave — whether it’s a missed spot, uneven coverage, or a new scuff —
          we’ll come back and take care of it at no extra cost. Our goal is to
          leave you 100% happy with the result, and we back that up with our
          satisfaction guarantee.
        </>
      ),
    },
    {
      question: "Are you licensed and insured?",
      answer: (
        <>
          Yes, we are fully licensed and insured to perform residential painting
          in Holly Springs and the surrounding areas. You can feel confident
          knowing your property is protected and you're working with experienced
          professionals.
        </>
      ),
    },
    {
      question: "Do you offer color consultations?",
      answer: (
        <>
          Yes, we can help you choose the perfect colors for your space. Our
          team offers basic color guidance during your free estimate, and we can
          also coordinate with local design consultants if you’d like more
          in-depth help selecting a palette that suits your style.
        </>
      ),
    },
    {
      question: "How long does a typical residential paint job take?",
      answer: (
        <>
          Most standard interior or exterior paint jobs are completed in 1–3
          days depending on the size and scope of work. We'll give you a clear
          project timeline before starting, and we always show up on time, keep
          the area clean, and finish when we say we will.
        </>
      ),
    },
  ];

  const pageUrl =
    "https://drpaintinginc.com/holly-springs/residential-painting";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "PaintingService",
    name: "D&R Painting Inc.",
    url: pageUrl,
    serviceType: "Residential Painting",
    areaServed: [
      { "@type": "Place", name: "Holly Springs NC" },
      { "@type": "Place", name: "Apex NC" },
      { "@type": "Place", name: "Cary NC" },
    ],
    telephone: "(919) 519-1699",
    description:
      "Professional residential painting in Holly Springs, NC. Licensed & insured interior and exterior painters. Get a free estimate today.",
  };

  return (
    <>
      <Helmet>
        <title>
          Residential Painting in Holly Springs, NC | D&R Painting Inc.
        </title>
        <meta
          name="description"
          content="Interior & exterior residential painting in Holly Springs. Trusted since 2005. Get a free quote today from licensed, insured professionals."
        />
        <meta
          name="keywords"
          content="Holly Springs house painters, interior painting Holly Springs, exterior painting Holly Springs, residential painting Holly Springs NC"
        />
        <link rel="canonical" href={pageUrl} />

        {/* Social Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Residential Painting in Holly Springs, NC | D&R Painting Inc."
        />
        <meta
          property="og:description"
          content="Expert residential painters serving Holly Springs, NC. Interior & exterior painting with free quotes and guaranteed satisfaction."
        />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:image"
          content="https://drpaintinginc.com/assets/images/services-optimized/residentialpaining-holly-springs.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Residential Painting in Holly Springs, NC | D&R Painting Inc."
        />
        <meta
          name="twitter:description"
          content="Interior and exterior house painters in Holly Springs. Licensed, insured & trusted since 2005. Free quotes."
        />
        <meta
          name="twitter:image"
          content="https://drpaintinginc.com/assets/images/services-optimized/residentialpaining-holly-springs.webp"
        />

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
          <div className="text-section">
            <h1 className="reveal">Residential Painting in Holly Springs</h1>
            <p className="reveal">
              Your home deserves expert care and professional results. At{" "}
              <strong>D&amp;R Painting Inc.</strong>, we bring over 20 years of
              experience to every project. From interior walls to full exterior
              repaints, our licensed and insured team makes sure your Holly
              Springs home looks beautiful and stays protected.
            </p>

            <div className="image-section reveal">
              <img
                src={residentialImage}
                alt="House painting in Holly Springs"
                width="100%"
                height="auto"
              />
            </div>

            <h2 className="reveal">Rooted in the Holly Springs Community</h2>
            <p className="reveal">
              We’ve built our reputation one project at a time — not just with
              quality work, but by earning the trust of local homeowners across
              Holly Springs. Many of our clients come back to us for future
              projects or refer us to friends and neighbors. That kind of
              word-of-mouth means everything to a family business like ours.
              We’re proud to be part of this growing community and treat every
              home we paint with care and respect.
            </p>

            <h2 className="reveal">Interior & Exterior Painting Services</h2>
            <p className="reveal">
              We offer a full range of interior and exterior painting services
              designed to enhance and protect every part of your home. Whether
              you’re refreshing walls, updating cabinetry, or restoring curb
              appeal, our skilled painters deliver flawless results with minimal
              disruption. Every service is tailored to meet the unique needs of
              Holly Springs homeowners.
            </p>
            <ul className="reveal">
              <li>Walls, ceilings & trim</li>
              <li>Brick, siding & garage doors</li>
              <li>Decks, fences & porches</li>
              <li>Cabinet painting & refinishing</li>
              <li>Drywall repair & prep work</li>
            </ul>

            <h2 className="reveal">Our Proven Painting Process</h2>
            <p className="reveal">
              At D&R Painting Inc., we follow a time-tested painting process
              that ensures quality results every time. From the first estimate
              to the final walkthrough, our team focuses on precision,
              cleanliness, and customer satisfaction. We know how important your
              home is, and our step-by-step approach helps us deliver stunning
              results that last — with minimal disruption to your daily routine.
            </p>
            <ol className="reveal">
              <li>Free onsite estimate with color consultation</li>
              <li>Full prep work (sanding, patching, cleaning)</li>
              <li>Protecting your floors and furniture</li>
              <li>Clean, precise painting with durable finishes</li>
              <li>Final walkthrough with touch-ups included</li>
            </ol>

            <h2 className="reveal">Our Guarantee</h2>
            <p className="reveal">
              Nothing matters more to us than your satisfaction. That’s why
              every painting project we take on is backed by our 100%
              satisfaction guarantee. If something’s not right, we’ll fix it —
              no runaround, no stress. From the first brushstroke to the final
              walkthrough, we’re committed to delivering results you’ll feel
              proud of and service you can trust.
            </p>

            <TestimonialsSwiper />

            <h2 className="reveal">
              FAQs – Holly Springs Residential Painting
            </h2>
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

            <h2 className="reveal">Let’s Paint Something Beautiful</h2>
            <p className="reveal">
              Whether you’re prepping to sell or just refreshing your space,
              D&amp;R Painting Inc. is your trusted partner in Holly Springs.
              Request your free estimate today and see why so many local
              homeowners recommend us.
            </p>

            <Link to="/contact" className="hero-button primary reveal">
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>
      <ServiceAreas />
    </>
  );
}
