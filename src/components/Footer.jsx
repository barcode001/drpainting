// import React from "react";
// import { Link } from "react-router-dom";
// import clientInfo from "../config/clientInfo";
// import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
// import { HashLink } from "react-router-hash-link";

// export default function Footer() {
//   const year = new Date().getFullYear();
//   const { location, contact } = clientInfo;

//   return (
//     <footer className="footer">
//       <div className="footer-inner">
//         <p className="credit">
//           Designed by{" "}
//           <a href="https://theedenscode.com" target="_blank">
//             EdensCode
//           </a>
//         </p>

//         <nav className="footer-links">
//           <Link to="/">Home</Link>
//           <HashLink to="/#services">Services</HashLink>
//           <Link to="/projects">Portfolio</Link>
//           <Link to="/about">About</Link>
//           <Link to="/contact">Contact</Link>
//         </nav>

//         <div className="footer-socials">
//           <a
//             href="https://www.instagram.com/d.r.painting.inc"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Visit our Instagram page"
//           >
//             <FaInstagram />
//           </a>
//           <a
//             href="https://www.facebook.com/people/DR-Painting-Inc/61562794095060/"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Visit our Facebook page"
//           >
//             <FaFacebookF />
//           </a>
//           <a
//             href="https://tiktok.com/@drpaintinginc"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Visit our TikTok page"
//           >
//             <FaTiktok />
//           </a>
//         </div>

//         <p className="copyright">{year} © All Rights Reserved</p>
//       </div>
//     </footer>
//   );
// }

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import clientInfo from "../config/clientInfo";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  const location = useLocation();

  // detect which location page user is on
  const isHollySprings = location.pathname.startsWith("/holly-springs");
  const isCary = location.pathname.startsWith("/cary");

  // dynamic base path
  const basePath = isHollySprings ? "/holly-springs" : isCary ? "/cary" : "";

  const homePath = basePath ? `${basePath}-painting-company` : "/";
  const servicesPath = basePath
    ? `${basePath}-painting-company#services`
    : "/#services";
  const aboutPath = basePath ? `${basePath}/about` : "/about";
  const contactPath = basePath ? `${basePath}/contact` : "/contact";
  const projectsPath = basePath ? `${basePath}/projects` : "/projects";

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="credit">
          Designed by{" "}
          <a
            href="https://theedenscode.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            EdensCode
          </a>
        </p>

        {/* Footer nav links */}
        <nav className="footer-links">
          <Link to={homePath}>Home</Link>
          <HashLink smooth to={servicesPath}>
            Services
          </HashLink>
          <Link to={projectsPath}>Portfolio</Link>
          <Link to={aboutPath}>About</Link>
          <Link to={contactPath}>Contact</Link>
        </nav>

        {/* Social links */}
        <div className="footer-socials">
          <a
            href="https://www.instagram.com/d.r.painting.inc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram page"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/people/DR-Painting-Inc/61562794095060/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://tiktok.com/@drpaintinginc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our TikTok page"
          >
            <FaTiktok />
          </a>
        </div>

        <p className="copyright">{year} © All Rights Reserved</p>
      </div>
    </footer>
  );
}
