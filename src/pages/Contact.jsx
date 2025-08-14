import React, { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { sendEmail } from "../utils/sendEmail";
import clientInfo from "../config/clientInfo";
import ServiceAreas from "./ServiceAreas";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const recaptchaRef = useRef(null);
  const [captchaToken, setCaptchaToken] = useState(null);
  const form = useRef();
  const navigate = useNavigate();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const [formLoadTime] = useState(Date.now()); // 🕒 Bot detection

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    const formData = new FormData(form.current);

    // 🕵️‍♂️ Honeypot trap (renamed to mislead bots)
    const honeypot = formData.get("preferredColor");
    if (honeypot) {
      console.warn("Bot submission detected — honeypot triggered.");
      setSending(false);
      return;
    }

    // ⏱️ Time-based bot detection
    const timeSinceLoad = Date.now() - formLoadTime;
    if (timeSinceLoad < 2000) {
      console.warn("Form submitted too quickly — likely a bot.");
      setSending(false);
      return;
    }

    if (!captchaToken) {
      setError("Please verify you're not a robot.");
      setSending(false);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setCaptchaToken(null);
      return;
    }

    sendEmail(form)
      .then(() => {
        setSending(false);
        navigate("/thank-you");
      })
      .catch(() => {
        setSending(false);
        setError("Something went wrong. Please try again.");
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        setCaptchaToken(null);
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
              <input type="text" name="name" placeholder="Full Name" required />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
              <input type="tel" name="phone" placeholder="Phone Number" />
              <select name="project_type" required>
                <option value="">Select Project Type</option>
                <option value="Interior Residential">
                  Interior Residential
                </option>
                <option value="Exterior Residential">
                  Exterior Residential
                </option>
                <option value="Commercial Painting">Commercial Painting</option>
                <option value="Cabinet Refinishing">Cabinet Refinishing</option>
                <option value="Power Washing">Power Washing</option>
                <option value="Other">Other</option>
              </select>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>

              {/* 🕵️‍♂️ Updated Honeypot Field */}
              <input
                type="text"
                name="preferredColor"
                autoComplete="off"
                tabIndex="-1"
                style={{ position: "absolute", left: "-9999px" }}
              />

              {/* ⏱️ Submission Timestamp (for EmailJS or logs) */}
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />

              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LfsnaUrAAAAAG6HD7hpPfT8_axfNzAmDiFm0MnN"
                onChange={(token) => setCaptchaToken(token)}
                className="recaptcha"
              />

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
              <p>
                <strong>Business Hours:</strong>
                <br />
                Monday – Friday: 8:00 AM – 5:00 PM
                <br />
                Saturday: 8:00 AM – 12:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>
      <ServiceAreas />
    </>
  );
}

export default Contact;
