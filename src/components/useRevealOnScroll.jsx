// useRevealOnScroll.js
import { useEffect } from "react";

export default function useRevealOnScroll() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target); // Optional: observe once
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const timeout = setTimeout(() => {
      reveals.forEach((el) => observer.observe(el));
    }, 300); // Delay a bit to allow page to scroll to top

    return () => {
      clearTimeout(timeout);
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, []);
}
