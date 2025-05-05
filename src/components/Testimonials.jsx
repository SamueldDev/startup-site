

import React from 'react'


import sarah from "../assets/headshot4.jpg"
import james from "../assets/headshot6.jpg"
import emily from "../assets/headshot5.jpg"

const testimonials = [
    {
      name: "Sarah Lin",
      role: "Product Manager at Flowly",
      quote: "Brightly transformed how our team collaborates. It's clean, fast, and intuitive!",
      avatar: sarah,
    },
    {
      name: "James Patel",
      role: "Startup Founder",
      quote: "We've tried dozens of tools — Brightly is the one that stuck. Simple and powerful.",
      avatar: james,
    },
    {
      name: "Emily Garcia",
      role: "Marketing Lead at SyncUp",
      quote: "The real-time features and beautiful UI make it a joy to use every day.",
      avatar: emily
    }
  ];
  
  export default function Testimonials() {
    return (
      <section className="px-6 py-20 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">What People Are Saying</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-left">
              <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  