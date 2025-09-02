import React from 'react';

import geospatial from '../assets/serviceimages/geospatial.jpeg';
import geospatial2 from '../assets/serviceimages/geospatial2.jpeg';
import geospatial3 from '../assets/serviceimages/geospatial3.jpeg';

const GeospatialServices = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#e0e7ff] to-[#f0f0f0] py-10 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-indigo-600 tracking-tight">
          GEOSPATIAL MAPPING
        </h1>

        <div className="bg-white/80 backdrop-blur-md border border-white/30 rounded-xl shadow-xl p-6 sm:p-10">
          {/* First Image */}
          <div className="mb-8">
            <img
              src={geospatial}
              alt="Geospatial Projects"
              className="w-full aspect-video object-cover rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300"
            />
          </div>

          {/* Intro Content */}
          <section className="text-left mb-8">
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              The vast expertise of Elegance Geo Infotech to integrate GIS, GPS and LiDAR services to allow 2D
              mapping is now embracing 3D visualization and High Definition (HD) Mapping.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              Our services encompass both traditional aerial imagery and new age technologies including:
            </p>
            <ul className="list-disc list-inside text-blue-700 text-lg space-y-2 mb-6">
              <li>3D Mapping</li>
              <li>HD Mapping and AI / Machine Learning</li>
              <li>NextGen Mapping</li>
              <li>Traditional Mapping</li>
            </ul>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              Our end-to-end geospatial services range from data capture, conversion and processing to integration,
              maintenance and update. Elegance Geo Infotech has successfully implemented projects for global customers
              including public and private sector entities to produce contour maps, atlas maps, tax parcel maps,
              thematic, zonal maps and environmental maps from disparate sources like paper maps, pre-existing digital
              data, aerial imagery and field-collected information.
            </p>
          </section>

          {/* Second Image */}
          <div className="mb-8">
            <img
              src={geospatial2}
              alt="Geospatial Projects"
              className="w-full aspect-video object-cover rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300"
            />
          </div>

          {/* Extended Content */}
          <section className="text-left mb-8">
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              With advancements in Information & Technology, Elegance Geo Infotech has expanded its services
              from 2D maps to the 3D virtual geographic environment for urban planning, archaeological research,
              security and surveillance, tourism and transport management.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              Our data acquisition technologies and automated map production using artificial intelligence techniques
              have made us one of the front runners in India venturing into autonomous driving.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              Elegance Geo Infotech has successfully created flawless navigation maps that need high positional accuracy.
              Expertise in LiDAR data processing and feature capturing has enabled us to produce intelligent maps with
              precision navigational geometry and 360° Panoramic Imagery for autonomous driving systems.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              We’ve embraced new-age technologies such as Artificial Intelligence (AI) and Machine Learning (ML) to
              transform the production of High Definition (HD) maps for emerging applications.
            </p>
          </section>

          {/* Third Image */}
          <div className="mb-8">
            <img
              src={geospatial3}
              alt="Geospatial Projects"
              className="w-full aspect-video object-cover rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300"
            />
          </div>

          {/* Achievements */}
          <section className="text-left mb-8">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Key Achievements</h2>
            <ul className="list-disc list-inside text-blue-700 text-lg space-y-2 mb-6">
              <li>More than 55 Million Tax Parcel Mapping</li>
              <li>City Mapping for more than 45,000 sq. km Across Globe</li>
              <li>Nearly 1200 km of HD Mapping for Autonomous Driving</li>
            </ul>
            <p className="text-gray-700 text-base leading-relaxed">
              We’ve created navigational content covering 232,283 km for various cities worldwide for a reputed
              mobile company, leveraging AI and ML to deliver HD maps for next-gen applications.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GeospatialServices;
