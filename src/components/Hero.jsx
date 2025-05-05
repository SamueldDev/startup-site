
import React from 'react'

import heroImg from "../assets/startup.jpg"; // Replace with your image

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center gap-10 px-6 py-20 bg-gray-50">
      {/* Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Smarter Task Management for Teams
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Brightly helps you stay focused and productive with intuitive collaboration tools.
        </p>
        <a href="#cta" className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
          Get Started Free
        </a>
      </div>

      {/* Image */}
      <div className="md:w-1/2">
        <img src={heroImg} alt="App screenshot" className="w-full max-w-md mx-auto" />
      </div>
    </section>
  );
}
