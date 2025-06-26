// import { useTypewriter, Cursor } from "react-simple-typewriter";
// import { Check, Star, Phone, MapPin, Clock } from "lucide-react";
// import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
// import { Helmet } from "react-helmet-async";

// const cardImages = [
//   "/images/card0.png",
//   "/images/brands.png",
//   "/images/dum.png",
// ];

// const Home = () => {
//   const [text] = useTypewriter({
//     words: [
//       "Precision & Honesty",
//       "Trusted Auto Repair",
//       "Elite Customer Experience",
//       "Your Car's Best Friend",
//       "Automotive Excellence",
//     ],
//     loop: true,
//     typeSpeed: 100,
//     deleteSpeed: 50,
//     delaySpeed: 2000,
//   });

//   return (
//     <section
//       id="home"
//       className="relative text-black pt-16 sm:pt-[6px] scroll-mt-28 min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50"
//     >
//       {/* 🌐 SEO Helmet & Structured Data */}
//       <Helmet>
//         <title>CarNation Elite - Auto Repair in Dallas, TX</title>
//         <meta
//           name="description"
//           content="Premium auto repair services in Dallas. Schedule your appointment today with CarNation Elite — your trusted local mechanic for luxury vehicles, best car reparir, best car service, near me, best car service, in dallas, best auto repair in dallas, car nation, car service, engine, oil change, general service, best, friendly, trusted auto repair in dallas, CarNation Elite"
//         />
//         <meta
//           name="keywords"
//           content="best car reparir, best car service, near me, best car service, in dallas, best auto repair in dallas, car nation, car service, engine, oil change, general service, best, friendly, trusted auto repair in dallas, CarNation Elite, auto repair, car repair Dallas, mechanic near me, Dallas auto repair, luxury car service, brake service, oil change Dallas"
//         />
//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "AutoRepair",
//             name: "CarNation Elite",
//             image: "https://carnationelite.com/images/elite.png",
//             address: {
//               "@type": "PostalAddress",
//               streetAddress: "13610 Floyd Circle",
//               addressLocality: "Dallas",
//               addressRegion: "TX",
//               postalCode: "75243",
//               addressCountry: "US",
//             },
//             telephone: "+1-214-597-4922",
//             url: "https://carnationelite.com",
//             openingHours: "Mo-Sa 09:00-17:00",
//             sameAs: [
//               "https://www.facebook.com/CarNationElite",
//               "https://www.instagram.com/CarNationElite",
//             ],
//             priceRange: "$$",
//           })}
//         </script>
//       </Helmet>

//       {/* 🎯 Hero Title Section - Top */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="text-center space-y-8">
//           {/* Main Title with Enhanced Animation */}
//           <div className="relative">
//             <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-lg blur-2xl opacity-20 animate-pulse"></div>
//             <h1 className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight font-black tracking-tight">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
//                 Dallas Auto Repair,
//               </span>
//               <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 bg-clip-text text-transparent py-4 animate-pulse">
//                 {text}
//                 <Cursor cursorStyle="|" />
//               </span>
//             </h1>
//           </div>

//           {/* Enhanced Description */}
//           <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed max-w-5xl mx-auto font-light">
//             Experience <span className="font-bold text-purple-600">honest</span>
//             ,<span className="font-bold text-blue-600"> high-quality</span>{" "}
//             automotive repair services with
//             <span className="font-bold text-green-600">
//               {" "}
//               fast turnaround
//             </span>{" "}
//             and friendly service.
//           </p>

