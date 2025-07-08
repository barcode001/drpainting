import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
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
  );
}
