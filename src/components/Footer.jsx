import React from 'react'
import image from '../assets/image.png'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <img src={image} alt="Logo" className="w-20 h-20 mb-4" />
        <ul className="flex flex-col md:flex-row gap-4 mb-4 text-lg">
          <li className=" hover:text-blue-300 cursor-pointer">Home</li>
          <li className=" hover:text-blue-300 cursor-pointer">About</li>
          <li className=" hover:text-blue-300 cursor-pointer">Committee</li>
          <li className=" hover:text-blue-300 cursor-pointer">How to Participate</li>
          <li className="hover:text-blue-300 cursor-pointer">Contact</li>
        </ul>
        <p className="text-sm text-gray-400">
          © 2025 All rights reserved
        </p>
      </div>
    </footer>
  )
}
