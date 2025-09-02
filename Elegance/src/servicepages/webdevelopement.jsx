import React from 'react';
import webser1 from '../assets/serviceimages/webser1.png';
import webser2 from '../assets/serviceimages/webser2.png';
import webser3 from '../assets/serviceimages/webser3.png';
import webser4 from '../assets/serviceimages/webser4.png';
import webser5 from '../assets/serviceimages/webser5.png';
import webser6 from '../assets/serviceimages/webser6.png';
import webser7 from '../assets/serviceimages/webser7.png';

const expertiseItems = [
  {
    title: 'Custom Website Design',
    description: 'Your website is often the first impression of your brand...',
    image: webser1,
    features: [
      'Mobile-first & responsive design',
      'UI/UX-focused wireframes',
      'Brand-aligned aesthetics',
      'Optimized for speed and usability',
    ],
  },
  {
    title: 'Full-Stack Web Development',
    description: 'From the front-end experience to the back-end functionality...',
    image: webser2,
    features: [
      'React, Vue, Angular (Front-End)',
      'Node.js, PHP, Python (Back-End)',
      'Secure APIs & database integration',
      'Performance and scalability',
    ],
  },
  {
    title: 'E-Commerce Development',
    description: 'We build high-performing, scalable e-commerce platforms...',
    image: webser3,
    features: [
      'Custom product catalogs',
      'Secure checkout systems',
      'Payment gateway integration',
      'CMS & inventory management',
    ],
  },
  {
    title: 'CMS-Based Solutions',
    description: 'Need an easy way to manage your content?...',
    image: webser4,
    features: [
      'WordPress, Drupal, and custom CMS',
      'Blog and content architecture',
      'SEO-ready & scalable',
      'Admin panel customization',
    ],
  },
  {
    title: 'SEO-Optimized Web Architecture',
    description: 'We develop websites with SEO and digital marketing in mind...',
    image: webser5,
    features: [
      'On-page SEO foundations',
      'Core Web Vitals optimization',
      'Meta, image, and content structuring',
      'Clean URL structures',
    ],
  },
  {
    title: 'Maintenance & Support',
    description: 'Your website should grow with your business...',
    image: webser6,
    features: [
      'Bug fixing & patching',
      'Regular performance checks',
      'Hosting & deployment support',
      'Technical consultations',
    ],
  },
];

  
const WebdevelopementServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-indigo-600">
        Empowering Brands Through Design, Code & Innovation
      </h1>
      <p className="mb-10 text-center text-lg text-gray-700">
        We build web development solutions that pack a punch—scalable,
         high-performance, and ready to grow with your business. Whether you're just getting your
         feet wet or already making waves, we’ll help you stay ahead of the curve. Let’s craft a 
         web experience that knocks your customers’ socks off and puts your brand on the map.
         Together, we’ll hit the ground running and keep your company firing on all cylinders.
      </p>

      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 py-6 text-violet-600">
        Our Expertise
      </h2>

      {/* Expertise Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {expertiseItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:border-transparent hover:ring-2 hover:ring-violet-400 transition duration-300 transform hover:-translate-y-2 hover:scale-[1.02]"
          >
            <h3 className="text-xl font-bold text-teal-600 mb-4 text-center">
              {item.title}
            </h3>
            <p className="mb-4 text-center text-gray-700">{item.description}</p>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-contain rounded-3xl mb-4"
            />
            <ul className="list-none text-center text-sm space-y-2 text-gray-600">
              {item.features.map((feature, i) => (
                <li key={i} className="hover:text-teal-500 transition">{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Industries Section */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">Industries We Serve</h2>
        <p className="mb-6 text-gray-700">
          We’ve delivered digital solutions across various sectors:
        </p>
       
        <ul className="gap-4 text-medium font-semibold text-gray-800 text-center py-2">
          <li>Healthcare</li>
          <li>Real Estate</li>
          <li>Education</li>
          <li>E-commerce</li>
          <li>Fintech</li>
          <li>Travel & Hospitality</li>
        </ul>

         <img
          src={webser7}
          alt="Industries"
          className="w-full h-150 object-contain rounded-b-full rounded-t-lg mb-6 py-2"
        />
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold mb-4 text-violet-700">
          Let’s Build Your Digital Presence
        </h2>
        <p className="mb-2 text-gray-700">
          At Elegance GeoInfo Tech, your web presence is not just a project—it's a mission.
        </p>
        <p className="text-gray-700">
          Contact Us Today for a free consultation and discover how we can turn your vision into a fully functional digital platform.
        </p>
      </div>
    </div>
  );
};

export default WebdevelopementServices;
