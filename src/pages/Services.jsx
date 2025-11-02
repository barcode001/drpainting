// import React from "react";
// import { Link } from "react-router-dom";
// import residental from "../assets/images/services-optimized/residental1.webp";
// import commercial from "../assets/images/services-optimized/comercial.webp";
// import cabinets from "../assets/images/services-optimized/cabinets.webp";
// import powerWashing from "../assets/images/services-optimized/residental.webp";
// import useRevealOnScroll from "../components/useRevealOnScroll";

// export default function Services() {
//   useRevealOnScroll();

//   return (
//     <section className="services" id="services">
//       <div className="container">
//         <h2 className="section-title reveal">Our Painting Services</h2>
//         <div className="services-grid">
//           {[
//             {
//               title: "Residential Painting",
//               description:
//                 "Brighten up your home with expert interior & exterior painting services.",
//               image: residental,
//               alt: "Residential Painting",
//               path: "/services/residential",
//             },
//             {
//               title: "Commercial Painting",
//               description:
//                 "Professional painting for offices, retail spaces, and industrial buildings.",
//               image: commercial,
//               alt: "Commercial Painting",
//               path: "/services/commercial",
//             },
//             {
//               title: "Cabinet Refinishing",
//               description:
//                 "Modernize your kitchen or bathroom with smooth, durable cabinet finishes.",
//               image: cabinets,
//               alt: "Cabinet Refinishing",
//               path: "/services/cabinet-refinishing",
//             },
//             {
//               title: "Power Washing",
//               description:
//                 "Remove dirt, mold, and grime from exterior surfaces before painting.",
//               image: powerWashing,
//               alt: "Power Washing",
//               path: "/services/power-washing",
//             },
//           ].map((service, index) => (
//             <div className="service-card" key={index}>
//               <img src={service.image} alt={service.alt} loading="lazy" />
//               <h3 className="reveal">{service.title}</h3>
//               <p className="reveal">{service.description}</p>
//               <div className="card-btn reveal">
//                 <Link to={service.path} className="hero-button secondary">
//                   <span className="visually-hidden">
//                     Learn more about {service.title}
//                   </span>
//                   <span aria-hidden="true">Learn More</span>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import React from "react";
// import { Link } from "react-router-dom";
// import residental from "../assets/images/services-optimized/residental1.webp";
// import commercial from "../assets/images/services-optimized/comercial.webp";
// import cabinets from "../assets/images/services-optimized/cabinets.webp";
// import powerWashing from "../assets/images/services-optimized/residental.webp";
// import useRevealOnScroll from "../components/useRevealOnScroll";
// import { PiHandTapLight } from "react-icons/pi";

// export default function Services() {
//   useRevealOnScroll();

//   const services = [
//     {
//       title: "Residential Painting",
//       description:
//         "Brighten up your home with expert interior & exterior painting services.",
//       image: residental,
//       alt: "Residential Painting in Raleigh",
//       path: "/services/residential",
//       backText: `Our residential painting services in Raleigh, Cary, and Apex are designed to protect and refresh your home inside and out. From detailed prep work to premium Sherwin-Williams and Benjamin Moore paints, we ensure clean lines, smooth finishes, and lasting color. Whether it's interior or exterior painting, we take care of every detail — from start to final walkthrough.`,
//     },
//     {
//       title: "Commercial Painting",
//       description:
//         "Professional painting for offices, retail spaces, and industrial buildings.",
//       image: commercial,
//       alt: "Commercial Painting in Cary",
//       path: "/services/commercial",
//       backText: `We provide high-quality commercial painting across Raleigh, Cary, and Holly Springs. Our experienced team works efficiently to minimize downtime and deliver durable, long-lasting finishes for offices, retail spaces, and multi-unit properties. We use low-odor, fast-drying coatings for clean results that reflect your business’s professionalism and brand.`,
//     },
//     {
//       title: "Cabinet Refinishing",
//       description:
//         "Modernize your kitchen or bathroom with smooth, durable cabinet finishes.",
//       image: cabinets,
//       alt: "Cabinet Refinishing in Apex",
//       path: "/services/cabinet-refinishing",
//       backText: `Transform your kitchen or bathroom with professional cabinet refinishing. Our Raleigh cabinet painters remove grease, sand surfaces, and apply industrial-grade coatings for a smooth, modern finish that lasts. Choose from elegant color updates, durable lacquers, and satin finishes that look brand new — at a fraction of the cost of replacement.`,
//     },
//     {
//       title: "Power Washing",
//       description:
//         "Remove dirt, mold, and grime from exterior surfaces before painting.",
//       image: powerWashing,
//       alt: "Power Washing in Holly Springs",
//       path: "/services/power-washing",
//       backText: `Our professional power washing services in Raleigh, Cary, and Apex safely clean siding, driveways, decks, and fences. We use commercial-grade equipment to remove dirt, mildew, and stains — restoring curb appeal and preparing surfaces for painting. A clean surface ensures your new paint bonds better and lasts longer in North Carolina’s humid climate.`,
//     },
//   ];