//           {/* Quick Stats */}
//           <div className="flex flex-wrap justify-center gap-8 pt-6">
//             <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-purple-200">
//               <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
//               <span className="font-bold text-gray-800">5.0 Rating</span>
//             </div>
//             <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-blue-200">
//               <MapPin className="w-5 h-5 text-blue-600" />
//               <span className="font-bold text-gray-800">Dallas, TX</span>
//             </div>
//             <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-green-200">
//               <Clock className="w-5 h-5 text-green-600" />
//               <span className="font-bold text-gray-800">Same Day Service</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 🎯 Main Content Section */}
//       <div className="container mx-auto px-4 pb-16">
//         <div className="grid lg:grid-cols-2 gap-16 items-start">
//           {/* Left Content - Features & Quote */}
//           <div className="space-y-10">
//             {/* Premium Features */}
//             <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200 hover:shadow-purple-500/20 transition-all duration-500">
//               <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//                 Why Choose CarNation Elite?
//               </h3>
//               <div className="space-y-6">
//                 {[
//                   {
//                     text: "Certified mechanics specializing in luxury auto repair",
//                     icon: "🔧",
//                     color: "text-purple-600",
//                   },
//                   {
//                     text: "Complimentary Wi-Fi & Premium Waiting Area",
//                     icon: "🚀",
//                     color: "text-blue-600",
//                   },
//                   {
//                     text: "Transparent Pricing & Complimentary Refreshments",
//                     icon: "☕",
//                     color: "text-green-600",
//                   },
//                 ].map((feature, i) => (
//                   <div
//                     key={i}
//                     className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
//                   >
//                     <div className="flex-shrink-0">
//                       <Check
//                         className={`w-7 h-7 ${feature.color} bg-white rounded-full p-1 shadow-md`}
//                       />
//                     </div>
//                     <div>
//                       <span className="text-xl font-medium text-gray-800">
//                         {feature.icon} {feature.text}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Enhanced Quote Box */}
//             <div className="relative group">
//               <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
//               <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-8 shadow-2xl">
//                 <div className="absolute top-4 left-4 text-6xl text-purple-400 opacity-20">
//                   "
//                 </div>
//                 <p className="text-xl md:text-2xl leading-relaxed pl-8 pr-4">
//                   At{" "}
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">
//                     CarNation Elite
//                   </span>
//                   , we deliver{" "}
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 font-bold">
//                     trusted auto repair
//                   </span>{" "}
//                   with{" "}
//                   <span className="font-bold text-yellow-300">honesty</span>,{" "}
//                   <span className="font-bold text-blue-300">precision</span> and{" "}
//                   <span className="font-bold text-green-300">speed</span> —
//                   keeping Dallas drivers confident and cared for.
//                 </p>
//                 <div className="absolute bottom-4 right-4 text-6xl text-blue-400 opacity-20 rotate-180">
//                   "
//                 </div>
//               </div>
//             </div>

//             {/* Enhanced Ratings */}
//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200">
//               <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
//                 <div className="flex items-center space-x-3">
//                   <div className="flex space-x-1">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className="w-6 h-6 fill-yellow-400 text-yellow-400 animate-pulse"
//                         style={{ animationDelay: `${i * 0.1}s` }}
//                       />
//                     ))}
//                   </div>
//                   <span className="text-xl font-bold text-gray-800">
//                     5.0 Perfect Rating
//                   </span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
//                     500+
//                   </span>
//                   <span className="text-lg font-semibold text-gray-700">
//                     Happy Customers
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Contact & Image Cards */}
//           <div className="space-y-10">
//             {/* Ultra Eye-Catching Contact Section */}
//             <div className="relative group">
//               <div className="absolute -inset-2 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
//               <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-2 border-transparent bg-clip-padding">
//                 <div className="text-center space-y-6">
//                   <div className="relative">
//                     <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-2">
//                       🚗 GET INSTANT SERVICE
//                     </h3>
//                     <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
//                   </div>

//                   {/* Mega Phone Number */}
//                   <div className="relative group/phone">
//                     <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-75 group-hover/phone:opacity-100 transition duration-300"></div>
//                     <a
//                       href="tel:+12145974922"
//                       className="relative block bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-6 hover:scale-105 transform transition-all duration-300 shadow-2xl"
//                     >
//                       <div className="flex items-center justify-center space-x-4">
//                         <Phone className="w-8 h-8 animate-bounce" />
//                         <div>
//                           <span className="text-3xl md:text-4xl font-black tracking-wider">
//                             (214) 597-4922
//                           </span>
//                           <p className="text-lg font-medium opacity-90 mt-1">
//                             📞 Call NOW for Same-Day Service!
//                           </p>
//                         </div>
//                       </div>
//                     </a>
//                   </div>

