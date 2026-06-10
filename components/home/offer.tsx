import Image from 'next/image';
import React from 'react';

const Offer = () => {
  return (
    <div className='py-12 px-6 max-w-6xl mx-auto w-full'>
      <div>
        <h3 className='text-base sm:text-lg text-white/80 flex justify-center items-center font-bold gap-3 mb-10 mt-4 uppercase tracking-wider'>
          <span className='hidden sm:block border w-16 md:w-24 border-neutral-800 border-t-0 mt-0.5 rounded-full' />
          Special Offer
          <span className='hidden sm:block border w-16 md:w-24 border-neutral-800 border-t-0 mt-0.5 rounded-full' />
        </h3>
      </div>

      <div className='border border-neutral-800 bg-neutral-900/10 rounded-2xl p-2 sm:p-3 hover:border-neutral-700 transition-all duration-300 overflow-hidden group shadow-xl'>

        <div className='relative w-full aspect-video sm:aspect-21/9 overflow-hidden rounded-xl'>
          <Image 
            className='object-contain rounded-xl object-center transform group-hover:scale-[1.01] transition-transform duration-700 ease-out' 
            fill
            priority
            alt='Special Offer' 
            src='/offer.jpeg' 
            sizes='(max-w-768px) 100vw, (max-w-1200px) 1152px, 1152px'
          />
        </div>

      </div>
    </div>
  );
};

export default Offer;