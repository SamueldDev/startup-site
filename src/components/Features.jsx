
import React from 'react'


import { CheckCircle } from 'lucide-react'; 

const features = [
  {
    title: "Task Boards",
    description: "Visualize your work with intuitive Kanban boards.",
  },
  {
    title: "Real-time Collaboration",
    description: "Work with teammates live—no delays, no confusion.",
  },
  {
    title: "Smart Reminders",
    description: "Stay on track with intelligent, timely reminders.",
  },
  {
    title: "Mobile Friendly",
    description: "Manage tasks on the go with our responsive design.",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Powerful Features</h2>
      <p className="text-gray-600 mb-12">
        Everything you need to organize your team and tasks in one place.
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-4">
            <CheckCircle className="text-blue-600 mt-1" size={28} />
            <div className="text-left">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

