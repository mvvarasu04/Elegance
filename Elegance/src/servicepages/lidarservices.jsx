// src/pages/LidarServices.jsx
import React from 'react';
import { lidarservices  } from '../constants';


const LidarServices = () => {
  return (
    <>
     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-indigo-600">
        Our Lidar Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {lidarservices.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 mt-10 lg:mt-10"

          >
            <div className="p-4 flex flex-col items-center text-center">
              <div className="w-full h-72 mb-4 flex justify-center items-center overflow-hidden rounded-md">
                <img
                  src={service.imageURL}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-semibold text-blue-500 mb-2">
                {service.title}
              </h2>
              <ul className="text-gray-700 text-sm sm:text-base list-none space-y-2">
                {service.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default LidarServices;
