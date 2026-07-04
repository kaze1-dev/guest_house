import Image from 'next/image';
import React from 'react';

const Offer = () => {
  return (
    <div className='py-16 px-6 max-w-6xl mx-auto w-full bg-neutral-950'>
      
      <div className='flex justify-center items-center gap-4 mb-12 mt-4'>
        <span className='h-[1px] w-12 bg-gradient-to-r from-transparent to-neutral-700' />
        <h3 className='text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-neutral-400'>
          Special Offer
        </h3>
        <span className='h-[1px] w-12 bg-gradient-to-l from-transparent to-neutral-700' />
      </div>

      <div className='border border-neutral-900 bg-neutral-900/20 backdrop-blur-sm rounded-2xl p-2 sm:p-3 hover:border-neutral-800 hover:scale-[1.01] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8),0_0_40px_rgba(220,38,38,0.05)] transition-all duration-500 overflow-hidden group relative'>
        
        <div 
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.03),transparent_60%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
          aria-hidden="true"
        />

        <div className='relative w-full aspect-video sm:aspect-[21/9] overflow-hidden rounded-xl bg-neutral-950/40'>
          <Image 
            className='object-cover sm:object-contain rounded-xl object-center transform group-hover:scale-[1.02] transition-transform duration-700 ease-out brightness-[0.95] group-hover:brightness-100' 
            fill
            priority
            alt='Special Offer' 
            src='/offer.jpeg' 
            sizes='(max-w-768px) 100vw, (max-w-1200px) 1152px, 1152px'
          />
          
          <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5 pointer-events-none" />
        </div>

      </div>
    </div>
  );
};

export default Offer;