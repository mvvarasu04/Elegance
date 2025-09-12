import React from 'react';
import bus1 from '../assets/serviceimages/bus1.jpeg';
import bus2 from '../assets/serviceimages/bus2.jpeg';


const BusdataServices = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-8 lg:px-20 text-gray-800">

      {/* Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-600 mb-6">Unlock the Power of Your Data</h1>
        <p className="text-lg leading-relaxed text-gray-700">
          In today’s competitive world, data is the driving force behind smarter decisions, operational efficiency, and business growth.
          Our Business & Data Analytics solutions transform raw information into meaningful insights that help organizations stay ahead.
        </p>
      </div>

      {/* Section with Image and BI/DAI/BDS/AI Cards */}
      <div className="grid lg:grid-cols-2 gap-10 mb-20 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={bus1}
            alt="Business Analytics"
            className="rounded-3xl shadow-lg w-full max-w-[600px] object-cover"
          />
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 gap-6">
          {[
            {
              title: '🔹 Business Intelligence (BI)',
              points: [
                'Interactive dashboards & reports',
                'Real-time performance tracking',
                'Custom KPIs aligned with your goals',
              ],
              gradient: 'from-indigo-100 to-indigo-50',
            },
            {
              title: '🔹 Data Analytics & Insights',
              points: [
                'Descriptive, diagnostic, predictive & prescriptive analytics',
                'Market & customer behavior analysis',
                'Risk and trend forecasting',
              ],
              gradient: 'from-purple-100 to-purple-50',
            },
            {
              title: '🔹 Big Data Solutions',
              points: [
                'Handling large-scale structured & unstructured data',
                'Cloud-based storage & analytics platforms',
                'Scalable data pipelines for enterprise needs',
              ],
              gradient: 'from-pink-100 to-pink-50',
            },
            {
              title: '🔹 Advanced Analytics (AI & ML)',
              points: [
                'Predictive modeling & machine learning',
                'Process automation with AI-driven insights',
                'Smart recommendations for decision-making',
              ],
              gradient: 'from-green-100 to-green-50',
            },
          ].map((card, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl shadow-md bg-gradient-to-br ${card.gradient} hover:shadow-xl transition`}
            >
              <h3 className="text-lg font-semibold text-teal-700 mb-3">{card.title}</h3>
              <ul className="space-y-1  text-gray-700">
                {card.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Our Approach */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-indigo-600 text-center mb-8">Our Approach</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Understand Your Business – Deep dive into your goals and challenges',
            'Collect & Clean Data – Ensure accuracy and reliability',
            'Analyze & Model – Apply advanced analytics and AI/ML',
            'Visualize & Deliver Insights – Easy-to-understand dashboards & reports',
            'Empower Decisions – Support continuous improvement with real-time data',
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition  text-gray-800"
            >
              <p>• {step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="mb-20 text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">Industries We Serve</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700  mb-10">
          <p>✅ Finance & Banking</p>
          <p>✅ Retail & E-commerce</p>
          <p>✅ Healthcare & Life Sciences</p>
          <p>✅ Manufacturing & Supply Chain</p>
          <p>✅ Real Estate & Infrastructure</p>
        </div>
        <div className="flex justify-center">
          <img
            src={bus2}
            alt="Industries"
            className="w-full max-w-[600px] rounded-3xl shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Final Section */}
      <div className="grid md:grid-cols-1 gap-10 items-center text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-indigo-600">Let’s Transform Your Data into Growth</h2>
          <p className="text-gray-700 text-md">
            Partner with us to unlock hidden opportunities, minimize risks, and make informed decisions with confidence.
          </p>
        </div>
    
      </div>

    </div>
  );
};

export default BusdataServices;
