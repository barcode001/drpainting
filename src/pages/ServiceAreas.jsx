import useRevealOnScroll from "../components/useRevealOnScroll";
import React from "react";

export default function ServiceAreas() {
  useRevealOnScroll();
  return (
    <section className="service-areas reveal" id="service-areas">
      <div className="container">
        <h2>Proudly Serving</h2>
        <ul className="locations-list reveal">
          <li>Cary, NC</li>
          <li>Raleigh, NC</li>
          <li>Apex, NC</li>
          <li>Holly Springs, NC</li>
          <li>Fuquay Varina, NC</li>
        </ul>
        <p>
          Based in the Raleigh-Durham area, we bring expert painting services to
          homes and businesses across Wake County and nearby communities.
        </p>
      </div>
    </section>
  );
}