//                   {/* Premium Social Media */}
//                   <div className="space-y-4">
//                     <div className="flex items-center justify-center space-x-2">
//                       <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-purple-500"></div>
//                       <p className="text-xl font-bold text-gray-700">
//                         Connect With Us
//                       </p>
//                       <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-purple-500"></div>
//                     </div>

//                     <div className="flex justify-center space-x-6">
//                       <a
//                         href="https://wa.me/12145974922"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="group/social relative"
//                       >
//                         <div className="absolute -inset-2 bg-green-500 rounded-full blur opacity-75 group-hover/social:opacity-100 transition duration-300"></div>
//                         <div className="relative bg-white p-4 rounded-full shadow-xl border-2 border-green-500 hover:scale-110 transform transition-all duration-300">
//                           <FaWhatsapp className="w-8 h-8 text-green-500" />
//                         </div>
//                       </a>

//                       <a
//                         href="https://www.instagram.com/CarNationElite"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="group/social relative"
//                       >
//                         <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-75 group-hover/social:opacity-100 transition duration-300"></div>
//                         <div className="relative bg-white p-4 rounded-full shadow-xl border-2 border-pink-500 hover:scale-110 transform transition-all duration-300">
//                           <FaInstagram className="w-8 h-8 text-pink-500" />
//                         </div>
//                       </a>

//                       <a
//                         href="https://www.facebook.com/CarNationElite"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="group/social relative"
//                       >
//                         <div className="absolute -inset-2 bg-blue-500 rounded-full blur opacity-75 group-hover/social:opacity-100 transition duration-300"></div>
//                         <div className="relative bg-white p-4 rounded-full shadow-xl border-2 border-blue-500 hover:scale-110 transform transition-all duration-300">
//                           <FaFacebookF className="w-8 h-8 text-blue-500" />
//                         </div>
//                       </a>
//                     </div>
//                   </div>

//                   {/* Action Alert */}
//                   <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-l-4 border-yellow-500 p-4 rounded-xl shadow-lg">
//                     <div className="flex items-center justify-center space-x-2">
//                       <span className="text-2xl animate-bounce">⚡</span>
//                       <p className="text-sm md:text-base text-yellow-800 font-bold text-center">
//                         <strong>WhatsApp us</strong> for instant quotes •{" "}
//                         <strong>Follow us</strong> for exclusive deals!
//                       </p>
//                       <span className="text-2xl animate-bounce">⚡</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Enhanced Image Cards with 3D Effect */}
//             <div className="relative flex justify-center items-center py-8">
//               <div className="flex items-center justify-center space-x-[-80px]">
//                 {cardImages.map((src, i) => {
//                   const rotations = ["-12deg", "-6deg", "0deg"];
//                   const zIndexes = ["z-10", "z-20", "z-30"];
//                   const scales = ["scale-95", "scale-100", "scale-105"];
//                   return (
//                     <div
//                       key={i}
//                       className={`relative ${zIndexes[i]} hover:z-40 transition-all duration-500 group/card`}
//                       style={{
//                         transform: `rotate(${rotations[i]}) ${scales[i]}`,
//                       }}
//                     >
//                       <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-0 group-hover/card:opacity-75 transition duration-500"></div>
//                       <img
//                         src={src}
//                         alt={`Luxury Car Service ${i + 1}`}
//                         className="relative w-56 h-80 object-cover rounded-2xl shadow-2xl border-4 border-white hover:scale-110 hover:rotate-0 transition-all duration-500 cursor-pointer"
//                       />
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;

