import React from 'react'
import { HiClock, HiShieldCheck, HiTv, HiUsers, HiWifi } from 'react-icons/hi2';
import { LuCarFront } from 'react-icons/lu';

const Facilities = () => {
  const amenities = [
    { icon: <HiWifi size={30} />, labelTop: 'Free', labelBottom: 'High-Speed WiFi' },
    { icon: <HiTv size={30} />, labelTop: 'Smart TV', labelBottom: 'With Netflix' },
    { icon: <LuCarFront size={30} />, labelTop: 'Secure', labelBottom: 'Parking' },
    { icon: <HiUsers size={30} />, labelTop: 'Family', labelBottom: 'Friendly' },
    { icon: <HiClock size={30} />, labelTop: '24/7', labelBottom: 'Front Desk' },
    { icon: <HiShieldCheck size={30} />, labelTop: 'CCTV', labelBottom: 'Security' },
  ];

  return (
    <div className='py-16 max-w-6xl mx-auto w-full bg-neutral-950'>
      <div className='flex justify-center items-center gap-4 mb-12 mt-4'>
        <span className='h-[1px] w-12 bg-gradient-to-r from-transparent to-neutral-700' />
        <h3 className='text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-neutral-400'>
          Amenities
        </h3>
        <span className='h-[1px] w-12 bg-gradient-to-l from-transparent to-neutral-700' />
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 px-6 gap-4 md:gap-6'>
        {amenities.map((item, index) => (
          <div
            key={index}
            className='flex flex-col justify-center items-center text-center border border-neutral-900 bg-neutral-900/30 backdrop-blur-sm hover:border-neutral-800 hover:scale-[1.03] hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.8),0_0_25px_rgba(220,38,38,0.04)] transition-all duration-300 rounded-2xl p-6 group cursor-default'
          >
            <div className='text-red-600 group-hover:text-red-500 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(220,38,38,0.5)] transition-all duration-300 mb-4'>
              {item.icon}
            </div>
            <p className='flex flex-col items-center text-sm font-semibold tracking-wide text-neutral-200 group-hover:text-white transition-colors duration-300 font-rounded leading-snug'>
              <span>{item.labelTop}</span>
              <span className='text-neutral-500 group-hover:text-neutral-400 transition-colors text-xs font-light mt-0.5'>
                {item.labelBottom}
              </span>
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Facilities