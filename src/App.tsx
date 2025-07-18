// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";

// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";
// import ConfettiEffect from "./components/ConfettiEffect";



// const queryClient = new QueryClient();

// const App = () => (
//   <HelmetProvider>
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <ConfettiEffect />
//         <Toaster />
//         <Sonner />
//         <BrowserRouter>
//           <Routes>
//             <Route path="/shopping-request" element={<Navigate to="/#sales-rentals" replace />} />
//             <Route path="/" element={<Index />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </BrowserRouter>
//       </TooltipProvider>
//     </QueryClientProvider>
//   </HelmetProvider>
// );

// export default App;


import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ConfettiEffect from "./components/ConfettiEffect";
import PrivacyPolicy from "./components/PrivacyPolicy";
import PrivacyPopup from "./components/PrivacyPopup";

// Import your analytics functions
import { initGA, trackPageView } from "./analytics";

const queryClient = new QueryClient();

// Component to handle GA tracking on route change
function GAListener() {
  const location = useLocation();

  useEffect(() => {
    initGA(); // Initialize GA only once
  }, []);

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null; // No UI
}

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ConfettiEffect />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <GAListener /> {/* This handles GA tracking */}
          <PrivacyPopup />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Index />} />
            <Route path="/about" element={<Index />} />
            <Route path="/services" element={<Index />} />
            <Route path="/sales-rentals" element={<Index />} />
            <Route path="/contact" element={<Index />} />
            <Route path="/testimonials" element={<Index />} />
            <Route path="/privacy_policy" element={<PrivacyPolicy />} />
            <Route path="/shopping-request" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

