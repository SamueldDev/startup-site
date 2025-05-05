

import React from 'react'

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-20 bg-white text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple Pricing</h2>
    <p className="text-gray-600 mb-10">Start free. Upgrade when you're ready.</p>
  
    <div className="max-w-xl mx-auto bg-gray-50 rounded-xl shadow-md p-8">
      <h3 className="text-2xl font-semibold mb-2">Pro Plan</h3>
      <p className="text-gray-600 mb-4">$9/month — Unlimited everything</p>
      <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">Start Free Trial</a>
    </div>
  </section>
  
  )
}
