import React from "react";
import { Link } from "react-router-dom";
import clientInfo from "../config/clientInfo";

// import instagramLogo from "../assets/images/instagram.png";
// import facebookLogo from "../assets/images/facebook.png";
// import tiktokLogo from "../assets/images/tiktok.png";

export default function Footer() {
  const { social, businessName, contact } = clientInfo;

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-card">
          <h4>Contact</h4>
          <p>
            Serving {clientInfo.location.city}, {clientInfo.location.county},{" "}
            {clientInfo.location.state}
          </p>
          <p>{clientInfo.contact.phone}</p>
          <p>{clientInfo.contact.email}</p>
        </div>
        <div className="footer-card">
          <h4>Follow Us</h4>
          <a href="https://instagram.com/drpaintinginc" target="_blank">
            Instagram
          </a>
          <a href="https://facebook.com/drpaintinginc" target="_blank">
            Facebook
          </a>
          <a href="https://tiktok.com/@drpaintinginc" target="_blank">
            TikTok
          </a>
        </div>

        <div className="footer-card">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <p className="footer-credit">
        © {new Date().getFullYear()} D&R Painting Inc. | Built by{" "}
        <a
          href="https://theedenscode.com"
          target="_blank"
          className="edenscode-link"
        >
          EdensCode
        </a>
      </p>
    </footer>
  );
}
