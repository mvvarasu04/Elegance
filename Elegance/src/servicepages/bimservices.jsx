import React from 'react';
import bim from '../assets/serviceimages/bim.jpeg';
import bim1 from '../assets/serviceimages/bim1.jpeg';
import bim2 from '../assets/serviceimages/bim2.jpeg';
import bim3 from '../assets/serviceimages/bim3.jpeg';
import bim4 from '../assets/serviceimages/bim4.jpeg';
import bim5 from '../assets/serviceimages/bim5.jpeg';

const BimServices = () => {
  return (
    <div className="min-h-screen bg-[#f0f0f0] px-2 py-4 text-center">
      <div className="max-w-screen-sm mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-6">
          BIM & Scan-to-BIM Services
        </h1>

        <div className="bg-white rounded-xl shadow-md p-4">
          <h2 className="text-black font-semibold  mb-2">
            Turn reality into intelligence with high-precision 3D scans converted into BIM models.
          </h2>
          <h2 className="text-black font-semibold  mb-2">
            Seamless planning, design, and construction with accurate digital twins.
          </h2>
          <h2 className="text-black font-semibold mb-4">
            Save time, cut costs, and build smarter with our future-ready solutions.
          </h2>

          <img src={bim} alt="BIM Projects" className="w-full max-h-[300px] object-cover rounded-md mb-4" />

          <p className="text-sm text-black mb-4">
            At Elegance Geo Infotech, we know that it is important to optimize processes,
            data and tools to increase productivity in the construction industry.
          </p>

          <p className="text-sm text-black mb-4">
            Our integrated approach of BIM and Geo database model for large infrastructure planning
            projects helps improve the quality, time and cost of projects.
          </p>

          <img src={bim1} alt="BIM Projects" className="w-full max-h-[300px] object-cover rounded-md mb-4" />

          <p className="text-sm text-black mb-4">
            To meet the demand for better work in less time, Architecture, Engineering and Construction stakeholders
            want accurate building information. BIM is much more than just 3D visualization; it provides a complete
            process for creating and managing a building. It is a digitally supported process for planning,
            constructing and operating buildings. Understanding the customer’s requirements and specifications
            with a focus on details allows the delivery of projects within budget and on time.
          </p>

          <img src={bim2} alt="BIM Projects" className="w-full max-h-[300px] object-cover rounded-md mb-4" />
          <img src={bim3} alt="BIM Projects" className="w-full max-h-[300px] object-cover rounded-md mb-4" />
          <img src={bim4} alt="BIM Projects" className="w-full max-h-[300px] object-cover rounded-md mb-4" />

          {/* Key Points Section */}
          <section className="mt-6 text-left">
            <h2 className="text-xl font-bold text-indigo-600 mb-2">🔑 Key Points for BIM Services</h2>
            <ul className="list-disc list-inside text-sm text-black space-y-2">
              <li>3D BIM Modeling</li>
              <li>Accurate and detailed 3D models for architectural, structural, and MEP services.</li>
              <li>Clash detection and coordination to avoid costly errors.</li>
              <li>Scan to BIM</li>
              <li>Converting LiDAR scans / point clouds into intelligent BIM models.</li>
              <li>High accuracy for renovations, retrofits, and facility management.</li>
            </ul>
          </section>

          {/* Design & Visualization */}
          <section className="mt-6 text-left">
            <h2 className="text-xl font-bold text-indigo-600 mb-2">Design & Visualization</h2>
            <ul className="list-disc list-inside text-sm text-black space-y-2">
              <li>Realistic visualizations for better project understanding.</li>
              <li>Virtual walkthroughs to support client approvals.</li>
            </ul>
          </section>

          {/* BIM Coordination */}
          <section className="mt-6 text-left">
            <h2 className="text-xl font-bold text-indigo-600 mb-2">BIM Coordination</h2>
            <ul className="list-disc list-inside text-sm text-black space-y-2">
              <li>Interdisciplinary collaboration between architects, engineers, and contractors.</li>
              <li>Improved efficiency and reduced rework.</li>
            </ul>
          </section>

          {/* 4D & 5D BIM */}
          <section className="mt-6 text-left">
            <h2 className="text-xl font-bold text-indigo-600 mb-2">4D & 5D BIM</h2>
            <ul className="list-disc list-inside text-sm text-black space-y-2">
              <li>4D: Time scheduling and project sequencing.</li>
              <li>5D: Cost estimation linked with model data.</li>
            </ul>
          </section>

          {/* Facility Management */}
          <section className="mt-6 text-left">
            <h2 className="text-xl font-bold text-indigo-600 mb-2">Facility Management Integration</h2>
            <ul className="list-disc list-inside text-sm text-black space-y-2">
              <li>As-built BIM models for operations and maintenance.</li>
              <li>Long-term asset management support.</li>
            </ul>
          </section>

          {/* Quality & Accuracy */}
          <section className="mt-6 text-left">
            <h2 className="text-xl font-bold text-indigo-600 mb-2">Quality & Accuracy</h2>
            <ul className="list-disc list-inside text-sm text-black space-y-2">
              <li>100% data precision with global standards (LOD 100–500).</li>
              <li>Ensuring compliance with international BIM execution plans.</li>
            </ul>
          </section>

          <img src={bim5} alt="BIM Projects" className="w-full max-h-[300px] object-cover rounded-md mt-6" />
        </div>
      </div>
    </div>
  );
};

export default BimServices;
