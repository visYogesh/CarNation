
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

const Index: React.FC = () => {
  const [showBlogs, setShowBlogs] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      const h = window.location.hash;
      if (h.startsWith("#blog")) {
        setShowBlogs(true);
        // give React time to mount Blogs
        setTimeout(() => {
          document.querySelector(h)?.scrollIntoView({ behavior: "smooth" });
        }, 200);
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

