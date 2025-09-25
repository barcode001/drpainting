import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import Services from "./pages/Services";
import About from "./pages/About";
import ThankYou from "./pages/ThankYou";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Residential from "./pages/Residential";
import Commercial from "./pages/Commercial";
import CabinetRefinishing from "./pages/CabinetRefinishing";
import PowerWashing from "./pages/PowerWashing";
import HollySpringsHome from "./pages/HollySpringsHome";

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="page-wrapper">
        <div className="dr-bg">
          <div className="dr-orb dr-orb--a" />
          <div className="dr-orb dr-orb--b" />
        </div>
        <div className="dr-icons" />

        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services/residential" element={<Residential />} />
            <Route path="/services/commercial" element={<Commercial />} />
            <Route
              path="/services/cabinet-refinishing"
              element={<CabinetRefinishing />}
            />
            <Route path="/services/power-washing" element={<PowerWashing />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/holly-springs-painting-company"
              element={<HollySpringsHome />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
