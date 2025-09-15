import React from 'react';

import bim1 from '../assets/serviceimages/bim1.jpeg';
import bim2 from '../assets/serviceimages/bim2.jpeg';
import bim3 from '../assets/serviceimages/bim3.jpeg';
import bim5 from '../assets/serviceimages/bim5.jpeg';
import bim6 from '../assets/serviceimages/bim6.jpeg';
import bim7 from '../assets/serviceimages/bim7.jpeg';
import bim8 from '../assets/serviceimages/bim8.jpeg';
import bim9 from '../assets/serviceimages/bim9.jpeg';
import bim10 from '../assets/serviceimages/bim10.jpeg';
import bim11 from '../assets/serviceimages/bim11.jpeg';
import bim12 from '../assets/serviceimages/bim12.jpeg';
import bim13 from '../assets/serviceimages/bim13.jpeg'; 
import bim14 from '../assets/serviceimages/bim14.jpeg';
import bim15 from '../assets/serviceimages/bim15.jpeg'; 
import bim16 from '../assets/serviceimages/bim16.jpeg';




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

        
        <SectionCard title="Auto CAD" image={bim9}>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Left Panel: Clean contour lines on a black background, color-coded by elevation 
              (red, orange, yellow, green). Cyan outlines define site boundaries and drainage paths with precision.</li>
            <li>Right Panel: A vivid magenta 3D terrain model with glowing orange contours and a green stream path. 
              The elevation is textured and elevated, giving it a true CAD-style dimensionality.</li>
          </ul>
        </SectionCard>
              <SectionCard title="Clean elevation contours with no distracting labels" image={bim10}>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Magenta 3D terrain that pops with depth and texture</li>
            <li>Bright infrastructure outlines for roads, buildings, and water features</li>
            <li>Perfect clarity for technical presentations, overlays, or client proposals</li>
          </ul>
        </SectionCard>

          <SectionCard title="" image={bim11} >
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Left Panel: A clean, vector-based topographic map with neon contour lines (red, orange, yellow) on a black background. Water features are traced in blue, and vegetation clusters are marked with green dots. Elevation changes are clearly defined with smooth, concentric curves.</li>
            <li>Right Panel: A vivid magenta 3D terrain model with raised contour lines casting subtle shadows. The terrain texture mimics real elevation shifts, and water paths and vegetation are highlighted in glowing blue and green.</li>
            
          </ul>
          
        </SectionCard>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                    <img src={bim11} alt="Bim Project" className="w-full aspect-video object-cover h-full rounded-md" />
                    <img src={bim12} alt="Bim Project" className="w-full aspect-video object-cover h-full rounded-md" />
        
        </div>

        
         <div className="bg-white rounded-2xl shadow-md p-6 mb-10 flex flex-col md:flex-row items-center gap-6 min-h-[400px]">
        <section className="text-center p-2 mb-10">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4   text-center">Our 3D Mapping Capabilities:</h2>
            <ul className="space-y-3 text-gray-700 text-lg">
            <li> <strong>Topographic Mapping</strong> Create detailed 3D maps of terrain, landscapes, and construction sites.</li>
            <li><strong>Infrastructure Modeling</strong> Develop 3D models of roads, bridges, utilities, and urban layouts.</li>
            <li><strong>Building & Architectural Mapping</strong> Generate accurate 3D building models for design, BIM integration, and planning.</li>
            <li><strong>LiDAR & Drone Data Integration </strong> Process point clouds and aerial survey data directly into AutoCAD 3D environments.</li>
            <li><strong>Geospatial Analysis</strong> Overlay mapping data with GIS for better planning and decision-making.</li>
            
        </ul>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 p-2">
               <img src={bim13} alt="Bim Project" className="w-full aspect-video object-cover h-full rounded-md" />
               <img src={bim14} alt="Bim Project" className="w-full aspect-video object-cover h-full rounded-md" />
        </div>
            
        </section>
         </div>


       <div className="bg-white rounded-2xl shadow-md p-6 mb-10 flex flex-col md:flex-row items-center gap-6 min-h-[400px]">
        <section className="text-center mb-10">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4   text-center">Benefits of AutoCAD 3D Mapping</h2>
            <ul className="space-y-3 text-gray-700 text-lg">
             <li>Enhanced project visualization and planning</li>
             <li>Reduced errors with precise digital models</li>
             <li>Faster design modifications and project updates</li>
             <li>Seamless integration with BIM and GIS platforms</li>
             <li>Cost-effective solutions for large and complex projects</li>
            </ul>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 p-2"> 
            <img src={bim15} alt="Bim Project" className="w-full aspect-video object-cover h-full rounded-md" />
            <img src={bim16} alt="Bim Project" className="w-full aspect-video object-cover h-full rounded-md" />
         </div>

         <h2 className="text-2xl font-bold text-indigo-600 mb-4   text-center">Industries We Serve:</h2>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li>Construction & Real Estate</li>
              <li>Urban Planning & Smart Cities</li>
              <li>Transportation & Infrastructure</li>
              <li>Utilities & Energy</li>
              <li>Mining & Environmental Studies</li>
            </ul>

       </section>           
      </div>
    

  
        

   </div>
  </div>
  );
};

export default BimServices;
