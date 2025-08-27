import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../constants';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <div className="text-center py-20 text-red-500">Service not found.</div>;
  }

  return (
    <div className="min-h-screen bg-white py-10 px-4 md:px-10">
      <Link to="/" className="text-indigo-500 hover:underline mb-4 block">← Back to Services</Link>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-600 mb-6">{service.title}</h1>
        <img
          src={service.imageURL}
          alt={service.title}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
        <ul className="text-lg text-gray-700 space-y-4">
          {service.points.map((point, idx) => (
            <li key={idx}>• {point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceDetail;
