import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-black py-12">
      <div className="container mx-auto px-4">
        {/* Grid on desktop, flex-reverse on tablet, normal column on mobile */}
        <div className="footer-wrapper 
                        flex flex-col        /* mobile: normal column */
                        sm:flex sm:flex-col-reverse /* tablet: reverse order */
                        lg:grid lg:grid-cols-4 gap-8">
          
          {/* ✨ Tablet-only copyright above everything */}
          <div className="hidden sm:block lg:hidden col-span-full text-center mb-8">
            <p className="text-black text-xl">
              © 2025 CarNation Elite. All rights reserved.
            </p>
          </div>

          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <img className="rounded-full" src="/images/logo.png" alt="" />
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
              vehicles with a commitment to honesty, quality, auto repair and speed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["home","services","about","testimonials","contact"].map((id, i) => (
                <li key={i}>
                  <a
                    href={`#${id}`}
                    className="hover:text-purple-500 transition-colors"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1).replace("-", " ")}
                  </a>
                </li>
              ))}
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

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-500" />
                <span>+1 (214) 597-4922</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-red-500" />
                <span>acarnationelite@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-green-500 mt-0.5" />
                <span>
                  13610, FLOYD CIRCLE,<br />
                  DALLAS, TX 75243
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Desktop copyright at the bottom */}
        <div className="block sm:hidden lg:block border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-xl">© 2025 CarNation Elite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
