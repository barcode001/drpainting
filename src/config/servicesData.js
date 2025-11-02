// // src/config/servicesData.js
// import residentialImg from "../assets/images/services-optimized/residential-holly-springs-2.webp";
// import commercialImg from "../assets/images/services-optimized/comercial-holly-springs-2.webp";
// import cabinetsImg from "../assets/images/services-optimized/cabinet-holly-springs-2.webp";
// import powerWashingImg from "../assets/images/services-optimized/power-washing-holly-springs-2-2.webp"; 
// // ⚠️ replace with correct power washing image later

// const baseServices = {
//   residential: {
//     title: "Residential Painting",
//     alt: "Residential Painting",
//     image: residentialImg,
//   },
//   commercial: {
//     title: "Commercial Painting",
//     alt: "Commercial Painting",
//     image: commercialImg,
//   },
//   cabinets: {
//     title: "Cabinet Refinishing",
//     alt: "Cabinet Refinishing",
//     image: cabinetsImg,
//   },
//   power: {
//     title: "Power Washing",
//     alt: "Power Washing",
//     image: powerWashingImg, // placeholder
//   },
// };

// // Location-specific overrides
// export const servicesByLocation = {
//   hollySprings: [
//     {
//       ...baseServices.residential,
//       description:
//         "Transform your Holly Springs home with expert interior & exterior painting. Local painters focused on quality and care.",
//       path: "/holly-springs/residential-painting",
//     },
//     {
//       ...baseServices.commercial,
//       description:
//         "Reliable commercial painting in Holly Springs for offices, retail, and local businesses. Minimal disruption, maximum results.",
//       path: "/holly-springs/commercial-painting",
//     },
//     {
//       ...baseServices.cabinets,
//       description:
//         "Update your kitchen or bathroom cabinets in Holly Springs with smooth, durable finishes that look brand new.",
//       path: "/holly-springs/cabinet-refinishing",
//     },
//     {
//       ...baseServices.power,
//       description:
//         "Protect and refresh your Holly Springs property with professional power washing for siding, decks, and driveways.",
//       path: "/holly-springs/power-washing",
//     },
//   ],
//   cary: [
//     {
//       ...baseServices.residential,
//       description:
//         "Freshen up your Cary home with trusted interior & exterior painting. Serving families across the Triangle with care.",
//       path: "/cary/residential-painting",
//     },
//     {
//       ...baseServices.commercial,
//       description:
//         "Professional commercial painting for Cary businesses including offices, restaurants, and retail spaces.",
//       path: "/cary/commercial-painting",
//     },
//     {
//       ...baseServices.cabinets,
//       description:
//         "Cabinet refinishing in Cary that delivers a modern look without the cost of full replacements.",
//       path: "/cary/cabinet-refinishing",
//     },
//     {
//       ...baseServices.power,
//       description:
//         "Boost your Cary home’s curb appeal with safe, effective power washing for driveways, siding, and patios.",
//       path: "/cary/power-washing",
//     },
//   ],
// };

import residentialImg from "../assets/images/services-optimized/residential-holly-springs-2.webp";
import commercialImg from "../assets/images/services-optimized/comercial-holly-springs-2.webp";
import cabinetsImg from "../assets/images/services-optimized/cabinet-holly-springs-2.webp";
import powerWashingImg from "../assets/images/services-optimized/power-washing-holly-springs-2-2.webp"; 


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
    image: powerWashingImg,
  },
};

// ✅ Location-specific overrides


export const servicesByLocation = {
  hollySprings: [
    {
      ...baseServices.residential,
      description:
        "Transform your Holly Springs home with expert interior & exterior painting. Local painters focused on quality and care.",
      backText: `Our residential painting services in Holly Springs bring lasting color and comfort to your home. From living rooms to exteriors, we use Sherwin-Williams paints, professional prep work, and clean finishes that stand the test of time. Whether refreshing one room or your entire home, our painters deliver smooth results and a stress-free experience from start to finish.`,
      path: "/holly-springs/residential-painting",
    },
    {
      ...baseServices.commercial,
      description:
        "Reliable commercial painting in Holly Springs for offices, retail, and local businesses. Minimal disruption, maximum results.",
      backText: `D&R Painting provides dependable commercial painting across Holly Springs for offices, retail stores, and multi-unit properties. We work around your schedule to minimize downtime and deliver clean, durable finishes that reflect your business’s professionalism. Using low-odor, quick-drying paints, our team ensures your space looks sharp and ready for business.`,
      path: "/holly-springs/commercial-painting",
    },
    {
      ...baseServices.cabinets,
      description:
        "Update your kitchen or bathroom cabinets in Holly Springs with smooth, durable finishes that look brand new.",
      backText: `Our Holly Springs cabinet refinishing service transforms kitchens and bathrooms with durable, modern finishes. We sand, prime, and apply industrial-grade coatings for a flawless result that lasts. Choose from designer colors and satin finishes to match your style — all while saving money compared to full cabinet replacement.`,
      path: "/holly-springs/cabinet-refinishing",
    },
    {
      ...baseServices.power,
      description:
        "Protect and refresh your Holly Springs property with professional power washing for siding, decks, and driveways.",
      backText: `Our power washing services in Holly Springs remove dirt, grime, and mildew from siding, decks, and concrete. Using commercial-grade equipment, we restore your home’s exterior safely and effectively. Regular pressure washing not only boosts curb appeal but also helps protect paint and surfaces from long-term wear and moisture damage.`,
      path: "/holly-springs/power-washing",
    },
  ],

  // Example: keep Cary as-is
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