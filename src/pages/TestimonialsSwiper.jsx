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
              <div className="testimonial-slide ">
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
      {/* Google Review Button */}
      <div className="center-button reveal">
        <a
          href="https://g.page/r/CcjbEhOcE4BgEAE/review"
          className="hero-button primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leave a Review
        </a>
      </div>
    </section>
  );
}
