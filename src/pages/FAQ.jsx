import React, { useState } from "react";
import { faqsByLocation } from "../config/faqsByLocation";
import useRevealOnScroll from "../components/useRevealOnScroll";

export default function FAQ({ locationKey = "default" }) {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = faqsByLocation[locationKey] || faqsByLocation.default;

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useRevealOnScroll();

  return (
    <section className="faq-section">
      <div className="container reveal">
        <h2 className="faq-heading reveal">Frequently Asked Questions</h2>
        <div className="faq-list reveal">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
            >
              <button
                className="faq-question reveal"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </button>
              <div
                id={`faq-answer-${index}`}
                className="faq-answer reveal"
                hidden={openIndex !== index}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
