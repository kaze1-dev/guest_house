"use client";
import Image from 'next/image';
import React, { useState } from 'react'
import Masonry from "react-masonry-css"

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const galleryImages = Array.from({ length: 29 }, (_, i) => {
    const id = i + 1;
    return {
      id: id,
      src: `/go-${id}.jpg`,
      alt: `Go Guest House Lahore - Room & Amenities View ${id}`,
      title: `Go Guest House View ${id}`
    };
  });
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  return (
    <div className='px-6 md:px-8 pt-24 md:pt-30 pb-20 max-w-6xl mx-auto bg-neutral-950 w-full text-white/90'>
      <h1 className='text-white font-bold font-rounded text-3xl md:text-4xl mb-2'>Browse the Gallery</h1>
      <p className='text-sm text-white/50 mb-8 font-rounded italic'>
        Go Guest House Lahore | Best Guest House in Lahore
      </p>
      <Masonry breakpointCols={breakpointColumnsObj} className='flex w-auto gap-4' columnClassName='bg-clip-padding space-y-4'>

        {
          galleryImages.map((image) => (
            <div key={image.id} onClick={() => setSelectedImage(image.src)} className='break-inside-avoid overflow-hidden rounded-xl pointer-events-none sm:pointer-events-auto'>
              <Image width={300} height={300} alt={image.alt} src={image.src} title={image.title} className='w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-300 ease-in-out' loading='lazy' />
            </div>
          ))
        }

      </Masonry>
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
              loading='lazy'
            />
          </div>
        </div>
      )}
      <hr className='mt-8 border-neutral-800' />
    </div>
  )
}

export default GalleryPage