import React from 'react'

import about from '../assets/about.jpg'
export default function AboutUshero() {
  return (
    <div>
      <div className="relative w-full h-screen">
              <img
                src={about}
                className="h-full w-full object-cover opacity-40"
                alt="About SVVVIMUN"
              />
              <div className="absolute inset-0 bg-black opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
                <h1 className="text-white  text-center   text-[6rem]    md:text-[8rem] lg:text-[13rem] md:text-[13rem]">
                  ABOUT US
                </h1>
              </div>
            </div>
    </div>
  )
}
