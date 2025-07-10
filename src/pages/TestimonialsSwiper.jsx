import React from "react";
import testimonials from "../config/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import useRevealOnScroll from "../components/useRevealOnScroll";

export default function TestimonialsSwiper() {
  useRevealOnScroll();
  return (
    <section className="testimonials-swiper">
      <div className="container">
        <h2 className="reveal">★★★★★ Rated 5.0 on Google</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 8000 }}
          loop={true}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {testimonials.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-slide reveal">
                <p className="quote reveal">“{review.quote}”</p>
                <span className="meta reveal">
                  {Array(review.rating).fill("★").join("")} — {review.name}{" "}
                  {/* {review.city} */}
                </span>
                <br />
                <a
                  href={review.url}
                  className="review-link reveal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Full Review →
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="center-button reveal">
        <a
          href="https://www.google.com/maps/place/D%26R+Painting+Inc./@35.1463957,-82.4992745,7z/data=!4m18!1m9!3m8!1s0x51564a97b7d7a1b:0x6080139c1312dbc8!2sD%26R+Painting+Inc.!8m2!3d35.1705075!4d-79.86097!9m1!1b1!16s%2Fg%2F11lf35j792!3m7!1s0x51564a97b7d7a1b:0x6080139c1312dbc8!8m2!3d35.1705075!4d-79.86097!9m1!1b1!16s%2Fg%2F11lf35j792?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
          className="hero-button primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          See All Google Reviews
        </a>
      </div>
    </section>
  );
}
