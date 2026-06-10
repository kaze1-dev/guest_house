'use client'
import Image from 'next/image';
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import { HiCalendar } from 'react-icons/hi2';

const Hero = () => {

  const handleCallToAction = () => {
    window.location.href = 'tel:03076372319';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/923076372319', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative w-full h-[85vh] md:h-screen overflow-hidden font-rounded">
      <Image
        src="/hero-image.jpeg"
        alt="Go Guest House Lahore Facade"
        priority
        fill
        className="object-cover brightness-[0.55]" 
      />

      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/50 z-10" />

      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 md:pl-20 z-20 max-w-5xl">
        <div className="rounded-2xl max-w-3xl text-left select-none">
          
          <span className="text-red-500 font-bold tracking-widest text-xs sm:text-sm uppercase block mb-3 animate-pulse">
            Welcome To
          </span>
          
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-7xl tracking-tight leading-[1.15] uppercase font-rounded drop-shadow-md">
            Go Guest House <br />
            <span className="text-red-600 drop-shadow-none">Lahore</span>
          </h1>
          
          <p className="mt-4 text-neutral-200 text-base sm:text-lg md:text-2xl font-medium tracking-wide max-w-xl leading-relaxed">
            Best Family Guest House in Johar Town
          </p>
          
          <div className="flex flex-row mt-8 gap-4 sm:gap-6 font-rounded w-full sm:w-auto">

            <button 
              onClick={handleCallToAction}
              className="flex-1 sm:flex-none bg-red-600 text-white cursor-pointer flex justify-center items-center gap-2 font-bold px-5 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-base rounded-xl hover:bg-red-700 active:scale-95 transition-all shadow-lg shadow-red-900/20"
            >
              <HiCalendar size={18} className="shrink-0" />
              <span>Book Now</span>
            </button>
            
            <button 
              onClick={handleWhatsApp}
              className="flex-1 sm:flex-none border border-red-600 text-red-500 hover:text-white bg-transparent hover:bg-red-600 cursor-pointer flex justify-center items-center gap-2 font-bold px-5 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-base rounded-xl active:scale-95 transition-all shadow-lg"
            >
              <FaWhatsapp size={18} className="shrink-0" />
              <span>WhatsApp</span>
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero