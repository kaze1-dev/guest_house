"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { HiArrowRight, HiXMark, HiMagnifyingGlassPlus } from 'react-icons/hi2';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
  const images = [
    { src: '/Go_Bed_2.webp', alt: 'Go Guest House Lahore 1' },
    { src: '/Go_Bed_1.webp', alt: 'Go Guest House Lahore 2' },
    { src: '/Go_Bed_3.webp', alt: 'Go Guest House Lahore 3' },
    { src: '/Go_Bed_4.webp', alt: 'Go Guest House Lahore 4' },
  ];

  return (
    <div className='py-16 px-6 max-w-6xl mx-auto w-full bg-neutral-950'>
      
      <div className='flex justify-center items-center gap-4 mb-12 mt-4'>
        <span className='h-[1px] w-12 bg-gradient-to-r from-transparent to-neutral-700' />
        <h3 className='text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-neutral-400'>
          Gallery
        </h3>
        <span className='h-[1px] w-12 bg-gradient-to-l from-transparent to-neutral-700' />
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(img.src)}
            className='border border-neutral-900 bg-neutral-900/30 backdrop-blur-sm hover:scale-[1.03] hover:border-neutral-700 hover:shadow-[0_20px_35px_-15px_rgba(0,0,0,0.9)] transition-all duration-500 rounded-2xl cursor-pointer overflow-hidden aspect-[4/3] relative group'
          >
            <Image
              className='w-full h-full object-cover brightness-[0.85] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out'
              alt={img.alt}
              src={img.src}
              width={400}
              height={300}
            />
            <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center pointer-events-none">
              <div className="p-3 rounded-full bg-neutral-900/80 backdrop-blur-md border border-neutral-800 text-white scale-75 group-hover:scale-100 transition-all duration-500 shadow-xl">
                <HiMagnifyingGlassPlus size={20} className="text-red-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center mt-12'>
        <Link 
          href='/gallery'
          className='border border-red-600 text-red-600 font-bold font-rounded sm:px-7 sm:py-3.5 px-5 py-3 rounded-xl hover:bg-red-600 hover:text-white hover:shadow-[0_0_30px_rgba(220,38,38,0.25)] transition-all duration-300 cursor-pointer flex gap-2 items-center group text-sm sm:text-base tracking-wider'
        >
          <span>VIEW MORE</span>
          <HiArrowRight className='stroke-2 transform group-hover:translate-x-1 transition-transform duration-300' />
        </Link>
      </div>
      {selectedImage && (
        <div
          className='fixed inset-0 bg-neutral-950/90 backdrop-blur-xl z-50 flex justify-center items-center p-4 cursor-zoom-out'
          onClick={() => setSelectedImage(null)} 
        >
          <button
            className='absolute top-6 right-6 text-neutral-400 bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 hover:text-white transition-all duration-300 rounded-xl p-3 z-50 cursor-pointer active:scale-95 shadow-xl backdrop-blur-md'
            onClick={() => setSelectedImage(null)}
          >
            <HiXMark size={24} />
          </button>
          <div className='relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center' onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className='max-w-full max-h-full object-contain rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-neutral-900 transition-all'
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery