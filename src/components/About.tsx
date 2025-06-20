// import { Award, Users, Clock, Shield } from "lucide-react";
// import { motion } from "framer-motion";
// import { FaWhatsapp } from "react-icons/fa";

// // Stats data with semantic color keys
// const stats = [
//   { icon: Award,  number: "3+",   label: "Years Experience",        color: "red" },
//   { icon: Users,  number: "500+", label: "Happy Customers",         color: "green" },
//   { icon: Clock,  number: "24hr", label: "Quick Turnaround",        color: "blue" },
//   { icon: Shield,number: "100%",  label: "Satisfaction Guaranteed", color: "yellow" },
// ];

// // Map semantic colors to Tailwind utility classes
// const colorClasses: Record<string, { icon: string; label: string }> = {
//   red:    { icon: "text-red-500",    label: "text-black" },
//   green:  { icon: "text-green-500",  label: "text-black" },
//   blue:   { icon: "text-blue-500",   label: "text-black" },
//   yellow: { icon: "text-yellow-500", label: "text-black" },
// };

// // Team data (unchanged)
// const team = [
//   {
//     name: "Sam",
//     title: "Founder",
//     specialty: "+1 (214) 597-4922",
//     image: "/images/car1.jpg",
//   },
// ];

// // WhatsApp link logic (unchanged)
// const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
//   navigator.userAgent
// );
// const TARGET_NUMBER = "12145974922";
// const DEFAULT_MESSAGE =
//   "Hi Sam, I have some questions about your car repair and maintenance services.";
// const waBase = isMobile ? "whatsapp://send" : "https://web.whatsapp.com/send";
// const waLink = `${waBase}?phone=${TARGET_NUMBER}&text=${encodeURIComponent(
//   DEFAULT_MESSAGE
// )}`;

// const About: React.FC = () => (
//   <section id="about" className="py-24 text-black">
//     <div className="container mx-auto px-6 py-8 sm:py-0 md:py-16">
//       {/* Header & Stats */}
//       <div className="grid lg:grid-cols-2 gap-16 items-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="space-y-8"
//         >
//           <h2 className="text-5xl font-bold text-purple-500 py-8">
//             Why Choose CarNation Elite?
//           </h2>

//           <h1 className="text-3xl font-bold text-gray-800 mb-4">
//             Auto Repair & Maintenance Experts 🧑‍🔧🔧
//           </h1>
//           <p className="text-lg leading-relaxed">
//             At our premier car service center, we combine honesty, exceptional skill, auto repair and unmatched speed making us the trusted choice for people across Dallas. Your vehicle
//             represents freedom, value, and peace of mind, and we treat it that way.
//           </p>
//           <p className="text-lg leading-relaxed">
//             Driven by quality, powered by trust, and built for efficiency, our expert technicians deliver dealership-level service without the high cost.
//             As European car specialists, we get you back on the road quickly—with zero compromises on performance or reliability.
//           </p>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
//             className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6"
//           >
//             {stats.map((stat, i) => {
//               const classes = colorClasses[stat.color] || colorClasses["red"];
//               return (
//                 <motion.div
//                   key={i}
//                   variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
//                   whileHover={{ scale: 1.05 }}
//                   className="flex flex-col items-center bg-gray-200 bg-opacity-50 backdrop-blur-lg rounded-xl p-6 text-center"
//                 >
//                   <stat.icon className={`w-10 h-10 mb-3 ${classes.icon}`} />
//                   <div className="text-3xl font-bold mb-1">{stat.number}</div>
//                   <div className={`text-base tracking-wider ${classes.label}`}>{stat.label}</div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </motion.div>

//         {/* Image with purple bordered frame & hover */}
//         <motion.div
//           initial={{ scale: 0.9, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           whileHover={{ scale: 1.03, rotateZ: 3 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="rounded-3xl overflow-hidden shadow-2xl shadow-purple-600 ring-4 ring-purple-400"
//         >
//           <img
//             src="/images/elite.png"
//             alt="Modern auto repair facility"
//             className="w-full h-96 object-cover"
//           />

//         </motion.div>

//       </div>

//       {/* Team Section */}
//       <div className="mt-20">
//         <motion.h3
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold text-center mb-12 text-purple-500"
//         >
//           Meet Our Expert Team
//         </motion.h3>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
//           className={`${team.length === 1 ? "grid-cols-1 justify-items-center" : "md:grid-cols-3"} grid gap-8`}
//         >
//           {team.map((member, idx) => (
//             <motion.div
//               key={idx}
//               variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
//               whileHover={{ scale: 1.05 }}
//               className="flex flex-col items-center bg-gray-200 bg-opacity-50 backdrop-blur-lg rounded-xl p-6 text-center"
//             >
//               <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
//                 {member.image ? (
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover rounded-full"
//                   />
//                 ) : (
//                   <span className="text-2xl font-bold text-white">
//                     {member.name
//                       .split(" ")
//                       .map((n) => n[0])
//                       .join("")}
//                   </span>
//                 )}
//               </div>
//               <h4 className="text-xl font-semibold mb-1 text-black">{member.name}</h4>
//               <p className="text-purple-500 font-medium mb-2">{member.title}</p>

//               <a
//                 href={waLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center space-x-2 hover:text-cyan-400 transition-colors"
//               >
//                 <FaWhatsapp className="text-green-500" size={20} />
//                 <span className="font-medium text-black py-4">Contact : Chat with me!</span>
//               </a>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   </section>
// );

// export default About;

