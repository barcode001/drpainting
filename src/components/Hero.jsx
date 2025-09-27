import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clientInfo from "../config/clientInfo";
import heroBg from "../assets/images/hero-optimized/hero2.webp";
import heroBg2 from "../assets/images/hero-optimized/hero-person1.webp";

const bgColors = ["#f4c430", "#ff6f61", "#6ec1e4", "#81c784", "#f8b195"];

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    // Rotate background color every 4 seconds
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgColors.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-card">
      <div className="card">
        <div className="card-image" style={{ "--bg-color": bgColors[bgIndex] }}>
          <img
            src={heroBg2}
            alt="Painter"
            className="painter"
            width="600"
            height="400"
            loading="lazy"
          />
          <img
            src={heroBg}
            alt="Living room background"
            className="hero-bg-image"
            width="600"
            height="400"
            loading="lazy"
          />
        </div>

        <div className="card-content">
          <h1>
            Residential & Commercial Painting <br /> in Raleigh-Durham, NC
          </h1>
          <p className="hero-tagline">Bring Color to Your World</p>

          <div className="buttons">
            <Link
              to="/contact"
              className="hero-button primary"
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
              className="hero-button al secondary"
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
        </div>
      </div>
    </section>
  );
}