// import { useTypewriter, Cursor } from "react-simple-typewriter";
// import { Check, Star, Phone } from "lucide-react";
// import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
// import { Helmet } from "react-helmet-async";
// import Toaster from "./Toaster";
// import { motion } from "framer-motion";

// const cardImages = [
//   "/images/card0.png",
//   "/images/brands.png",
//   "/images/dum.png",
// ];

// const Home = () => {
//   const [text] = useTypewriter({
//     words: [
//       "Precision & Honesty",
//       "Trusted Auto Repair",
//       "Elite Customer Experience",
//       "Your Car's Best Friend",
//       "Automotive Excellence",
//     ],
//     loop: true,
//     typeSpeed: 100,
//     deleteSpeed: 50,
//     delaySpeed: 2000,
//   });

//   return (
//     <section
//       id="home"
//       className="relative text-black pt-16 sm:pt-[6px] scroll-mt-28"
//     >
//       {/* 🌐 SEO Helmet & Structured Data */}
//       <Helmet>
//         <title>CarNation Elite - Auto Repair in Dallas, TX</title>
//         <meta
//           name="description"
//           content="Premium auto repair services in Dallas. Schedule your appointment today with CarNation Elite — your trusted local mechanic for luxury vehicles."
//         />
//         <meta
//           name="keywords"
//           content="best auto repair in Dallas, luxury car service, mechanic near me, CarNation Elite"
//         />
//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "AutoRepair",
//             name: "CarNation Elite",
//             image: "https://carnationelite.com/images/elite.png",
//             address: {
//               "@type": "PostalAddress",
//               streetAddress: "13610 Floyd Circle",
//               addressLocality: "Dallas",
//               addressRegion: "TX",
//               postalCode: "75243",
//               addressCountry: "US",
//             },
//             telephone: "+1-214-597-4922",
//             url: "https://carnationelite.com",
//             openingHours: "Mo-Sa 09:00-17:00",
//             sameAs: [
//               "https://www.facebook.com/CarNationElite",
//               "https://www.instagram.com/CarNationElite",
//             ],
//             priceRange: "$$",
//           })}
//         </script>
//       </Helmet>

//       {/* Toaster Component for Appointment Prompt */}
//       <Toaster link="https://calendly.com/carnationelite" />

//       {/* 🎯 Hero Section Content */}
//       <div className="container mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           {/* Left Content */}
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl leading-tight text-black font-bold">
//                 Dallas Auto Repair,
//                 <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 bg-clip-text text-transparent py-4 animate-pulse">
//                   {text}
//                   <Cursor cursorStyle="|" />{" "}
//                 </span>
//                 {/* <span className="block bg-purple-500 bg-clip-text text-transparent py-4">
//                   {text}
//                   <Cursor cursorStyle="|" />
//                 </span> */}
//               </h1>
//               <p className="text-xl text-black leading-relaxed">
//                 Experience honest, high-quality automotive repair services with
//                 fast turnaround and friendly service. We specialize in luxury
//                 brands and bring the best mechanics in Dallas near you.
//               </p>
//             </div>

//             {/* Features List */}
//             <div className="space-y-4">
//               {[
//                 "Certified mechanics specializing in luxury auto repair 🔧🚗",
//                 "Complimentary Wi-Fi 🚀🛜",
//                 "Transparent Pricing & Complimentary Refreshments ☕🍪",
//               ].map((feature, i) => (
//                 <div key={i} className="flex items-center space-x-3">
//                   <Check className="w-6 h-6 text-green-400" />
//                   <span className="text-lg">{feature}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Quote Box */}
//             {/* <div className="bg-[#1e293b] text-white rounded-xl p-6 mt-6 shadow-lg border border-blue-500/10 hover:shadow-blue-500/30 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 ease-in-out">
//               <p className="text-xl leading-relaxed">
//                 “At{" "}
//                 <span className="text-purple-500 font-semibold">
//                   CarNation Elite
//                 </span>
//                 , we deliver{" "}
//                 <span className="text-green-500 font-semibold">
//                   trusted auto repair
//                 </span>{" "}
//                 with <span className="font-semibold">honesty</span>,{" "}
//                 <span className="font-semibold">precision</span> and{" "}
//                 <span className="font-semibold">speed</span> — keeping Dallas
//                 drivers confident and cared for.”
//               </p>
//             </div> */}

