import React from 'react';
import vr1 from '../assets/serviceimages/vr1.jpeg';
import vr2 from '../assets/serviceimages/vr2.jpeg';

const ArvrServices = () => {
  return (
    <div className="min-h-screen bg-[#f0f0f0] py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Top Left - Text Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-4">
            "Step Into the Future with Immersive VR Experiences"
          </h1>
          <h2 className="text-lg mb-4">
            We create cutting-edge Virtual Reality (VR) solutions that transform the way businesses train, design, collaborate, and engage customers.
          </h2>
           <p className="mb-4">
            At <strong>Elegance Geo Infotech</strong>, we specialize in delivering next-gen VR development services. Our mission is to bridge the gap between imagination and reality by creating immersive environments that inspire learning, enhance productivity, and drive customer engagement.
          </p>
        </div>

        {/* Top Right - Image */}
        <div>
          <img
            src={vr1}
            alt="AR/VR Design"
            className="w-full h-auto object-contain rounded-3xl"
          />
        </div>

        {/* Bottom Left - Second Image */}
        <div>
          <img
            src={vr2}
            alt="AR/VR Design"
            className="w-full h-auto object-contain rounded-3xl"
          />
        </div>

        {/* Bottom Right - Remaining Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-2">Expertise</h2>
         
          <p className="mb-4">
            With expertise in 3D modeling, interactive simulations, and real-time experiences, we empower industries like real estate, education, healthcare, gaming, and manufacturing to embrace the VR revolution.
          </p>

          <h2 className="text-xl font-semibold mb-2">Our Services</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>🎮 VR App & Game Development:</strong> Custom-built VR applications and games for entertainment, training, or branding.</li>
            <li><strong>🏢 Virtual Tours & Real Estate VR:</strong> Immersive 360° walkthroughs and architectural visualizations.</li>
            <li><strong>🏭 VR Training & Simulation:</strong> Realistic simulations for aviation, healthcare, and more.</li>
            <li><strong>🏫 VR for Education:</strong> Interactive VR classrooms and labs.</li>
            <li><strong>🛍️ VR for Retail & Marketing:</strong> Virtual showrooms and branded experiences.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArvrServices;
