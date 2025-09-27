// src/config/servicesData.js
import residentialImg from "../assets/images/services-optimized/residential-holly-springs.jpg";
import commercialImg from "../assets/images/services-optimized/comercial-holly-springs.JPG";
import cabinetsImg from "../assets/images/services-optimized/cabinet-holly-springs.jpg";
import powerWashingImg from "../assets/images/services-optimized/power-washing-holly-springs.jpg"; 
// ⚠️ replace with correct power washing image later

const baseServices = {
  residential: {
    title: "Residential Painting",
    alt: "Residential Painting",
    image: residentialImg,
  },
  commercial: {
    title: "Commercial Painting",
    alt: "Commercial Painting",
    image: commercialImg,
  },
  cabinets: {
    title: "Cabinet Refinishing",
    alt: "Cabinet Refinishing",
    image: cabinetsImg,
  },
  power: {
    title: "Power Washing",
    alt: "Power Washing",
    image: powerWashingImg, // placeholder
  },
};

// Location-specific overrides
export const servicesByLocation = {
  hollySprings: [
    {
      ...baseServices.residential,
      description:
        "Transform your Holly Springs home with expert interior & exterior painting. Local painters focused on quality and care.",
      path: "/holly-springs/residential-painting",
    },
    {
      ...baseServices.commercial,
      description:
        "Reliable commercial painting in Holly Springs for offices, retail, and local businesses. Minimal disruption, maximum results.",
      path: "/holly-springs/commercial-painting",
    },
    {
      ...baseServices.cabinets,
      description:
        "Update your kitchen or bathroom cabinets in Holly Springs with smooth, durable finishes that look brand new.",
      path: "/holly-springs/cabinet-refinishing",
    },
    {
      ...baseServices.power,
      description:
        "Protect and refresh your Holly Springs property with professional power washing for siding, decks, and driveways.",
      path: "/holly-springs/power-washing",
    },
  ],
  cary: [
    {
      ...baseServices.residential,
      description:
        "Freshen up your Cary home with trusted interior & exterior painting. Serving families across the Triangle with care.",
      path: "/cary/residential-painting",
    },
    {
      ...baseServices.commercial,
      description:
        "Professional commercial painting for Cary businesses including offices, restaurants, and retail spaces.",
      path: "/cary/commercial-painting",
    },
    {
      ...baseServices.cabinets,
      description:
        "Cabinet refinishing in Cary that delivers a modern look without the cost of full replacements.",
      path: "/cary/cabinet-refinishing",
    },
    {
      ...baseServices.power,
      description:
        "Boost your Cary home’s curb appeal with safe, effective power washing for driveways, siding, and patios.",
      path: "/cary/power-washing",
    },
  ],
};