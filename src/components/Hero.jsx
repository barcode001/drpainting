// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import clientInfo from "../config/clientInfo";
// import heroBg from "../assets/images/hero-optimized/hero2.webp";
// import heroBg2 from "../assets/images/hero-optimized/hero-person1.webp";

// const bgColors = ["#f4c430", "#ff6f61", "#6ec1e4", "#81c784", "#f8b195"];

// export default function Hero() {
//   const [bgIndex, setBgIndex] = useState(0);

//   useEffect(() => {
//     // Rotate background color every 4 seconds
//     const interval = setInterval(() => {
//       setBgIndex((prev) => (prev + 1) % bgColors.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="hero-card">
//       <div className="card">
//         <div className="card-image" style={{ "--bg-color": bgColors[bgIndex] }}>
//           <img
//             src={heroBg2}
//             alt="Painter"
//             className="painter"
//             width="600"
//             height="400"
//             loading="lazy"
//           />
//           <img
//             src={heroBg}
//             alt="Living room background"
//             className="hero-bg-image"
//             width="600"
//             height="400"
//             loading="lazy"
//           />
//         </div>

//         <div className="card-content">
//           <h1>
//             Residential & Commercial Painting <br /> in Raleigh-Durham, NC
//           </h1>
//           <p className="hero-tagline">Bring Color to Your World</p>
//           <p className="style-text">
//             At D&R Painting Inc., we bring more than 20 years of experience to
//             every brushstroke. From interior and exterior painting to cabinet
//             refinishing and pressure washing, our team delivers craftsmanship
//             homeowners can rely on all backed by honesty, professionalism, and
//             pride in our work.
//           </p>

//           <div className="buttons">
//             <Link
//               to="/contact"
//               className="hero-button primary"
//               onClick={() =>
//                 window.gtag?.("event", "click_get_quote", {
//                   event_category: "engagement",
//                   event_label: "Hero Get Quote Button",
//                 })
//               }
//             >
//               Get a Quote
//             </Link>

//             <a
//               href={`tel:${clientInfo.contact.phone.replace(/\D/g, "")}`}
//               className="hero-button al secondary"
//               onClick={() =>
//                 window.gtag?.("event", "click_to_call", {
//                   event_category: "engagement",
//                   event_label: "Hero Call Button",
//                 })
//               }
//             >
//               Call Now
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clientInfo from "../config/clientInfo";

// Images
import paintStroke from "../assets/images/hero/paint-stroke.webp";
import couch from "../assets/images/hero/couch.webp";
import paintBucket from "../assets/images/hero/paint-bucket.svg";
import logo from "../assets/images/hero/logo2.svg";

const bgColors = ["#f4c430", "#ff6f61", "#6ec1e4", "#81c784", "#f8b195"];

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgColors.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero-vibrant"
      style={{ backgroundColor: bgColors[bgIndex] }}
    >
      <div className="hero-inner wrapper">
        <div className="hero-content">
          <div className="paint-stroke-wrapper ">
            <img
              src={paintStroke}
              alt="Paint Stroke"
              className="paint-stroke baseline-up"
              loading="lazy"
            />
            <h1 className="hero-title reveal">
              Residential & Commercial Painting <br /> in Raleigh-Durham, NC
            </h1>
          </div>

          <p className="hero-tagline  baseline-up">Bring Color to Your World</p>

          <p className="style-text  baseline-up">
            At D&R Painting Inc., we bring more than 20 years of experience to
            every brushstroke. From interior and exterior painting to cabinet
            refinishing and pressure washing, our team delivers craftsmanship
            homeowners can rely on – all backed by honesty, professionalism, and
            pride in our work.
          </p>

          <div className="buttons  ">
            <Link
              to="/contact"
              className="hero-button primary  baseline-up"
              onClick={() =>
                window.gtag?.("event", "click_get_quote", {
                  event_category: "engagement",
                  event_label: "Hero Get Quote Button",
                })
              }
            >
              Get a Quote
            </Link>

            <a
              href={`tel:${clientInfo.contact.phone.replace(/\D/g, "")}`}
              className="hero-button secondary  baseline-up"
              onClick={() =>
                window.gtag?.("event", "click_to_call", {
                  event_category: "engagement",
                  event_label: "Hero Call Button",
                })
              }
            >
              Call Now
            </a>
          </div>

          <div className="couch-wrapper   ">
            <img
              src={couch}
              alt="Couch"
              className="hero-couch baseline-up"
              loading="lazy"
            />
          </div>
        </div>

        {/* <img
          src={paintBucket}
          alt="Paint Bucket"
          className="paint-bucket"
          loading="lazy"
        /> */}
        <div className="hero-floor"></div>
      </div>
    </section>
  );
}
