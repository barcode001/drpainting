import React from "react";
import clientInfo from "../config/clientInfo";
import Hero from "../components/Hero";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs />
    </div>
  );
}

export default Home;
