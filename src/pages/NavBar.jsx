import React from 'react';
import mePng from '../assets/me.png'; // Adjust the path as necessary
import Home from '../assets/Home.png'
import About from '../assets/About.png'
import Projects from '../assets/Projects.png'
import Contact from '../assets/Contact.png'

const NavBar = () => {
  return (
    <nav className="w-full fixed top-0 bg-gray-800 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <img src={mePng} alt="Me" className='w-10 h-10 rounded' />
        <ul className="hidden md:flex gap-8 text-sm ">
          <li><a href="#home" className="hover:text-blue-400 flex row gap-1">
            <img src={Home} alt="H" className='w-6 h-6'/>
            Home</a></li>
          <li><a href="#about" className="hover:text-blue-400 flex row gap-1">
            <img src={About} alt="A" className='w-6 h-6'/>
            About</a></li>
          <li><a href="#projects" className="hover:text-blue-400 flex row gap-1">
            <img src={Projects} alt="P" className='w-6 h-6'/>
            Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400 flex row gap-1">
            <img src={Contact} alt="C" className='w-6 h-6' />
            Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
