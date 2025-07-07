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


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ConfettiEffect from "./components/ConfettiEffect";
import PrivacyPolicy from "./components/PrivacyPolicy";


// privacy toaster
import PrivacyPopup from "./components/PrivacyPopup";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ConfettiEffect />
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <PrivacyPopup />
          <Routes>
            {/* All routes render the SPA and scroll to relevant section */}
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Index />} />
            <Route path="/about" element={<Index />} />
            <Route path="/services" element={<Index />} />
            <Route path="/sales-rentals" element={<Index />} />
            <Route path="/contact" element={<Index />} />
            <Route path="/testimonials" element={<Index />} /> {/* ✅ ADD THIS */}
            <Route path="/privacy_policy" element={<PrivacyPolicy  />} /> {/* ✅ ADD THIS */}
            <Route path="/shopping-request" element={<Index />} />

            {/* 404 fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
