import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger and close icons
import logo1 from '../assets/icons/logo1.png';
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
      <div className="hidden md:flex gap-6 text-lg font-medium">
        <NavLink to="/services" className={({ isActive }) => navLinkClass(isActive)}>Services</NavLink>
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
  <div className="absolute top-11 right-1 bg-gradient-to-br from-blue-100 to-blue-300 shadow-xl rounded-l-xl flex flex-col gap-4 p-6 z-50 md:hidden transition-all duration-300 w-fit max-w-xs">
    <NavLink to="/services" className={({ isActive }) => navLinkClass(isActive)} onClick={() => setIsOpen(false)}>Services</NavLink>
    <NavLink to="/courses" className={({ isActive }) => navLinkClass(isActive)} onClick={() => setIsOpen(false)}>Courses</NavLink>
    <NavLink to="/career" className={({ isActive }) => navLinkClass(isActive)} onClick={() => setIsOpen(false)}>Career</NavLink>
    <NavLink to="/contact" className={({ isActive }) => navLinkClass(isActive)} onClick={() => setIsOpen(false)}>Contact</NavLink>
    <NavLink to="/about" className={({ isActive }) => navLinkClass(isActive)} onClick={() => setIsOpen(false)}>About</NavLink>
  </div>
)}

    </nav>
  );
}

export default Navbar;

