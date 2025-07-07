// import Navbar from "@/components/Navbar";
// import Home from "@/components/Home";
// import Services from "@/components/Services";
// import SalesRentals from "@/components/SalesRentals";
// import About from "@/components/About";
// import Testimonials from "@/components/Testimonials";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";
// import Blogs from "@/components/Blogs";

// const Index = () => {
//   return (
//     <div className="min-h-screen">
//       <Navbar />
//       <Home />
//       <About />
//       <Services />
//       <SalesRentals />
//       <Blogs />
//       <Testimonials />
//       <Contact />
//       <Footer />
//     </div>
//   );
// };

// export default Index;

// pages/Index.tsx
// import React, { useState, useEffect } from "react";
// import Navbar from "@/components/Navbar";
// import Home from "@/components/Home";
// import Services from "@/components/Services";
// import SalesRentals from "@/components/SalesRentals";
// import About from "@/components/About";
// import Testimonials from "@/components/Testimonials";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";
// import Blogs from "@/components/Blogs";
// import services from "@/components/BlogServices";
// import { slugify } from "@/utils/slugify";

// const Index: React.FC = () => {
//   const [showBlogs, setShowBlogs] = useState(false);

//   useEffect(() => {
//     const checkHash = () => {
//       const hash = window.location.hash;

//       if (hash) {
//         const slug = decodeURIComponent(hash).replace("#", "");
//         const validSlugs = services.map((s) => slugify(s.title));

//         if (validSlugs.includes(slug)) {
//           setShowBlogs(true);

//           setTimeout(() => {
//             const el = document.querySelector(hash);
//             if (el) {
//               el.scrollIntoView({ behavior: "smooth", block: "start" });
//             }
//           }, 300);
//         }
//       }
//     };

//     checkHash();
//     window.addEventListener("hashchange", checkHash);
//     return () => window.removeEventListener("hashchange", checkHash);
//   }, []);

//   return (
//     <div className="min-h-screen">
//       <Navbar />
//       <Home />
//       <About />
//       <Services />
//       <SalesRentals />
//       {/* only mount Blogs when needed */}
//       {showBlogs && <Blogs />}
//       <Testimonials />
//       <Contact />
//       <Footer />
//     </div>
//   );
// };

// export default Index;

// import React, { useState, useEffect } from "react";
// import Navbar from "@/components/Navbar";
// import Home from "@/components/Home";
// import Services from "@/components/Services";
// import SalesRentals from "@/components/SalesRentals";
// import About from "@/components/About";
// import Testimonials from "@/components/Testimonials";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";
// import Blogs from "@/components/Blogs";
// import services from "@/components/BlogServices";
// import { slugify } from "@/utils/slugify";

// const Index: React.FC = () => {
//   const [showBlogs, setShowBlogs] = useState(false);
//   const [initialHash, setInitialHash] = useState<string | null>(null);

//   useEffect(() => {
//     const hash = window.location.hash;
//     if (hash) {
//       const slug = decodeURIComponent(hash).replace("#", "");
//       const validSlugs = services.map((s) => slugify(s.title));

//       if (validSlugs.includes(slug)) {
//         setShowBlogs(true);
//       }

//       // Save hash for scrolling after mount
//       setInitialHash(hash);
//     }
//   }, []);

//   useEffect(() => {
//     const scrollToHash = () => {
//       if (initialHash) {
//         const el = document.querySelector(initialHash);
//         if (el) {
//           el.scrollIntoView({ behavior: "smooth", block: "start" });
//         }
//       }
//     };

//     // Delay to ensure all components including Blogs are mounted
//     setTimeout(scrollToHash, 300);
//   }, [initialHash, showBlogs]);

//   useEffect(() => {
//     const onHashChange = () => {
//       const hash = window.location.hash;
//       const el = document.querySelector(hash);
//       if (el) {
//         el.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     };

//     window.addEventListener("hashchange", onHashChange);
//     return () => window.removeEventListener("hashchange", onHashChange);
//   }, []);

//   return (
//     <div className="min-h-screen">
//       <Navbar />
//       <Home />
//       <About />
//       <Services />
//       <SalesRentals />
//       {showBlogs && <Blogs />}
//       <Testimonials />
//       <Contact />
//       <Footer />
//     </div>
//   );
// };

// export default Index;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Services from "@/components/Services";
import SalesRentals from "@/components/SalesRentals";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Blogs from "@/components/Blogs";
import services from "@/components/BlogServices";
import { slugify } from "@/utils/slugify";

const Index: React.FC = () => {
  const location = useLocation();
  const [showBlogs, setShowBlogs] = useState(false);

  useEffect(() => {
    const path = location.pathname;

    // Map pathname to element ID
    const sectionMap: Record<string, string> = {
      "/": "#home",
      "/home": "#home",
      "/about": "#about",
      "/services": "#services",
      "/sales-rentals": "#sales-rentals",
      "/contact": "#contact",
      "/testimonials": "#testimonials", // ✅ ADD THIS
      "/shopping-request": "#sales-rentals",
    };

    const target = sectionMap[path];
    if (target) {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    // Show Blogs section only if slug is present in hash (optional)
    if (location.hash) {
      const slug = decodeURIComponent(location.hash).replace("#", "");
      const validSlugs = services.map((s) => slugify(s.title));
      if (validSlugs.includes(slug)) {
        setShowBlogs(true);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Services />
      <SalesRentals />
      {showBlogs && <Blogs />}
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
