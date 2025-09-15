import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import logo1 from '../assets/icons/logo1.png';

const servicesList = [
 { name: 'Lidar Projects', path: '/services/lidar-projects' }, 
 { name: 'BIM Projects', path: '/services/bim-projects' },
 { name: 'Geospatial Projects', path: '/services/geospatial-projects' },
 { name: 'Web Development', path: '/services/web-development' },
 { name: 'Business Data Analytics', path: '/services/business-data-analytics' },
 { name: 'UI/UX Services', path: '/services/ui-ux-services' },
 { name: 'AR/VR Development', path: '/services/ar-vr-development' },
 { name: 'Digital Marketing & SEO', path: '/services/digital-marketing-seo' },
 { name: 'AI Solutions', path: '/services/ai-solutions' },
];

function Navbar() {
 const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => setIsOpen(!isOpen);
const navLinkClass = (isActive) =>
 isActive
? "text-green-700 font-semibold"
: "text-violet-800 hover:text-green-500 transition-colors";

return (
 <nav className="bg-blue-200 shadow-md px-4 py-2 flex justify-between items-center relative">
 <NavLink to="/" className="text-2xl text-red-700 font-extrabold italic">
 <img src={logo1} alt="Elegance Logo" className="h-10 w-auto rounded-xl" />
</NavLink>

 {/* Desktop Menu */}
<div className="hidden md:flex gap-6 text-lg font-medium items-center relative">
 <NavLink to="/services" className={({ isActive }) => navLinkClass(isActive)}>
Services
</NavLink>

 <NavLink to="/courses" className={({ isActive }) => navLinkClass(isActive)}>Courses</NavLink>
 <NavLink to="/career" className={({ isActive }) => navLinkClass(isActive)}>Career</NavLink>
 <NavLink to="/contact" className={({ isActive }) => navLinkClass(isActive)}>Contact</NavLink>
<NavLink to="/about" className={({ isActive }) => navLinkClass(isActive)}>About</NavLink>
 </div>

 {/* Mobile Toggle Button */}
 <button
 className="md:hidden text-3xl text-violet-800 hover:text-purple-600 transition-transform transform hover:scale-110"
onClick={toggleMenu}
 >
 {isOpen ? <HiX /> : <HiMenu />}
 </button>

{/* Mobile Sidebar Menu */}
 {isOpen && (
 <div className="absolute top-11 right-1 bg-gradient-to-br from-blue-300 to-violet-300 shadow-xl text-xl rounded-l-xl flex flex-col gap-4 p-6 z-10 md:hidden transition-all duration-300 w-[250px] max-w-sm">
 <div className="flex flex-col">
 <NavLink
 to="/services"
 className={({ isActive }) =>
 `${navLinkClass(isActive)} font-bold px-4 py-2`
}
 onClick={() => setIsOpen(false)}
 >
Services
 </NavLink>
 <div className="ml-4 flex flex-col gap-2">
 {servicesList.map((service) => (
 <NavLink
 key={service.path}
 to={service.path}
 className="text-violet-700 hover:text-green-600 text-base"
 onClick={() => setIsOpen(false)}
>
 ↳ {service.name}
       </NavLink>
    ))}
     </div>
     </div>

     <NavLink to="/courses" className={({ isActive }) => `${navLinkClass(isActive)} px-4 py-2`} onClick={() => setIsOpen(false)}>Courses</NavLink>
     <NavLink to="/career" className={({ isActive }) => `${navLinkClass(isActive)} px-4 py-2`} onClick={() => setIsOpen(false)}>Career</NavLink>
     <NavLink to="/contact" className={({ isActive }) => `${navLinkClass(isActive)} px-4 py-2`} onClick={() => setIsOpen(false)}>Contact</NavLink>
     <NavLink to="/about" className={({ isActive }) => `${navLinkClass(isActive)} px-4 py-2`} onClick={() => setIsOpen(false)}>About</NavLink>
    </div>
   )}
 </nav>
 );
}

export default Navbar;