//             {/* Enhanced quote box */}

//             <div className="relative group hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 ease-in-out">
//               <div className="absolute -inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
//               <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-8 shadow-2xl">
//                 <div className="absolute top-4 left-4 text-6xl text-purple-400 opacity-20">
//                   "
//                 </div>
//                 <p className="text-xl md:text-xl leading-relaxed pl-8 pr-4">
//                   At{" "}
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">
//                     CarNation Elite
//                   </span>
//                   , we deliver{" "}
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 font-bold">
//                     trusted auto repair
//                   </span>{" "}
//                   with{" "}
//                   <span className="font-bold text-yellow-300">honesty</span>,{" "}
//                   <span className="font-bold text-blue-300">precision</span> and{" "}
//                   <span className="font-bold text-green-300">speed</span> —
//                   keeping Dallas drivers confident and cared for.
//                 </p>
//                 <div className="absolute bottom-4 right-4 text-6xl text-blue-400 opacity-20 rotate-180">
//                   "
//                 </div>
//               </div>
//             </div>

//             {/* Ratings */}
//             <div className="flex items-center space-x-6 pt-4">
//               <div className="flex items-center space-x-2">
//                 <div className="flex space-x-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="w-5 h-5 fill-yellow-400 text-yellow-400"
//                     />
//                   ))}
//                 </div>
//                 <span className="text-gray-800">5/5 Rating</span>
//               </div>
//               <div className="text-gray-300">
//                 <span className="font-semibold text-black">500+ </span>
//                 <span className="text-gray-800">Happy Customers</span>
//               </div>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="space-y-6">
//             {/* 🎉 Contact Card --  bg-gradient-to-r from-purple-600 via-blue-600 to-green-500   */}
//             <div className="border-2 border-gray-100 p-1 rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300">
//               <div className="bg-white rounded-xl p-6 hover:bg-gray-50 transition-colors duration-300">
//                 <div className="text-center space-y-4">
//                   <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                     📞 Get In Touch Now!
//                   </h3>

//                   {/* Phone Number */}
//                   <div className="bg-gradient-to-r from-green-500 to-blue-600 text-black rounded-xl p-4 hover:scale-105 transition-transform duration-300 shadow-lg">
//                     <a
//                       href="tel:+12145974922"
//                       className="flex items-center justify-center space-x-3 text-xl font-bold"
//                     >
//                       <Phone className="w-6 h-6 animate-pulse font-bold" />
//                       <span>+1 (214) 597-4922</span>
//                     </a>
//                     <p className="text-lg mt-2 opacity-90">
//                       Call us now for instant service!
//                     </p>
//                   </div>

//                   {/* Social Media Icons */}
//                   <div className="space-y-3">
//                     <p className="text-gray-700 font-semibold">
//                       Follow & Connect for more updates
//                     </p>
//                     <div className="flex justify-center space-x-4">
//                       <a
//                         href="https://wa.me/12145974922"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 hover:scale-110 transition-all duration-300 shadow-lg"
//                       >
//                         <FaWhatsapp className="w-6 h-6" />
//                       </a>
//                       <a
//                         href="https://www.instagram.com/carnationelite_autorepair/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-full hover:scale-110 transition-all duration-300 shadow-lg"
//                       >
//                         <FaInstagram className="w-6 h-6" />
//                       </a>
//                       <a
//                         href="https://www.facebook.com/profile.php?id=61555822727317"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 hover:scale-110 transition-all duration-300 shadow-lg"
//                       >
//                         <FaFacebookF className="w-6 h-6" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Image Cards */}
//             <div className="relative flex justify-center items-center py-8">
//               <div className="flex items-center justify-center space-x-[-100px]">
//                 {cardImages.map((src, i) => {
//                   const rotations = ["-8deg", "-4deg", "0deg"];
//                   return (
//                     <div
//                       key={i}
//                       className="relative hover:z-20 transition-transform duration-300"
//                       style={{ transform: `rotate(${rotations[i]})` }}
//                     >
//                       <img
//                         src={src}
//                         alt={`Luxury Car Service ${i + 1}`}
//                         className="w-60 h-96 object-cover rounded-xl shadow-2xl border-2 border-purple-800 hover:scale-105 transition-transform duration-300"
//                       />
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Check, Star, Phone } from "lucide-react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import Toaster from "./Toaster";
import { motion } from "framer-motion";

