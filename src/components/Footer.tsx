import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10rounded-full flex items-center justify-center">
                <img className="rounded-full" src="/images/logo.png" alt="" />
              </div>
              <div>
                <h3 className="text-xl text-purple-500 font-bold">CarNation Elite</h3>
                <p className="text-sm text-black">Premium Auto Repair</p>
              </div>
            </div>
            <p className="text-black text-sm leading-relaxed">
              Dallas's premier automotive service center, specializing in luxury
              vehicles with a commitment to honesty, quality, auto repair and speed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-black hover:text-purple-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-black hover:text-purple-500 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-black hover:text-purple-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-black hover:text-purple-500 transition-colors"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-black hover:text-purple-500 transition-colors"
                >
                  Contact
                </a>
              </li>
              
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-black">Luxury Vehicle Service</li>
              <li className="text-black">Engine Diagnostics</li>
              <li className="text-black">Brake Service</li>
              <li className="text-black">Transmission Repair</li>
              <li className="text-black">Preventive Maintenance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-500" />
                <span className="text-black">+1 (214) 597-4922</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-red-500" />
                <span className="text-black">acarnationelite@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-green-500 mt-0.5" />
                <span className="text-black">
                  13610, FLOYD CIRCLE, <br />
                  DALLAS, TX 75243
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center">
            <p className="text-black text-xl">
              © 2025 CarNation Elite. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;