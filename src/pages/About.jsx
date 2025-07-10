import React from "react";
import aboutImage from "../assets/images/services/residental.jpeg"; // Replace with your actual image path
import useRevealOnScroll from "../components/useRevealOnScroll";

export default function About() {
  useRevealOnScroll();
  return (
    <section className="about-page">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h1 className="reveal">About Us</h1>
            <p className="reveal">
              Hi, we're <strong>Dulce and Ricardo</strong>, and we want to thank
              you for taking a moment to get to know us.
            </p>
            <p className="reveal">
              We started <strong>D&R Painting Inc.</strong> back in{" "}
              <strong>2005</strong> with a very simple idea: to do honest,
              high-quality work—treating every project as if it were for our own
              home. We’re a family-owned business, and you can feel that in
              everything we do—from the way we treat our clients, to the
              attention we give every detail, to how we care for each space.
            </p>
            <p className="reveal">
              For years, we've been proudly serving the{" "}
              <strong>Raleigh-Durham and Triangle area</strong>. What fulfills
              us the most is seeing how a fresh coat of paint can completely
              transform a space and help our clients feel even more proud of
              their home or business.
            </p>
            <p className="reveal">
              Over time, we've refined our craft—interior and exterior painting,
              cabinet refinishing, power washing… but one thing has never
              changed: our commitment. We take the time to listen, understand
              your vision, and bring it to life with care, respect, and
              responsibility.
            </p>
            <p className="reveal">
              We know hiring someone to work on your home is a big decision.
              That’s why we treat every project as if it were our own, making
              sure you feel comfortable, informed, and happy with the results.
            </p>
            <p className="reveal">
              Thank you for trusting us. We’d love the opportunity to work with
              you and bring color to your world—one space at a time.
            </p>
            <p className="reveal">
              With care,
              <br />
              <strong>Dulce & Ricardo</strong>
            </p>
          </div>

          <div className="about-image reveal">
            <img
              src={aboutImage}
              alt="Dulce and Ricardo - D&R Painting"
              loading="lazy"
              width="500"
              height="600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
