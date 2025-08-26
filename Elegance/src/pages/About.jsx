import React from 'react';



const Header = () => (
  <header className="bg-[#0f172a] text-[#e2e8f0] py-12 text-center shadow-lg">
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-2xl md:text-2xl font-bold text-blue-400 uppercase tracking-wide">Who we Are</h1>
      <h1 className="text-3xl md:text-3xl font-bold text-blue-400 uppercase tracking-wide">Unique Solutions for You Business</h1>
      <p className="mt-4 text-lg italic">At EleganceGeoInfotech, we deliver unique, personalized solutions that drive results and set your business up for success.
         Whether optimizing operations, enhancing customer experience, or staying ahead of tech trends, we bring the expertise, innovation, and creativity needed to achieve your goals—on time and at competitive prices. We partner with you to bring your vision to life with passion and precision</p>
    </div>
  </header>
);

const Card = ({ children }) => (
  <div className="bg-[#1e293b] text-[#e2e8f0] p-6 rounded-xl shadow-md hover:shadow-xl transition w-full sm:w-[80%] md:w-[30%] mb-8">
    {children}
  </div>
);

const Section = ({ title, children }) => (
  <section className="bg-[#0f172a] py-12 text-center">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl uppercase mb-4 text-blue-500">{title}</h2>
      <div className="w-24 h-1 bg-[#e2e8f0] mx-auto mb-4"></div>
      {children}
    </div>
  </section>
);

const ServiceItem = ({ title, description }) => (
  <Card>
    <h3 className="text-xl font-semibold mb-2 text-purple-400">{title}</h3>
    <p>{description}</p>
  </Card>
);

const About = () => (
  <main className="bg-[#0f172a] font-sans">
    <Header />

    

    <Section title="How we Work">
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <ServiceItem
          title="Planning Make Ideas"
          description="Strategic planning to transform innovative ideas into successful digital solutions."
          
        />
        <ServiceItem
          title="Designing Projects"
          description="Crafting intuitive, user-centric designs for impactful and engaging digital experiences."
         
       />
        <ServiceItem
          title="Developing Reliable Solutions"
          description="Building robust and scalable solutions with tried-and-tested development practices."
          
        />
      </div>
    </Section>

    <Section title="Our Vision">
      <div className='text-[#f1f5f9] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed'>
        
        <p>
         At ELEGANCEGEOINFOTECH, we aim to redefine industry standards by crafting intelligent, innovative solutions that anticipate the future. By constantly evolving with new trends and technologies,
          we ensure our clients maintain a competitive edge in their field.
        </p>
      </div>
    </Section>
    <Section title="Our Core Values">
      <div className='text-[#f1f5f9] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed'>
        
        <p>
         Integrity, Excellence, Adaptability, Innovation First, Reliability
        </p>
      </div>
    </Section>


    <Section title="Why Us">
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <ServiceItem
          title="Expertise"
          description="Years of experience delivering exceptional results..."
          
        />
        <ServiceItem
          title="Client-Centric Approach"
          description="We tailor our services to meet your goals..."
        />
        <ServiceItem
          title="Proven Results"
          description="Helping businesses achieve their objectives..."
        />
      </div>
    </Section>

   
  </main>
);

export default About;
