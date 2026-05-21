import React, { useState, useEffect } from "react";

const Navbar = () => {
  // ================= STATES =================
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ================= SCROLL LISTENER =================
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ================= LOCK SCROLL WHEN MOBILE MENU IS OPEN =================
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // ================= NAVIGATION LINKS =================
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 border-b ${
        scrolled
          ? "bg-slate-900/90 border-slate-800 shadow-xl shadow-slate-950/20 backdrop-blur-lg h-20"
          : "bg-transparent border-transparent h-24"
      } flex items-center`}
    >
      <div className="max-w-6xl w-full mx-auto px-6 flex items-center justify-between relative z-50">
        
        {/* Brand Identity Logo */}
        <a href="#home" className="flex items-center gap-2 group cursor-pointer">
          <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.7)]" />
          <span className="text-xl md:text-2xl font-black text-white tracking-wider group-hover:opacity-90 transition-opacity">
            SRILAKSHMI<span className="text-red-500">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold tracking-wide text-slate-400 hover:text-white transition-colors duration-200 relative group py-2"
            >
              {link.name}
              {/* Animated Sliding Underline Hover Effect */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] rounded-full bg-gradient-to-r from-red-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Toggle Burger / Close Trigger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex md:hidden p-2 text-slate-400 hover:text-white transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* UPDATED: Full-Screen Immersive Mobile Overlay Menu Drawer */}
      <div 
        className={`fixed inset-0 w-screen h-screen bg-slate-950/98 backdrop-blur-2xl flex flex-col items-center justify-center space-y-6 px-6 md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? "opacity-100 translate-x-0 pointer-events-auto" 
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        {/* Decorative Background Glow for Mobile Menu */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-gradient-to-tr from-red-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        {navLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            style={{ transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' }}
            className={`text-2xl font-black tracking-wide text-slate-200 hover:text-red-400 active:text-red-500 transition-all duration-300 transform ${
              isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;