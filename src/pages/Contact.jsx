import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { sendEmail } from "../utils/sendEmail";
import clientInfo from "../config/clientInfo";

function Contact() {
  const form = useRef();
  const navigate = useNavigate();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    sendEmail(form)
      .then(() => {
        setSending(false);
        navigate("/thank-you");
      })
      .catch(() => {
        setSending(false);
        setError("Something went wrong. Please try again.");
      });
  };

  const pageUrl = "https://www.drpaintinginc.com/contact";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "PaintingService",
      name: clientInfo.businessName,
      telephone: clientInfo.contact.phone,
      email: clientInfo.contact.email,
      areaServed: {
        "@type": "Place",
        name: clientInfo.location.city,
      },
      url: pageUrl,
    },
  };

  return (
    <>
      <Helmet>
        <title>Contact D&R Painting Inc. | Get a Free Quote Today</title>
        <meta
          name="description"
          content="Reach out to D&R Painting Inc. for a free quote or any questions about our residential and commercial painting services in Raleigh-Durham, NC."
        />
        <meta
          name="keywords"
          content="Contact Painter Raleigh, Free Painting Quote, Painting Services NC, Interior Exterior Painting, Cabinet Refinishing"
        />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Contact D&R Painting Inc. | Get a Free Quote Today"
        />
        <meta
          property="og:description"
          content="Get in touch with D&R Painting Inc. — family-owned painting professionals in Raleigh-Durham offering free quotes."
        />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:image"
          content="https://www.drpaintinginc.com/logo.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact D&R Painting Inc. | Free Estimates in Raleigh-Durham"
        />
        <meta
          name="twitter:description"
          content="Have a question or need a quote? Reach out to the D&R Painting Inc. team today!"
        />
        <meta
          name="twitter:image"
          content="https://www.drpaintinginc.com/logo.jpg"
        />

        {/* Schema Markup */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <section className="contact-page">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>
            Have a question or want a quote? Reach out and we’ll get back to you
            shortly.
          </p>

          <div className="contact-grid">
            <form className="contact-form" ref={form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
              />
              <input
                type="tel"
                name="user_phone"
                placeholder="Phone Number"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
              <button
                type="submit"
                className="hero-button primary"
                disabled={sending}
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
              {error && <p className="form-error">{error}</p>}
            </form>

            <div className="contact-info">
              <h3>Contact Info</h3>
              <p>
                <strong>Phone:</strong> {clientInfo.contact.phone}
              </p>
              <p>
                <strong>Email:</strong> {clientInfo.contact.email}
              </p>
              <p>
                <strong>Service Area:</strong> {clientInfo.location.city},{" "}
                {clientInfo.location.state}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
