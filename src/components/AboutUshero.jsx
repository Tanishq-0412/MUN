import React from 'react'

import about from '../assets/about.jpg'
export default function AboutUshero() {
  return (
    <div>
      <div className="relative w-full h-[62rem]">
              <img
                src={about}
                className="h-full w-full object-cover opacity-40"
                alt="About SVVVIMUN"
              />
              <div className="absolute inset-0 bg-black opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
                <h1 className="text-white font-extrabold font-serif text-[4rem] sm:text-[6rem]  lg:text-[12rem] leading-none">
                  ABOUT US
                </h1>
              </div>
            </div>
    </div>
  )
}
