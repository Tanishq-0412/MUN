import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/image.png'

export default function Navbar() {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 600
        ? setSticky(true)
        : setSticky(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`
      w-full 
      flex justify-center items-center space-x-12 py-2
      transition-all duration-300 ease-in-out
      ${sticky 
        ? 'bg-[#0A2647] shadow-lg border-b border-gray-700 fixed top-0 left-0 right-0 z-50' 
        : 'bg-[#0A2647]'
      }
    `}>


      <div className="flex items-center space-x-12">

        <img 
          width={100} 
          src={img} 
          alt="Logo"
          className="rounded-lg "
        />


        <ul className="hidden md:flex items-center space-x-14 ">
          <li><Link to="/" className="text-white hover:text-blue-300 text-xl transition">Home</Link></li>
          <li><Link to="/about" className="text-white hover:text-blue-300 text-xl transition">About</Link></li>
          <li><Link to="/committee" className="text-white hover:text-blue-300 text-xl transition">Committee</Link></li>
          <li><Link to="/secretry" className="text-white hover:text-blue-300 text-xl transition">Secretariat</Link></li>
          <li><Link to="/contactus" className="text-white hover:text-blue-300 text-xl transition">Contact Us</Link></li>
        </ul>


        <button className="ml-4 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full transition">
          REGISTER
        </button>
      </div>


      <div className="md:hidden ml-auto">
        <button className="text-white hover:text-blue-300 focus:outline-none focus:text-blue-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
