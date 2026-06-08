import Image from 'next/image';
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full fixed px-10 py-2 z-30 bg-black/20 backdrop-blur-md">
      <Image className="cursor-pointer" width={50} height={50} src='/GO-logo.webp' alt="Guest House Logo" />
      <div className="flex gap-26 items-center">
        <nav className="flex gap-10 font-bold text-white/70 items-center">
          <div className="relative text-red-600 cursor-pointer hover:text-red-600 font-bold">
            Home
            <span className="absolute bg-red-600 left-0 -bottom-1 h-0.5 w-full rounded"></span>
          </div>
          <div className="cursor-pointer hover:text-red-600 font-bold transition-all">Gallery</div>
          <div className="cursor-pointer hover:text-red-600 font-bold transition-all">Blogs</div>
          <div className="cursor-pointer hover:text-red-600 font-bold transition-all">About Us</div>
        </nav>
        <button className="px-6 py-3 text-white/90 font-bold bg-red-600 rounded-lg uppercase tracking-wider text-sm hover:bg-red-800 cursor-pointer transition">
          Book Now
        </button>
      </div>
    </div>
  )
}

export default Navbar