import React from "react";
import { Award, Users, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

// Stats data
const stats = [
  { icon: Award, number: "3+", label: "Years Experience", color: "red" },
  { icon: Users, number: "500+", label: "Happy Customers", color: "green" },
  { icon: Clock, number: "24hr", label: "Quick Turnaround", color: "blue" },
  {
    icon: Shield,
    number: "100%",
    label: "Satisfaction Guaranteed",
    color: "yellow",
  },
];

// Color mapping
const colorClasses: Record<string, { icon: string; label: string }> = {
  red: { icon: "text-red-500", label: "text-black" },
  green: { icon: "text-green-500", label: "text-black" },
  blue: { icon: "text-blue-500", label: "text-black" },
  yellow: { icon: "text-yellow-500", label: "text-black" },
};

// Team data
const team = [
  
  
  { 
    name: "Sam", 
    title: "Founder",
    image: "/images/car1.jpg" 
  },
  // { 
  //   name: "John", 
  //   title: "Senior Mechanic",
  //   image: "/images/car2.jpg" 
  // },
  // { 
  //   name: "Emily", 
  //   title: "Customer Service",
  //   image: "/images/car3.jpg" 
  // },
];

// WhatsApp link logic
const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
  navigator.userAgent
);
const TARGET_NUMBER = "12145974922";
const DEFAULT_MESSAGE =
  "Hi Sam, I have some questions about your car repair and maintenance services.";
const waBase = isMobile ? "whatsapp://send" : "https://web.whatsapp.com/send";
const waLink = `${waBase}?phone=${TARGET_NUMBER}&text=${encodeURIComponent(
  DEFAULT_MESSAGE
)}`;

// Car brand logos
const carBrands = [
  { name: "BMW", image: "/images/brands/bmw.png" },
  { name: "Audi", image: "/images/brands/audi.png" },
  { name: "Benz", image: "/images/brands/benz.png" },
  { name: "Jaguar", image: "/images/brands/jaguar.png" },
  { name: "Land Rover", image: "/images/brands/landrover.png" },
  { name: "Volvo", image: "/images/brands/volvo.png" },
  { name: "Chevi", image: "/images/brands/chevi.png" },
  { name: "Toyota", image: "/images/brands/toyota.png" },
  { name: "Honda", image: "/images/brands/honda.png" },
  { name: "Ford", image: "/images/brands/ford.png" },

  { name: "Nissan", image: "/images/brands/nissan.png" },
];

const About: React.FC = () => (
  <section id="about" className="py-40 md:py-24 text-black">
    <div className="container mx-auto px-6">
      {/* Responsive grid: single column by default, two cols on lg */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-stretch items-start">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 md:space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-500">
            Why Choose CarNation Elite?
          </h2>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Auto Repair & Maintenance Experts 🧑‍🔧🔧
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
            At our premier car service center, we combine honesty, exceptional
            skill, auto repair and unmatched speed making us the trusted choice
            for people across Dallas. Your vehicle represents freedom, value,
            and peace of mind, and we treat it that way.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Driven by quality, powered by trust, and built for efficiency, our
            expert technicians deliver dealership-level service without the high
            cost. As European car specialists, we get you back on the road
            quickly—with zero compromises on performance or reliability.
          </p>

          {/* Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-4"
          >
            {stats.map((stat, i) => {
              const classes = colorClasses[stat.color];
              return (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center bg-gray-100 bg-opacity-50 backdrop-blur-lg rounded-xl p-4 md:p-6 text-center"
                >
                  <stat.icon
                    className={`w-8 h-8 md:w-10 md:h-10 mb-2 ${classes.icon}`}
                  />
                  <div className="text-2xl md:text-3xl font-bold mb-1">
                    {stat.number}
                  </div>
                  <div
                    className={`text-sm md:text-base tracking-wide ${classes.label}`}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Column: image + carousel pinned only on lg */}
        <div className="flex flex-col space-y-8 lg:justify-end">
          {/* Main Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.03, rotateZ: 3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="select-none rounded-2xl overflow-hidden shadow-xl shadow-purple-300 ring-2 ring-purple-200"
          >
            <img
              src="/images/elite.png"
              alt="Modern auto repair facility"
              className="w-full h-64 md:h-80 lg:h-96 object-cover"
            />
          </motion.div>

          {/* Carousel */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-center text-purple-500 mb-3">
              Your Brand, Our Expertise
            </h3>
            <div className="overflow-hidden">
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                className="flex items-center space-x-4 md:space-x-8 w-max"
              >
                {[...carBrands, ...carBrands].map((brand, idx) => (
                  <div
                    key={idx}
                    className="select-none w-28 h-28  flex-shrink-0 rounded-full overflow-hidden  p-1"
                  >
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-16 md:mt-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-purple-500"
        >
          Meet Our Expert Team
        </motion.h3>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className={`grid gap-6 md:gap-8 ${
            team.length === 1
              ? "grid-cols-1 justify-items-center"
              : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          }`}
        >
          {team.map((member, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              className="border-2 flex flex-col items-center bg-gray-100 bg-opacity-50 backdrop-blur-lg rounded-xl p-4  text-center"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden mb-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg md:text-xl font-semibold mb-1 text-black">
                {member.name}
              </h4>
              <p className="text-purple-500 font-medium mb-2">{member.title}</p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-cyan-400 transition-colors"
              >
                <FaWhatsapp className="text-green-500" size={20} />
                <span className="font-medium text-black">Chat on WhatsApp</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
