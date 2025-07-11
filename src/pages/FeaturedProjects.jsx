import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../assets/images/services-optimized/cabitnet1.webp";
import img2 from "../assets/images/services-optimized/cabitnet2.webp";
import img3 from "../assets/images/services-optimized/cabitnet4.webp";
import img4 from "../assets/images/services-optimized/kitchen1.webp";
import img5 from "../assets/images/services-optimized/kitchen3.webp";
import img6 from "../assets/images/services-optimized/cabinets.webp";
import img7 from "../assets/images/services-optimized/kitchen4.webp";
import img8 from "../assets/images/services-optimized/home1.webp";
import useRevealOnScroll from "../components/useRevealOnScroll";

// Replace with actual image paths or import if using Vite
const featuredImages = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function FeaturedProjects() {
  useRevealOnScroll();
  return (
    <section className="featured-projects">
      <div className="container reveal">
        <h2 className="reveal">Recent Projects</h2>
        <p className="section-description reveal">
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
          autoplay={{ delay: 8000 }}
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

        <div className="center-button reveal">
          <a href="/projects" className="hero-button primary">
            See More Projects
          </a>
        </div>
      </div>
    </section>
  );
}
