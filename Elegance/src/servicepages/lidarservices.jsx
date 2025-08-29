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



const GeospatialServices = () => {
  return (
    <div className="min-h-screen bg-[#f0f0f0] py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-indigo-600">🌍 LiDAR Engineering </h1>
      <div className=" mx-auto bg-white rounded-xl shadow-lg p-6">
       <img
          src={lidar1}
          alt="Lidar Projects"
          className="w-full h-full object-contain rounded-md mb-6"
        />
        <h2>Advanced Mobile Mapping for the Future</h2>
        <p>Experience the power of our next-generation Mobile Mapping System, uniquely designed to 
          combine high-precision LiDAR technology with high-resolution 360° panoramic imaging. </p>
        <img
          src={lidar}
          alt="Lidar Projects"
          className="w-full h-full object-contain rounded-md mb-6"
        />
        <p>The vast expertise of Elegance geo infotech to integrate GIS, GPS and LiDAR services to allow 2D
           mapping is now embracing 3D visualization and High Definition (HD) Mapping.</p>
          <p>Our services encompass both traditional aerial imagery and new age technologies including </p>
        <img
          src={lidar2}
          alt="Lidar Projects"
          className="w-full h-full object-contain rounded-md mb-6"
        />
          <img
          src={lidar3}
          alt="Lidar Projects"
          className="w-full h-full object-contain rounded-md mb-6"
        />
         <img
          src={lidar4}
          alt="Lidar Projects"
          className="w-full h-full object-contain rounded-md mb-6"
        />
         <img
          src={lidar5}
          alt="Lidar Projects"
          className="w-full h-full object-contain rounded-md mb-6"
        />
        <p>Aerial Lidar (Light Detection and Ranging) is aerial mapping technology that uses calibrated laser
           returns from the earth’s surface are reflected to an overflying GPS-monitored aircraft equipped 
           with on-board positional and IMU sensors. After post-flight production processes, the acquired
            Lidar Map data determines the precise elevation and geospatial location of features on the earth’s surface.
             With innovations such as multiple intensity returns and increased pulse repetition rates, 
             Lidar data is an accurate and effective method for creating three-dimensional topographical aerial maps
           and highly accurate aerial surveys of both surface terrain elements and man-made structures.</p>
          <p>Lidar is commonly used to make high-resolution maps, with applications in surveying, geodesy,
             geomatics, archaeology, geography, geology, geomorphology, seismology, forestry, atmospheric physics, laser
              guidance, airborne laser swath mapping (ALSM), and laser altimetry. The technology is also used in control
               and navigation for autonomous cars.Elegencegeoinfotech has processed more than 10,000 Km of electric
                powerline across the world, through its seasoned team elegance Geo infotech provides LiDAR post processing
                 services which includes but is not limited to the following </p>

         <img
          src={lidar6}
          alt="Lidar Projects"
          className="w-full h-full object-contain rounded-md mb-6"
        /> 
          <img
          src={lidar7}
          alt="Lidar Projects"
          className="w-full h-full object-contain rounded-md mb-6"
        /> 
          <img
          src={lidar8}
          alt="Lidar Projects"
          className="w-full h-full object-contain rounded-md mb-6"
        />   
          <img
          src={lidar9}
          alt="Lidar Projects"
          className="w-full h-full object-contain rounded-md mb-6"
        /> 
          <img
          src={lidar10}
          alt="Lidar Projects"
          className="w-full h-full object-contain rounded-md mb-6"
        /> 
          <img
          src={lidar11}
          alt="Lidar Projects"
          className="w-full h-full object-contain rounded-md mb-6"
        />  
         <img
          src={lidar12}
          alt="Lidar Projects"
          className="w-full h-full object-contain rounded-md mb-6"
        />

        <h1>How it works</h1>
        <ul>
          <li>Laser scanners measure 3D points on the surface of the earth</li>
          <li>A platform (tripod or vehicle mount) with a laser ranging system is moved around the relevant area</li>
          <li>Lasers utilized emit millions of pulses per second</li>
          <li>The travel time of these pulses is timed and recorded</li>
          <li>The X, Y, and Z measurements are displayed as a "point cloud“ </li>
          <li>Precise elevations are derived from the point cloud data</li>
          <li>Can be viewed, measured and navigated as a 3D model</li>
          <li>Provides incredible insight into the project site,In the case of terrestrial acquisition, the LiDAR system is typically mounted on a tripod or stationary device. At narrow/difficult places the system is carried on a backpack. </li>
          <li>For mobile acquisition, the LiDAR system is mounted on a moving vehicle.</li>
          <li>Airborne LiDAR system is installed in either a fixed-wing aircraft or helicopter.
             The laser light is emitted toward the ground and returned to the moving airborne LiDAR sensor</li>

        </ul>

        <h1>Key Achievements</h1>
        <ul>
          <li>More than 75,000 linear km of road mapping in India</li>
          <li>More than 3000 km of railroad corridor mapping</li>
          <li>Over 250,000 linear km, spanning 65 major cities across India, of street-level 360-degree panoramic imagery data acquisition</li>
         

          </ul>

          <h1>lIdar services provide highly accurate data to develop -</h1>
           <ul>
            <li>Topographical Maps</li>
            <li>3D Building Model</li>
            <li>DTM/DSM</li>
            <li>3D Flythrough</li>
            <li>3D City Maps</li>
           </ul>

           <p>Our in-house viewer application provides a ‘Real World’ experience by allowing viewing 
            LiDAR Point Cloud Data augmented with 360-Degree Panoramic Imageries</p>
      </div>
    </div>
  );
};

export default GeospatialServices;





import React from 'react';
// import { lidarservices  } from '../constants';


// const LidarServices = () => {
//   return (
//     <>
//      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-indigo-600">
//         Our Lidar Services
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//         {lidarservices.map((service, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 mt-10 lg:mt-10"

//           >
//             <div className="p-4 flex flex-col items-center text-center">
//               <div className="w-full h-72 mb-4 flex justify-center items-center overflow-hidden rounded-md">
//                 <img
//                   src={service.imageURL}
//                   alt={service.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <h2 className="text-2xl font-semibold text-blue-500 mb-2">
//                 {service.title}
//               </h2>
//               <ul className="text-gray-700 text-sm sm:text-base list-none space-y-2">
//                 {service.points.map((point, idx) => (
//                   <li key={idx}>{point}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };

// export default LidarServices;
