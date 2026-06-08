import Image from 'next/image';
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import { HiCalendar } from 'react-icons/hi2';

const Hero = () => {
  return (
     <div className="relative w-full h-[85vh] md:h-screen overflow-hidden font-rounded">
        <Image
          src="/hero-image.jpeg"
          alt="Go Guest House Lahore Facade"
          priority
          fill
          className="object-cover brightness-75"
        />


        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/40 z-10" />

        <div className="absolute inset-0 flex flex-col justify-center items-start pl-6 md:pl-20 z-20 max-w-4xl">

          <div className="bg-black/40 backdrop-blur-xs border border-white/10 p-6 md:p-10 rounded-2xl max-w-2xl text-left">
            <span className="text-red-600 font-bold tracking-widest text-sm md:text-base uppercase block mb-2 font-rounded">
              Welcome To
            </span>
            <h1 className="font-extrabold text-4xl md:text-6xl tracking-tight leading-tight uppercase font-rounded">
              Go Guest House <br />
              <span className="text-red-700">Lahore</span>
            </h1>
            <p className="mt-4 text-neutral-300 text-lg font-rounded md:text-xl font-medium">
              Best Family Guest House in Johar Town
            </p>
            <div className="flex mt-6 gap-6 font-rounded">
              <button className="bg-red-700 cursor-pointer flex gap-2 items-center font-bold px-10 py-4 rounded-lg hover:bg-red-800 transition">
                <HiCalendar size={20} />
                BOOK NOW
              </button>
              <button className="border hover:bg-red-600/10 transition-all cursor-pointer flex items-center gap-2 border-red-700 text-red-700 px-10 py-4 rounded-lg">
                <FaWhatsapp size={20} />
                <span className="font-bold">WHATSAPP</span>
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero