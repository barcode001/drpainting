import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | D&R Painting Inc.</title>
        <meta
          name="description"
          content="Oops! The page you're looking for doesn't exist. Return to the homepage or contact us for assistance."
        />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://www.drpaintinginc.com/404" />
      </Helmet>
      <div className="not-found">
        <div className="container">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>
            Oops! The page you're looking for doesn’t exist or has been moved.
          </p>
          <Link to="/" className="back-home">
            ⬅ Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
}
