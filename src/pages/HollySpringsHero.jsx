import React from "react";
import clientInfo from "../config/clientInfo";
import hollySpringsHero from "../assets/images/holly-springs/holly-springs/holly-springs-city.png";
export default function HollySpringsHero() {
  const rawPhone = clientInfo?.contact?.phone || "";
  const tel = `tel:${rawPhone.replace(/\D/g, "")}`;
  return (
    <section
      className="hero hero--holly-springs"
      style={{ backgroundImage: `url(${hollySpringsHero})` }}
    >
      <div className="container">
        <h1>Painting Company in Holly Springs, NC</h1>
        <p>
          Interior, exterior, and cabinet painting for Holly Springs homes and
          businesses.
        </p>

        <div className="hero__actions">
          <a href="/contact" className="hero-button primary">
            Get a Free Quote
          </a>
          {rawPhone && (
            <a href={tel} className="hero-button secondary">
              Call {rawPhone}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
