import React, { useState } from "react";
import residentialImage from "../assets/images/services-optimized/kitchen1.webp";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useRevealOnScroll from "../components/useRevealOnScroll";
import ServiceAreas from "./ServiceAreas";
import TestimonialsSwiper from "./TestimonialsSwiper";

export default function Residential() {
  useRevealOnScroll();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you offer free estimates?",
      answer: (
        <>
          Yes! Every residential painting project begins with a free,
          no-obligation quote from one of our professional painters. We’ll visit
          your home, inspect the surfaces, measure accurately, and discuss your
          goals in detail. You’ll receive a clear, written estimate that
          outlines all preparation, labor, and materials. We believe
          transparency builds trust, so there are never hidden fees or surprises
          just honest communication from start to finish.
        </>
      ),
    },
    {
      question: "How much does residential painting cost?",
      answer: (
        <>
          The cost of a painting project depends on your home’s size, condition,
          and the products you choose. We always provide detailed, written
          estimates before work begins so you know exactly what’s included. Our
          team can also suggest cost saving options, such as repainting only
          high-traffic areas or focusing on the most weathered exterior sides.
          Whether it’s a small refresh or a full home repaint, you’ll get expert
          guidance on the best value for your investment.
        </>
      ),
    },
    {
      question: "What’s the best time of year to paint?",
      answer: (
        <>
          In North Carolina, the best time to paint exteriors is typically
          spring or fall, when temperatures are mild and humidity levels are
          stable. Those seasons allow paint to dry evenly and bond properly to
          the surface. For interiors, painting can be done year round especially
          since we use low odor, fast drying paints that minimize disruption to
          your daily routine. No matter the season, our residential painters
          monitor weather and moisture levels to make sure every job is done
          right.
        </>
      ),
    },
    {
      question: "Can I stay home while you paint?",
      answer: (
        <>
          Absolutely. Most homeowners stay in their homes during interior
          projects. Our crew works neatly and quietly, moving furniture with
          care and sealing off work areas to reduce dust or fumes. We
          communicate daily about our schedule so you always know when and where
          we’ll be working. Many of our clients tell us they’re surprised by how
          seamless and respectful the process feels we treat your home as if it
          were our own.
        </>
      ),
    },
    {
      question: "Do you repair drywall or wood damage?",
      answer: (
        <>
          Yes, we do. Before any paint is applied, our team thoroughly inspects
          walls, trim, and wood surfaces for cracks, nail holes, or minor
          damage. We handle drywall patching, sanding, and light carpentry
          repairs as part of our prep process. Addressing these small issues
          before painting helps create a flawless, professional finish that
          lasts longer and looks better overall.
        </>
      ),
    },
    {
      question: "Are you insured and licensed?",
      answer: (
        <>
          Yes, D&amp;R Painting Inc. is fully licensed and insured in the state
          of North Carolina. We maintain general liability insurance and
          workers’ compensation coverage to protect both our customers and our
          team. We’re also EPA Lead Safe Certified for homes built before 1978,
          ensuring that every project meets strict safety and environmental
          standards. Hiring a licensed, insured contractor means your investment
          and property are protected at every step.
        </>
      ),
    },
    {
      question: "Do you work with HOA color restrictions?",
      answer: (
        <>
          Yes, We regularly handle painting projects for neighborhoods and
          communities with HOA color guidelines throughout Raleigh, Cary, Apex,
          and Holly Springs. Our team can assist you in reviewing approved color
          palettes, preparing documentation for HOA approval, and matching
          existing colors perfectly if you’re required to maintain a specific
          look. We make the process simple and stress-free so your project stays
          compliant and beautiful.
        </>
      ),
    },
    {
      question: "Do you offer color consultation?",
      answer: (
        <>
          Definitely, Choosing the right paint color can be overwhelming, so we
          offer personalized color consultations to help you find shades that
          fit your home’s lighting, style, and architecture. Our painters can
          apply sample swatches, discuss how tones will appear in natural and
          interior light, and recommend durable, fade resistant finishes from
          trusted brands like Sherwin Williams and Benjamin Moore. We’ll help
          you feel confident that the colors you choose will look amazing for
          years to come.
        </>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Residential Painting in Raleigh-Durham | D&R Painting Inc.
        </title>
        <meta
          name="description"
          content="Expert residential painting in Raleigh, Cary & Apex. Interior & exterior painting with precision, care, and lasting results. Free quotes!"
        />
        <link
          rel="canonical"
          href="https://drpaintinginc.com/services/residential"
        />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Residential Painting in Raleigh-Durham | D&R Painting Inc."
        />
        <meta
          property="og:description"
          content="Expert residential painting in Raleigh, Cary & Apex. Interior & exterior painting with precision, care, and lasting results."
        />
        <meta
          property="og:image"
          content="https://drpaintinginc.com/assets/images/services-optimized/kitchen1.webp"
        />
        <meta
          property="og:url"
          content="https://drpaintinginc.com/services/residential"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Residential Painting in Raleigh-Durham | D&R Painting Inc."
        />
        <meta
          name="twitter:description"
          content="Professional exterior and interior house painting across Raleigh, Cary, Apex & Holly Springs. Free quotes available."
        />
        <meta
          name="twitter:image"
          content="https://drpaintinginc.com/assets/images/services-optimized/kitchen1.webp"
        />

        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Residential Painting",
              name: "Residential Painting Services",
              description:
                "Professional residential painting in Raleigh, Cary & Apex. Interior and exterior house painting by licensed, insured painters with 20+ years of experience. Free quotes available.",
              provider: {
                "@type": "LocalBusiness",
                name: "D&R Painting Inc.",
                image: "https://drpaintinginc.com/og-image.jpg",
                url: "https://drpaintinginc.com/",
                telephone: "(919) 285-0959",
                priceRange: "$$",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "",
                  addressLocality: "Raleigh",
                  addressRegion: "NC",
                  postalCode: "27606",
                  addressCountry: "US",
                },
                areaServed: [
                  "Raleigh NC",
                  "Cary NC",
                  "Apex NC",
                  "Holly Springs NC",
                  "Durham NC",
                  "Fuquay-Varina NC",
                  "Morrisville NC",
                ],
                sameAs: [
                  "https://www.facebook.com/drpaintinginc",
                  "https://www.instagram.com/drpaintinginc",
                ],
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Painting Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Interior Painting",
                      description:
                        "Interior house painting including walls, ceilings, trim, and cabinet refinishing.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Exterior Painting",
                      description:
                        "Exterior house painting and staining for siding, brick, trim, decks, and fences.",
                    },
                  },
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Do you offer free estimates?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we provide free, no-obligation estimates for all residential painting projects. Our team visits your home to inspect, measure, and discuss your goals before giving a clear written quote.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does residential painting cost?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Pricing depends on your home’s size, surface condition, and chosen materials. Every quote includes a detailed breakdown of labor and materials so you know exactly what’s included.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What’s the best time of year to paint?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In North Carolina, spring and fall are ideal for exterior painting thanks to mild temperatures and lower humidity. Interior painting can be done year-round using our low-odor, quick-drying paints.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I stay home while you paint?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, most clients stay home during interior work. We carefully move furniture, protect floors, and seal off work areas to minimize disruption. We also keep you informed daily about progress and scheduling.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you repair drywall or wood damage?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. Before painting, we inspect for nail holes, cracks, or damaged wood. Our team handles patching, sanding, and minor carpentry repairs to ensure a smooth, professional finish.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are you insured and licensed?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "D&R Painting Inc. is fully licensed and insured in North Carolina, carrying both liability and workers’ compensation coverage. We are also EPA Lead-Safe Certified for homes built before 1978.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you work with HOA color restrictions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we frequently work with HOAs in Raleigh, Cary, Apex, and Holly Springs. Our team helps review approved color palettes and prepare documentation for fast HOA approvals.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer color consultation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we provide personalized color consultations to help you choose shades that complement your lighting, architecture, and décor. We use premium paints from Sherwin-Williams and Benjamin Moore.",
                  },
                },
              ],
            },
          ])}
        </script>
      </Helmet>

      <section className="service-detail">
        <div className="container">
          <div className="text-section">
            <h1 className="reveal">Residential Painting</h1>

            <p className="reveal">
              Transform your home with a fresh coat of paint that brings warmth,
              personality, and new life to your space. At{" "}
              <strong>D&amp;R Painting Inc.</strong>, we specialize in{" "}
              <strong>
                interior and exterior residential painting across the
                Raleigh-Durham area
              </strong>
              , including Cary, Apex, and Holly Springs. For nearly two decades,
              homeowners have trusted our family owned company for honest work,
              beautiful finishes, and lasting results.
            </p>

            <div className="image-section reveal">
              <img
                src={residentialImage}
                alt="Residential Painting Raleigh"
                width="100%"
                height="auto"
              />
            </div>

            <h2 className="reveal">A Home You’ll Love Coming Back To</h2>
            <p className="reveal">
              Painting your home isn’t just about color it’s about creating an
              environment that feels inviting, calm, and timeless. Our
              professional painters take the time to understand your vision,
              recommend color palettes, and ensure every detail meets your
              expectations. We treat every house as if it were our own,
              protecting your floors, furniture, and fixtures throughout the
              process.
            </p>

            <h2 className="reveal">Licensed, Insured & Compliant</h2>
            <p className="reveal">
              D&amp;R Painting Inc. is fully licensed and insured to operate in
              North Carolina. We follow all state and local regulations to
              ensure every residential painting project meets the highest safety
              and quality standards. Our team carries general liability and
              workers’ compensation coverage, and we’re certified in EPA
              <strong> Lead Safe Renovation (RRP)</strong> for older homes.
              You’ll always know your property is protected by professionals who
              take compliance seriously.
            </p>

            {/* ✅ NEW: Benefits Section */}
            <h2 className="reveal">
              Benefits of Professional Residential Painting
            </h2>
            <p className="reveal">
              A professional paint job does more than improve appearance it adds
              value, comfort, and protection to your property. Proper surface
              preparation and high quality coatings seal and protect walls from
              moisture, mildew, and wear. New paint can brighten dark rooms,
              modernize dated colors, and even make spaces feel larger.
            </p>
            <ul className="reveal">
              <li>Boosts curb appeal and overall home value</li>
              <li>Protects surfaces from weather, sunlight, and humidity</li>
              <li>Improves indoor air quality with low-VOC paints</li>
              <li>Reduces long term maintenance and repair costs</li>
              <li>Refreshes your home’s atmosphere and mood</li>
            </ul>

            {/* ✅ NEW: Painting Process Section */}
            <h2 className="reveal">Our Step by Step Painting Process</h2>
            <p className="reveal">
              Our painters follow a consistent, proven process to ensure every
              project runs smoothly from start to finish:
            </p>
            <ol className="reveal">
              <li>
                <strong>Consultation & Estimate:</strong> We begin with an
                on-site inspection and detailed written quote.
              </li>
              <li>
                <strong>Surface Preparation:</strong> Includes pressure washing,
                scraping, sanding, and minor repairs for a perfect base.
              </li>
              <li>
                <strong>Priming:</strong> We apply primer where needed to ensure
                even color and long lasting adhesion.
              </li>
              <li>
                <strong>Painting:</strong> Using top-quality paints from Sherwin
                Williams or Benjamin Moore, applied with precision and care.
              </li>
              <li>
                <strong>Final Walkthrough:</strong> We inspect the work with you
                to guarantee full satisfaction before calling it complete.
              </li>
            </ol>

            {/* ✅ NEW: Guarantee Section */}
            <h2 className="reveal">Our Satisfaction Guarantee</h2>
            <p className="reveal">
              Every project we complete is backed by our satisfaction guarantee.
              If you’re not fully happy with the results, we’ll make it right no
              questions asked. Our goal is to provide a painting experience
              that’s stress free, professional, and exceeds expectations. With
              our reputation built on referrals and repeat customers, your trust
              means everything to us.
            </p>

            <h2 className="reveal">Why Professional Painting Matters</h2>
            <p className="reveal">
              Hiring professional painters makes all the difference. Proper
              surface prep, durable products, and skilled application ensure
              your paint lasts for years. We prevent common DIY issues like
              uneven finishes, peeling, or visible brush marks saving you time
              and money in the long run.
            </p>

            <h2 className="reveal">Locally Owned. Family Operated.</h2>
            <p className="reveal">
              As a family owned business based in the Raleigh-Durham area, we
              believe in building long term relationships through trust,
              integrity, and hard work. Many of our clients come from referrals
              or repeat business a testament to the care we put into every
              project. We’re proud to serve our local communities and treat
              every home like family.
            </p>

            <TestimonialsSwiper />

            <h2 className="reveal">Frequently Asked Questions</h2>
            <div className="faq-section reveal">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={activeIndex === index}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon">
                      {activeIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className="faq-answer"
                    style={{
                      maxHeight: activeIndex === index ? "500px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.4s ease",
                    }}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="reveal">Ready to Refresh Your Home?</h2>
            <p className="reveal">
              Give your home the attention it deserves with Raleigh’s trusted
              residential painting experts. Whether you’re updating a single
              room or repainting your entire house, D&amp;R Painting Inc.
              delivers craftsmanship, reliability, and lasting beauty in every
              project.
            </p>
            <p className="reveal">
              <strong>
                Serving Raleigh, Cary, Apex, Holly Springs, and the surrounding
                Triangle area.
              </strong>
            </p>

            <Link to="/contact" className="hero-button primary reveal">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
      <ServiceAreas />
    </>
  );
}
