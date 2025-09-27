import React from "react";
import { Helmet } from "react-helmet-async";
import HollySpringsHero from "./HollySpringsHero";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "./WhyChooseUs";
import TestimonialsSwiper from "./TestimonialsSwiper";
import FeaturedProjects from "./FeaturedProjects";
import FAQ from "./FAQ";
import ServiceAreas from "../pages/ServiceAreas";
import clientInfo from "../config/clientInfo";

export default function HollySpringsHome() {
  const pageUrl = "https://drpaintinginc.com/holly-springs-painting-company";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
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
    sameAs: [
      clientInfo.social.facebook,
      clientInfo.social.instagram,
      clientInfo.social.tiktok,
    ].filter(Boolean), // removes empty links like TikTok
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
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
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
          content="https://drpaintinginc.com/assets/images/services-optimized/residental1.webp"
        />

        {/* Twitter */}
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
          content="https://drpaintinginc.com/assets/images/services-optimized/residental1.webp"
        />

        {/* Schema */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <HollySpringsHero />
      <ServicesSection locationKey="hollySprings" />
      <WhyChooseUs locationName="Holly Springs" />
      <TestimonialsSwiper />
      <FeaturedProjects />
      <FAQ locationKey="hollySprings" />
      <ServiceAreas />
    </div>
  );
}
