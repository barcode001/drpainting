import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../assets/images/services/cabitnet1.jpeg";
import img2 from "../assets/images/services/cabitnet2.jpeg";
import img3 from "../assets/images/services/cabitnet4.jpeg";
import img4 from "../assets/images/services/kitchen1.jpeg";
import img5 from "../assets/images/services/kitchen3.jpeg";
import img6 from "../assets/images/services/cabinets.jpeg";
import img7 from "../assets/images/services/kitchen4.jpeg";
import img8 from "../assets/images/services/home1.jpeg";

// Replace with actual image paths or import if using Vite
const featuredImages = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function FeaturedProjects() {
  return (
    <section className="featured-projects">
      <div className="container">
        <h2>Recent Projects</h2>
        <p className="section-description">
          A preview of some of our latest transformations across the Triangle
          Area.
        </p>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          navigation
          pagination={{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 5,
          }}
          autoplay={{ delay: 4000 }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {featuredImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="project-slide">
                {img && (
                  <img src={img} alt={`Project ${index + 1}`} loading="lazy" />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="center-button">
          <a href="/projects" className="hero-button primary">
            See More Projects
          </a>
        </div>
      </div>
    </section>
  );
}
