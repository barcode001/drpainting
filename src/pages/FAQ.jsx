import React, { useState } from "react";
import faqs from "../config/faqs"; // We'll create this next
import useRevealOnScroll from "../components/useRevealOnScroll";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

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
              className={`faq-item  ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question reveal">{faq.question}</div>
              <div className="faq-answer reveal">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