const cardImages = [
  "/images/card0.png",
  "/images/brands.png",
  "/images/dum.png",
];

const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
  navigator.userAgent
);

const TARGET_NUMBER = "12145974922";
const DEFAULT_MESSAGE =
  "Hey Sam! 👋 I just came across your website and had a few questions about your car repair and maintenance services. Would love to know more!";

const waBase = isMobile ? "whatsapp://send" : "https://web.whatsapp.com/send";
const waLink = `${waBase}?phone=${TARGET_NUMBER}&text=${encodeURIComponent(
  DEFAULT_MESSAGE
)}`;

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Precision & Honesty",
      "Trusted Auto Repair",
      "Elite Customer Experience",
      "Your Car's Best Friend",
      "Automotive Excellence",
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  // Simple animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="home"
      className="relative text-black pt-16 sm:pt-[6px] scroll-mt-28"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* 🌐 SEO Helmet & Structured Data */}
      <Helmet>
        <title>CarNation Elite - Auto Repair in Dallas, TX</title>
        <meta
          name="description"
          content="Premium auto repair services in Dallas. Schedule your appointment today with CarNation Elite — your trusted local mechanic for luxury vehicles."
        />
        <meta
          name="keywords"
          content="best auto repair in Dallas, luxury car service, mechanic near me, CarNation Elite"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            name: "CarNation Elite",
            image: "https://carnationelite.com/images/elite.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "13610 Floyd Circle",
              addressLocality: "Dallas",
              addressRegion: "TX",
              postalCode: "75243",
              addressCountry: "US",
            },
            telephone: "+1-214-597-4922",
            url: "https://carnationelite.com",
            openingHours: "Mo-Sa 09:00-17:00",
            sameAs: [
              "https://www.facebook.com/CarNationElite",
              "https://www.instagram.com/CarNationElite",
            ],
            priceRange: "$$",
          })}
        </script>
      </Helmet>

      {/* Toaster Component for Appointment Prompt */}
      <Toaster link="https://calendly.com/carnationelite" />

      {/* 🎯 Hero Section Content */}
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div className="space-y-8" variants={slideInLeft}>
            <motion.div className="space-y-4" variants={fadeInUp}>
              <motion.h1
                className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl leading-tight text-black font-bold"
                variants={fadeInUp}
              >
                Dallas Auto Repair,
                <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 bg-clip-text text-transparent py-4 animate-pulse">
                  {text}
                  <Cursor cursorStyle="|" />{" "}
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-black leading-relaxed"
                variants={fadeInUp}
              >
                Experience honest, high-quality automotive repair services with
                fast turnaround and friendly service. We specialize in luxury
                brands and bring the best mechanics in Dallas near you.
              </motion.p>
            </motion.div>

            {/* Features List */}
            <motion.div className="space-y-4" variants={fadeInUp}>
              {[
                "Certified mechanics specializing in luxury auto repair 🔧🚗",
                "Complimentary Wi-Fi 🚀🛜",
                "Transparent Pricing & Complimentary Refreshments ☕🍪",
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <Check className="w-6 h-6 text-green-400" />
                  <span className="text-lg">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced quote box */}
            <motion.div
              className="relative group hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 ease-in-out"
              variants={fadeInUp}
            >
              <div className="absolute -inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-8 shadow-2xl">
                <div className="absolute top-4 left-4 text-6xl text-purple-400 opacity-20">
                  "
                </div>
                <p className="text-xl md:text-xl leading-relaxed pl-8 pr-4">
                  At{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">
                    CarNation Elite
                  </span>
                  , we deliver{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 font-bold">
                    trusted auto repair
                  </span>{" "}
                  with{" "}
                  <span className="font-bold text-yellow-300">honesty</span>,{" "}
                  <span className="font-bold text-blue-300">precision</span> and{" "}
                  <span className="font-bold text-green-300">speed</span> —
                  keeping Dallas people confident and cared for.
                </p>
                <div className="absolute bottom-4 right-4 text-6xl text-blue-400 opacity-20 rotate-180">
                  "
                </div>
              </div>
            </motion.div>

            {/* Ratings */}
            <motion.div
              className="flex items-center space-x-6 pt-4"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>
                <span className="text-gray-800">5/5 Rating</span>
              </div>
              <div className="text-gray-300">
                <span className="font-semibold text-black">500+ </span>
                <span className="text-gray-800">Happy Customers</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div className="space-y-6" variants={slideInRight}>
            {/* 🎉 Contact Card */}
            <motion.div
              className="border-4 border-gray-200 p-1 rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="bg-white rounded-xl p-6 hover:bg-gray-50 transition-colors duration-300">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    📞 Get In Touch Now!
                  </h3>

                  {/* Phone Number */}
                  <div className="bg-gradient-to-r from-green-500 to-blue-600 text-black rounded-xl p-4 hover:scale-105 transition-transform duration-300 shadow-lg">
                    <a
                      href="tel:+12145974922"
                      className="flex items-center justify-center space-x-3 text-xl font-bold"
                    >
                      <Phone className="w-6 h-6 animate-pulse font-bold" />
                      <span>+1 (214) 597-4922</span>
                    </a>
                    <p className="text-lg mt-2 opacity-90">
                      Call us now for instant service!
                    </p>
                  </div>

                  {/* Social Media Icons */}
                  <div className="space-y-3">
                    <p className="text-gray-700 font-semibold">
                      Follow & Connect for more updates
                    </p>
                    <div className="flex justify-center space-x-4">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all duration-300 shadow-lg"
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          style={{ display: "inline-block" }}
                        >
                          <FaWhatsapp className="w-6 h-6" />
                        </motion.div>
                      </a>

                      <a
                        href="https://www.instagram.com/carnationelite_autorepair/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          style={{ display: "inline-block" }}
                        >
                          <FaInstagram className="w-6 h-6" />
                        </motion.div>
                      </a>

                      <a
                        href="https://www.facebook.com/profile.php?id=61555822727317"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition-all duration-300 shadow-lg"
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          style={{ display: "inline-block" }}
                        >
                          <FaFacebookF className="w-6 h-6" />
                        </motion.div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Image Cards */}
            <motion.div
              className="relative flex justify-center items-center py-8"
              variants={fadeInUp}
            >
              <div className="flex items-center justify-center space-x-[-100px]">
                {cardImages.map((src, i) => {
                  const rotations = [-8, -4, 0];
                  return (
                    <motion.div
                      key={i}
                      className="relative hover:z-20"
                      initial={{
                        opacity: 0,
                        y: 50,
                        rotate: rotations[i] - 20,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        rotate: rotations[i],
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.3 + i * 0.2,
                        ease: "easeOut",
                      }}
                      whileHover={{
                        scale: 1.05,
                        rotate: rotations[i] + 5,
                        zIndex: 30,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <img
                        src={src}
                        alt={`Luxury Car Service ${i + 1}`}
                        className="w-60 h-96 object-cover rounded-xl shadow-2xl border-2 border-purple-800 hover:scale-105 transition-transform duration-300"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
