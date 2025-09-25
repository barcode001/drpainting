// import React from "react";
// import { Helmet } from "react-helmet-async";
// import clientInfo from "../config/clientInfo";
// import Hero from "../components/Hero";
// import Services from "./Services";
// import WhyChooseUs from "./WhyChooseUs";
// import TestimonialsSwiper from "./TestimonialsSwiper";
// import FeaturedProjects from "./FeaturedProjects";
// import FAQ from "./FAQ";
// import ServiceAreas from "./ServiceAreas";

// function Home() {
//   const schemaData = {
//     "@context": "https://schema.org",
//     "@type": "PaintingService",
//     name: clientInfo.businessName,
//     image: "https://www.drpaintinginc.com/logo.jpg", // Replace if needed
//     logo: "https://www.drpaintinginc.com/logo.jpg",
//     url: "https://www.drpaintinginc.com",
//     telephone: clientInfo.contact.phone,
//     address: {
//       "@type": "PostalAddress",
//       addressLocality: clientInfo.location.city,
//       addressRegion: clientInfo.location.state,
//       addressCountry: "US",
//     },
//     areaServed: {
//       "@type": "Place",
//       name: "Raleigh-Durham and Triangle Area",
//     },
//     description:
//       "Family-owned painting company specializing in residential & commercial services, cabinet refinishing, and pressure washing.",
//     founder: {
//       "@type": "Person",
//       name: "Ricardo & Dulce",
//     },
//     foundingDate: "2005",
//     sameAs: [
//       clientInfo.social.facebook,
//       clientInfo.social.instagram,
//       clientInfo.social.tiktok,
//     ].filter(Boolean),
//   };

//   return (
//     <div>
//       <Helmet>
//         <title>
//           D&R Painting Inc | House Painters in Raleigh, Cary & Apex | Interior &
//           Exterior Painting
//         </title>
//         <meta
//           name="description"
//           content="Family-owned painting company serving Raleigh, Cary, Apex & more. Interior, exterior, cabinet refinishing & pressure washing. Get a free quote today."
//         />
//         <meta
//           name="keywords"
//           content="Painting Raleigh, Cabinet Refinishing NC, Pressure Washing, D&R Painting, Residential Painting, Commercial Painting"
//         />
//         <link rel="canonical" href="https://drpaintinginc.com" />

//         {/* Open Graph */}
//         <meta
//           property="og:title"
//           content="D&R Painting Inc. | Raleigh-Durham Painting Services"
//         />
//         <meta
//           property="og:description"
//           content="Interior & exterior painting, cabinet refinishing, and power washing across the Triangle Area. Family-owned. Free estimates!"
//         />
//         <meta property="og:url" content="https://drpaintinginc.com" />
//         <meta property="og:type" content="website" />
//         <meta
//           property="og:image"
//           content="https://drpaintinginc.com/og-image.jpg"
//         />

//         {/* Twitter Card */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content="D&R Painting Inc. | Raleigh-Durham Painting Services"
//         />
//         <meta
//           name="twitter:description"
//           content="Interior & exterior painting, cabinet refinishing, and power washing across the Triangle Area. Family-owned. Free estimates!"
//         />
//         <meta
//           name="twitter:image"
//           content="https://drpaintinginc.com/og-image.jpg"
//         />

//         {/* Schema */}
//         <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
//       </Helmet>

//       <Hero />
//       <Services />
//       <WhyChooseUs />
//       <TestimonialsSwiper />
//       <FeaturedProjects />
//       <FAQ />
//       <ServiceAreas />
//     </div>
//   );
// }

// export default Home;

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
    "@type": "HousePainter",
    name: clientInfo.businessName,
    url: "https://drpaintinginc.com/",
    telephone: "+1-919-519-1699",
    priceRange: "$$",
    image: "https://drpaintinginc.com/og-image.jpg",
    logo: "https://drpaintinginc.com/logo.jpg",
    // If you don't have a public street address, it's fine to keep city/state only.
    address: {
      "@type": "PostalAddress",
      addressLocality: clientInfo.location.city,
      addressRegion: clientInfo.location.state,
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "Place", name: "Raleigh NC" },
      { "@type": "Place", name: "Cary NC" },
      { "@type": "Place", name: "Apex NC" },
      { "@type": "Place", name: "Holly Springs NC" },
    ],
    description:
      "Family-owned house painters offering interior & exterior painting, cabinet refinishing, and pressure washing.",
    founder: [
      { "@type": "Person", name: "Ricardo" },
      { "@type": "Person", name: "Dulce" },
    ],
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
        {/* ✅ Keep title under ~60 chars */}
        <title>D&R Painting Inc | House Painters Raleigh, Cary & Apex</title>

        {/* ✅ Tight, keyworded meta description (<=155) */}
        <meta
          name="description"
          content="D&R Painting Inc—expert house painters in Raleigh, Cary & Apex. Interior & exterior painting, cabinet refinishing, pressure washing. Free quotes."
        />

        {/* (keywords are optional nowadays; harmless to keep concise) */}
        <meta
          name="keywords"
          content="house painters Raleigh, painting Cary, painting Apex, interior painting, exterior painting, cabinet refinishing, pressure washing"
        />

        {/* ✅ Canonical with trailing slash + bare domain (no www) */}
        <link rel="canonical" href="https://drpaintinginc.com/" />

        {/* ✅ Make indexability explicit */}
        <meta name="robots" content="index, follow" />

        {/* ✅ Open Graph */}
        <meta
          property="og:title"
          content="D&R Painting Inc | House Painters Raleigh, Cary & Apex"
        />
        <meta
          property="og:description"
          content="Interior & exterior painting, cabinet refinishing & pressure washing in Raleigh, Cary & Apex. Family-owned. Free estimates."
        />
        <meta property="og:url" content="https://drpaintinginc.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://drpaintinginc.com/og-image.jpg"
        />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="D&R Painting Inc | House Painters Raleigh, Cary & Apex"
        />
        <meta
          name="twitter:description"
          content="Interior & exterior painting, cabinet refinishing & pressure washing in Raleigh, Cary & Apex. Family-owned. Free estimates."
        />
        <meta
          name="twitter:image"
          content="https://drpaintinginc.com/og-image.jpg"
        />

        {/* ✅ LocalBusiness / HousePainter schema */}
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
