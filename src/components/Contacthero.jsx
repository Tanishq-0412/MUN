import React from 'react'
import contact from '../assets/contact.jpg'
export default function Contacthero() {
  return (
    <div>
      <section className="relative w-full h-screen ">
              <div className="absolute inset-0">
                <img
                  src={contact}
                  alt="Registration Watermark"
                  className="h-full w-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-black opacity-80" />
              </div>
              <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
                <h1 className="text-white  text-center   text-[4.8rem]    md:text-[8rem] lg:text-[13rem] md:text-[13rem]">
                  Contact Us
                </h1>
              </div>
            </section>
      
    </div>
  )
}
