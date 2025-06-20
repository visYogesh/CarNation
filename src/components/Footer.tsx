import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Footer = () => {
  return (
    <footer className="text-black py-12">
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

      <div className="container mx-auto px-4">
        <div
          className="footer-wrapper 
                        flex flex-col
                        sm:flex sm:flex-col-reverse 
                        lg:grid lg:grid-cols-4 gap-8"
        >
          <div className="hidden sm:block lg:hidden col-span-full text-center mb-8">
            <p className="text-black text-xl">
              © 2025 CarNation Elite. All rights reserved.
            </p>
          </div>

          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <img
                  className="rounded-full"
                  src="/images/logo.png"
                  alt="CarNation Elite Logo"
                />
              </div>
              <div>
                <h3 className="text-xl text-purple-500 font-bold">
                  CarNation Elite
                </h3>
                <p className="text-sm">Premium Auto Repair</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Dallas's premier automotive service center, specializing in luxury
              vehicles with a commitment to honesty, quality, auto repair and
              speed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["home", "services", "about", "testimonials", "contact"].map(
                (id, i) => (
                  <li key={i}>
                    <a
                      href={`#${id}`}
                      className="hover:text-purple-500 transition-colors"
                    >
                      {id.charAt(0).toUpperCase() +
                        id.slice(1).replace("-", " ")}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Luxury Vehicle Service",
                "Engine Diagnostics",
                "Brake Service",
                "Transmission Repair",
                "Preventive Maintenance",
              ].map((svc, i) => (
                <li key={i}>{svc}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info with schema markup */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <address
              className="not-italic space-y-3 text-sm"
              itemScope
              itemType="https://schema.org/AutoRepair"
            >
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-500" />
                <span itemProp="telephone">+1 (214) 597-4922</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-red-500" />
                <span itemProp="email">acarnationelite@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-green-500 mt-0.5" />
                <span
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <span itemProp="streetAddress">13610, FLOYD CIRCLE,</span>
                  <br />
                  <span itemProp="addressLocality">Dallas</span>,{" "}
                  <span itemProp="addressRegion">TX</span>{" "}
                  <span itemProp="postalCode">75243</span>
                </span>
              </div>
            </address>
          </div>
        </div>

        <div className="block sm:hidden lg:block border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-xl">
            © 2025 CarNation Elite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
