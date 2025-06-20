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
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Services from "@/components/Services";
import SalesRentals from "@/components/SalesRentals";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Blogs from "@/components/Blogs";
import services from "@/components/BlogServices";
import { slugify } from "@/utils/slugify";

const Index: React.FC = () => {
  const [showBlogs, setShowBlogs] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;

      if (hash) {
        const slug = decodeURIComponent(hash).replace("#", "");
        const validSlugs = services.map((s) => slugify(s.title));

        if (validSlugs.includes(slug)) {
          setShowBlogs(true);

          setTimeout(() => {
            const el = document.querySelector(hash);
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }, 300);
        }
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Services />
      <SalesRentals />
      {/* only mount Blogs when needed */}
      {showBlogs && <Blogs />}
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
