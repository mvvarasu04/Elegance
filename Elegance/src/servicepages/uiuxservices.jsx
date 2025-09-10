import React from 'react';
import uiux1 from '../assets/serviceimages/uiux1.png';
import uiux2 from '../assets/serviceimages/uiux2.png';

const UiuxServices = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-20 text-gray-800">
      
      {/* Intro Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">Intuitive Interfaces, Seamless Experiences</h1>
          <p className="text-lg">
            At EleganceGeoInfoTech, we design digital experiences that are not only beautiful but deeply intuitive. 
            Our UI/UX design services focus on understanding user behavior, aligning with brand identity,
            and delivering interfaces that feel effortless. Whether you're building a new product or refining
            an existing one, we create designs that drive engagement, conversion, and loyalty.
          </p>
        </div>
        <div className="relative group hover:scale-105 transition-transform duration-500">
          <img
            src={uiux1}
            alt="UI/UX Design"
            className="rounded-3xl shadow-lg transform rotate-2 group-hover:rotate-0 transition-all duration-500"
          />
        </div>
      </div>

      {/* Core Services */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Core Services</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <ul className="space-y-4 text-lg">
            <li className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <strong>User Research & Persona Development:</strong> Deep dives into user needs, pain points, and motivations.
            </li>
            <li className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <strong>Information Architecture & Wireframing:</strong> Clear navigation flows and low-fidelity prototypes.
            </li>
            <li className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <strong>UI Design & Visual Styling:</strong> Pixel-perfect layouts, brand-aligned visuals.
            </li>
            <li className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <strong>Responsive & Mobile-First Design:</strong> Optimized for all devices.
            </li>
            <li className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <strong>Usability Testing & Iteration:</strong> Feedback-driven improvements.
            </li>
            <li className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <strong>Design Systems & Component Libraries:</strong> Scalable, reusable assets.
            </li>
          </ul>
          <div className="relative group hover:scale-105 transition-transform duration-500">
            <img
              src={uiux2}
              alt="UI/UX Design"
              className="rounded-3xl shadow-lg transform -rotate-2 group-hover:rotate-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white p-8 rounded-3xl shadow-xl text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
        <ul className="space-y-3 text-lg">
          <li>✅ Human-centered design approach</li>
          <li>✅ Agile, collaborative workflows</li>
          <li>✅ Brand-consistent visuals with emotional impact</li>
          <li>✅ Conversion-focused UX strategies</li>
        </ul>
        <p className="mt-4 text-md text-gray-600">
          Seamless handoff to development teams (React, Angular, WordPress, etc.)
        </p>
      </div>
    </div>
  );
};

export default UiuxServices;
