import React from 'react'
import { HiClock, HiShieldCheck, HiTv, HiUsers, HiWifi } from 'react-icons/hi2';
import { LuCar, LuCarFront } from 'react-icons/lu';

const Facilities = () => {
  return (
    <div className='pb-10 max-w-6xl mx-auto'>
      <div>
        <h3 className='text-lg text-white/80 flex justify-center items-center font-bold gap-2 mb-6 mt-10'>
          <span className='border w-40 border-neutral-700 border-t-0 mt-0.5 rounded-full font-rounded' />
          Amenities
          <span className='border w-40 border-neutral-700 border-t-0 mt-0.5 rounded-full' />
        </h3>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-6 gap-4'>
        <div className='font-bold flex flex-col justify-center items-center border rounded-xl border-neutral-800 hover:border-neutral-700 transition p-4'>
          <HiWifi className='text-red-600' size={32} />
          <p className='flex flex-col items-center text-white/70'>
            <span>Free</span>
            <span>High-Speed WiFi</span>
          </p>
        </div>
        <div className='font-bold flex flex-col justify-center items-center border rounded-xl border-neutral-800 hover:border-neutral-700 transition p-4'>
          <HiTv className='text-red-600' size={32} />
          <p className='flex flex-col items-center text-white/70'>
            <span>Smart TV</span>
            <span>With Netflix</span>
          </p>
        </div>
        <div className=' font-bold flex flex-col justify-center items-center border border-neutral-800 rounded-xl hover:border-neutral-700 transition p-4'>
          <LuCarFront className='text-red-600' size={32} />
          <p className='flex flex-col items-center text-white/70'>
            <span>Secure</span>
            <span>Parking</span>
          </p>
        </div>
        <div className=' font-bold flex flex-col justify-center items-center border border-neutral-800 rounded-xl hover:border-neutral-700 transition p-4'>
          <HiUsers className='text-red-600' size={32} />
          <p className='flex flex-col items-center text-white/70'>
            <span>Family</span>
            <span>Friendly</span>
          </p>
        </div>
        <div className='font-bold flex flex-col justify-center items-center border rounded-xl border-neutral-800 hover:border-neutral-700 transition p-4'>
          <HiClock className='text-red-600' size={32} />
          <p className='flex flex-col items-center text-white/70'>
            <span>24/7</span>
            <span>Front Desk</span>
          </p>
        </div>
        <div className='font-bold flex flex-col justify-center items-center border border-neutral-800 rounded-xl hover:border-neutral-700 transition  p-4'>
          <HiShieldCheck className='text-red-600' size={32} />
          <p className='flex flex-col items-center text-white/70'>
            <span>CCTV</span>
            <span>Security</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Facilities