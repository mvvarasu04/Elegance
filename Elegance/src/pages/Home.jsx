import React from 'react'
import background2 from '../assets/images/background2.png';
import background4 from '../assets/images/background4.png';


const Home = () => {
  return (
    <div
      className="min-h-screen relative bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${background2})` }}
    >
      {/* Hero Text - Top Left */}
      <div className="  text-white">
         <h1 className="text-3xl text-white text text-center font-bold mb-4 ">
          Elegance Geo Infotech Pvt Ltd
         </h1>
        <h2 className="text-2xl text-white text text-center font-bold mb-4 py-5">
          we turn complex geospatial data into actionable intelligence
          that drives smarter, faster, and greener decisions.
        </h2>
      </div>

      {/* Bottom Section */}
      {/* Left Column - Top Left */}
      <div className="absolute top-[130px] left-[90px] mt-20 max-w-md text-white text-xl">
        <p>✔️ Precision at every point – delivering granular, location-based insights</p>
        <p>✔️ Future-ready solutions – empowering enterprises in their digital transformation</p>
        <p>✔️ Cutting-edge expertise – blending GIS, LiDAR, and 3D mapping for real-world impact</p>
      </div>

      {/* Right Column - Bottom Right */}
      <div className="absolute bottom-[350px] right-[100px] max-w-md text-white text-right text-xl">
        <p>
          With our pioneering GIS services and 3D mapping capabilities, we don’t just map
          locations—we unlock opportunities, accelerate innovation, and fuel sustainable growth
          for your business.
        </p>
      </div>
    </div>
  )
}

export default Home
