import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import useRevealOnScroll from "../components/useRevealOnScroll";

import img1 from "../assets/images/services-optimized/cabitnet1.webp";
import img2 from "../assets/images/services-optimized/cabitnet2.webp";
import img3 from "../assets/images/services-optimized/cabitnet4.webp";
import img4 from "../assets/images/services-optimized/kitchen1.webp";
import img5 from "../assets/images/services-optimized/kitchen3.webp";
import img6 from "../assets/images/services-optimized/cabinets.webp";
import img7 from "../assets/images/services-optimized/kitchen4.webp";
import img8 from "../assets/images/services-optimized/home1.webp";

const featuredImages = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function FeaturedProjects() {
  useRevealOnScroll();

  // ✅ Dynamically load Swiper CSS only when this component mounts
  useEffect(() => {
    import("swiper/css");
    import("swiper/css/navigation");
    import("swiper/css/pagination");
  }, []);

  return (
    <section className="featured-projects">
      <div className="container reveal">
        <h2 className="reveal">Recent Projects</h2>
        <p className="section-description reveal style-text">
          A preview of some of our latest transformations across the Triangle
          area from full-home exterior repaints to detailed cabinet refinishing
          and drywall touch-ups. Every project reflects the same care and
          attention that have made us one of Raleigh’s most trusted painting
          companies.
        </p>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          navigation
          pagination={{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 5,
          }}
          autoplay={{ delay: 8000 }}
          spaceBetween={30}
          slidesPerView={1}
          loop
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {featuredImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="project-slide">
                <img
                  src={img}
                  alt={`Project ${index + 1}`}
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="center-button reveal">
          <a href="/projects" className="hero-button primary">
            See More Projects
          </a>
        </div>
      </div>
    </section>
  );
}
