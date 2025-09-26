import React from 'react';

const CareerPage = () => {
  return (
    <main className="bg-[#fdf2f8] min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-4">Join Our Team</h1>
        <p className="text-gray-700 text-base sm:text-lg mb-8">
          At EleganceGeoInfoTech, we’re always looking for passionate, curious minds to help us shape the future of LiDAR, BIM, and geospatial innovation.
          If you're driven by creativity and precision, we’d love to hear from you.
        </p>

        {/* Card with double border and hover glow */}
        <div className="relative bg-white rounded-xl p-6 mb-8 border border-pink-300 hover:border-pink-500 shadow-md hover:shadow-[0_0_20px_#ec4899] transition-all duration-300 ease-in-out group">
          <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-pink-500 pointer-events-none"></div>
          <h2 className="text-xl font-semibold text-purple-500 mb-4">Current Openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-gray-700">
            <div className="bg-pink-50 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-bold text-pink-600 mb-2">BIM Modeller</h3>
              <h4 className="text-sm font-semibold text-purple-500 mb-1">Skills Needed:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Forward Engineering</li>
                <li>Scan to BIM</li>
                <li>AutoDesk Revit</li>
                <li>AutoCAD</li>
                <li>SketchUp</li>
                <li>GraphiSoft ArchiCAD</li>
              </ul>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-pink-600 mb-2">LiDAR Engineer</h3>
              <p className="text-sm text-gray-600">Opening soon — stay tuned!</p>
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="relative bg-white rounded-xl p-6 border border-pink-300 hover:border-pink-500 shadow-md hover:shadow-[0_0_20px_#ec4899] transition-all duration-300 ease-in-out group">
          <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-pink-500 pointer-events-none"></div>
          <h2 className="text-xl font-semibold text-purple-500 mb-4">For More Details</h2>
          <p className="text-gray-700 mb-2">
            📧 Email us at: <a href="mailto:elegancegeoinfotech06@gmail.com" className="text-bold text-xl hover:text-blue-800 transition-colors duration-200">elegancegeoinfotech06@gmail.com</a>
          </p>
          <p className="text-gray-700">
            📞 Call us at: <br />
            <a href="tel:+916369126125" className="text-bold text-xl hover:text-blue-800 transition-colors duration-200">+91 6369126125</a> <br />
             <a href="tel:+918884057558" className="text-bold text-xl hover:text-blue-800 transition-colors duration-200">+91 8884057558</a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default CareerPage;
