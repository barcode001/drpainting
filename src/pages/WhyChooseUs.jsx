import React from "react";
import { FaCheckCircle, FaClock, FaSmile, FaBroom } from "react-icons/fa";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: <FaCheckCircle />,
    title: "Precision Workmanship",
    description:
      "Every stroke matters. We deliver clean, crisp, high-quality finishes.",
  },
  {
    icon: <FaClock />,
    title: "Always On Time",
    description: "We respect your time and schedule. No delays, no excuses.",
  },
  {
    icon: <FaSmile />,
    title: "Satisfaction Guaranteed",
    description: "We’re not happy until you are — simple as that.",
  },
  {
    icon: <FaBroom />,
    title: "Clean & Professional",
    description: "We leave your space spotless, with zero mess behind.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="container">
        <h2>Why Homeowners Choose D&R Painting</h2>
        <div className="benefits-grid">
          {benefits.map((item, index) => (
            <div className="benefit-card" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="cta-button">
          <Link to="/get-quote" className="hero-button primary">
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
