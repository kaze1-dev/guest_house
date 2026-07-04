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
    <div id='hero' className="relative w-full h-[85vh] md:h-screen overflow-hidden font-rounded bg-neutral-950">
      <Image
        src="/hero-image.jpeg"
        alt="Go Guest House Lahore Facade"
        priority
        fill
        className="object-cover object-center scale-105 animate-fade-in brightness-[0.45] transition-transform duration-10000" 
      />
      <div className="absolute inset-0 bg-linear-to-r from-neutral-950 via-neutral-950/60 to-transparent z-10" />
      <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-neutral-950/30 z-10" />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 md:pl-20 z-20 max-w-5xl">
        <div className="max-w-3xl text-left select-none space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-ping" />
            <span className="text-red-500 font-bold tracking-[0.25em] text-xs sm:text-sm uppercase block">
              Welcome To
            </span>
          </div>
          <h1 className="text-white font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.1] uppercase font-rounded">
            Go Guest House <br />
            <span className="text-red-600 bg-linear-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Lahore
            </span>
          </h1>
          <p className="text-neutral-300 text-base sm:text-lg md:text-xl font-light tracking-wide max-w-xl leading-relaxed pt-2">
            Best Family Guest House in <span className="text-white font-medium">Johar Town</span>
          </p>
          <div className="flex flex-col sm:flex-row pt-6 gap-4 font-rounded w-full sm:w-auto">
            <button 
              onClick={handleCallToAction}
              className="group w-full sm:w-auto bg-red-600 text-white cursor-pointer flex justify-center items-center gap-2.5 font-bold px-6 py-4 text-sm sm:text-base rounded-xl hover:bg-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] active:scale-[0.98] transition-all duration-300"
            >
              <HiCalendar size={20} className="shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <span>Book Now</span>
            </button>
            
            <button 
              onClick={handleWhatsApp}
              className="group w-full sm:w-auto border border-red-600/60 text-red-500 hover:text-white bg-transparent hover:bg-red-600/10 hover:border-red-600 cursor-pointer flex justify-center items-center gap-2.5 font-bold px-6 py-4 text-sm sm:text-base rounded-xl hover:shadow-[0_0_30px_rgba(220,38,38,0.15)] active:scale-[0.98] transition-all duration-300"
            >
              <FaWhatsapp size={20} className="shrink-0 text-red-500 group-hover:text-white group-hover:scale-110 transition-transform duration-300" />
              <span>WhatsApp</span>
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero