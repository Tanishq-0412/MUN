import React from 'react'
import img2 from '../assets/black bg.jpg'

export default function Homehero() {
  return (
    <div>
      <div className="relative h-[62rem] w-full">
              <img
                src={img2}
                alt="Hero"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
                <h1 className="text-white font-extrabold text-center font-serif text-[10rem] md:text-[12rem]">
                  IMUN
                </h1>
              </div>
            </div>
    </div>
  )
}
