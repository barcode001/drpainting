// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
// import logoImage from "../assets/images/logo/drpaintinginc-logo.webp";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Lock scroll on mobile menu open
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//   }, [menuOpen]);

//   // Close menu and scroll to top
//   const handleLinkClick = () => {
//     setMenuOpen(false);
//     window.scrollTo(0, 0);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         {/* Logo */}
//         <Link to="/" className="logo" onClick={handleLinkClick}>
//           <img src={logoImage} alt="D&R Painting logo" width="63" height="50" />
//         </Link>

//         {/* CTA button for mobile */}
//         <Link
//           to="/contact"
//           className="mobile-quote-btn"
//           onClick={() => {
//             handleLinkClick();
//             window.gtag?.("event", "click_get_quote", {
//               event_category: "engagement",
//               event_label: "Navbar Mobile Quote",
//             });
//           }}
//         >
//           Get a Quote
//         </Link>

//         {/* Hamburger menu toggle */}
//         <button
//           className={`menu-toggle ${menuOpen ? "open" : ""}`}
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>

//         {/* Navigation links */}
//         <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//           <li>
//             <Link to="/" onClick={handleLinkClick}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" onClick={handleLinkClick}>
//               About
//             </Link>
//           </li>

//           {/* Services dropdown */}
//           <li className="dropdown">
//             <HashLink smooth to="/#services" onClick={handleLinkClick}>
//               Services ▾
//             </HashLink>
//             <ul className="dropdown-menu">
//               <li>
//                 <Link to="/services/residential" onClick={handleLinkClick}>
//                   Residential
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/services/commercial" onClick={handleLinkClick}>
//                   Commercial
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/services/cabinet-refinishing"
//                   onClick={handleLinkClick}
//                 >
//                   Cabinet Refinishing
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/services/power-washing" onClick={handleLinkClick}>
//                   Power Washing
//                 </Link>
//               </li>
//             </ul>
//           </li>

//           {/* Contact link with analytics tracking */}
//           <li>
//             <Link
//               to="/contact"
//               onClick={() => {
//                 handleLinkClick();
//                 window.gtag?.("event", "click_contact_nav", {
//                   event_category: "navigation",
//                   event_label: "Navbar Contact Link",
//                 });
//               }}
//             >
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logoImage from "../assets/images/logo/drpaintinginc-logo.webp";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHollySprings = location.pathname.startsWith("/holly-springs");
  // const isCary = location.pathname.startsWith("/cary"); // ❌ commented out for now

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const servicesPath = isHollySprings
    ? "/holly-springs-painting-company#services"
    : // : isCary
      // ? "/cary-painting-company#services"
      "/#services";

  const locationsPath = isHollySprings
    ? "/holly-springs-painting-company#service-areas"
    : // : isCary
      // ? "/cary-painting-company#service-areas"
      "/#service-areas";

  // Default/global services (Raleigh-Durham)
  const globalServices = [
    { path: "/services/residential", label: "Residential" },
    { path: "/services/commercial", label: "Commercial" },
    { path: "/services/cabinet-refinishing", label: "Cabinet Refinishing" },
    { path: "/services/power-washing", label: "Power Washing" },
  ];

  // Location-specific services
  const servicesByLocation = {
    hollySprings: [
      { path: "/holly-springs/residential-painting", label: "Residential" },
      { path: "/holly-springs/commercial-painting", label: "Commercial" },
      {
        path: "/holly-springs/cabinet-refinishing",
        label: "Cabinet Refinishing",
      },
      { path: "/holly-springs/power-washing", label: "Power Washing" },
    ],
    // cary: [
    //   { path: "/cary/residential-painting", label: "Residential" },
    //   { path: "/cary/commercial-painting", label: "Commercial" },
    //   { path: "/cary/cabinet-refinishing", label: "Cabinet Refinishing" },
    //   { path: "/cary/power-washing", label: "Power Washing" },
    // ],
  };

  // Pick which services to show
  let activeServices = globalServices;
  if (isHollySprings) activeServices = servicesByLocation.hollySprings;
  // if (isCary) activeServices = servicesByLocation.cary;

  // ✅ Dynamic paths
  const basePath = isHollySprings ? "/holly-springs" : ""; // Raleigh-Durham default

  const logoPath = basePath ? `${basePath}-painting-company` : "/";
  const aboutPath = basePath ? `${basePath}/about` : "/about";
  const contactPath = basePath ? `${basePath}/contact` : "/contact";

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to={logoPath} className="logo" onClick={handleLinkClick}>
          <img
            src={logoImage}
            alt="D&R Painting Inc. Logo"
            width="63"
            height="50"
          />
        </Link>

        {/* Mobile CTA */}
        <Link
          to={contactPath}
          className="mobile-quote-btn"
          onClick={handleLinkClick}
        >
          Get a Quote
        </Link>

        {/* Hamburger */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to={logoPath} onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to={aboutPath} onClick={handleLinkClick}>
              About
            </Link>
          </li>

          {/* Services dropdown */}
          <li className="dropdown">
            <HashLink smooth to={servicesPath} onClick={handleLinkClick}>
              Services ▾
            </HashLink>
            <ul className="dropdown-menu">
              {activeServices.map((service, i) => (
                <li key={i}>
                  <Link to={service.path} onClick={handleLinkClick}>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Locations dropdown */}
          <li className="dropdown">
            <HashLink smooth to={locationsPath} onClick={handleLinkClick}>
              Locations ▾
            </HashLink>
            <ul className="dropdown-menu">
              <li>
                <Link to="/" onClick={handleLinkClick}>
                  Raleigh-Durham
                </Link>
              </li>
              <li>
                <Link
                  to="/holly-springs-painting-company"
                  onClick={handleLinkClick}
                >
                  Holly Springs
                </Link>
              </li>
              {/* <li>
      <Link to="/cary-painting-company" onClick={handleLinkClick}>
        Cary
      </Link>
    </li> */}
            </ul>
          </li>
          <li>
            <Link to={contactPath} onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
