// import React from "react";
// import { Link } from "react-router-dom";
// import useRevealOnScroll from "./useRevealOnScroll";
// import { servicesByLocation } from "../config/servicesData";

// export default function ServicesSection({ locationKey }) {
//   useRevealOnScroll();
//   const services = servicesByLocation[locationKey] || [];

//   return (
//     <section className="services" id="services">
//       <div className="container">
//         <h2 className="section-title reveal">
//           Our Painting Services in {locationKey.replace(/([A-Z])/g, " $1")}
//         </h2>
//         <div className="services-grid">
//           {services.map((service, index) => (
//             <div className="service-card" key={index}>
//               <img src={service.image} alt={service.alt} loading="lazy" />
//               <h3 className="reveal">{service.title}</h3>
//               <p className="reveal">{service.description}</p>
//               <div className="card-btn reveal">
//                 <Link to={service.path} className="hero-button secondary">
//                   <span className="visually-hidden">
//                     Learn more about {service.title} in {locationKey}
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

import React, { useState } from "react";
import { Link } from "react-router-dom";
import useRevealOnScroll from "./useRevealOnScroll";
import { servicesByLocation } from "../config/servicesData";
import { PiHandTapLight } from "react-icons/pi";

export default function ServicesSection({ locationKey }) {
  useRevealOnScroll();
  // const [flippedIndex, setFlippedIndex] = useState(null);

  const services = servicesByLocation[locationKey] || [];
  // ✅ Track multiple flipped cards using object
  const [flippedStates, setFlippedStates] = useState({});

  const handleFlip = (index) => {
    setFlippedStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title reveal">
          Our Painting Services in{" "}
          {locationKey
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())
            .trim()}
        </h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${
                flippedStates[index] ? "flipped" : ""
              }`}
              onClick={() => handleFlip(index)}
            >
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

                  {/* Tap icon (bottom-right corner) */}
                  <div className="tap-icon-wrapper">
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
