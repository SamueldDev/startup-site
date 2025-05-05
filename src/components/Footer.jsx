


import React from 'react'


import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-10 px-6 text-center text-gray-600 border-t">
      <div className="mb-4 text-2xl font-bold text-blue-600">Brightly</div>

      <div className="flex justify-center gap-6 mb-4">
        <a href="#" className="hover:text-blue-600" aria-label="Facebook">
          <Facebook size={20} />
        </a>
        <a href="#" className="hover:text-blue-600" aria-label="Twitter">
          <Twitter size={20} />
        </a>
        <a href="#" className="hover:text-blue-600" aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
      </div>

      <p className="text-sm">&copy; {new Date().getFullYear()} Brightly. All rights reserved.</p>
    </footer>
  );
}
