import React from 'react'

import geospatial from '../assets/serviceimages/geospatial.jpeg'; 
import geospatial2 from '../assets/serviceimages/geospatial2.jpeg'; 
import geospatial3 from '../assets/serviceimages/geospatial3.jpeg'; 

const GeospatialServices = () => {
  return (
    <div className="min-h-screen bg-[#f0f0f0] py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-indigo-600">GEOSPATIAL MAPPING</h1>
      <div className=" mx-auto bg-white rounded-xl shadow-lg p-6">
        <img
          src={geospatial}
          alt="Geospatial Projects"
          className="w-full h-full object-contain rounded-md mb-6"
        />
        <p>The vast expertise of Elegance geo infotech to integrate GIS, GPS and LiDAR services to allow 2D
           mapping is now embracing 3D visualization and High Definition (HD) Mapping.</p>
          <p>Our services encompass both traditional aerial imagery and new age technologies including </p>
        <ul className="text-gray-700 text-base space-y-2">
          <li> 3D mapping</li>
          <li>HD mapping and AI / Machine Learning</li>
          <li>NextGen Mapping</li>
          <li>Traditional Mapping</li>

        </ul>
        <p>Our end-to-end geospatial services range from data capture, conversion and processing to integration, maintenance and update. 
          Elegance geo infotech has successfully implemented projects for global customers including public and private sector
           entities to produce contour maps, atlas maps, tax parcel maps, thematic, zonal maps and environmental maps 
          from disparate sources like paper maps, pre-existing digital data, aerial imagery and field-collected information.</p>
        <img
          src={geospatial2}
          alt="Geospatial Projects"
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <p>
          With the advancements in Information & Technology, Elegance geo infotech has expanded its services 
          from 2D maps to the 3D virtual geographic environment for urban planning, archaeological research, 
          security and surveillance, tourism and transport management. Our data acquisition technologies and
           automated map production using artificial intelligence techniques
           have made us one of the front runners in India venturing into autonomous driving
        </p>
        <p>
          Elegance geo infotech has successfully created flawless navigation maps that need high
           positional accuracy. Expertise in LiDAR data processing and feature capturing has enabled 
           Elegance geo infotech to extend its services to produce exquisite intelligent maps with precision 
          navigational geometry and 360° Panoramic Imagery for an autonomous driving system.
        </p>
        <p>Elegance geo infotech has successfully embraced new-age technologies such as Artificial Intelligence (AI) and 
          Machine Learning (ML) that transform the production of High Definition (HD) maps for emerging applications.</p>
        <img
          src={geospatial3}
          alt="Geospatial Projects"
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h1>Key Achievements</h1>
        <ul className="text-gray-700 text-base space-y-2">
          <li> More than 55 Million Tax Parcel Mapping</li>
          <li>City Mapping for more than 45,000 sq. km Across Globe</li>
          <li>Nearly 1200 km of HD Mapping for Autonomous Driving</li>
        </ul>
        <p>Created navigational content covering 2,32283 km for various cities worldwide for a reputed
           mobile company has successfully embraced new-age technologies such as Artificial Intelligence (AI) and Machine Learning (ML) that
           transform the production of High Definition (HD) maps for emerging applications.</p>
      </div>
    </div>
  );
};

export default GeospatialServices;
