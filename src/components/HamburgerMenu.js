import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Hamburger ve kapatma ikonları için
import logo from "../images/logo.jpg";

export default function Headers() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container mx-auto'>
      <div className='flex justify-between items-center font-semibold text-white py-5'>
        <img src={logo} alt="logo" className='w-1/6' />

        
        <div className='hidden md:flex gap-x-12'>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="transitions-all transform hover:scale-110 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="aboutme"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="transitions-all transform hover:scale-110 cursor-pointer"
          >
            About Me
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="transitions-all transform hover:scale-110 cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="works"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="transitions-all transform hover:scale-110 cursor-pointer"
          >
            Portfolio
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="transitions-all transform hover:scale-110 cursor-pointer"
          >
            Contact
          </Link>
        </div>

        <button className='hidden md:block bg-custom-gradient p-3 rounded-3xl transitions-all transform hover:scale-105'>
          Connect With Me
        </button>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden flex flex-col gap-y-4 mt-4 text-center'>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="transitions-all transform hover:scale-110 cursor-pointer"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="aboutme"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="transitions-all transform hover:scale-110 cursor-pointer"
            onClick={toggleMenu}
          >
            About Me
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="transitions-all transform hover:scale-110 cursor-pointer"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to="works"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="transitions-all transform hover:scale-110 cursor-pointer"
            onClick={toggleMenu}
          >
            Portfolio
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="transitions-all transform hover:scale-110 cursor-pointer"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <button className='bg-custom-gradient p-3 rounded-3xl transitions-all transform hover:scale-105'>
            Connect With Me
          </button>
        </div>
      )}
    </div>
  );
}
