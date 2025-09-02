import React from 'react'
import bim from '../assets/serviceimages/bim.jpeg';
import bim1 from '../assets/serviceimages/bim1.jpeg';
import bim2 from '../assets/serviceimages/bim2.jpeg';
import bim3 from '../assets/serviceimages/bim3.jpeg';
import bim4 from '../assets/serviceimages/bim4.jpeg';
import bim5 from '../assets/serviceimages/bim5.jpeg';




const BimServices = () => {
  return (
    <>
    <div className="min-h-screen bg-[#f0f0f0] py-10 px-4 sm:px-6 lg:px-8 text-center">
       <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-indigo-600">BIM & Scan-to-BIM Services</h1>
       <div className=" mx-auto bg-white rounded-xl shadow-lg p-6">
        <h2>Turn reality into intelligence with high-precision 3D scans converted into BIM models.</h2>
        <h2>Seamless planning, design, and construction with accurate digital twins.</h2>
        <h2>Save time, cut costs, and build smarter with our future-ready solutions.</h2>
        <img
           src={bim}
           alt="BIM Projects"
           className="w-full h-150 object-contain rounded-md mb-6"
         />
         <p>At Elegance geo infotech, we know that it is important to optimize processes,
           data and tools to increase productivity in the construction industry.</p>

           <p>Our integrated approach of BIM and Geo database model for large 
            infrastructure planning projects helps improve the quality, 
            time and cost of projects.</p>
         <img
           src={bim1}
           alt="BIM Projects"
           className="w-full h-150 object-contain rounded-md mb-6"
         />
         <p>To meet the demand for better work in less time, Architecture, Engineering and Construction stakeholders 
          want accurate building information. BIM is much more than just 3D visualization; it rather provides 
          a complete process for creating and managing a building. It is a digitally supported process for planning, 
          constructing and operating buildings. Understanding the customer’s 
          requirements and specifications with a focus on details allows the delivery of projects within budget and on time.</p>
      <img
           src={bim2}
           alt="BIM Projects"
           className="w-full h-150 object-contain rounded-md mb-6 "
         />
         
         <img
           src={bim3}
           alt="BIM Projects"
           className="w-full h-150 object-contain rounded-md mb-6"
         />
          <img
           src={bim4}
           alt="BIM Projects"
           className="w-full h-150 object-contain rounded-md mb-6"
         />
         <h1>🔑 Key Points for BIM Services</h1>
        <div>
          <ul>
          <li>	3D BIM Modeling</li>
          <li>	Accurate and detailed 3D models for architectural, structural, and MEP services.
            Clash detection and coordination to avoid costly errors.</li>
          <li>	Scan to BIM</li>
          <li>	Converting LiDAR scans / point clouds into intelligent BIM models.
            High accuracy for renovations, retrofits, and facility management.</li>
          
         
        
         <h1>Design & Visualization</h1>
         <ul>
          <li>Realistic visualizations for better project understanding.</li>
          <li>Virtual walkthroughs to support client approvals.</li>
         </ul>
         <h1> BIM Coordination</h1>
         <ul>
          <li>Interdisciplinary collaboration between architects, engineers, and contractors.</li>
          <li>Improved efficiency and reduced rework.</li>
         </ul>
         
         <h2>4D & 5D BIM</h2>
         <ul>
          <li>4D: Time scheduling and project sequencing.</li>
          <li>5D: Cost estimation linked with model data.</li>
         </ul>
         <h2>Facility Management Integration</h2>
          <ul><li>As-built BIM models for operations and maintenance.</li>
          <li>Long-term asset management support.</li>
          </ul>
        <h1> Quality & Accuracy</h1>
        <ul>
           <li>100% data precision with global standards (LOD 100–500).</li>
           <li>Ensuring compliance with international BIM execution plans.</li>
        </ul>
         <img
           src={bim5}
           alt="BIM Projects"
           className="w-full h-150 object-contain rounded-md mb-6"
         />
    </ul>
        </div>
    </div>
    </div>
    </>
  );
};

export default BimServices;
