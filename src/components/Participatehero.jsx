import React from 'react'
import regi from '../assets/registrtaion.jpg'

export default function Participatehero() {
  return (
    <div>
         <section className="relative w-full h-screen">
                      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                          <img
                              src={regi}
                              alt="Registration Watermark"
                              className="h-full w-full object-cover opacity-40"
                          />
                      </div>
                      <div className="absolute inset-0 bg-black opacity-80"></div>
                      <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
                          <h1 className="text-white  text-center   text-[5rem]    md:text-[8rem] lg:text-[11rem] md:whitespace-nowrap md:text-[11rem]">
                              How To Participate
                          </h1>
                      </div>
                  </section>
    </div>
  )
}