//   return (
//     <section className="services" id="services">
//       <div className="container">
//         <h2 className="section-title reveal">Our Painting Services</h2>
//         <div className="services-grid">
//           {services.map((service, index) => (
//             <div
//               className="service-card"
//               key={index}
//               onClick={(e) => e.currentTarget.classList.toggle("flipped")}
//             >
//               <div className="card-inner">
//                 {/* FRONT */}
//                 <div className="card-front">
//                   <img src={service.image} alt={service.alt} loading="lazy" />
//                   <h3 className="reveal">{service.title}</h3>
//                   <p className="reveal">{service.description}</p>
//                   <div className="card-btn hero-button">
//                     <div className="tap-hint">
//                       <PiHandTapLight className="tap-icon" />
//                       <span>Tap to Learn More</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* BACK */}
//                 <div className="card-back">
//                   <h3>{service.title}</h3>
//                   <p>{service.backText}</p>
//                   <Link to={service.path} className="hero-button primary">
//                     Learn More →
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import residental from "../assets/images/services-optimized/residental1.webp";
// import commercial from "../assets/images/services-optimized/comercial.webp";
// import cabinets from "../assets/images/services-optimized/cabinets.webp";
// import powerWashing from "../assets/images/services-optimized/residental.webp";
// import useRevealOnScroll from "../components/useRevealOnScroll";
// import { PiHandTapLight } from "react-icons/pi";

// export default function Services() {
//   useRevealOnScroll();

//   // ✅ Added flipping logic
//   const [flippedIndex, setFlippedIndex] = useState(null);
//   const handleFlip = (index) => {
//     setFlippedIndex(flippedIndex === index ? null : index);
//   };

//   const services = [
//     {
//       title: "Residential Painting",
//       description:
//         "Brighten up your home with expert interior & exterior painting services.",
//       image: residental,
//       alt: "Residential Painting in Raleigh",
//       path: "/services/residential",
//       backText: `Our residential painting services in Raleigh, Cary, and Apex are designed to protect and refresh your home inside and out. From detailed prep work to premium Sherwin-Williams and Benjamin Moore paints, we ensure clean lines, smooth finishes, and lasting color. Whether it's interior or exterior painting, we take care of every detail — from start to final walkthrough.`,
//     },
//     {
//       title: "Commercial Painting",
//       description:
//         "Professional painting for offices, retail spaces, and industrial buildings.",
//       image: commercial,
//       alt: "Commercial Painting in Cary",
//       path: "/services/commercial",
//       backText: `We provide high-quality commercial painting across Raleigh, Cary, and Holly Springs. Our experienced team works efficiently to minimize downtime and deliver durable, long-lasting finishes for offices, retail spaces, and multi-unit properties. We use low-odor, fast-drying coatings for clean results that reflect your business’s professionalism and brand.`,
//     },
//     {
//       title: "Cabinet Refinishing",
//       description:
//         "Modernize your kitchen or bathroom with smooth, durable cabinet finishes.",
//       image: cabinets,
//       alt: "Cabinet Refinishing in Apex",
//       path: "/services/cabinet-refinishing",
//       backText: `Transform your kitchen or bathroom with professional cabinet refinishing. Our Raleigh cabinet painters remove grease, sand surfaces, and apply industrial-grade coatings for a smooth, modern finish that lasts. Choose from elegant color updates, durable lacquers, and satin finishes that look brand new — at a fraction of the cost of replacement.`,
//     },
//     {
//       title: "Power Washing",
//       description:
//         "Remove dirt, mold, and grime from exterior surfaces before painting.",
//       image: powerWashing,
//       alt: "Power Washing in Holly Springs",
//       path: "/services/power-washing",
//       backText: `Our professional power washing services in Raleigh, Cary, and Apex safely clean siding, driveways, decks, and fences. We use commercial-grade equipment to remove dirt, mildew, and stains — restoring curb appeal and preparing surfaces for painting. A clean surface ensures your new paint bonds better and lasts longer in North Carolina’s humid climate.`,
//     },
//   ];

