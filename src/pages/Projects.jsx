import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import img1 from "../assets/images/services-optimized/cabitnet1.webp";
import img2 from "../assets/images/services-optimized/cabitnet3.webp";
import img3 from "../assets/images/services-optimized/cabitnet2.webp";
import img4 from "../assets/images/services-optimized/ktchen2.webp";
// Add more as needed

const projectImages = [img1, img2, img3, img4]; // Add all imported images

export default function Projects() {
  const location = useLocation();
  const canonicalUrl = `https://drpaintinginc.com${location.pathname}`;
  return (
    <>
      <Helmet>
        <title>Our Work | D&R Painting Inc.</title>
        <meta
          name="description"
          content="View past residential and commercial painting projects completed by D&R Painting Inc. across Raleigh-Durham and the Triangle area."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <section className="projects-page">
        <div className="container">
          <h1>Project Gallery</h1>
          <p className="intro-text">
            Browse through our recent painting and refinishing work.
          </p>
          <div className="image-grid">
            {projectImages.map((img, index) => (
              <div className="image-card" key={index}>
                <img src={img} alt={`Project ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
