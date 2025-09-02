import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/image.png';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [opacity, setOpacity] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll <= 850) {
        setOpacity(false);
      } else {
        setOpacity(true);
      }
      if (currentScroll === 0 || currentScroll > 850) {
        setShowNavbar(true);
      } else {
        if (currentScroll > lastScroll) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);
  return (
    <nav
      className={`
    w-full fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-3
    transform transition-transform duration-500 ease-in-out
    ${showNavbar ? 'translate-y-0' : '-translate-y-full'}
    ${opacity ? 'bg-black bg-opacity-70 ' : 'bg-transparent'}
  `}
    >

      <Link to='/'><div className="flex items-center z-50">
        <img width={100} src={img} alt="Logo" className="rounded-lg" />
      </div></Link>


      <div className="flex items-center space-x-8 z-50">
        <ul className="hidden md:flex items-center space-x-10">
          <li>
            <Link to="/" className="text-white hover:text-blue-300 text-lg transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-blue-300 text-lg transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/participate" className="text-white hover:text-blue-300 text-lg transition">
              Participate
            </Link>
          </li>
          {/* <li>
            <Link to="/secretariat" className="text-white hover:text-blue-300 text-lg transition">
              Secretariat
            </Link>
          </li> */}
          <li>
            <Link to="/contactus" className="text-white hover:text-blue-300 text-lg transition">
              Contact Us
            </Link>
          </li>
        </ul>

        <button className="ml-4 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full transition">
          REGISTER
        </button>


        <div className="md:hidden">
          <button className="text-white hover:text-blue-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
