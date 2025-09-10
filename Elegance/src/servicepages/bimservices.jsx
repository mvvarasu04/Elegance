import React from 'react';

import bim1 from '../assets/serviceimages/bim1.jpeg';
import bim2 from '../assets/serviceimages/bim2.jpeg';
import bim3 from '../assets/serviceimages/bim3.jpeg';
import bim5 from '../assets/serviceimages/bim5.jpeg';
import bim6 from '../assets/serviceimages/bim6.jpeg';
import bim7 from '../assets/serviceimages/bim7.jpeg';
import bim8 from '../assets/serviceimages/bim8.jpeg';

const SectionCard = ({ title, children, image }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 mb-10 flex flex-col md:flex-row items-center gap-6 min-h-[400px]">
    {image && (
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/2 h-full object-cover rounded-xl"
      />
    )}
    <div className="md:w-1/2 text-left">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">{title}</h2>
      {children}
    </div>
  </div>
);

const BimServices = () => {
  return (
    <div className="min-h-screen bg-[#f9fafb] px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-700 text-center mb-12">
          BIM & Scan-to-BIM Services
        </h1>

        <SectionCard title="Reality to Intelligence" image={bim1}>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>High-precision 3D scans converted into BIM models.</li>
            <li>Accurate digital twins for seamless planning and construction.</li>
            <li>Save time, cut costs, and build smarter.</li>
          </ul>
        </SectionCard>

        <SectionCard title="Integrated Approach" image={bim2}>
          <p className="text-gray-700 mb-4">
            At Elegance Geo Infotech, we optimize processes, data, and tools to boost productivity in construction.
          </p>
          <p className="text-gray-700 mb-4">
            Our BIM + Geo database model improves quality, time, and cost for large infrastructure projects.
          </p>
          <p className="text-gray-700">
            BIM is more than 3D—it's a digital process for planning, constructing, and operating buildings.
          </p>
        </SectionCard>

        <SectionCard title="🔑 Key BIM Services" image={bim3}>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>3D BIM Modeling for architecture, structure, and MEP.</li>
            <li>Clash detection and coordination.</li>
            <li>Scan-to-BIM: LiDAR/point cloud conversion.</li>
            <li>High accuracy for retrofits and facility management.</li>
          </ul>
        </SectionCard>

        <SectionCard title="Design & Visualization" image={bim6}>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Realistic visualizations for better understanding.</li>
            <li>Virtual walkthroughs for client approvals.</li>
          </ul>
        </SectionCard>

        <SectionCard title="BIM Coordination" image={bim7}>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Collaboration between architects, engineers, and contractors.</li>
            <li>Improved efficiency and reduced rework.</li>
          </ul>
        </SectionCard>

        <SectionCard title="4D & 5D BIM" image={bim5}>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>4D: Time scheduling and sequencing.</li>
            <li>5D: Cost estimation linked to model data.</li>
          </ul>
        </SectionCard>

        <SectionCard title="Facility Management Integration" image={bim8}>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>As-built BIM models for operations and maintenance.</li>
            <li>Long-term asset management support.</li>
          </ul>
        </SectionCard>

        <SectionCard title="Quality & Accuracy">
           <ul>
            <li></li>
          </ul>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>100% data precision with global standards (LOD 100–500).</li>
            <li>Compliance with international BIM execution plans.</li>
          </ul>
         
        </SectionCard>
      </div>
    </div>
  );
};

export default BimServices;
