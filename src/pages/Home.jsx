import React from "react";
import clientInfo from "../config/clientInfo";
import Hero from "../components/Hero";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import TestimonialsSwiper from "./TestimonialsSwiper";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs />
      <TestimonialsSwiper />
    </div>
  );
}

export default Home;
