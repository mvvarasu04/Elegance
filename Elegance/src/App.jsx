import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail'; 
import Courses from './pages/Courses';
import Career from './pages/Career';
import Contact from './pages/Contact';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css'

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} /> 
        <Route path="/courses" element={<Courses />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
         
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;