import React from 'react';

const courses = [
  {
    title: 'BIM Essentials',
    description:
      'Master Building Information Modeling (BIM) workflows used in architecture, engineering, and construction. Learn how to create intelligent 3D models, collaborate across disciplines, and optimize project delivery using tools like Revit and Navisworks.',
  },
  {
    title: 'LiDAR & Geospatial Analysis',
    description:
      'Dive into the world of LiDAR technology and spatial data processing. This course covers point cloud classification, terrain modeling, and geospatial applications across industries like urban planning, forestry, and infrastructure.',
  },
  {
    title: 'Full Stack Web Development',
    description:
      'Become a full stack developer with hands-on training in React, Next.js, Node.js, Prisma, and PostgreSQL. Build scalable web apps, integrate APIs, manage authentication, and deploy responsive, production-ready solutions.',
  },
];

const CourseCard = ({ title, description }) => (
  <div className="bg-white rounded-xl shadow-md p-6 border border-transparent hover:border-pink-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-transform duration-300 ease-in-out w-full sm:w-[80%] md:w-[45%] lg:w-[30%] mb-8 flex flex-col justify-between min-h-[260px]">
    <div className="flex items-center gap-2 mb-2">
      <span className="inline-block bg-pink-100 text-pink-600 text-xs font-semibold px-2 py-1 rounded-full">Featured</span>
    </div>
    <h3 className="text-xl font-semibold text-purple-600 mb-3">{title}</h3>
    <p className="text-gray-700 text-sm sm:text-base flex-grow leading-relaxed">{description}</p>
  </div>
);

const CoursesPage = () => (
  <main className="bg-gradient-to-br from-[#fdf2f8] via-[#fce7f3] to-[#fbcfe8] min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
    <div className="max-w-6xl mx-auto text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-6">
        Explore Our Courses
      </h1>
      <p className="text-gray-700 text-base sm:text-lg mb-10 tracking-wide">
        Whether you're looking to upskill in geospatial tech or master full stack development, our curated courses are designed to empower your growth.
      </p>

      <div className="flex flex-wrap justify-center items-stretch gap-8">
        {courses.map((course, index) => (
          <CourseCard key={index} title={course.title} description={course.description} />
        ))}
      </div>

      <div className="mt-12 bg-white rounded-xl shadow-md p-6 text-left sm:text-center hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-xl font-semibold text-purple-500 mb-4">Interested in Enrolling?</h2>
        <p className="text-gray-700 mb-2">
          📧 Email us at: <a href="mailto:elegancegeoinfotech06@gmail.com" className=" text-bold text-xl hover:text-blue-800 transition-colors duration-200">elegancegeoinfotech06@gmail.com</a>
        </p>
        <p className="text-gray-700">
          📞 Call us at: <a href="tel:+916369126125" className="text-bold text-xl hover:text-blue-800 transition-colors duration-200">+91 63691 26125</a>
        </p>
      </div>
    </div>
  </main>
);

export default CoursesPage;
