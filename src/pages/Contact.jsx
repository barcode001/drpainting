import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendEmail } from "../utils/sendEmail"; // ⬅️ You’ll create this file
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

  return (
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
  );
}

export default Contact;
