import React from 'react'

import lidar1 from '../assets/lidarimages/lidar1.jpg'; // adjust path as needed

const DigitalServices = () => {
  return (
    <div className="min-h-screen bg-[#f0f0f0] py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-indigo-600">Digital Marketing & SEO Projects</h1>
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <img
          src={lidar1}
          alt="Lidar Projects"
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <ul className="text-gray-700 text-base space-y-2">
          <li>• It is a remote sensing technology that uses laser beams to measure distances and create precise 3D models of the real world.</li>
        </ul>
      </div>
    </div>
  );
};

export default DigitalServices;
