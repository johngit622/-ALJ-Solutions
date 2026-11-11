import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0E1824]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="ALJ Solutions"
            className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110"
          />

          <div>
            <h1 className="text-2xl font-bold text-cyan-300">ALJ</h1>

            <p className="text-xs tracking-[0.35em] text-gray-300 uppercase">
              Solutions
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-cyan-300 transition duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="bg-cyan-400 hover:bg-cyan-300 text-[#0E1824] px-6 py-3 rounded-full font-semibold transition duration-300 shadow-lg shadow-cyan-400/30"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-cyan-400"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-125" : "max-h-0"
        }`}
      >
        <div className="bg-[#111d2c] px-6 pb-6 pt-2 space-y-5">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-cyan-400 transition"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-cyan-300 hover:bg-cyan-300 text-[#0E1824] py-3 rounded-full font-semibold transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
