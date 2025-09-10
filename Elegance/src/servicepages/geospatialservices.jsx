import React from 'react';

import geo1 from '../assets/serviceimages/geo1.jpeg';
import geo2 from '../assets/serviceimages/geo2.jpeg';
import geo3 from '../assets/serviceimages/geo3.jpeg';
import geo4 from '../assets/serviceimages/geo4.jpeg';

const cardData = [
  {
    image: geo1,
    title: '3D & HD Mapping',
    description: (
      <>
        <p>
          Elegance Geo Infotech integrates GIS, GPS, and LiDAR to enable 2D mapping, now evolving into 3D visualization and HD Mapping.
        </p>
        <p className="mt-2">
          Our services span traditional aerial imagery and advanced technologies including:
        </p>
        <ul className="list-disc list-inside text-blue-700 mt-2 space-y-1">
          <li>3D Mapping</li>
          <li>HD Mapping and AI / Machine Learning</li>
          <li>NextGen Mapping</li>
          <li>Traditional Mapping</li>
        </ul>
        <p className="mt-2">
          We deliver end-to-end geospatial solutions—from data capture to map production—serving global clients across sectors.
        </p>
      </>
    ),
  },
  {
    image: geo2,
    title: 'AI-Powered Production',
    description: (
      <>
        <p>
          With advancements in Information & Technology, Elegance Geo Infotech has expanded its services from 2D maps to immersive 3D environments.
        </p>
        <p className="mt-2">
          Our AI-powered data acquisition and automated map production make us pioneers in autonomous driving solutions.
        </p>
        <p className="mt-2">
          We embrace AI and ML to revolutionize HD map production for emerging applications.
        </p>
      </>
    ),
  },
  {
    image: geo3,
    title: 'Global Reach',
    description: (
      <>
        <ul className="list-disc list-inside text-blue-700 space-y-1 mb-2">
          <li>More than 55 Million Tax Parcel Mapping</li>
          <li>City Mapping for more than 45,000 sq. km Across Globe</li>
          <li>Nearly 1200 km of HD Mapping for Autonomous Driving</li>
        </ul>
        <p>
          Our mapping services support governments and private sectors with contour maps, atlas maps, tax parcel maps, and more.
        </p>
      </>
    ),
  },
  {
    image: geo4,
    title: 'Next-Gen Navigation',
    description: (
      <>
        <p>
          We've created navigational content covering 232,283 km for various cities worldwide for a reputed mobile company.
        </p>
        <p className="mt-2">
          Leveraging AI and ML, we deliver HD maps for next-gen applications in mobility, tourism, and urban infrastructure.
        </p>
      </>
    ),
  },
];

const GeospatialServices = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#e0e7ff] to-[#f0f0f0] py-12 px-6">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-indigo-700 tracking-tight">
            Geospatial Mapping Services
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Precision mapping meets innovation—powered by AI, LiDAR, and global expertise.
          </p>
        </div>

        {/* Flex Card Grid */}
        <div className="flex flex-wrap justify-center gap-10">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-3xl shadow-2xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-shadow duration-300 w-full sm:w-[90%] lg:w-[45%] xl:w-[42%] p-6 group min-h-[600px]"
            >
              <div className="overflow-hidden rounded-2xl mb-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[300px] object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-2xl font-bold text-indigo-600 mb-4 group-hover:underline">
                {card.title}
              </h2>
              <div className="text-gray-700 text-base leading-relaxed">
                {card.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeospatialServices;
