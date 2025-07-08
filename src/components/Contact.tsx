import React from "react";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import CarSheetEmbed from "./CarSheetEmbed";
const contactItems = [
  {
    Icon: Phone,
    title: "Phone",
    content: (
      <>
        <a
          href="tel:+12145974922"
          className="text-black hover:underline"
          title="Call now"
        >
          +1 (214) 597-4922
        </a>
        <p className="text-base py-2">Call or Text anytime</p>
      </>
    ),
    color: "bg-blue-600",
  },
  {
    Icon: MapPin,
    title: "Location",
    content: (
      <>
        <a
          href="https://www.google.com/maps/place/CarNation+Elite-+Dallas+Auto+Repair+Service/"
          className="text-black hover:underline"
          title="Open in Google Maps"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Maps
        </a>
        <p className="py-2">
          13610, FLOYD CIRCLE,
          <br />
          DALLAS, TX 75243
        </p>
      </>
    ),
    color: "bg-green-600",
  },
  {
    Icon: Clock,
    title: "Hours",
    content: (
      <div className="space-y-1">
        <p>Mon - Sat: 9:00 - 5:00</p>
        <p>Sunday: Closed</p>
      </div>
    ),
    color: "bg-purple-600",
  },
  {
    Icon: Mail,
    title: "Email",
    content: (
      <>
        <a
          href="mailto:acarnationelite@gmail.com"
          className="text-black hover:underline"
          title="Send an email"
        >
          acarnationelite@gmail.com
        </a>
        <p className="text-sm text-black mt-2">We'll respond within 24 hours</p>
      </>
    ),
    color: "bg-red-600",
  },
];

const cardVariants = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.3, duration: 0.8 },
  },
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-40 sm:py-28 md:py-44 bg-white text-black"
    >
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


      {/* google drive and sheets */}
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-5xl text-purple-500 font-extrabold mb-4 text-center">
          Contact CarNation Elite – Dallas Auto Experts
        </h1>

        {/* Google Forms */}
        <div className="mt-16 max-w-4xl mx-auto">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSd0Gm229msbUizNl0a4ogRNVG1ZrK8cnxqy3ir9bf8qRHlLFA/viewform?usp=header"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="rounded-2xl shadow-lg w-full"
            title="Contact Form"
          >
            Loading…
          </iframe>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <CarSheetEmbed />
        </div>

        {/* Contact Info Cards & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactItems.map(({ Icon, title, content, color }, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-300 p-6 rounded-xl text-center hover:bg-gray-200 cursor-pointer"
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className={`w-14 h-14 ${color} rounded-full flex items-center justify-center mx-auto mb-3`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                <div className="text-black text-sm">{content}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <iframe
              title="CarNation Elite - Dallas"
              src="https://www.google.com/maps?q=CarNation+Elite+Dallas+Auto+Repair+Service&output=embed"
              width="100%"
              height="100%"
              className="min-h-[300px] lg:min-h-[480px]"
              allowFullScreen={false}
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
