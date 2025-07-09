import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clientInfo from "../config/clientInfo";
import heroBg from "../assets/images/hero/hero2.png"; // Fallback image
import heroBg2 from "../assets/images/hero/hero-person1.png"; // Fallback image

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
    <section className="hero-card">
      <div className="card">
        <div className="card-image" style={{ "--bg-color": bgColors[bgIndex] }}>
          <img
            src={heroBg2}
            alt="Painter"
            className="painter"
            width="1100"
            height="500"
            loading="lazy"
          />
          <img
            src={heroBg}
            alt="Living room background"
            className="hero-bg-image"
            width="1100"
            height="500"
            loading="lazy"
          />
        </div>

        <div className="card-content">
          <h1>Bring Color to Your World</h1>
          <p>
            Expert residential & commercial painting services in Triangle Area
            Raleigh-Durham, NC
          </p>
          <div className="buttons">
            <Link to="/contact" className="hero-button primary">
              Get a Quote
            </Link>
            <a
              href={`tel:${clientInfo.contact.phone.replace(/\D/g, "")}`}
              className="hero-button al secondary"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
