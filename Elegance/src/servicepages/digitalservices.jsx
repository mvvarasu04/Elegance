import React from 'react';
import digit1 from '../assets/serviceimages/digit1.png';
import digit2 from '../assets/serviceimages/digit2.png';

const offerings = [
  {
    title: 'Search Engine Optimization (SEO)',
    description:
      'Get discovered where it matters most—on the first page of Google. Our SEO strategies boost keyword rankings, drive organic traffic, and deliver sustainable growth.',
  },
  {
    title: 'Digital Marketing Campaigns',
    description:
      'From social media marketing to email outreach, we craft campaigns that connect your brand with the right audience at the right time.',
  },
  {
    title: 'Search Engine Marketing (SEM)',
    description:
      'Maximize ROI with precision-targeted ads on Google, Bing, and social platforms. Every click counts.',
  },
  {
    title: 'Email Marketing',
    description:
      'Nurture leads and retain customers with personalized, high-converting email campaigns.',
  },
  {
    title: 'Online Reputation Management',
    description:
      'Monitor, manage, and enhance your brand’s digital image across platforms.',
  },
  {
    title: 'Content Marketing',
    description:
      'Engage and educate your audience with compelling content that drives action.',
  },
];

const metrics = [
  'Website traffic and bounce rate',
  'Conversion rate and ROI',
  'Keyword rankings',
  'Engagement and reach on social media',
];

const DigitalServices = () => {
  return (
    <div className="min-h-screen bg-[#f0f0f0] py-16 px-6 lg:px-20 space-y-16">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-purple-800 mb-4">Digital Marketing & SEO Services</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">Grow Smarter. Rank Higher. Reach Further.</h2>
        <p className="text-gray-700 text-lg">
          In today’s fast-paced digital landscape, visibility isn’t optional—it’s essential. At <strong className='text-blue-600'>Elegance Geo Infotech</strong>,
          we blend powerful SEO with full-spectrum digital marketing to ensure your brand doesn’t just exist online—it thrives.
        </p>
      </div>

      {/* First Image Between Hero and Offerings */}
      <div className="max-w-5xl mx-auto">
        <img src={digit1} alt="Digital Marketing and SEO" className="rounded-3xl shadow-lg w-full object-cover" />
      </div>

      {/* What We Offer Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-violet-700 mb-2 text-center">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Second Image Between Offerings and Why It Matters */}
      <div className="max-w-5xl mx-auto">
        <img src={digit2} alt="Digital Strategy" className="rounded-3xl shadow-lg w-full object-cover" />
      </div>

      {/* Why It Matters Section */}
     

      {/* Performance Metrics Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">Performance Metrics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-4 text-center text-gray-700 font-medium">
              {metric}
            </div>
          ))}
        </div>
      </div>

      {/* Strategy & Execution Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-800 mb-4">Strategy & Execution</h2>
        <h3 className="text-xl font-semibold text-gray-600 mb-6">
          Top-tier results come from the perfect blend of creativity and analytics:
        </h3>
        <ul className="space-y-3 text-gray-700 text-lg">
          <li>🎯 <strong>Brand Strategy:</strong> We position your brand for maximum impact and recognition.</li>
          <li>🧠 <strong>UI/UX Optimization:</strong> Enhance user experience to boost engagement and conversions.</li>
          <li>📊 <strong>Analytics & Reporting:</strong> Transparent insights into campaign performance—so you always know how your investment is working.</li>
        </ul>
      </div>
    </div>
  );
};

export default DigitalServices;
