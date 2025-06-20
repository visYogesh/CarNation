import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Check, Star, Phone } from "lucide-react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const cardImages = [
  "/images/card0.png",
  "/images/brands.png",
  "/images/dum.png",
];

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

  return (
    <section
      id="home"
      className="relative text-black pt-16 sm:pt-[6px] scroll-mt-28"
    >
      {/* 🌐 SEO Helmet & Structured Data */}
      <Helmet>
        <title>CarNation Elite - Auto Repair in Dallas, TX</title>
        <meta
          name="description"
          content="Premium auto repair services in Dallas. Schedule your appointment today with CarNation Elite — your trusted local mechanic for luxury vehicles, best car reparir, best car service, near me, best car service, in dallas, best auto repair in dallas, car nation, car service, engine, oil change, general service, best, friendly, trusted auto repair in dallas, CarNation Elite"
        />
        <meta
          name="keywords"
          content="best car reparir, best car service, near me, best car service, in dallas, best auto repair in dallas, car nation, car service, engine, oil change, general service, best, friendly, trusted auto repair in dallas, CarNation Elite, auto repair, car repair Dallas, mechanic near me, Dallas auto repair, luxury car service, brake service, oil change Dallas"
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

      {/* 🎯 Hero Section Content */}
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl leading-tight text-black font-bold">
                Dallas Auto Repair,
                <span className="block bg-purple-500 bg-clip-text text-transparent py-4">
                  {text}
                  <Cursor cursorStyle="|" />
                </span>
              </h1>
              <p className="text-xl text-black leading-relaxed">
                Experience honest, high-quality automotive repair services with
                fast turnaround and friendly service. We specialize in luxury
                brands and bring the best mechanics in Dallas near you.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                "Certified mechanics specializing in luxury auto repair 🔧🚗",
                "Complimentary Wi-Fi 🚀🛜",
                "Transparent Pricing & Complimentary Refreshments ☕🍪",
              ].map((feature, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-green-400" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* Quote Box */}
            <div className="bg-[#1e293b] text-white rounded-xl p-6 mt-6 shadow-lg border border-blue-500/10 hover:shadow-blue-500/30 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 ease-in-out">
              <p className="text-xl leading-relaxed">
                “At{" "}
                <span className="text-purple-500 font-semibold">
                  CarNation Elite
                </span>
                , we deliver{" "}
                <span className="text-green-500 font-semibold">
                  trusted auto repair
                </span>{" "}
                with <span className="font-semibold">honesty</span>,{" "}
                <span className="font-semibold">precision</span> and{" "}
                <span className="font-semibold">speed</span> — keeping Dallas
                drivers confident and cared for.”
              </p>
            </div>

            {/* Ratings */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-gray-800">5/5 Rating</span>
              </div>
              <div className="text-gray-300">
                <span className="font-semibold text-black">500+ </span>
                <span className="text-gray-800">Happy Customers</span>
              </div>
            </div>
          </div>

          {/* Right Image Cards */}
          <div className="relative flex justify-center items-center py-8">
            <div className="flex items-center justify-center space-x-[-100px]">
              {cardImages.map((src, i) => {
                const rotations = ["-8deg", "-4deg", "0deg"];
                return (
                  <div
                    key={i}
                    className="relative hover:z-20 transition-transform duration-300"
                    style={{ transform: `rotate(${rotations[i]})` }}
                  >
                    <img
                      src={src}
                      alt={`Luxury Car Service ${i + 1}`}
                      className="w-60 h-96 object-cover rounded-xl shadow-2xl border-2 border-purple-800 hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
