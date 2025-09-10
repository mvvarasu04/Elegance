// src/pages/AiServices.jsx
import React from 'react';
import ai1 from '../assets/serviceimages/ai1.jpeg';
import ai2 from '../assets/serviceimages/ai2.jpeg';

const services = [
  {
    title: '🔍 Data Analytics & Insights',
    description:
      'Unlock hidden patterns in your data with AI algorithms that predict trends and guide smarter business decisions.',
  },
  {
    title: '🤖 Machine Learning Applications',
    description:
      'Custom ML models that adapt, learn, and improve over time—empowering your business with intelligent automation.',
  },
  {
    title: '🗣️ Natural Language Processing (NLP)',
    description:
      'Smarter communication through AI-powered chatbots, voice assistants, and text analysis tools.',
  },
  {
    title: '👁️ Computer Vision',
    description:
      'Image and video recognition systems for industries like healthcare, retail, manufacturing, and security.',
  },
  {
    title: '⚙️ AI Process Automation',
    description:
      'Streamline repetitive tasks, reduce costs, and increase efficiency with AI-powered automation.',
  },
  {
    title: '☁️ Cloud AI Solutions',
    description:
      'Scalable and secure AI systems hosted on leading cloud platforms for real-time performance.',
  },
];

const AiServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fefefe] to-[#f0f0f0] py-16 px-6 lg:px-20">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Transforming Businesses with Artificial Intelligence
        </h1>
        <p className="text-lg text-gray-600">
          At <span className="font-semibold">ELEGANCE GEO INFO TECH</span>, we help businesses harness the power of AI-driven innovation to work smarter, faster, and more efficiently. From automation to predictive insights, our AI solutions are built to solve real-world challenges and create future-ready opportunities.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-12">
        <img src={ai1} alt="AI Design" className="rounded-2xl shadow-md w-full object-cover" />
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Our AI Services Include</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12">
        <img src={ai2} alt="AI Design" className="rounded-2xl shadow-md w-full object-cover" />
      </div>

      {/* Why Us Section */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">💡 Why Partner with Us?</h2>
        <ul className="space-y-3 text-gray-600 text-lg">
          <li>✅ AI solutions tailored to your industry</li>
          <li>✅ End-to-end services: strategy, development, and deployment</li>
          <li>✅ Measurable results with data-driven impact</li>
          <li>✅ Future-ready technology to keep you ahead</li>
        </ul>
      </div>

      {/* Closing Section */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🌟 Shape the Future with AI</h2>
        <p className="text-lg text-gray-600">
          Artificial Intelligence is no longer the future—it’s the present. Let us help you integrate AI into your business strategy to unlock growth, innovation, and efficiency.
        </p>
      </div>
    </div>
  );
};

export default AiServices;
