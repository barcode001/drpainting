import React from "react";
import clientInfo from "../config/clientInfo";

export default function HollySpringsHero() {
  const rawPhone = clientInfo?.contact?.phone || "";
  const tel = `tel:${rawPhone.replace(/\D/g, "")}`;

  return (
    <section className="hero hero--holly-springs">
      <div className="hero__image-wrapper">
        <img
          src="/holly-springs-city-1200.webp"
          srcSet="
            /holly-springs-city-600.webp 600w,
            /holly-springs-city-900.webp 900w,
            /holly-springs-city-1200.webp 1200w
          "
          sizes="(max-width: 768px) 100vw, 1200px"
          alt="Downtown Holly Springs, NC — D&R Painting Inc."
          width="1200"
          height="800"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          className="hero__image"
        />
      </div>

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
