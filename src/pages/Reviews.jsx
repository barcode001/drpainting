import useRevealOnScroll from "../components/useRevealOnScroll";
import googleReviews from "config/googleReviews";

function Reviews() {
  useRevealOnScroll();
  return (
    <section className="reviews">
      <h2 className="reveal">What Our Clients Say</h2>
      {googleReviews.map((review, index) => (
        <div key={index}>
          <h4 className="reveal">
            {review.name} - ⭐ {review.rating}
          </h4>
          <p className="reveal">{review.review}</p>
          <small>{review.date}</small>
        </div>
      ))}
    </section>
  );
}
