import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import HollySpringsHero from "./HollySpringsHero";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "./WhyChooseUs";
import clientInfo from "../config/clientInfo";

// ✅ Lazy-load heavy, below-the-fold sections
const TestimonialsSwiper = lazy(() => import("./TestimonialsSwiper"));
const FeaturedProjects = lazy(() => import("./FeaturedProjects"));
const FAQ = lazy(() => import("./FAQ"));
const ServiceAreas = lazy(() => import("../pages/ServiceAreas"));

export default function HollySpringsHome() {
  const pageUrl = "https://drpaintinginc.com/holly-springs-painting-company";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    name: `${clientInfo.businessName} - Holly Springs`,
    image:
      "https://drpaintinginc.com/assets/images/logo/drpaintinginc-logo.webp",
    "@id": pageUrl,
    url: pageUrl,
    telephone: clientInfo.contact.phone,
    email: clientInfo.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Holly Springs",
      addressRegion: clientInfo.location.state,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Place",
      name: "Holly Springs NC and surrounding areas",
    },
    description:
      "Professional house painters in Holly Springs, NC — offering interior & exterior painting, cabinet refinishing, and pressure washing.",
    sameAs: [
      clientInfo.social.facebook,
      clientInfo.social.instagram,
      clientInfo.social.tiktok,
    ].filter(Boolean),
  };

  return (
    <div>
      <Helmet>
        <title>
          Holly Springs Painting Company | Residential & Commercial Painters
        </title>
        <meta
          name="description"
          content={`Looking for trusted painters in Holly Springs, NC? ${clientInfo.businessName} offers expert residential, commercial, cabinet refinishing & power washing services.`}
        />
        <meta
          name="keywords"
          content="Holly Springs painters, house painting Holly Springs, commercial painting Holly Springs NC, cabinet refinishing Holly Springs, power washing Holly Springs"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
        {/* ✅ Add these right here */}
        <link rel="preconnect" href="https://drpaintinginc.com" crossorigin />
        <link rel="dns-prefetch" href="https://drpaintinginc.com" />

        {/* ✅ Optional: preconnect to Google Fonts only if you're using them */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        {/* ✅ Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Holly Springs Painting Company | D&R Painting Inc."
        />
        <meta
          property="og:description"
          content="Trusted Holly Springs painters for homes & businesses. Free estimates, interior & exterior painting, cabinet refinishing, and power washing."
        />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:image"
          content="https://drpaintinginc.com/hs-image.png"
        />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Holly Springs Painting Company | D&R Painting Inc."
        />
        <meta
          name="twitter:description"
          content="Expert painting services in Holly Springs, NC — residential, commercial & cabinet refinishing. Call today for a free estimate!"
        />
        <meta
          name="twitter:image"
          content="https://drpaintinginc.com/hs-image.png"
        />

        {/* ✅ Structured Data */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* ✅ Above-the-fold content */}
      <HollySpringsHero />

      <ServicesSection locationKey="hollySprings" />
      <WhyChooseUs locationName="Holly Springs" />

      {/* ✅ Below-the-fold sections lazy-loaded for speed */}
      <Suspense fallback={<div style={{ minHeight: "200px" }} />}>
        <TestimonialsSwiper />
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: "200px" }} />}>
        <FeaturedProjects />
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: "200px" }} />}>
        <FAQ locationKey="hollySprings" />
      </Suspense>
      <section className="hero-intro">
        <p className="style-text">
          Founded in 2005, D&R Painting Inc. is a family-owned and operated
          company proudly serving Holly Springs, NC, and surrounding
          communities. For nearly two decades, we’ve helped local homeowners and
          businesses enhance their properties with professional painting
          services known for quality, reliability, and attention to detail. From
          interior walls to full exterior projects, our mission remains the same
          — to deliver lasting beauty and a flawless finish with every
          brushstroke.
        </p>
      </section>

      <Suspense fallback={<div style={{ minHeight: "200px" }} />}>
        <ServiceAreas />
      </Suspense>
    </div>
  );
}
