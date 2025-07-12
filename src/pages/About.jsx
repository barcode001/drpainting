import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import clientInfo from "../config/clientInfo";
import useRevealOnScroll from "../components/useRevealOnScroll";
import ServiceAreas from "./ServiceAreas";
// import aboutImage from "../assets/images/services/residental.jpeg";

export default function About() {
  useRevealOnScroll();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "PaintingService",
    name: clientInfo.businessName,
    url: "https://www.drpaintinginc.com/about",
    telephone: clientInfo.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: clientInfo.location.city,
      addressRegion: clientInfo.location.state,
      addressCountry: "US",
    },
    description:
      "Meet Dulce and Ricardo, the family behind D&R Painting Inc.—serving Raleigh-Durham since 2005 with expert residential and commercial painting.",
    founder: {
      "@type": "Person",
      name: "Dulce & Ricardo",
    },
    foundingDate: "2005",
  };

  return (
    <>
      <Helmet>
        <title>
          About D&R Painting Inc. | Trusted Raleigh-Durham Painters Since 2005
        </title>
        <meta
          name="description"
          content="Get to know Dulce & Ricardo, owners of D&R Painting Inc. — a family-owned painting company serving Raleigh, Cary, Apex, and the entire Triangle area with expert residential and commercial painting since 2005."
        />
        <meta
          name="keywords"
          content="About D&R Painting, Raleigh painters, Cary painting company, Apex NC painters, Triangle area painting, family-owned painters, Dulce and Ricardo"
        />
        <link rel="canonical" href="https://www.drpaintinginc.com/about" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="About D&R Painting Inc. | Trusted Raleigh-Durham Painters Since 2005"
        />
        <meta
          property="og:description"
          content="Learn the story of Dulce & Ricardo and how they built D&R Painting Inc. to serve Raleigh, Cary & the Triangle area with honest, quality work."
        />
        <meta property="og:url" content="https://www.drpaintinginc.com/about" />
        <meta
          property="og:image"
          content="https://www.drpaintinginc.com/logo.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About D&R Painting Inc. | Trusted Raleigh-Durham Painters Since 2005"
        />
        <meta
          name="twitter:description"
          content="Meet the owners of D&R Painting Inc., a family-run painting service helping transform homes and businesses across Raleigh-Durham since 2005."
        />
        <meta
          name="twitter:image"
          content="https://www.drpaintinginc.com/logo.jpg"
        />

        {/* Schema.org */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <section className="about-page">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h1 className="reveal">About Us</h1>
              <p className="reveal">
                Hi, we're <strong>Dulce and Ricardo</strong>, and we want to
                thank you for taking a moment to get to know us.
              </p>
              <p className="reveal">
                We started <strong>D&R Painting Inc.</strong> back in{" "}
                <strong>2005</strong> with a very simple idea: to do honest,
                high-quality work—treating every project as if it were for our
                own home. We’re a family-owned business, and you can feel that
                in everything we do—from the way we treat our clients, to the
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
                Over time, we've refined our craft—interior and exterior
                painting, cabinet refinishing, power washing… but one thing has
                never changed: our commitment. We take the time to listen,
                understand your vision, and bring it to life with care, respect,
                and responsibility.
              </p>
              <p className="reveal">
                We know hiring someone to work on your home is a big decision.
                That’s why we treat every project as if it were our own, making
                sure you feel comfortable, informed, and happy with the results.
              </p>
              <p className="reveal">
                Thank you for trusting us. We’d love the opportunity to work
                with you and bring color to your world—one space at a time.
              </p>
              <p className="reveal">
                With care,
                <br />
                <strong>Dulce & Ricardo</strong>
              </p>

              <Link to="/contact" className="hero-button primary reveal">
                Get a Free Quote
              </Link>
            </div>

            {/* Optional image block */}
            {/* <div className="about-image reveal">
              <img
                src={aboutImage}
                alt="Dulce and Ricardo - D&R Painting"
                loading="lazy"
                width="500"
                height="600"
              />
            </div> */}
          </div>
        </div>
      </section>
      <ServiceAreas />
    </>
  );
}
