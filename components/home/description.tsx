import Link from 'next/link';
import React from 'react';
import { HiArrowRight } from 'react-icons/hi2';

const Description = () => {
  return (
    <div className='relative isolate py-16 px-6 max-w-4xl mx-auto overflow-hidden'>
      <div 
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.04),transparent_70%)] pointer-events-none" 
        aria-hidden="true"
      />
      <div className='flex justify-center items-center gap-4 mb-10 mt-4'>
        <span className='h-[1px] w-12 bg-gradient-to-r from-transparent to-neutral-700' />
        <h3 className='text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-neutral-400'>
          About Us
        </h3>
        <span className='h-[1px] w-12 bg-gradient-to-l from-transparent to-neutral-700' />
      </div>
      <div className='font-rounded text-center space-y-6 max-w-3xl mx-auto'>
        <p className='leading-relaxed text-neutral-200 sm:text-lg text-base tracking-wide font-light'>
          <span className='text-red-600 font-extrabold'>Go Guest House</span> Lahore offers premium, exceptionally clean, and secure accommodation tailored for both families and corporate guests. Nestled in the vibrant heart of <span className='text-white font-semibold'>Johar Town</span>, our strategic location places you just minutes away from major landmarks, including <span className='text-white font-semibold'>Emporium Mall</span>, the Expo Center, Shaukat Khanum Hospital, and the University of Central Punjab (UCP).
        </p>
        <p className='leading-relaxed text-neutral-400 sm:text-base text-sm tracking-wide font-light'>
          Our thoughtfully furnished rooms feature modern amenities such as high-speed Wi-Fi, Smart TVs with streaming services, pristine attached baths, and full air conditioning. Whether you are visiting Lahore for business, leisure, or medical transit, enjoy the perfect blend of luxury, comfort, and unmatched hospitality with our round-the-clock desk service and dedicated secure parking.
        </p>

        <div className='flex justify-center pt-6'>
          <Link
            href='/about'
            className='border border-red-600 text-red-600 font-bold font-rounded sm:px-7 sm:py-3.5 px-5 py-3 rounded-xl hover:bg-red-600 hover:text-white hover:shadow-[0_0_30px_rgba(220,38,38,0.25)] transition-all duration-300 cursor-pointer flex gap-2 items-center group text-sm sm:text-base tracking-wider'
          >
            <span>READ MORE</span>
            <HiArrowRight className='stroke-2 transform group-hover:translate-x-1 transition-transform duration-300' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Description;