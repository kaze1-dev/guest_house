"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { HiArrowRight } from 'react-icons/hi2';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
  const images = [
    { src: '/Go_Bed_2.webp', alt: 'Go Guest House Lahore 1' },
    { src: '/Go_Bed_1.webp', alt: 'Go Guest House Lahore 2' },
    { src: '/Go_Bed_3.webp', alt: 'Go Guest House Lahore 3' },
    { src: '/Go_Bed_4.webp', alt: 'Go Guest House Lahore 4' },
  ];

  return (
    <div className='py-12 px-6 max-w-6xl mx-auto w-full'>
      <div>
        <h3 className='sm:text-lg text-base text-white/80 flex justify-center items-center font-bold gap-3 mb-10 mt-4 uppercase tracking-wider'>
          <span className='border w-16 border-neutral-800 border-t-0 mt-0.5 rounded-full' />
          Gallery
          <span className='border w-16 border-neutral-800 border-t-0 mt-0.5 rounded-full' />
        </h3>
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(img.src)}
            className='border border-neutral-800 bg-neutral-900/20 hover:scale-[1.02] hover:border-neutral-700 transition-all duration-300 rounded-xl cursor-pointer overflow-hidden aspect-4/3 relative group'
          >
            <Image
              className='w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-500'
              alt={img.alt}
              src={img.src}
              width={400}
              height={300}
            />
          </div>
        ))}
      </div>

      <div className='flex justify-center items-center mt-10'>
        <Link 
          href='/gallery'
          className='px-5 py-2.5 rounded-xl border border-red-600 text-red-600 font-bold text-sm tracking-wide cursor-pointer flex items-center gap-2 hover:bg-red-600 hover:text-white transition-all duration-300 group'
        >
          <span>VIEW MORE</span>
          <HiArrowRight className='stroke-2 transform group-hover:translate-x-1 transition-transform' />
        </Link>
      </div>

      {selectedImage && (
        <div
          className='fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex justify-center items-center p-4 cursor-zoom-out animate-in fade-in duration-200'
          onClick={() => setSelectedImage(null)} 
        >
          <button
            className='absolute top-6 right-6 text-white/70 text-4xl font-light hover:text-white transition cursor-pointer p-2 z-50'
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <div className='relative max-w-5xl max-h-[80vh] w-full h-full flex items-center justify-center' onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className='max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in fade-in zoom-in-95 duration-300'
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery