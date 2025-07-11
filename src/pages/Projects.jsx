import React from "react";
import { Helmet } from "react-helmet-async";
import img1 from "../assets/images/services/cabitnet1.jpeg";
import img2 from "../assets/images/services/cabitnet3.jpeg";
import img3 from "../assets/images/services/cabitnet2.jpeg";
// Add more as needed

const projectImages = [img1, img2, img3]; // Add all imported images

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Our Work | D&R Painting Inc.</title>
        <meta
          name="description"
          content="View past residential and commercial painting projects completed by D&R Painting Inc. across Raleigh-Durham and the Triangle area."
        />
        <link rel="canonical" href="https://www.drpaintinginc.com/projects" />
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
