import React from 'react';
import lidar from '../assets/lidarimages/lidar.jpeg';
import lidar1 from '../assets/lidarimages/lidar1.jpeg';
import lidar2 from '../assets/lidarimages/lidar2.jpeg';
import lidar3 from '../assets/lidarimages/lidar3.jpeg';
import lidar4 from '../assets/lidarimages/lidar4.jpeg';
import lidar5 from '../assets/lidarimages/lidar5.jpeg';
import lidar6 from '../assets/lidarimages/lidar6.jpeg';
import lidar7 from '../assets/lidarimages/lidar7.jpeg';
import lidar8 from '../assets/lidarimages/lidar8.jpeg';
import lidar9 from '../assets/lidarimages/lidar9.jpeg';
import lidar10 from '../assets/lidarimages/lidar10.jpeg';
import lidar11 from '../assets/lidarimages/lidar11.jpeg';
import lidar12 from '../assets/lidarimages/lidar12.jpeg';

const LidarServices = () => {
  return (
    <div className="min-h-screen w-full bg-[#f0f0f0] py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-indigo-600 tracking-tight">
          🌍 LiDAR Engineering
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          {/* Intro Content */}
          <section className="text-left">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Advanced Mobile Mapping for the Future</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4 text-center">
              Experience the power of our next-generation Mobile Mapping System, combining high-precision LiDAR
              technology with high-resolution 360° panoramic imaging.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-6 text-center">
              Elegance Geo Infotech integrates GIS, GPS, and LiDAR services to enable 2D mapping, now enhanced with
              3D visualization and HD Mapping. Our services span traditional aerial imagery and cutting-edge technologies.
            </p>
          </section>

          {/* Two Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <img src={lidar1} alt="Lidar Project 1" className="w-full aspect-video object-cover rounded-md" />
            <img src={lidar4} alt="Lidar Project 2" className="w-full aspect-video object-cover rounded-md" />
          </div>

          {/* How It Works */}
          <section className="text-left mb-10">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4   text-center">🔧 How It Works</h2>
            <ul className="list-disc list-inside text-gray-700 text-base space-y-2 leading-relaxed text-center">
              <li>Laser scanners measure 3D points on the earth’s surface</li>
              <li>Mounted on tripods, vehicles, or backpacks for mobility</li>
              <li>Millions of pulses per second timed and recorded</li>
              <li>Data forms a "point cloud" for 3D modeling</li>
              <li>Precise elevations derived from point cloud data</li>
              <li>Supports terrestrial, mobile, and airborne acquisition</li>
              <li>Airborne systems use fixed-wing aircraft or helicopters</li>
            </ul>
          </section>

          {/* More Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <img src={lidar2} alt="Lidar Project 3" className="w-full aspect-video object-cover rounded-md" />
            <img src={lidar3} alt="Lidar Project 4" className="w-full aspect-video object-cover rounded-md" />
            <img src={lidar} alt="Lidar Project 5" className="w-full aspect-video object-cover rounded-md" />
            <img src={lidar5} alt="Lidar Project 6" className="w-full aspect-video object-cover rounded-md" />
          </div>

          {/* Key Achievements */}
          <section className=" mb-10 text-center">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">🏆 Key Achievements</h2>
            <ul className="list-disc list-inside text-gray-700 text-base space-y-2 leading-relaxed">
              <li>75,000+ linear km of road mapping in India</li>
              <li>3,000+ km of railroad corridor mapping</li>
              <li>250,000+ km of panoramic imagery across 65 cities</li>
            </ul>
          </section>

          {/* More Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 text-center">
            <img src={lidar6} alt="Lidar Project 7" className="w-full aspect-video object-cover rounded-md" />
            <img src={lidar7} alt="Lidar Project 8" className="w-full aspect-video object-cover rounded-md" />
            <img src={lidar8} alt="Lidar Project 9" className="w-full aspect-video object-cover rounded-md" />
            <img src={lidar9} alt="Lidar Project 10" className="w-full aspect-video object-cover rounded-md" />
          </div>

          {/* Services Deliver */}
          <section className="text-center mb-10">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">📌 LiDAR Services Deliver</h2>
            <ul className="list-disc list-inside text-gray-700 text-base space-y-2 leading-relaxed">
              <li>Topographical Maps</li>
              <li>3D Building Models</li>
              <li>DTM / DSM</li>
              <li>3D Flythroughs</li>
              <li>3D City Maps</li>
            </ul>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <img src={lidar11} alt="Lidar Project 1" className="w-full aspect-video object-cover rounded-md" />
            <img src={lidar12} alt="Lidar Project 2" className="w-full aspect-video object-cover rounded-md" />
          </div>

          {/* Closing Paragraph */}
          <p className="text-gray-700 text-base leading-relaxed">
            Our in-house viewer application provides a ‘Real World’ experience by allowing LiDAR Point Cloud Data
            to be viewed alongside 360° Panoramic Imageries.
          </p>

         

           {/* Final Image */}
          <div className="mb-10">
            <img src={lidar10} alt="Final Lidar Project" className="w-full aspect-video object-cover rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LidarServices;
