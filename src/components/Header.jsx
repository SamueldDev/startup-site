



import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">Brightly</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-600">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#pricing" className="hover:text-blue-600">Pricing</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* CTA */}
        <a href="#cta" className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700">
          Get Started
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-white text-gray-600 border-t">
          <a href="#features" onClick={toggleMenu} className="hover:text-blue-600">Features</a>
          <a href="#pricing" onClick={toggleMenu} className="hover:text-blue-600">Pricing</a>
          <a href="#about" onClick={toggleMenu} className="hover:text-blue-600">About</a>
          <a href="#contact" onClick={toggleMenu} className="hover:text-blue-600">Contact</a>
          <a href="#cta" onClick={toggleMenu} className="bg-blue-600 text-white text-center py-2 rounded-xl hover:bg-blue-700">
            Get Started
          </a>
        </nav>
      )}
    </header>
  );
}



  