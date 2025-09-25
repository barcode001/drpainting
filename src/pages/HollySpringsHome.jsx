import React from "react";
import HollySpringsHero from "./HollySpringsHero";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import TestimonialsSwiper from "./TestimonialsSwiper";
import FeaturedProjects from "./FeaturedProjects";
import FAQ from "./FAQ";
import ServiceAreas from "./ServiceAreas";

export default function HollySpringsHome() {
  return (
    <div>
      <HollySpringsHero />
      <Services />
      <WhyChooseUs />
      <TestimonialsSwiper />
      <FeaturedProjects />
      <FAQ />
      <ServiceAreas />
    </div>
  );
}
