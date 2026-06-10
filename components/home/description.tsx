import Link from 'next/link';
import React from 'react'
import { HiArrowRight } from 'react-icons/hi2';

const Description = () => {
  return (

    <div className='py-12 px-6 max-w-4xl mx-auto'>

      <h3 className='text-base sm:text-lg text-white/80 flex justify-center items-center font-bold gap-3 mb-8 mt-4 uppercase tracking-wider'>
        <span className='border w-16 border-neutral-800 border-t-0 mt-0.5 rounded-full' />
        About Us
        <span className='border w-16 border-neutral-800 border-t-0 mt-0.5 rounded-full' />
      </h3>

      <div className='font-rounded text-center'>
        <p className='text-center leading-relaxed text-white/70 sm:text-base text-sm tracking-wide max-w-3xl mx-auto'>
          <span className='text-red-600 font-bold'>Go Guest House</span> Lahore offers premium, exceptionally clean, and secure accommodation tailored for both families and corporate guests. Nestled in the vibrant heart of <span className='text-white font-semibold'>Johar Town</span>, our strategic location places you just minutes away from major landmarks, including <span className='text-white font-semibold'>Emporium Mall</span>, the Expo Center, Shaukat Khanum Hospital, and the University of Central Punjab (UCP).
        </p>

        <p className='text-center leading-relaxed text-white/70 sm:text-base text-sm tracking-wide max-w-3xl mx-auto mt-4'>
          Our thoughtfully furnished rooms feature modern amenities such as high-speed Wi-Fi, Smart TVs with streaming services, pristine attached baths, and full air conditioning. Whether you are visiting Lahore for business, leisure, or medical transit, enjoy the perfect blend of luxury, comfort, and unmatched hospitality with our round-the-clock desk service and dedicated secure parking.
        </p>
        <div className='flex justify-center mt-8'>
          <Link
            href='/about'
            className='border border-red-600 text-red-600 font-bold font-rounded sm:px-6 sm:py-3 px-4 py-2.5 rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer flex gap-2 items-center group text-sm sm:text-base'
          >
            <span>READ MORE</span>
            <HiArrowRight className='stroke-2 transform group-hover:translate-x-1 transition-transform' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Description