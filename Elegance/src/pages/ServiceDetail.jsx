import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Import all service detail components
import LidarServices from '../servicepages/lidarservices.jsx';
import BimServices from '../servicepages/bimservices.jsx';
import GeospatialServices from '../servicepages/geospatialservices.jsx';
import WebdevelopementServices from '../servicepages/webdevelopement.jsx';
import BusdataServices from '../servicepages/busdataservices.jsx';
import UiuxServices from '../servicepages/uiuxservices.jsx';
import ArvrServices from '../servicepages/arvrservices.jsx';
import ThreedServices from '../servicepages/threedservices.jsx';
import DigitalServices from '../servicepages/digitalservices.jsx';
import AiServices from '../servicepages/aiservices.jsx';

// Map slug to component
const serviceComponents = {
  'lidar-projects': LidarServices,
  'bim-projects': BimServices,
  'geospatial-projects': GeospatialServices,
  'web-development': WebdevelopementServices,
  'business-data-analytics': BusdataServices,
  'ui-ux-services': UiuxServices,
  'ar-vr-development': ArvrServices,
  '3d-motion-graphics': ThreedServices,
  'digital-marketing-seo': DigitalServices,
  'ai-solutions': AiServices,
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const ServiceComponent = serviceComponents[slug];

  const handleBackClick = () => {
    navigate('/services'); // Adjust this path based on your routing setup
  };

  if (!ServiceComponent) {
    return (
      <div className="text-center text-red-500 mt-10">
        Service not found
        <button
          onClick={handleBackClick}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          ← Back to Services
        </button>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={handleBackClick}
        className="m-4 px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300"
      >
        ← Back to Services
      </button>
      <ServiceComponent />
    </div>
  );
};

export default ServiceDetail;
