import React from 'react';
import { weworks } from '../constants';

const Weworks = () => {
  return (
    <div className="min-h-screen bg-[#d369d3] py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-indigo-600">How We Work</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {weworks.map((wework, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="p-4 flex flex-col items-center text-center h-full">
              <div className="w-full h-64 mb-4 flex justify-center items-center overflow-hidden">
                <img
                  src={wework.imageURL}
                  alt={wework.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-2 p-1">{wework.title}</h2>
              <ul className="text-gray-600 text-sm sm:text-base list-none p-0 m-0 space-y-1">
                {wework.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Header = () => (
  <header className="bg-[#f0aaec] py-12 px-4 sm:px-6 lg:px-8 text-center shadow-lg">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-xl sm:text-2xl font-bold text-blue-800 uppercase tracking-wide">Who We Are</h1>
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 uppercase tracking-wide mt-2">Unique Solutions for Your Business</h2>
      <p className="mt-4 text-base sm:text-lg italic text-gray-800">
        At EleganceGeoInfotech, we deliver unique, personalized solutions that drive results and set your business up for success.
        Whether optimizing operations, enhancing customer experience, or staying ahead of tech trends, we bring the expertise,
        innovation, and creativity needed to achieve your goals—on time and at competitive prices. We partner with you to bring
        your vision to life with passion and precision.
      </p>
    </div>
  </header>
);

const Card = ({ children }) => (
  <div className="bg-[#1e293b] text-[#e2e8f0] p-6 rounded-xl shadow-md hover:shadow-xl transition w-full sm:w-[80%] md:w-[45%] lg:w-[30%] mb-8">
    {children}
  </div>
);

const Section = ({ title, children }) => (
  <section className="bg-[#d369d3] py-12 px-4 sm:px-6 lg:px-8 text-center">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase mb-4 text-white">{title}</h2>
      <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
      {children}
    </div>
  </section>
);

const ServiceItem = ({ title, description }) => (
  <Card>
    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-purple-400">{title}</h3>
    <p className="text-sm sm:text-base">{description}</p>
  </Card>
);

const About = () => (
  <main className="bg-[#0f172a] font-sans">
    <Header />
    <Weworks />

    <Section title="Our Vision">
      <div className="text-[#f1f5f9] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
        <p>
          At ELEGANCEGEOINFOTECH, we aim to redefine industry standards by crafting intelligent, innovative solutions that anticipate the future.
          By constantly evolving with new trends and technologies, we ensure our clients maintain a competitive edge in their field.
        </p>
      </div>
    </Section>

    <Section title="Our Core Values">
      <div className="text-[#f1f5f9] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
        <p>Integrity, Excellence, Adaptability, Innovation First, Reliability</p>
      </div>
    </Section>

    <Section title="Why Us">
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <ServiceItem title="Expertise" description="Years of experience delivering exceptional results..." />
        <ServiceItem title="Client-Centric Approach" description="We tailor our services to meet your goals..." />
        <ServiceItem title="Proven Results" description="Helping businesses achieve their objectives..." />
      </div>
    </Section>
  </main>
);

export default About;