//   return (
//     <section className="services" id="services">
//       <div className="container">
//         <h2 className="section-title reveal">Our Painting Services</h2>
//         <div className="services-grid">
//           {services.map((service, index) => (
//             <div
//               className={`service-card ${
//                 flippedIndex === index ? "flipped" : ""
//               }`}
//               key={index}
//               onClick={() => handleFlip(index)}
//             >
//               {/* FRONT */}
//               <div className="card-front">
//                 <img src={service.image} alt={service.alt} loading="lazy" />
//                 <h3>{service.title}</h3>
//                 <p>{service.description}</p>

//                 <div className="card-btn">
//                   <Link to={service.path} className="hero-button secondary">
//                     Learn More
//                   </Link>
//                 </div>

//                 {/* 👇 Tap icon in corner */}
//                 <div className="tap-icon-wrapper">
//                   <PiHandTapLight className="tap-icon" />
//                 </div>
//               </div>

//               {/* BACK */}
//               <div className="card-back">
//                 <h3>{service.title}</h3>
//                 <p>{service.backText}</p>
//                 <Link to={service.path} className="hero-button primary">
//                   View Service
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import residental from "../assets/images/services-optimized/residental1.webp";
import commercial from "../assets/images/services-optimized/comercial.webp";
import cabinets from "../assets/images/services-optimized/cabinets.webp";
import powerWashing from "../assets/images/services-optimized/residental.webp";
import useRevealOnScroll from "../components/useRevealOnScroll";
import { PiHandTapLight } from "react-icons/pi";

export default function Services() {
  useRevealOnScroll();
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const services = [
    {
      title: "Residential Painting",
      description:
        "Brighten up your home with expert interior & exterior painting services.",
      image: residental,
      alt: "Residential Painting in Raleigh",
      path: "/services/residential",
      backText: `Our residential painting services in Raleigh, Cary, and Apex are designed to protect and refresh your home inside and out. From detailed prep work to premium Sherwin Williams and Benjamin Moore paints, we ensure clean lines, smooth finishes, and lasting color. Whether it's interior or exterior painting, we take care of every detail from start to final walkthrough.`,
    },
    {
      title: "Commercial Painting",
      description:
        "Professional painting for offices, retail spaces, and industrial buildings.",
      image: commercial,
      alt: "Commercial Painting in Cary",
      path: "/services/commercial",
      backText: `We provide high-quality commercial painting across Raleigh, Cary, and Holly Springs. Our experienced team works efficiently to minimize downtime and deliver durable, long-lasting finishes for offices, retail spaces, and multi unit properties. We use low-odor, fast drying coatings for clean results that reflect your business’s professionalism and brand.`,
    },
    {
      title: "Cabinet Refinishing",
      description:
        "Modernize your kitchen or bathroom with smooth, durable cabinet finishes.",
      image: cabinets,
      alt: "Cabinet Refinishing in Apex",
      path: "/services/cabinet-refinishing",
      backText: `Transform your kitchen or bathroom with professional cabinet refinishing. Our Raleigh cabinet painters remove grease, sand surfaces, and apply industrial grade coatings for a smooth, modern finish that lasts. Choose from elegant color updates, durable lacquers, and satin finishes that look brand new at a fraction of the cost of replacement.`,
    },
    {
      title: "Power Washing",
      description:
        "Remove dirt, mold, and grime from exterior surfaces before painting.",
      image: powerWashing,
      alt: "Power Washing in Holly Springs",
      path: "/services/power-washing",
      backText: `Our professional power washing services in Raleigh, Cary, and Apex safely clean siding, driveways, decks, and fences. We use commercial grade equipment to remove dirt, mildew, and stains restoring curb appeal and preparing surfaces for painting. A clean surface ensures your new paint bonds better and lasts longer in North Carolina’s humid climate.`,
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title reveal">Our Painting Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className={`service-card ${
                flippedIndex === index ? "flipped" : ""
              }`}
              key={index}
              onClick={() => handleFlip(index)}
            >
              {/* 👇 Added this wrapper */}
              <div className="card-inner">
                {/* FRONT */}
                <div className="card-front">
                  <img src={service.image} alt={service.alt} loading="lazy" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <div className="card-btn">
                    <Link to={service.path} className="hero-button secondary">
                      Learn More
                    </Link>
                  </div>

                  <div className="tap-icon-wrapper">
                    {" "}
                    <PiHandTapLight className="tap-icon" />
                  </div>
                </div>

                {/* BACK */}
                <div className="card-back">
                  <h3>{service.title}</h3>
                  <p>{service.backText}</p>
                  <Link to={service.path} className="hero-button primary">
                    View Service
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
