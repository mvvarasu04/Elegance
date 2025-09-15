import React from 'react';
import { weworks, messages, reviews } from '../constants';

const Weworks = () => (
  <div className="min-h-screen bg-[#fff] py-10 px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-indigo-600">How We Work</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {weworks.map((wework, index) => (
        <div
          key={index}
          className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between ${
            index === 1 ? 'order-2 lg:order-first' : ''
          }`}
        >
          <div className="p-4 flex flex-col items-center text-center h-full">
            <div className="w-full h-72 mb-4 flex justify-center items-center overflow-hidden">
              <img
                src={wework.imageURL}
                alt={wework.title}
                className="w-full h-full object-contain rounded-md"
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

const Header = () => (
  <header className="bg-[#fff] py-12 px-4 sm:px-6 lg:px-8 text-center shadow-lg">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-xl sm:text-2xl font-bold text-blue-800 uppercase tracking-wide">Who We Are</h1>
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 uppercase tracking-wide mt-2">Unique Solutions for Your Business</h2>
      <p className="mt-4 text-base sm:text-lg italic text-gray-800">
        We are a team of passionate professionals specializing in LiDAR, BIM, and Geospatial solutions. 
        Our mission is to transform complex data into smart, accurate, and innovative solutions that empower 
        industries worldwide. With years of expertise, cutting-edge technology, and a commitment to excellence, 
        we deliver results that drive efficiency, precision, and growth for our clients.
      </p>
    </div>
  </header>
);

const Message = ({ description, name, role }) => (
  <div className="bg-blue-950 rounded-xl shadow-md p-6 hover:shadow-lg transition w-full sm:w-[80%] md:w-[45%] lg:w-[30%] mb-8 flex flex-col  min-h-[220px]">
    <p className="text-white italic mb-4">"{description}"</p>  
    <h3 className="text-lg font-semibold text-pink-600">{name}</h3>
    <p className="text-bold text-yellow-500">{role}</p>
  </div>
);

const Card = ({ children }) => (
  <div className="bg-[#1e293b] text-[#f7eef6] p-6 rounded-xl shadow-md hover:shadow-xl transition w-full sm:w-[80%] md:w-[45%] lg:w-[30%] mb-8">
    {children}
  </div>
);

const Section = ({ title, children }) => (
  <section className="bg-[#fff] py-12 px-4 sm:px-6 lg:px-8 text-center">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase mb-4 text-cyan-600">{title}</h2>
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


  const Reviews = ({ comments, reviewer }) => (
  <div className="bg-blue-950 rounded-xl shadow-md p-6 hover:shadow-lg transition w-full sm:w-[80%] md:w-[45%] lg:w-[30%] mb-8 flex flex-col justify-between min-h-[220px]">
    <p className="text-white italic mb-4 flex-grow">"{comments}"</p>  
    <div>
      <h3 className="text-lg font-semibold text-pink-600">{reviewer}</h3>
    </div>
  </div>
);



const About = () => (
  <main className="bg-[#0f172a] font-sans">
    <Header />

    <Section title="Leadership Messages">
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {messages.map((msg, index) => (
          <Message
            key={index}
            description={msg.description}
            name={msg.name}
            role={msg.role}
          />
        ))}
      </div>
    </Section>

    <Weworks />

    <Section title="Our Vision">
      <div className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
        <p>
          At ELEGANCEGEOINFOTECH, we aim to redefine industry standards by crafting intelligent, innovative solutions that anticipate the future.
          By constantly evolving with new trends and technologies, we ensure our clients maintain a competitive edge in their field.
        </p>
      </div>
    </Section>

    <Section title="Our Core Values">
      <div className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
        <p>Integrity, Excellence, Adaptability, Innovation First, Reliability</p>
      </div>
    </Section>

    <Section title="Testimonials">
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {reviews.map((review, index) => (
          <Reviews
            key={index}
            comments={review.comments}
            reviewer={review.reviewer}
          />
        ))}
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
