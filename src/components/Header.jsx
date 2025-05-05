
import React from 'react'


export default function Header() {
    return (
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          Brightly
        </div>
  
        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-600">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#pricing" className="hover:text-blue-600">Pricing</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
  
        {/* CTA */}
        <a href="#cta" className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700">
          Get Started
        </a>
      </header>
    );
  }
  