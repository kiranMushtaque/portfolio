"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // now this only renders on client
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#project", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  if (!mounted) return null; // prevent hydration mismatch

  return (
    <div className="bg-white/95 backdrop-blur-sm z-50 sticky top-0 shadow-lg border-b border-gray-100">
      <header className="text-gray-700">
        <div className="container mx-auto flex flex-wrap px-6 py-4 flex-col md:flex-row items-center">
          <a
            href="#home"
            className="flex items-center mb-4 md:mb-0 cursor-pointer"
          >
            <Image
              src="/images/Black And White Simple K For Business Or Identity Logo .png"
              alt="logo"
              width={48}
              height={48}
            />
            <span className="ml-3 text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </a>

          <nav className="hidden md:flex md:ml-auto md:mr-auto space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.label.toLowerCase())}
                className={`px-3 py-2 rounded-lg ${
                  activeSection === item.label.toLowerCase()
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg"
          >
            Get In Touch
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden ml-auto"
          >
            ☰
          </button>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="md:hidden px-6 py-4 bg-gray-50">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.label.toLowerCase())}
                className="block px-4 py-2 rounded hover:bg-gray-100"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-2 px-4 py-2 rounded bg-gradient-to-r from-blue-600 to-purple-600 text-white"
            >
              Get In Touch
            </a>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;


