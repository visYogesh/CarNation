import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  // height light nav links

  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px 0px -60% 0px", // triggers early
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

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
  { href: "#sales-rentals", label: "Sales" },
  // { href: "#blogs", label: "Blogs" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

  const number = "12145974922";
  const message = encodeURIComponent(
    "Hey! I came across CarNation Elite and have a few questions about your services and warranties—could someone assist me?"
  );
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const waBase = isMobile ? "whatsapp://send" : "https://web.whatsapp.com/send";
  const waLink = `${waBase}?phone=${number}&text=${message}`;

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between">
            {/* Logo + Address (left) */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="CarNation Elite Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-purple-500 text-xl md:text-2xl font-bold">
                  CarNation Elite
                </h1>
                <a
                  href="https://www.google.com/maps/place/CarNation+Elite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs hover:underline"
                >
                  13610, FYD CIRCLE, DALLAS, TX 75243
                </a>
              </div>
            </div>

            {/* Hamburger Menu (mobile) */}
            <div className="lg:hidden ml-auto">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Centered Nav Links (desktop only) */}
            <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-6">
              {navLinks.map((link) => {
                const isActive = activeId === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`transition-colors font-medium ${
                      isActive
                        ? "text-green-500"
                        : "text-white hover:text-green-300"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Book Button (desktop only) */}
            <div className="hidden lg:block ml-auto">
              <button
                onClick={() =>
                  window.open("https://calendly.com/carnationelite", "_blank")
                }
                className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-purple-600 transition-colors text-sm md:text-base"
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Mobile/Tablet Book Button */}
          <div className="lg:hidden w-full mt-4 flex justify-center">
            <button
              onClick={() =>
                window.open("https://calendly.com/carnationelite", "_blank")
              }
              className="bg-purple-500 text-white px-2 py-2 rounded-lg shadow-md hover:bg-purple-600 transition-colors text-base w-auto max-w-xs"
            >
              Book Appointment
            </button>
          </div>
        </div>

        {/* Mobile Nav Links */}
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

            {/* Contact Info */}
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
                href="https://www.google.com/maps/place/CarNation+Elite"
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

      {/* Spacer */}
      <div className="pt-[110px]" />
    </>
  );
};

export default Navbar;
