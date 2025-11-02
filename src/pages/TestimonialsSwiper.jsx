// import React, { useEffect } from "react";
// import testimonials from "../config/testimonials";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import useRevealOnScroll from "../components/useRevealOnScroll";

// export default function TestimonialsSwiper() {
//   useRevealOnScroll();

//   // ✅ Dynamically load Swiper CSS only when this component mounts
//   useEffect(() => {
//     import("swiper/css");
//     import("swiper/css/pagination");
//   }, []);

//   return (
//     <section className="testimonials-swiper">
//       <div className="container">
//         <h2 className="reveal">★★★★★ Rated 5.0 on Google</h2>
//         <p>
//           Our clients across Raleigh, Cary, and Apex consistently rate D&R
//           Painting 5 stars for quality, professionalism, and attention to
//           detail. We take pride in treating every home as if it were our own —
//           that’s why homeowners trust us year after year.
//         </p>

//         <Swiper
//           modules={[Pagination, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={1}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 8000 }}
//           loop={true}
//           breakpoints={{
//             1024: { slidesPerView: 3 },
//             768: { slidesPerView: 2 },
//             0: { slidesPerView: 1 },
//           }}
//         >
//           {testimonials.map((review, index) => (
//             <SwiperSlide key={index}>
//               <div className="testimonial-slide">
//                 <p className="quote reveal">“{review.quote}”</p>
//                 <span className="meta reveal">
//                   {Array(review.rating).fill("★").join("")} — {review.name}
//                 </span>
//                 <br />
//                 <a
//                   href={review.url}
//                   className="review-link reveal"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Read Full Review →
//                 </a>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* ✅ Google Review Button */}
//       <div className="center-button reveal">
//         <a
//           href="https://g.page/r/CcjbEhOcE4BgEAE/review"
//           className="hero-button primary"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Leave a Review
//         </a>
//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect } from "react";
import testimonials from "../config/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaGoogle, FaTimes } from "react-icons/fa";

export default function TestimonialsSwiper() {
  const [activeReview, setActiveReview] = useState(null);

  useEffect(() => {
    import("swiper/css");
    import("swiper/css/pagination");
  }, []);

  return (
    <section className="testimonials-swiper reveal">
      <div className="testimonials-header">
        <h2>★★★★★ Rated 5.0 on Google</h2>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000 }}
        loop={true}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {testimonials.map((review, index) => (
          <SwiperSlide key={index}>
            <ReviewCard
              review={review}
              onExpand={() => setActiveReview(review)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Hidden review text for SEO and word count */}
      <div style={{ display: "none" }}>
        {testimonials.map((review, index) => (
          <p key={`hidden-${index}`}>{review.quote}</p>
        ))}
      </div>

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

      {activeReview && (
        <ReviewModal
          review={activeReview}
          onClose={() => setActiveReview(null)}
        />
      )}
    </section>
  );
}

function ReviewCard({ review, onExpand }) {
  const shortQuote =
    review.quote.split(" ").slice(0, 14).join(" ") +
    (review.quote.split(" ").length > 14 ? "..." : "");

  return (
    <div className="testimonial-slide">
      <a
        href={review.url}
        target="_blank"
        rel="noopener noreferrer"
        className="google-card-icon"
        aria-label="Read full review on Google"
      >
        <FaGoogle />
      </a>

      <p className="quote">“{shortQuote}”</p>
      <span className="meta">
        {"★".repeat(review.rating)} — {review.name}
      </span>

      {review.quote.split(" ").length > 14 && (
        <button onClick={onExpand} className="expand-button">
          Read More
        </button>
      )}
    </div>
  );
}

function ReviewModal({ review, onClose }) {
  return (
    <div className="review-modal-overlay" onClick={onClose}>
      <div className="review-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        <a
          href={review.url}
          target="_blank"
          rel="noopener noreferrer"
          className="modal-google-icon"
        >
          <FaGoogle />
        </a>

        <div className="modal-scroll">
          <p className="modal-quote">“{review.quote}”</p>
          <span className="modal-meta">
            {"★".repeat(review.rating)} — {review.name}
          </span>
        </div>
      </div>
    </div>
  );
}
