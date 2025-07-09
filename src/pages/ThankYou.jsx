import React from "react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <section className="thank-you-page">
      <div className="container">
        <h1>Thank You!</h1>
        <p>Your message has been sent. We’ll be in touch shortly.</p>
        <Link to="/" className="hero-button primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
