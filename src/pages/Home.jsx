import React from "react";
// import clientInfo from "../config/clientInfo";
import Hero from "../components/Hero";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import TestimonialsSwiper from "./TestimonialsSwiper";
import FeaturedProjects from "./FeaturedProjects";
import FAQ from "./FAQ";
import ServiceAreas from "./ServiceAreas";

function Home() {
  return (
    <div>
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
