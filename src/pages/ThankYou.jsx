import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <>
      <Helmet>
        <title>Thank You | D&R Painting Inc.</title>
        <meta
          name="description"
          content="Thank you for reaching out to D&R Painting Inc. We'll be in touch shortly!"
        />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://www.drpaintinginc.com/thank-you" />
      </Helmet>
      <section className="thank-you-page">
        <div className="container">
          <h1>Thank You!</h1>
          <p>Your message has been sent. We’ll be in touch shortly.</p>
          <Link to="/" className="hero-button primary">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
