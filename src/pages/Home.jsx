import React from "react";
import clientInfo from "../config/clientInfo";
import Hero from "../components/Hero";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import TestimonialsSwiper from "./TestimonialsSwiper";
import FeaturedProjects from "./FeaturedProjects";
import FAQ from "./FAQ";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs />
      <TestimonialsSwiper />
      <FeaturedProjects />
      <FAQ />
    </div>
  );
}

export default Home;
