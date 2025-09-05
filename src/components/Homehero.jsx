import React from 'react'
import img2 from '../assets/img2.jpg'
export default function Homehero() {
  return (
    <div>
      <div className="relative h-screen  w-full">
              <img
                src={img2}
                alt="Hero"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex  items-center justify-center bg-black bg-opacity-60">
                <h1 className="text-white  text-center   text-[6rem]    md:text-[8rem] lg:text-[13rem] md:text-[13rem]">
                 <span className=''>SVVV</span> IMUN
                </h1>
              </div>
            </div>
    </div>
  )
}
