import React from "react";
import { Helmet } from "react-helmet-async";
import clientInfo from "../config/clientInfo";
import Hero from "../components/Hero";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import TestimonialsSwiper from "./TestimonialsSwiper";
import FeaturedProjects from "./FeaturedProjects";
import FAQ from "./FAQ";
import ServiceAreas from "./ServiceAreas";

function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "PaintingService",
    name: clientInfo.businessName,
    image: "https://www.drpaintinginc.com/logo.jpg", // Replace if needed
    logo: "https://www.drpaintinginc.com/logo.jpg",
    url: "https://www.drpaintinginc.com",
    telephone: clientInfo.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: clientInfo.location.city,
      addressRegion: clientInfo.location.state,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Place",
      name: "Raleigh-Durham and Triangle Area",
    },
    description:
      "Family-owned painting company specializing in residential & commercial services, cabinet refinishing, and pressure washing.",
    founder: {
      "@type": "Person",
      name: "Ricardo & Dulce",
    },
    foundingDate: "2005",
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
          D&R Painting Inc. | Residential & Commercial Painting in
          Raleigh-Durham
        </title>
        <meta
          name="description"
          content="Family-owned painting company serving Raleigh, Cary, Apex & more. Interior, exterior, cabinet refinishing & pressure washing. Get a free quote today."
        />
        <meta
          name="keywords"
          content="Painting Raleigh, Cabinet Refinishing NC, Pressure Washing, D&R Painting, Residential Painting, Commercial Painting"
        />
        <link rel="canonical" href="https://www.drpaintinginc.com" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="D&R Painting Inc. | Raleigh-Durham Painting Services"
        />
        <meta
          property="og:description"
          content="Interior & exterior painting, cabinet refinishing, and power washing across the Triangle Area. Family-owned. Free estimates!"
        />
        <meta property="og:url" content="https://www.drpaintinginc.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.drpaintinginc.com/og-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="D&R Painting Inc. | Raleigh-Durham Painting Services"
        />
        <meta
          name="twitter:description"
          content="Interior & exterior painting, cabinet refinishing, and power washing across the Triangle Area. Family-owned. Free estimates!"
        />
        <meta
          name="twitter:image"
          content="https://www.drpaintinginc.com/og-image.jpg"
        />

        {/* Schema */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Hero />
      <Services />
      <WhyChooseUs />
      <TestimonialsSwiper />
      <FeaturedProjects />
      <FAQ />
      <ServiceAreas />
    </div>
  );
}

export default Home;
