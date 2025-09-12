import React from 'react'



const CareerPage = () => {
  return (
    <main className="bg-[#fdf2f8] min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-4">Join Our Team</h1>
        <p className="text-gray-700 text-base sm:text-lg mb-8">
          At EleganceGeoInfoTech, we’re always looking for passionate, curious minds to help us shape the future of LiDAR, BIM, and geospatial innovation.
          If you're driven by creativity and precision, we’d love to hear from you.
        </p>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-purple-500 mb-2">Current Openings</h2>
          <ul className="text-gray-700 list-disc list-inside text-left">
            
            <li>3D Visualization Specialist (GLTF, Three.js)</li>
            <li>Geospatial Analyst (LiDAR/BIM)</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-purple-500 mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-2">
            📧 Email us at: <a href="mailto:elegancegeoinfotech06@gmail.com" className="text-blue-600 underline">elegancegeoinfotech06@gmail.com</a>
          </p>
          <p className="text-gray-700">
            📞 Call us at: <a href="tel:+916369126125" className="text-blue-600 underline">+91 6369126125</a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default CareerPage;

 