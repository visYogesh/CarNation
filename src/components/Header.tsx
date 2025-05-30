import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Clock, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#sales-rentals", label: "Sales & Rentals" },
    { href: "#blogs", label: "Blogs" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  const number = "12145974922";
  const message = encodeURIComponent(
    "Hey! I came across CarNation Elite and have a few questions about your services and warranties—could someone assist me?"
  );

  // Detect mobile vs desktop
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const waBase = isMobile ? "whatsapp://send" : "https://web.whatsapp.com/send";
  const waLink = `${waBase}?phone=${number}&text=${message}`;

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo and Brand Info */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/images/logo.png"
                  alt="CarNation Elite Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold">CarNation Elite</h1>
                <a
                  href="https://www.google.com/maps/place/CarNation+Elite-+Dallas+Auto+Repair+Service/@32.93362,-96.7475204,17z/data=!3m1!4b1!4m6!3m5!1s0x864c1f4ea109cf87:0x57a4e5523cb89b2c!8m2!3d32.93362!4d-96.7449455!16s%2Fg%2F11vtbd3kgd?hl=en&entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs hover:underline"
                >
                  13610, FLOYD CIRCLE, DALLAS,TX 75243
                </a>
              </div>
            </div>

            {/* Desktop Navigation (lg and up) */}
            <nav className="hidden lg:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Contact Info (lg and up) */}

            <div className="hidden lg:flex items-center gap-8 p-4 bg-slate-800 border border-slate-700 rounded-lg shadow-sm">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                title="Message on What's App"
                className="flex items-center space-x-2 hover:text-cyan-400 transition-colors"
              >
                <FaWhatsapp className="text-green-500" size={20} />
                <span title="Message on What's App"  className="font-medium text-cyan-200">Contact</span>
              </a>
              <div className="flex items-center space-x-2">
                <Clock size={20} className="text-cyan-500" />
                <span className="font-medium text-cyan-200">
                  Mon–Sat | 9:00 – 5:00
                </span>
              </div>
              <a
                href="https://www.google.com/maps/place/CarNation+Elite-+Dallas+Auto+Repair+Service/@32.93362,-96.7475204,17z/data=!3m1!4b1!4m6!3m5!1s0x864c1f4ea109cf87:0x57a4e5523cb89b2c!8m2!3d32.93362!4d-96.7449455!16s%2Fg%2F11vtbd3kgd?hl=en&entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                title="Get Directions"
                className="flex items-center space-x-2 hover:text-cyan-400 transition-colors"
              >
                <MapPin  size={20} className="text-cyan-500" />
                <span title="Get Directions" className="font-medium text-cyan-200">Maps</span>
              </a>
            </div>

            {/* Hamburger Toggle (below lg: tablets + mobile) */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Menu (below lg) */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="lg:hidden bg-slate-800 px-4 py-4 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Contact Info */}
            <div className="pt-4 border-t border-slate-700 text-sm space-y-1">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 font-semibold hover:underline block"
              >
                +1 (214) 597-4922
                <FaWhatsapp className="inline text-green-500 ml-1" />
              </a>
              <p className="text-cyan-600 font-semibold">
                MON-SAT | 9:00 – 5:00
              </p>
              <a
                href="https://www.google.com/maps/place/CarNation+Elite-+Dallas+Auto+Repair+Service/@32.93362,-96.7475204,17z/data=!3m1!4b1!4m6!3m5!1s0x864c1f4ea109cf87:0x57a4e5523cb89b2c!8m2!3d32.93362!4d-96.7449455!16s%2Fg%2F11vtbd3kgd?hl=en&entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 font-semibold hover:underline block"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div className="pt-[84px]" />
    </>
  );
};

export default Header;

