import React from 'react';
import { services } from '../constants';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-indigo-600">Our Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-2 md:px-4 lg:px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-[450px]"
          >
            <div className="p-4 flex flex-col items-center text-center h-full">
              <div className="w-70 h-80 mb-4 flex justify-center items-center overflow-hidden">
                <img
                  src={service.imageURL}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h2 className="text-2xl font-semibold text-blue-400 mb-2 p-1">{service.title}</h2>
              <ul className="text-gray-600 list-none p-0 m-0">
                {service.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
