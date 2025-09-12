import React from 'react';
import background2 from '../assets/images/background2.png';
import backbottom from '../assets/icons/backbottom.png';





const Home = () => {
  return (
    <div
      className="min-h-screen relative bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${background2})` }}
    >
      {/* Hero Section */}
      <div className="pt-10 text-center text-white px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Elegance Geo Infotech Pvt Ltd
        </h1>
        <h2 className="text-xl md:text-2xl font-bold mb-4 py-5 leading-relaxed">
          We turn complex geospatial data into actionable intelligence
          that drives smarter, faster, and greener decisions.
        </h2>
      </div>

      {/* Middle Section - Left Column */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-6 md:px-20 mt-10 md:mt-20">
        {/* Image Left */}
       
        {/* Text Right */}
        <div className="flex-1 text-white text-lg md:text-xl space-y-4 text-center md:text-left">
          <p>✔️ Precision at every point – delivering granular, location-based insights</p>
          <p>✔️ Future-ready solutions – empowering enterprises in their digital transformation</p>
          <p>✔️ Cutting-edge expertise – blending GIS, LiDAR, and 3D mapping for real-world impact</p>
        </div>
         
        
      </div>

      {/* Bottom Section - Right Column */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-6 md:px-20 mt-16 md:mt-32">
       
       {/* Image Right */}
        <div className="flex-1 flex justify-center relative">
          <img
            src={backbottom}
            alt="Background"
            className="w-1/2 md:w-1/2 -z-10 "
          />
        </div> {/* Text Left */}
        <div className="flex-1 text-white text-lg md:text-xl text-center md:text-left">
          <p>
            With our pioneering GIS services and 3D mapping capabilities, we don’t just map
            locations — we unlock opportunities, accelerate innovation, and fuel sustainable growth
            for your business.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
