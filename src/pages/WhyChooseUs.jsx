// }

import React from "react";
import { FaCheckCircle, FaClock, FaSmile, FaBroom } from "react-icons/fa";
import { Link } from "react-router-dom";

const baseBenefits = [
  {
    icon: <FaCheckCircle />,
    title: "Precision Workmanship",
    description:
      "We use premium Sherwin Williams and Benjamin Moore paints for smooth, durable finishes that last..",
  },
  {
    icon: <FaClock />,
    title: "Always On Time",
    description:
      "Our painters arrive when promised and stay on schedule no delays, no excuses.",
  },
  {
    icon: <FaSmile />,
    title: "Satisfaction Guaranteed",
    description:
      "We ensure every detail meets your expectations and won’t leave until you’re completely satisfied.",
  },
  {
    icon: <FaBroom />,
    title: "Clean & Professional",
    description:
      "We protect furniture, floors, and landscaping, and leave your home spotless after every job.",
  },
];

export default function WhyChooseUs({ locationName = "" }) {
  const heading = locationName
    ? `Why ${locationName} Homeowners Choose D&R Painting`
    : "Why Homeowners Choose D&R Painting";

  return (
    <section className="why-choose-us">
      <div className="container">
        <h2 className="reveal">{heading}</h2>
        <div className="benefits-grid">
          {baseBenefits.map((item, index) => (
            <div className="benefit-card reveal" key={index}>
              <div className="icon reveal">{item.icon}</div>
              <h3 className="reveal">{item.title}</h3>
              <p className="reveal">
                {locationName
                  ? item.description.replace(
                      "your",
                      `${locationName} homeowners'`
                    )
                  : item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="cta-button reveal">
          <Link to="/contact" className="hero-button primary">
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
